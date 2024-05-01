export interface Order {
    id: number;
    customerId: number;  // Assuming orders are linked to a customer
    items: OrderItem[];
    total: number;
    status: OrderStatus;  // You can use an enum for status
    orderDate: Date;
    deliveryDate?: Date;  // Optional, depends on the type of service
  }
  
  export interface OrderItem {
    menuItemId: number;
    quantity: number;
    price: number;  // Price at the time of order in case it changes in the future
  }
  
  export enum OrderStatus {
    Pending = 'Pending',
    Preparing = 'Preparing',
    ReadyToShip = 'ReadyToShip',
    Shipped = 'Shipped',
    Delivered = 'Delivered',
    Cancelled = 'Cancelled'
  }
  
