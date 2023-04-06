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

export interface ProductState {
    products: Product[];
    loading: boolean;
    error: string | null;
}

export interface RootState {
    counter: CounterState;
    product: ProductState;
}
    
  