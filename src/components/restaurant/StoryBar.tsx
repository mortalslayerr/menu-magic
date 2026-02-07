import type { Story } from '@/data/mock-data';

const typeEmoji: Record<string, string> = {
  special: '✨',
  happy_hour: '🍹',
  chef_pick: '👨‍🍳',
  promo: '🎉',
};

interface StoryBarProps {
  stories: Story[];
  onStoryClick: (index: number) => void;
}

const StoryBar = ({ stories, onStoryClick }: StoryBarProps) => {
  if (stories.length === 0) return null;

  return (
    <div className="flex gap-4 overflow-x-auto px-4 py-3 scrollbar-hide">
      {stories.map((story, i) => (
        <button
          key={story.id}
          onClick={() => onStoryClick(i)}
          className="flex flex-shrink-0 flex-col items-center gap-1.5 focus:outline-none"
        >
          <div className="story-ring">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-full text-2xl"
              style={{ background: story.gradient }}
            >
              {typeEmoji[story.type] || '📌'}
            </div>
          </div>
          <span className="max-w-[72px] truncate font-body text-[11px] font-medium text-foreground">
            {story.title}
          </span>
        </button>
      ))}
    </div>
  );
};

export default StoryBar;
