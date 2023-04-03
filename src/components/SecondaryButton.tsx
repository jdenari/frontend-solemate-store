import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './SecondaryButton.module.css';

interface SecondaryButtonProps {
    buttonText: string;
    imageUrl?: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ buttonText, imageUrl }) => {
    return (
        <Button
            variant="outline-primary"
            className={`ms-auto ${styles.grayButton} px-3 p-2 shadow-sm bg-body-tertiary rounded-4 d-flex justify-content-center align-items-center`}
        >
            {imageUrl && <img src={imageUrl} alt="Button Icon" className="me-2" />}
            {buttonText}
        </Button>
    );
};

export default SecondaryButton;