import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './MainButton.module.css';

interface MainButtonProps {
    buttonText: string;
    imageUrl?: string;
    href?: string;
    onClick?: () => void;
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
    disabled?: boolean; // Adicionar a prop disabled como opcional
}

const MainButton: React.FC<MainButtonProps> = ({ buttonText, imageUrl, href, onClick, onSubmit, disabled }) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onSubmit) {onSubmit(e as unknown as React.FormEvent<HTMLFormElement>);}
        if (onClick) {onClick();}
    };

    return (
        <Button
            variant="outline-primary"
            className={`ms-auto ${styles.purpleButton} px-4 p-2 shadow-sm bg-body-tertiary rounded-4 d-flex justify-content-center align-items-center`}
            href={href}
            target="_self" 
            onClick={handleClick} // Utiliza a nova função handleClick aqui
            disabled={disabled}
        >
            {imageUrl && <img src={imageUrl} alt="Button Icon" className="me-3" />}
            {buttonText}
        </Button>
    );
};




export default MainButton;
