import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '@/components/Header'
import OrderItems from '@/components/client/orders/OrderItems'
import Footer from '@/components/Footer'
import { getOrder } from '../../store/actions/orderAction';
import { Provider } from 'react-redux'
import store from '../../store/store'
import withAuth from '@/components/middleware/withAuth'

const MeusPedidos = () => {
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(getOrder());
    }, [dispatch]);
    return (
        <Provider store={store}>
            <div>
                <Header />
                <OrderItems />
                <Footer />
            </div>
        </Provider>
    );
}

export default withAuth(MeusPedidos, { accessLevel: 'any' });