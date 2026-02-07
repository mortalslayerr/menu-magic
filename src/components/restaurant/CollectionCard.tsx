import { motion } from 'framer-motion';
import type { Collection } from '@/data/mock-data';

interface CollectionCardProps {
  collection: Collection;
  index: number;
  onClick: () => void;
}

const CollectionCard = ({ collection, index, onClick }: CollectionCardProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onClick={onClick}
      className="group relative w-full overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      style={{ aspectRatio: '4/3' }}
    >
      {collection.image ? (
        <>
          <img
            src={collection.image}
            alt={collection.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="image-overlay absolute inset-0" />
          <div className="glass-dark absolute inset-x-4 bottom-4 rounded-xl px-4 py-3 text-left">
            <h3 className="font-display text-lg font-semibold text-overlay-text">
              {collection.title}
            </h3>
            <p className="mt-0.5 font-body text-sm text-overlay-text/70">
              {collection.subtitle}
            </p>
          </div>
        </>
      ) : (
        <div className="glass-card flex h-full w-full flex-col items-center justify-center p-6">
          <h3 className="font-display text-xl font-semibold text-foreground">
            {collection.title}
          </h3>
          <p className="mt-1 font-body text-sm text-muted-foreground">
            {collection.subtitle}
          </p>
        </div>
      )}
    </motion.button>
  );
};

export default CollectionCard;
