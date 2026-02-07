import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import {
  mockRestaurant,
  getCollectionsByRestaurant,
  getStoriesByRestaurant,
} from '@/data/mock-data';
import CollectionCard from '@/components/restaurant/CollectionCard';
import StoryBar from '@/components/restaurant/StoryBar';
import StoryViewer from '@/components/restaurant/StoryViewer';
import WhatsAppButton from '@/components/restaurant/WhatsAppButton';

const CollectionsPage = () => {
  const navigate = useNavigate();
  const { restaurantId } = useParams();
  const [storyIndex, setStoryIndex] = useState<number | null>(null);

  const restaurant = mockRestaurant;
  const collections = getCollectionsByRestaurant(restaurant.id);
  const stories = getStoriesByRestaurant(restaurant.id);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass sticky top-0 z-40 flex items-center gap-3 px-4 py-3"
      >
        <button
          onClick={() => navigate(`/r/${restaurantId}`)}
          className="rounded-full p-2 text-foreground transition-colors hover:bg-secondary"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div>
          <h1 className="font-display text-lg font-semibold text-foreground">
            {restaurant.name}
          </h1>
          <p className="font-body text-xs text-muted-foreground">{restaurant.tagline}</p>
        </div>
      </motion.header>

      {/* Stories */}
      <StoryBar stories={stories} onStoryClick={setStoryIndex} />

      {/* Collections Grid */}
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2">
        {collections.map((collection, i) => (
          <CollectionCard
            key={collection.id}
            collection={collection}
            index={i}
            onClick={() => navigate(`/r/${restaurantId}/menu/${collection.id}`)}
          />
        ))}
      </div>

      <WhatsAppButton phoneNumber={restaurant.whatsappNumber} />

      {/* Story Viewer */}
      {storyIndex !== null && (
        <StoryViewer
          stories={stories}
          initialIndex={storyIndex}
          onClose={() => setStoryIndex(null)}
        />
      )}
    </div>
  );
};

export default CollectionsPage;
