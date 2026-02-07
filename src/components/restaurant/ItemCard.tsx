import { motion } from 'framer-motion';
import VegBadge from './VegBadge';
import type { MenuItem } from '@/data/mock-data';

interface ItemCardProps {
  item: MenuItem;
  index: number;
  onClick: () => void;
}

const ItemCard = ({ item, index, onClick }: ItemCardProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      onClick={onClick}
      className="bento-shadow group w-full rounded-2xl bg-card p-4 text-left transition-all hover:shadow-md active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 space-y-1.5">
          <div className="flex items-center gap-2">
            <VegBadge type={item.isVeg} />
            {item.isCustomisable && (
              <span className="rounded-full bg-secondary px-2 py-0.5 font-body text-[10px] font-medium text-secondary-foreground">
                Customisable
              </span>
            )}
          </div>
          <h4 className="font-display text-base font-semibold text-card-foreground leading-tight">
            {item.title}
          </h4>
          <p className="font-body text-xs text-muted-foreground line-clamp-2">
            {item.subtitle}
          </p>
          {item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 pt-1">
              {item.tags.map(tag => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-2 py-0.5 font-body text-[10px] font-semibold uppercase tracking-wide text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col items-end">
          <span className="font-body text-lg font-bold text-card-foreground">
            ₹{item.price}
          </span>
        </div>
      </div>
    </motion.button>
  );
};

export default ItemCard;
