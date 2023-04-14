import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './SecondaryButton.module.css';

interface SecondaryButtonProps {
    buttonText?: string;
    imageUrl?: string;
    onClick?: () => void; // adicionado aqui
}


const SecondaryButton: React.FC<SecondaryButtonProps> = ({ buttonText, imageUrl, onClick }) => {
    return (
        <Button
            variant="outline-primary"
            className={`ms-auto ${styles.grayButton} px-3 p-2 shadow-sm bg-body-tertiary rounded-4 d-flex justify-content-center align-items-center`}
            onClick={onClick} // adicionado aqui
        >
            {imageUrl && <img src={imageUrl} alt="Button Icon" className="px-2" />}
            {buttonText}
        </Button>
    );
};

export default SecondaryButton;