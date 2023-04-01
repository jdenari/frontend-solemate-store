import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './SecondaryButton.module.css';

interface SecondaryButtonProps {
    buttonText: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ buttonText }) => {
    return (
        <Button
            variant="outline-primary"
            className={`ms-auto ${styles.grayButton} px-3 p-2 shadow-sm bg-body-tertiary rounded-4`}
        >
        {buttonText}
        </Button>
    );
};

export default SecondaryButton;