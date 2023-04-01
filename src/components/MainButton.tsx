import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './MainButton.module.css';

interface MainButtonProps {
  buttonText: string;
}

const MainButton: React.FC<MainButtonProps> = ({ buttonText }) => {
    return (
        <Button
            variant="outline-primary"
            className={`ms-auto ${styles.purpleButton} px-4 p-2 shadow-sm bg-body-tertiary rounded-4`}
        >
        {buttonText}
        </Button>
    );
};

export default MainButton;