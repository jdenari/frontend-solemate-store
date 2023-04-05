import React from 'react'
import Header from '@/components/Header'
import CartItems from '@/components/client/CartItems'
import Footer from '@/components/Footer'
import { Provider } from 'react-redux'
import store from '../../store/store'

const meuspedidos = () => {
    return (
        <Provider store={store}>
            <div>
                <Header />
                <CartItems />
                <Footer />
            </div>
        </Provider>
    );
}

export default meuspedidos