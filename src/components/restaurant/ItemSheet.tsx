import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from '@/components/ui/drawer';
import VegBadge from './VegBadge';
import type { MenuItem } from '@/data/mock-data';

interface ItemSheetProps {
  item: MenuItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ItemSheet = ({ item, open, onOpenChange }: ItemSheetProps) => {
  if (!item) return null;

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="mx-auto max-w-lg rounded-t-3xl border-t-0 bg-card">
        <div className="mx-auto mt-2 h-1.5 w-12 rounded-full bg-muted" />
        <DrawerHeader className="px-6 pb-2 pt-4">
          <div className="flex items-center gap-2">
            <VegBadge type={item.isVeg} />
            {item.isCustomisable && (
              <span className="rounded-full bg-secondary px-2 py-0.5 font-body text-xs font-medium text-secondary-foreground">
                Customisable
              </span>
            )}
          </div>
          <DrawerTitle className="font-display text-2xl font-bold text-card-foreground">
            {item.title}
          </DrawerTitle>
          <DrawerDescription className="font-body text-sm text-muted-foreground">
            {item.subtitle}
          </DrawerDescription>
        </DrawerHeader>
        <div className="space-y-4 px-6 pb-8">
          <div className="flex items-center justify-between">
            <span className="font-body text-2xl font-bold text-primary">
              ₹{item.price}
            </span>
          </div>

          {item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {item.tags.map(tag => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-3 py-1 font-body text-xs font-semibold uppercase tracking-wide text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ItemSheet;
