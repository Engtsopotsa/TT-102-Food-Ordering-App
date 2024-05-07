export interface Payment {
    id: number;
    userId: number;
    orderId: number;
    amount: number;
    method: string;
    status: string;  // e.g., "completed", "pending", "failed"
  }
  
