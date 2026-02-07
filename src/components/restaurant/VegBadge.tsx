import type { VegType } from '@/data/mock-data';

const labels: Record<VegType, string> = {
  veg: 'Veg',
  nonveg: 'Non-Veg',
  egg: 'Egg',
};

const VegBadge = ({ type }: { type: VegType }) => {
  const colorClass =
    type === 'veg' ? 'border-veg' :
    type === 'nonveg' ? 'border-nonveg' :
    'border-egg';
  const dotClass =
    type === 'veg' ? 'bg-veg' :
    type === 'nonveg' ? 'bg-nonveg' :
    'bg-egg';

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-sm border-2 px-1 py-0.5 ${colorClass}`}
      title={labels[type]}
    >
      <span className={`h-2 w-2 rounded-full ${dotClass}`} />
    </span>
  );
};

export default VegBadge;
