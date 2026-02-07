import heroImage from '@/assets/hero-restaurant.jpg';
import startersImg from '@/assets/collection-starters.jpg';
import mainsImg from '@/assets/collection-mains.jpg';
import dessertsImg from '@/assets/collection-desserts.jpg';
import drinksImg from '@/assets/collection-drinks.jpg';

export type VegType = 'veg' | 'nonveg' | 'egg';
export type StoryType = 'special' | 'happy_hour' | 'chef_pick' | 'promo';

export interface Restaurant {
  id: string;
  name: string;
  tagline: string;
  address: string;
  whatsappNumber: string;
  heroImage: string;
}

export interface Collection {
  id: string;
  restaurantId: string;
  title: string;
  subtitle: string;
  image: string;
  sortOrder: number;
}

export interface Category {
  id: string;
  collectionId: string;
  title: string;
  sortOrder: number;
}

export interface MenuItem {
  id: string;
  categoryId: string;
  title: string;
  subtitle: string;
  price: number;
  isVeg: VegType;
  isCustomisable: boolean;
  tags: string[];
  sortOrder: number;
}

export interface Story {
  id: string;
  restaurantId: string;
  type: StoryType;
  title: string;
  subtitle: string;
  gradient: string;
  linkedItemId?: string;
  isActive: boolean;
}

export const mockRestaurant: Restaurant = {
  id: 'saffron-sage',
  name: 'Saffron & Sage',
  tagline: 'Modern Indian Kitchen',
  address: '42 Spice Lane, Mumbai',
  whatsappNumber: '+919876543210',
  heroImage,
};

export const mockCollections: Collection[] = [
  { id: 'col-1', restaurantId: 'saffron-sage', title: 'Starters', subtitle: 'Begin your journey', image: startersImg, sortOrder: 1 },
  { id: 'col-2', restaurantId: 'saffron-sage', title: 'Main Course', subtitle: 'Heart of the feast', image: mainsImg, sortOrder: 2 },
  { id: 'col-3', restaurantId: 'saffron-sage', title: 'Desserts', subtitle: 'Sweet indulgence', image: dessertsImg, sortOrder: 3 },
  { id: 'col-4', restaurantId: 'saffron-sage', title: 'Drinks', subtitle: 'Refresh & revive', image: drinksImg, sortOrder: 4 },
];

export const mockCategories: Category[] = [
  { id: 'cat-1', collectionId: 'col-1', title: 'Vegetarian Starters', sortOrder: 1 },
  { id: 'cat-2', collectionId: 'col-1', title: 'Non-Veg Starters', sortOrder: 2 },
  { id: 'cat-3', collectionId: 'col-2', title: 'Curries & Gravies', sortOrder: 1 },
  { id: 'cat-4', collectionId: 'col-2', title: 'Tandoor & Grill', sortOrder: 2 },
  { id: 'cat-5', collectionId: 'col-2', title: 'Rice & Biryani', sortOrder: 3 },
  { id: 'cat-6', collectionId: 'col-3', title: 'Indian Sweets', sortOrder: 1 },
  { id: 'cat-7', collectionId: 'col-4', title: 'Hot Beverages', sortOrder: 1 },
  { id: 'cat-8', collectionId: 'col-4', title: 'Cold Drinks & Shakes', sortOrder: 2 },
];

export const mockItems: MenuItem[] = [
  // Veg Starters
  { id: 'item-1', categoryId: 'cat-1', title: 'Paneer Tikka', subtitle: 'Marinated cottage cheese, grilled to perfection', price: 280, isVeg: 'veg', isCustomisable: false, tags: ['bestseller'], sortOrder: 1 },
  { id: 'item-2', categoryId: 'cat-1', title: 'Veg Spring Rolls', subtitle: 'Crispy rolls with mixed vegetables', price: 220, isVeg: 'veg', isCustomisable: false, tags: [], sortOrder: 2 },
  { id: 'item-3', categoryId: 'cat-1', title: 'Hara Bhara Kebab', subtitle: 'Spinach and green pea patties', price: 240, isVeg: 'veg', isCustomisable: false, tags: ["chef's pick"], sortOrder: 3 },
  // Non-Veg Starters
  { id: 'item-4', categoryId: 'cat-2', title: 'Chicken Tikka', subtitle: 'Char-grilled spiced chicken pieces', price: 320, isVeg: 'nonveg', isCustomisable: false, tags: ['bestseller', 'spicy'], sortOrder: 1 },
  { id: 'item-5', categoryId: 'cat-2', title: 'Fish Amritsari', subtitle: 'Crispy battered fish fingers', price: 380, isVeg: 'nonveg', isCustomisable: false, tags: [], sortOrder: 2 },
  { id: 'item-6', categoryId: 'cat-2', title: 'Mutton Seekh Kebab', subtitle: 'Minced lamb skewers, smoky & tender', price: 360, isVeg: 'nonveg', isCustomisable: false, tags: ["chef's pick"], sortOrder: 3 },
  // Curries
  { id: 'item-7', categoryId: 'cat-3', title: 'Butter Chicken', subtitle: 'Creamy tomato gravy, tender chicken', price: 380, isVeg: 'nonveg', isCustomisable: false, tags: ['bestseller'], sortOrder: 1 },
  { id: 'item-8', categoryId: 'cat-3', title: 'Palak Paneer', subtitle: 'Creamy spinach and cottage cheese', price: 300, isVeg: 'veg', isCustomisable: false, tags: [], sortOrder: 2 },
  { id: 'item-9', categoryId: 'cat-3', title: 'Dal Makhani', subtitle: 'Slow-cooked black lentils, rich & buttery', price: 260, isVeg: 'veg', isCustomisable: false, tags: ['must try'], sortOrder: 3 },
  { id: 'item-10', categoryId: 'cat-3', title: 'Egg Curry', subtitle: 'Boiled eggs in rich onion-tomato gravy', price: 280, isVeg: 'egg', isCustomisable: false, tags: [], sortOrder: 4 },
  // Tandoor
  { id: 'item-11', categoryId: 'cat-4', title: 'Tandoori Chicken', subtitle: 'Half chicken, marinated overnight in spices', price: 420, isVeg: 'nonveg', isCustomisable: false, tags: ['bestseller'], sortOrder: 1 },
  { id: 'item-12', categoryId: 'cat-4', title: 'Paneer Tikka Masala', subtitle: 'Grilled paneer in aromatic spiced gravy', price: 320, isVeg: 'veg', isCustomisable: true, tags: [], sortOrder: 2 },
  // Rice & Biryani
  { id: 'item-13', categoryId: 'cat-5', title: 'Chicken Biryani', subtitle: 'Hyderabadi style dum biryani with raita', price: 360, isVeg: 'nonveg', isCustomisable: false, tags: ['bestseller'], sortOrder: 1 },
  { id: 'item-14', categoryId: 'cat-5', title: 'Veg Pulao', subtitle: 'Fragrant basmati with seasonal vegetables', price: 240, isVeg: 'veg', isCustomisable: false, tags: [], sortOrder: 2 },
  { id: 'item-15', categoryId: 'cat-5', title: 'Egg Fried Rice', subtitle: 'Wok-tossed with scrambled egg & veggies', price: 220, isVeg: 'egg', isCustomisable: false, tags: [], sortOrder: 3 },
  // Desserts
  { id: 'item-16', categoryId: 'cat-6', title: 'Gulab Jamun', subtitle: 'Golden milk dumplings in rose syrup', price: 180, isVeg: 'veg', isCustomisable: false, tags: [], sortOrder: 1 },
  { id: 'item-17', categoryId: 'cat-6', title: 'Rasmalai', subtitle: 'Soft cottage cheese in saffron milk', price: 200, isVeg: 'veg', isCustomisable: false, tags: ["chef's pick"], sortOrder: 2 },
  { id: 'item-18', categoryId: 'cat-6', title: 'Kulfi', subtitle: 'Traditional Indian ice cream, 3 flavours', price: 160, isVeg: 'veg', isCustomisable: true, tags: [], sortOrder: 3 },
  // Hot Beverages
  { id: 'item-19', categoryId: 'cat-7', title: 'Masala Chai', subtitle: 'Aromatic spiced Indian tea', price: 80, isVeg: 'veg', isCustomisable: false, tags: [], sortOrder: 1 },
  { id: 'item-20', categoryId: 'cat-7', title: 'Filter Coffee', subtitle: 'South Indian style decoction coffee', price: 100, isVeg: 'veg', isCustomisable: false, tags: [], sortOrder: 2 },
  // Cold Drinks
  { id: 'item-21', categoryId: 'cat-8', title: 'Mango Lassi', subtitle: 'Sweet yogurt mango shake, chilled', price: 150, isVeg: 'veg', isCustomisable: false, tags: ['bestseller'], sortOrder: 1 },
  { id: 'item-22', categoryId: 'cat-8', title: 'Rose Sharbat', subtitle: 'Refreshing rose water with ice', price: 120, isVeg: 'veg', isCustomisable: false, tags: [], sortOrder: 2 },
  { id: 'item-23', categoryId: 'cat-8', title: 'Fresh Lime Soda', subtitle: 'Sweet or salted — your choice', price: 100, isVeg: 'veg', isCustomisable: true, tags: [], sortOrder: 3 },
];

export const mockStories: Story[] = [
  { id: 'story-1', restaurantId: 'saffron-sage', type: 'chef_pick', title: "Chef's Special", subtitle: 'Try our signature Tandoori Platter this week', gradient: 'linear-gradient(135deg, hsl(24, 85%, 52%), hsl(16, 75%, 48%))', linkedItemId: 'item-11', isActive: true },
  { id: 'story-2', restaurantId: 'saffron-sage', type: 'happy_hour', title: 'Happy Hours', subtitle: '20% off all beverages, 4–7 PM daily', gradient: 'linear-gradient(135deg, hsl(200, 70%, 45%), hsl(240, 60%, 50%))', isActive: true },
  { id: 'story-3', restaurantId: 'saffron-sage', type: 'special', title: 'New Arrival', subtitle: 'Truffle Butter Chicken is here — limited edition!', gradient: 'linear-gradient(135deg, hsl(0, 70%, 50%), hsl(24, 85%, 52%))', linkedItemId: 'item-7', isActive: true },
  { id: 'story-4', restaurantId: 'saffron-sage', type: 'promo', title: 'Weekend Feast', subtitle: 'Family combo for 4 at just ₹999', gradient: 'linear-gradient(135deg, hsl(160, 60%, 40%), hsl(180, 50%, 45%))', isActive: true },
];

// Helpers
export const getCollectionsByRestaurant = (restaurantId: string) =>
  mockCollections.filter(c => c.restaurantId === restaurantId).sort((a, b) => a.sortOrder - b.sortOrder);

export const getCategoriesByCollection = (collectionId: string) =>
  mockCategories.filter(c => c.collectionId === collectionId).sort((a, b) => a.sortOrder - b.sortOrder);

export const getItemsByCategory = (categoryId: string) =>
  mockItems.filter(i => i.categoryId === categoryId).sort((a, b) => a.sortOrder - b.sortOrder);

export const getItemById = (itemId: string) =>
  mockItems.find(i => i.id === itemId);

export const getStoriesByRestaurant = (restaurantId: string) =>
  mockStories.filter(s => s.restaurantId === restaurantId && s.isActive);

export const getCollectionById = (collectionId: string) =>
  mockCollections.find(c => c.id === collectionId);
