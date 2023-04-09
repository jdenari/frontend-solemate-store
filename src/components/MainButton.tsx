import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './MainButton.module.css';

interface MainButtonProps {
    buttonText: string;
    imageUrl?: string;
    href?: string; // 
    onClick?: () => void;
}

const MainButton: React.FC<MainButtonProps> = ({ buttonText, imageUrl, href, onClick}) => {
    return (
        <Button
            variant="outline-primary"
            className={`ms-auto ${styles.purpleButton} px-4 p-2 shadow-sm bg-body-tertiary rounded-4 d-flex justify-content-center align-items-center`}
            href={href}
            target="_self" 
            onClick={onClick} 
        >
            {imageUrl && <img src={imageUrl} alt="Button Icon" className="me-3" />}
            {buttonText}
        </Button>
    );
};


export default MainButton;
