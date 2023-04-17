export interface CounterState {
    count: number;
    productShow: number;
}

export interface Product {
    id: number;
    class: string;
    productName: string;
    productClass: string;
    description: string;
    price: number;
    stock: {
        size: string;
        quantity: number;
    };
}

export interface Order {
    id: number;
    userId: number;
    photoId: number;
    class: string;
    productName: string;
    description: string;
    order: {
        price: number;
        priceUnit: number;
        quantity: number;
        size: string;
    };
    delivery: {
        status: string;
        date: string;
    };
    date: string;
}

export interface Cart {
    id: number;
    product: Product;
    count: number;
}
  

export interface OrderState {
    orders: Order[];
    loading: boolean;
    error: string | null;
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    access: 'admin' | 'client';
}
  
export interface AuthState {
    authenticated: boolean;
    user: User | null;
}
  

export interface AuthenticatedState {
    authenticated: boolean;
    user: User | null; 
  }
  

export interface ProductState {
    products: Product[];
    loading: boolean;
    error: string | null;
}

export interface CartState {
    carts: Cart[];
    loading: boolean;
    error: string | null;
    id: number;
}

export interface RootState {
    counter: CounterState;
    product: ProductState;
    authenticated: AuthenticatedState;
    order: OrderState;
    cart: CartState;
    auth: AuthState;
}
    
  