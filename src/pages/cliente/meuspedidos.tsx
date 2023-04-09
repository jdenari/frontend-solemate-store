import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '@/components/Header'
import CartItems from '@/components/client/CartItems'
import Footer from '@/components/Footer'
import { getOrder } from '../../store/actions';
import { Provider } from 'react-redux'
import store from '../../store/store'

const meuspedidos = () => {
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(getOrder());
    }, []);
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