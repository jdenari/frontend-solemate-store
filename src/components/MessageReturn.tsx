import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';

type MessageProps = {
    text: string;
    variant?: string;
};

const MessageReturn: React.FC<MessageProps> = ({ text, variant = 'success' }) => {
  const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(Boolean(text));
    }, [text]);

    if (!show) {
        return null;
    }

    return (
        <Alert variant={variant} className="text-center">
            <p className='m-0'>{text}</p>
        </Alert>
    );
};

export default MessageReturn;






  