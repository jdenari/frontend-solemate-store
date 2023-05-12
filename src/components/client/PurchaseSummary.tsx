// patterns imports
import React, { useState } from 'react';
import styles from './PurchaseSummary.module.css';

// child components
import SolemateButton from '../SolemateButton'
import SolemateModal from '../SolemateModal';

// action imports
import { RootState } from '../../store/types';
import { useSelector, useDispatch } from 'react-redux';
import { CLEAN_CART, SET_MESSAGE, CLEAR_MESSAGE } from '../../store/actions';

// Import axios
import axios from 'axios';

// props
type PurchaseSummaryProps = {
    title: string;
    items: string[];
    prices: number[];
    total: number;
};

const PurchaseSummary: React.FC<PurchaseSummaryProps> = ({ title, items, prices, total}) => {

    // data constants
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch<any>();
    const carts = useSelector((state: RootState) => state.cart.carts);
    const authenticated = useSelector((state: RootState) => state.authenticated.user);

    // functions handle
        // modals openning and close
    const handleOpenModal = () => {setShowModal(true)}
    const handleCloseModal = () => {setShowModal(false);};

    // function to buy the product
    const handleBuyProduct = async () => {
        handleCloseModal();
        for (const cartItem of carts) {
            const currentDate = new Date();
            const deliveryDate = new Date(currentDate);
            deliveryDate.setDate(currentDate.getDate() + 7);
    
            const order = {
                size: "42",
                quantity: cartItem.count,
                priceUnit: cartItem.product.price,
                dateOrder: currentDate.toISOString(),
                statusDelivery: "ENTREGUE",
                dateDelivery: deliveryDate.toISOString(),
                userId: authenticated?.id,
                photoId: cartItem.product.id,
                productId: cartItem.product.id
            };
    
            await submitOrder(order);
        }
        dispatch(CLEAN_CART())
    };   
    
    const submitOrder = async (order: any) => {
        try {
            console.log(order)
            const response = await axios.post('http://localhost:5000/api/order/add-order', order);
            const messageText = response.data;

            if (response.status === 200) {    
                dispatch(SET_MESSAGE({ text: messageText, variant: 'success'}));
                setTimeout(() => { dispatch(CLEAR_MESSAGE());}, 3000);
            } else {
                dispatch(SET_MESSAGE({ text: messageText, variant: 'danger'}));
                setTimeout(() => { dispatch(CLEAR_MESSAGE());}, 3000);
            }

        } catch (error) {
            const messageText = 'Error updating product and stock:' + error;
            dispatch(SET_MESSAGE({ text: messageText, variant: 'danger'}));
            setTimeout(() => { dispatch(CLEAR_MESSAGE());}, 3000);
        }
    };
    
    
    return (
        <div className={`${styles.bgLightWhite} container justify-content-center m-auto w-100`}>
            <div className="col-6 p-5 m-auto">
                <h5>{title}</h5>
                <hr />
                {items.map((item, index) => (
                    <div key={index} className="d-flex justify-content-between">
                        <span>{item}</span>
                        <span className=''>{prices[index].toFixed(2)}</span>
                    </div>
                ))}
                <hr />
                <div className="d-flex justify-content-between">
                    <span>You will pay: </span>
                    <span>{total.toFixed(2)}</span>
                </div>
            </div>
            <div className="col-6 m-auto px-5 pb-5 d-flex flex-row-reverse">
                <div className='d-flex align-items-end'>
                    <SolemateButton 
                        buttonText="Checkout" 
                        onClick={handleOpenModal}
                        variant='purple'
                    />
                </div>
            </div>
            <SolemateModal
                show={showModal}
                handleYes={handleBuyProduct}
                handleClose={handleCloseModal}
                text="Are you sure you want to buy these items"
                title="Check Out"
            />
        </div>
    );
};

export default PurchaseSummary;

