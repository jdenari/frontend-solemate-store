import React from 'react';
import { Modal, Button } from 'react-bootstrap';

type ModalProps = {
    show: boolean;
    handleClose: () => void;
    handleYes: () => void;
    title: string;
    text: string;
};

const CustomModal = ({ show, handleClose, handleYes, title, text }: ModalProps) => {

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{text}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Voltar
                </Button>
                <Button variant="primary" onClick={handleYes}>
                Sim
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CustomModal;
