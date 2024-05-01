export interface Menu {
    id: number;
    name: string;
    description?: string;
    price: number;
    imageUrl?: string;
    categoryId: number; // Assuming menu items are categorized
  }
  