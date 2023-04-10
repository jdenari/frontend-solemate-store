export interface CounterState {
    count: number;
}

export interface Product {
    id: number;
    class: string;
    productName: string;
    description: string;
    price: number;
    stock: {
        size: string;
        quantity: number;
    };
}

export interface Order {
    id: number;
    idUser: number;
    class: string;
    productName: string;
    description: string;
    order: {
        price: number;
        priceUnit: number;
        quantity: number;
        size: string;
    };
    date: string;
}

export interface OrderState {
    orders: Order[];
    loading: boolean;
    error: string | null;
}

export interface AuthenticatedState {
    authenticated: boolean
}

export interface ProductState {
    products: Product[];
    loading: boolean;
    error: string | null;
}

export interface RootState {
    counter: CounterState;
    product: ProductState;
    authenticated: AuthenticatedState;
    order: OrderState;
}
    
  