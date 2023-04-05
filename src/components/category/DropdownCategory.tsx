import React from 'react';
import RadiosCategory from './RadiosCategory';
import CircleCategory from './CircleCategory';
import styles from './DropdownCategory.module.css';

interface DropdownCategoryProps {
    show: boolean;
    onClose: () => void; // Adicionar a propriedade onClose com o tipo correto
}


const DropdownCategory: React.FC<DropdownCategoryProps> = ({ show, onClose }) => {
    return (
        <div style={{ display: show ? 'block' : 'none' }} className={`${styles.bgLightWhite} container p-3`}>
            <div className='d-flex justify-content-between p-2'>
                <RadiosCategory />
                <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
            </div>
            <div className="d-flex p-3">
                <CircleCategory imageUrl="/shoes/shoes-02.png" text="Botas" />
                <CircleCategory imageUrl="/shoes/shoes-03.png" text="Sapatos" />
                <CircleCategory imageUrl="/shoes/shoes-04.png" text="Tênis" />
                <CircleCategory imageUrl="/shoes/shoes-05.png" text="Botinas" />
                <CircleCategory imageUrl="/shoes/shoes-06.png" text="Sapatos Casuais" />
            </div>
        </div>
    );
};


export default DropdownCategory;
