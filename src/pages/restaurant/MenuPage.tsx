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
  type Category,
} from '@/data/mock-data';
import ItemCard from '@/components/restaurant/ItemCard';
import ItemSheet from '@/components/restaurant/ItemSheet';
import StoryBar from '@/components/restaurant/StoryBar';
import StoryViewer from '@/components/restaurant/StoryViewer';
import WhatsAppButton from '@/components/restaurant/WhatsAppButton';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

/* Accordion section per category — items lazy-loaded on first expand */
const CategoryAccordion = ({
  category,
  isExpanded,
  onItemClick,
}: {
  category: Category;
  isExpanded: boolean;
  onItemClick: (item: MenuItem) => void;
}) => {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Lazy load items on first expand
  if (isExpanded && !loaded) {
    setItems(getItemsByCategory(category.id));
    setLoaded(true);
  }

  return (
    <AccordionItem
      value={category.id}
      className="bento-shadow rounded-2xl border-0 bg-card overflow-hidden"
    >
      <AccordionTrigger className="px-4 py-3.5 hover:no-underline">
        <span className="font-display text-lg font-bold text-card-foreground">
          {category.title}
        </span>
      </AccordionTrigger>
      <AccordionContent className="px-4 pb-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {items.map((item, i) => (
            <ItemCard
              key={item.id}
              item={item}
              index={i}
              onClick={() => onItemClick(item)}
            />
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

const MenuPage = () => {
  const navigate = useNavigate();
  const { restaurantId, collectionId } = useParams();
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [storyIndex, setStoryIndex] = useState<number | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

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

      {/* Categories + Items (Accordion) */}
      <div className="px-4 pt-2">
        <Accordion
          type="multiple"
          className="space-y-3"
          value={expandedCategories}
          onValueChange={setExpandedCategories}
        >
          {categories.map(category => (
            <CategoryAccordion
              key={category.id}
              category={category}
              isExpanded={expandedCategories.includes(category.id)}
              onItemClick={setSelectedItem}
            />
          ))}
        </Accordion>
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
