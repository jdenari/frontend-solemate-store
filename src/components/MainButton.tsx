import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './Header.module.css';

interface CustomButtonProps {
  buttonText: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ buttonText }) => {
    return (
        <Button
            variant="outline-primary"
            className={`ms-auto ${styles.purpleButton} px-5 p-2 rounded-4`}
        >
        {buttonText}
        </Button>
    );
};

export default CustomButton;