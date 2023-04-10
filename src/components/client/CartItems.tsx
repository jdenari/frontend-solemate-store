import React from 'react'
import { useSelector } from 'react-redux';
import HorizontalCard from './HorizontalCard';
import styles from './CartItems.module.css';
import { selectDistinctDates } from '../../store/rootReducer';

const CartItems = () => {
    const distinctDates = useSelector(selectDistinctDates);

    return (
        <div className={`${styles.bgLightWhite} container p-3 rounded my-3`}>
            {distinctDates.map((date) => (
                <div key={date}>
                    <h5>{date}</h5>
                    <hr className="w-100 border-top border-secondary my-1" />
                    <div className="row my-1 d-flex">
                        <HorizontalCard  
                            imgSrc="/shoes/shoes-07.png" 
                            imgAlt="Image 1" 
                            title="Title 1" 
                            description='on autem velit et galisum voluptatum sit harum neque vel magnam nulla At incidunt accusantium est quia accusantium. '
                            price="R$ 490,99" 
                        />
                    </div>
                    <div className="row my-1">
                        <HorizontalCard  
                            imgSrc="/shoes/shoes-03.png" 
                            imgAlt="Image 1" 
                            title="Title 1" 
                            description='on autem velit et galisum voluptatum sit harum neque vel magnam nulla At incidunt accusantium est quia accusantium. '
                            price="R$ 120,99" 
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CartItems
