export interface Review {
    id: number;
    userId: number;
    restaurantId?: number;  // Optional: Review could be linked to a restaurant
    menuItemId?: number;  // Optional: Review could be linked to a specific menu item
    content: string;
    rating: number;
  }
  
