import React from 'react'
import HorizontalCard from './HorizontalCard';
import styles from './CartItems.module.css';

const CartItems = () => {
    return (
        <div className={`${styles.bgLightWhite} container p-3 rounded`}>
            <div className='d-flex justify-content-between'>
                <h5>13 de Fevereiro de 2022</h5>
                <h6 className='d-flex justify-content-end'>Previsão de Entregas: 21/02/2022</h6>
            </div>
            <hr className="w-100 border-top border-secondary my-1" />
            <div className="row my-1 d-flex">
                <HorizontalCard  
                    imgSrc="/shoes/shoes-07.png" 
                    imgAlt="Image 1" 
                    title="Title 1" 
                    description='on autem velit et galisum voluptatum sit harum neque vel magnam nulla At incidunt accusantium est quia accusantium. '
                    price="$10" 
                />
            </div>
            <div className="row my-1">
                <HorizontalCard  
                    imgSrc="/shoes/shoes-07.png" 
                    imgAlt="Image 1" 
                    title="Title 1" 
                    description='on autem velit et galisum voluptatum sit harum neque vel magnam nulla At incidunt accusantium est quia accusantium. '
                    price="$10" 
                />
            </div>
        </div>
    )
}

export default CartItems