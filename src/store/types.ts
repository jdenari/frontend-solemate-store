export interface CounterState {
    count: number;
}

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
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
    
  