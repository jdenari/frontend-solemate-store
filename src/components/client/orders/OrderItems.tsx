import React from 'react';
import { useSelector } from 'react-redux';
import HorizontalCard from '../HorizontalCard';
import MainButton from '@/components/MainButton';
import styles from './OrderItems.module.css';
import { selectDistinctDates } from '../../../store/rootReducer';
import { RootState } from '../../../store/types';

const OrderItems = () => {
    const distinctDates = useSelector(selectDistinctDates);
    const orders = useSelector((state: RootState) => state.order.orders);

    if (orders.length === 0) {
        return (
        <div className={`${styles.bgLightWhite} container p-5 rounded my-3 text-center`}>
            <h4>Você não possui nenhum histórico de compras!</h4>
            <div className='col-3 m-auto p-3 mt-5'>
                <MainButton buttonText="Verifique nossas ofertas" href="/"/>
            </div>
        </div>
        )
    }

    return (
        <div className={`${styles.bgLightWhite} container ${styles.containerOrder} p-3 rounded my-3`}>
            <div className="row my-1 d-flex col-11 m-auto">
                <h2 className="mb-3 m-0">Compras</h2>
                {distinctDates.map((date) => (
                <div key={date}>
                    <p className='m-0'>{new Date(date).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric'
                    })}</p>
                    <hr className="w-100 border-top border-secondary my-1" />
                    {orders
                        .filter((order) => order.date.split('T')[0] === date)
                        .map((order) => (
                            <HorizontalCard
                                key={order.id}
                                imgSrc={`http://localhost:5000/api/photos/${order.photoId}/photo`}
                                imgAlt={order.productName}
                                title={order.productName}
                                description={order.description}
                                quantity={`Quantidade: ${order.order.quantity}`}
                                price={`R$ ${order.order.price}`}
                                deliveryStatus={`${order.delivery.status}`}
                                deliveryDate={`${new Date(order.delivery.date).toLocaleDateString('pt-BR', {
                                    day: '2-digit',
                                    month: 'long',
                                    year: 'numeric'
                                })}`}
                                onDelivery={true}
                            />
                        ))}
                </div>
            ))}
            </div>
        </div>
    );
};

export default OrderItems;

