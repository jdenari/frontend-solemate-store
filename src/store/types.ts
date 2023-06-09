export interface CounterState {
    count: number;
    productShow: number;
}

export interface Product {
    id: number;
    productName: string;
    categoryId: string;
    description: string;
    price: number;
    statusProduct: string;
    photoId: number;
}

export interface Order {
    id: number;
    size: string;
    quantity: string;
    priceUnit: number;
    dateOrder: string;
    statusDelivery: string;
    dateDelivery: string;
    userId: number;
    photoId: number;
    productId: number;
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

export interface Stock {
    id: number;
    size: string;
    quantity: number;
    productId: number; 
}


export interface StockState {
    stocks: Stock[];
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

export interface returnMessageState {
    message: { text: string; variant: string } | null;
}

export interface CategoryState {
    categories: Category[];
    loading: boolean;
    error: string | null;
}

export interface Category {
    id: number;
    category: string;
}

export interface RootState {
    counter: CounterState;
    product: ProductState;
    authenticated: AuthenticatedState;
    order: OrderState;
    cart: CartState;
    auth: AuthState;
    returnMessage: returnMessageState;
    stock: StockState;
    category: CategoryState;
}
    
  