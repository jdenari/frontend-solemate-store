import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './SolemateButton.module.css';

interface SolemateButtonProps {
    buttonText?: string;
    imageUrl?: string;
    href?: string;
    onClick?: () => void;
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
    disabled?: boolean;
    variant: 'outline-primary' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'purple';
}

const SolemateButton: React.FC<SolemateButtonProps> = ({ buttonText, imageUrl, href, onClick, onSubmit, disabled, variant }) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onSubmit) {onSubmit(e as unknown as React.FormEvent<HTMLFormElement>);}
        if (onClick) {onClick();}
    };

    const buttonClassName = variant === 'purple'
        ? `ms-2 ${styles.purpleButton} px-3 p-2 shadow-sm bg-body-tertiary rounded-4 d-flex justify-content-center align-items-center`
        : `ms-2 px-3 p-2 shadow-sm bg-body-tertiary rounded-4 d-flex justify-content-center align-items-center`;

    return (
        <Button
            variant={variant === 'purple' ? 'outline-primary' : variant}
            className={buttonClassName}
            href={href}
            target="_self" 
            onClick={handleClick}
            disabled={disabled}
        >
            {imageUrl && <img src={imageUrl} alt="Button Icon" className="me-2" />}
            {buttonText}
        </Button>
    );
};

export default SolemateButton;

