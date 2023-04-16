import React from 'react'
import Header from '@/components/Header'
import CartItems from '@/components/client/cart/CartItems'
import PurchaseSummary from '@/components/client/PurchaseSummary'
import Footer from '@/components/Footer'
import { Provider } from 'react-redux'
import { useSelector } from 'react-redux'
import store from '../../store/store' // ou o caminho para o arquivo que cria e exporta a store
import { RootState } from '../../store/types'

const MeuCarrinho: React.FC = () => {
    const cart = useSelector((state: RootState) => state.cart);
    const items: string[] = cart.carts.map((cartItem) => `${cartItem.product.productName} (${cartItem.count})`);
    const prices: number[] = cart.carts.map((cartItem) => parseFloat((cartItem.product.price * cartItem.count).toFixed(2)));
    const total: number = parseFloat(prices.reduce((acc, curr) => acc + curr, 0).toFixed(2));
  
    return (
        <Provider store={store}>
            <div>
                <Header />
                <CartItems />
                {items.length > 0 && (
                    <PurchaseSummary
                        title="Resumo de Compras"
                        items={items}
                        prices={prices}
                        total={total}
                    />
                )}
                <Footer />
            </div>
        </Provider>
    );
};

export default MeuCarrinho;


