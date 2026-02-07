import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { mockRestaurant } from '@/data/mock-data';
import WhatsAppButton from '@/components/restaurant/WhatsAppButton';

const WelcomePage = () => {
  const navigate = useNavigate();
  const { restaurantId } = useParams();

  const restaurant = mockRestaurant; // In production, fetch by restaurantId

  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src={restaurant.heroImage}
          alt={restaurant.name}
          className="h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col justify-end px-6 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="font-display text-5xl font-bold leading-tight text-overlay-text">
            {restaurant.name}
          </h1>
          <p className="font-body text-xl font-light text-overlay-text/80">
            {restaurant.tagline}
          </p>
          <div className="flex items-center gap-1.5 text-overlay-text/60">
            <MapPin className="h-4 w-4" />
            <span className="font-body text-sm">{restaurant.address}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 space-y-3"
        >
          <button
            onClick={() => navigate(`/r/${restaurantId}/menu`)}
            className="btn-hero flex w-full items-center justify-center gap-2 rounded-2xl px-8 py-4 font-body text-lg font-semibold"
          >
            View Menu
            <ArrowRight className="h-5 w-5" />
          </button>

          <button
            onClick={() => {}}
            className="glass-dark w-full rounded-2xl px-8 py-3 font-body text-sm text-overlay-text/70 transition-colors hover:text-overlay-text"
          >
            Policies & Info
          </button>
        </motion.div>
      </div>

      <WhatsAppButton phoneNumber={restaurant.whatsappNumber} />
    </div>
  );
};

export default WelcomePage;
