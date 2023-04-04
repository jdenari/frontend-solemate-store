import React from 'react'
import Header from '@/components/Header'
import CartItems from '@/components/CartItems'
import PurchaseSummary from '@/components/PurchaseSummary'
import Footer from '@/components/Footer'
import { Provider } from 'react-redux'
import store from '../../store/store' // ou o caminho para o arquivo que cria e exporta a store

const MeuCarrinho: React.FC = () => {
    const items: string[] = ['Item 1', 'Item 2', 'Item 3'];
    const prices: number[] = [10, 20, 30];
    const total: number = prices.reduce((acc, curr) => acc + curr, 0);
  
    return (
        <Provider store={store}>
            <div>
                <Header />
                <CartItems />
                <PurchaseSummary
                    title="Resumo de Compras"
                    items={items}
                    prices={prices}
                    total={total}
                />
                <Footer />
            </div>
        </Provider>
    );
};

export default MeuCarrinho;
