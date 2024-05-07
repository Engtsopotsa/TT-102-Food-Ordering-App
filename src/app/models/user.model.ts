export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface User {
  id: number;
  username: string;
  hashedPassword: string;
  email: string;
  fullName: string;
  address: Address;
  phone: string;
  role: string;
}

  
