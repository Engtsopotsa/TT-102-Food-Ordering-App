export interface OrderItem {
  menuItemId: number;
  quantity: number;
}

export interface Order {
  id: number;
  userId: number;
  items: OrderItem[];
  total: number;
  status: string;  // could be "pending", "completed", "cancelled", etc.
}

  
export enum OrderStatus {
    Pending = 'Pending',
    Preparing = 'Preparing',
    ReadyToShip = 'ReadyToShip',
    Shipped = 'Shipped',
    Delivered = 'Delivered',
    Cancelled = 'Cancelled'
  }
  
