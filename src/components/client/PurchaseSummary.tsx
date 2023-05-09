// patterns imports
import React, { useState } from 'react';
import styles from './PurchaseSummary.module.css';

// child components
import SolemateButton from '../SolemateButton'
import SolemateModal from '../SolemateModal';

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

    // functions handle
        // modals openning and close
    const handleOpenModal = () => {setShowModal(true)}
    const handleCloseModal = () => {setShowModal(false);};

        // function to buy the product
    const handleBuyProduct = () => {
        console.log('Comprou')
        handleCloseModal()
    }
    
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
                    <span>Você pagará: </span>
                    <span>{total.toFixed(2)}</span>
                </div>
            </div>
            <div className="col-6 m-auto px-5 pb-5 d-flex flex-row-reverse">
                <div className='d-flex align-items-end'>
                    <SolemateButton 
                        buttonText="Finalizar Compra" 
                        onClick={handleOpenModal}
                        variant='purple'
                    />
                </div>
            </div>
            <SolemateModal
                show={showModal}
                handleYes={handleBuyProduct}
                handleClose={handleCloseModal}
                text="Você tem certeza que quer sair da sua conta?"
                title="Sair da Conta"
            />
        </div>
    );
};

export default PurchaseSummary;

