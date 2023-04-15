import React from 'react';
import { useSelector } from 'react-redux';
import HorizontalCard from '../HorizontalCard';
import styles from './OrderItems.module.css';
import { selectDistinctDates } from '../../../store/rootReducer';
import { RootState } from '../../../store/types';

const OrderItems = () => {
    const distinctDates = useSelector(selectDistinctDates);
    const orders = useSelector((state: RootState) => state.order.orders);

    return (
        <div className={`${styles.bgLightWhite} container p-3 rounded my-3`}>
            {distinctDates.map((date) => (
                <div key={date}>
                    <h5>{date}</h5>
                    <hr className="w-100 border-top border-secondary my-1" />
                    <div className="row my-1 d-flex">
                        {orders.map((order) => (
                        <HorizontalCard
                            key={order.id}
                            imgSrc={`http://localhost:5000/api/photos/${order.photoId}/photo`}
                            imgAlt={order.productName}
                            title={order.productName}
                            description={order.description}
                            price={`R$ ${order.order.price}`}
                        />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OrderItems;

