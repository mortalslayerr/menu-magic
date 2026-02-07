import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import {
  mockRestaurant,
  getCollectionById,
  getCategoriesByCollection,
  getItemsByCategory,
  getStoriesByRestaurant,
  type MenuItem,
} from '@/data/mock-data';
import ItemCard from '@/components/restaurant/ItemCard';
import ItemSheet from '@/components/restaurant/ItemSheet';
import StoryBar from '@/components/restaurant/StoryBar';
import StoryViewer from '@/components/restaurant/StoryViewer';
import WhatsAppButton from '@/components/restaurant/WhatsAppButton';

const MenuPage = () => {
  const navigate = useNavigate();
  const { restaurantId, collectionId } = useParams();
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [storyIndex, setStoryIndex] = useState<number | null>(null);

  const restaurant = mockRestaurant;
  const collection = collectionId ? getCollectionById(collectionId) : null;
  const categories = collectionId ? getCategoriesByCollection(collectionId) : [];
  const stories = getStoriesByRestaurant(restaurant.id);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass sticky top-0 z-40 flex items-center gap-3 px-4 py-3"
      >
        <button
          onClick={() => navigate(`/r/${restaurantId}/menu`)}
          className="rounded-full p-2 text-foreground transition-colors hover:bg-secondary"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div>
          <h1 className="font-display text-lg font-semibold text-foreground">
            {collection?.title || 'Menu'}
          </h1>
          <p className="font-body text-xs text-muted-foreground">{restaurant.name}</p>
        </div>
      </motion.header>

      {/* Stories */}
      <StoryBar stories={stories} onStoryClick={setStoryIndex} />

      {/* Categories + Items */}
      <div className="space-y-8 px-4 pt-2">
        {categories.map(category => {
          const items = getItemsByCategory(category.id);
          return (
            <section key={category.id}>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-3 font-display text-xl font-bold text-foreground"
              >
                {category.title}
              </motion.h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {items.map((item, i) => (
                  <ItemCard
                    key={item.id}
                    item={item}
                    index={i}
                    onClick={() => setSelectedItem(item)}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <WhatsAppButton phoneNumber={restaurant.whatsappNumber} />

      {/* Item Bottom Sheet */}
      <ItemSheet
        item={selectedItem}
        open={!!selectedItem}
        onOpenChange={(open) => { if (!open) setSelectedItem(null); }}
      />

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

export default MenuPage;
