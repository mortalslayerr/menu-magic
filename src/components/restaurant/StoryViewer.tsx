import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ExternalLink } from 'lucide-react';
import type { Story } from '@/data/mock-data';
import { useNavigate, useParams } from 'react-router-dom';

interface StoryViewerProps {
  stories: Story[];
  initialIndex: number;
  onClose: () => void;
}

const STORY_DURATION = 5000;

const StoryViewer = ({ stories, initialIndex, onClose }: StoryViewerProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [progress, setProgress] = useState(0);
  const story = stories[currentIndex];
  const navigate = useNavigate();
  const { restaurantId } = useParams();

  const goNext = useCallback(() => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setProgress(0);
    } else {
      onClose();
    }
  }, [currentIndex, stories.length, onClose]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setProgress(0);
    }
  }, [currentIndex]);

  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          goNext();
          return 0;
        }
        return prev + (100 / (STORY_DURATION / 50));
      });
    }, 50);
    return () => clearInterval(interval);
  }, [currentIndex, goNext]);

  const handleViewDish = () => {
    if (story.linkedItemId) {
      onClose();
      // Navigate to the collection that contains this item
      navigate(`/r/${restaurantId}/menu`);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/95"
        onClick={(e) => {
          const rect = (e.target as HTMLElement).getBoundingClientRect();
          const x = e.clientX - rect.left;
          if (x < rect.width / 3) goPrev();
          else if (x > (rect.width * 2) / 3) goNext();
        }}
      >
        {/* Progress bars */}
        <div className="absolute left-4 right-4 top-4 z-10 flex gap-1">
          {stories.map((_, i) => (
            <div key={i} className="h-0.5 flex-1 overflow-hidden rounded-full bg-overlay-text/30">
              <div
                className="h-full rounded-full bg-overlay-text transition-all duration-75"
                style={{
                  width: i < currentIndex ? '100%' : i === currentIndex ? `${progress}%` : '0%',
                }}
              />
            </div>
          ))}
        </div>

        {/* Close button */}
        <button
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="absolute right-4 top-10 z-10 rounded-full p-2 text-overlay-text/80 transition-colors hover:text-overlay-text"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Story content */}
        <motion.div
          key={story.id}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex h-full w-full max-w-lg flex-col items-center justify-center px-8 text-center"
          style={{ background: story.gradient }}
        >
          <span className="mb-4 text-5xl">
            {story.type === 'chef_pick' ? '👨‍🍳' : story.type === 'happy_hour' ? '🍹' : story.type === 'promo' ? '🎉' : '✨'}
          </span>
          <h2 className="font-display text-3xl font-bold text-overlay-text">
            {story.title}
          </h2>
          <p className="mt-3 font-body text-lg text-overlay-text/85 leading-relaxed">
            {story.subtitle}
          </p>

          {story.linkedItemId && (
            <button
              onClick={(e) => { e.stopPropagation(); handleViewDish(); }}
              className="mt-8 glass flex items-center gap-2 rounded-full px-6 py-3 font-body text-sm font-semibold text-foreground transition-all hover:scale-105"
            >
              <ExternalLink className="h-4 w-4" />
              View Dish
            </button>
          )}

          {/* Navigation hint */}
          {currentIndex < stories.length - 1 && (
            <div className="absolute bottom-8 right-8 animate-pulse text-overlay-text/50">
              <ChevronRight className="h-6 w-6" />
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default StoryViewer;
