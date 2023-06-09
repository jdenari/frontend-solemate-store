// patterns imports
import React from 'react';
import styles from './OrderItems.module.css';
import { useSelector } from 'react-redux';

// child components imports
import HorizontalCard from '../HorizontalCard';
import SolemateButton from '@/components/SolemateButton';

// actions imports
import { selectDistinctDates } from '../../../store/reducers/orderReducer';
import { RootState } from '../../../store/types';

const OrderItems = () => {
    
    // data constants
    const distinctDates = useSelector(selectDistinctDates);
    const authenticated = useSelector((state: RootState) => state.authenticated.user);
    const orders = useSelector((state: RootState) => authenticated ? state.order.orders.filter(order => order.userId === authenticated.id) : []);

    const products = useSelector((state: RootState) => state.product.products);

    // return the html if the order is empty
    if (orders.length === 0) {
        return (
        <div className={`${styles.bgLightWhite} container ${styles.containerOrder} p-5 rounded my-3 text-center d-flex align-items-center`}>
            <div className='p-3 bg-white col-8 m-auto shadow-sm p-3 py-5 bg-body-tertiary rounded'>
                <h4>You have no purchase history!</h4>
                <div className='m-auto p-3 mt-5 col-lg-4 col-sm-6 col-8'>
                    <SolemateButton 
                        buttonText="Check our offers" 
                        href="/"
                        variant='purple'
                    />
                </div>
            </div>
        </div>
        )
    }

    // return the html if the order is not empty
    return (
        <div className={`${styles.bgLightWhite} container ${styles.containerOrder} p-3 rounded my-3`}>
            <div className="row my-1 d-flex col-11 m-auto">
                <h2 className="mb-3">Orders</h2>
                {distinctDates.map((date) => (
                    <div key={date}>
                        <p className='m-0'>{new Date(date).toLocaleDateString('pt-BR', {
                            day: '2-digit',
                            month: 'long',
                            year: 'numeric'
                        })}</p>
                        <hr className="w-100 border-top border-secondary my-1" />
                        {orders
                            .filter((order) => order.dateOrder.split('T')[0] === date)
                            .map((order) => {
                                const product = products.find((prod) => prod.id === order.productId);
                                
                                return (
                                    <HorizontalCard
                                        key={order.id}
                                        imgSrc={`http://localhost:5000/api/photos/${order.photoId}/photo`}
                                        imgAlt={product?.productName || 'Product not found'}
                                        title={product?.productName || 'Product not found'}
                                        description={product?.description || 'Product not found'}
                                        quantity={`Quantity: ${order.quantity}`}
                                        price={`R$ ${order.priceUnit}`}
                                        deliveryStatus={`${order.statusDelivery}`}
                                        deliveryDate={`${new Date(order.dateDelivery).toLocaleDateString('pt-BR', {
                                            day: '2-digit',
                                            month: 'long',
                                            year: 'numeric'
                                        })}`}
                                        onDelivery={true}
                                    />
                                )
                            })
                        }
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderItems;

