export interface User {
    id: number;
    username: string;
    email: string;
    password?: string;  // Optional field, should not be fetched or stored in front-end in real applications
    // Add any additional fields that are relevant to your application
  }
  
