import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deauthenticated } from '../store/actions';

type ModalProps = {
    show: boolean;
    handleClose: () => void;
    title: string;
    text: string;
};

const CustomModal = ({ show, handleClose, title, text }: ModalProps) => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(deauthenticated());
        handleClose();
    };

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
                <Button variant="primary" onClick={handleLogout}>
                Sim
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CustomModal;
