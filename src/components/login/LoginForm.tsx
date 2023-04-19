// patterns imports
import React, { useState, useEffect } from 'react';
import styles from './LoginForm.module.css';

// child components imports
import MainButton from '../MainButton';
import MessageReturn from '../../components/MessageReturn';

// actions imports
import { useDispatch } from 'react-redux';
import { AUTHENTICATE } from '../../store/actions';

const LoginForm = () => {
    const dispatch = useDispatch();

    // message alert constant
    const [message, setMessage] = useState<{ text: string; variant: string } | null>(null);

    // it makes the login
    const makeLogin = async () => {
        const email = document.getElementById('email') as HTMLInputElement;
        const password = document.getElementById('password') as HTMLInputElement;
    
        const response = await fetch('http://localhost:5000/api/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email.value, password: password.value }),
        });
    
        if (response.ok) {
            const data = await response.json();
            window.location.href = '/';
            dispatch(AUTHENTICATE({ id: data.id, firstName: data.firstName, lastName: data.lastName, email: data.email, access: data.access }));
        } else {
            const data = await response.json();
            setMessage({ text: data.error, variant: 'danger' });
        }
    };

    // sets a timeout to remove the message from the screen after 3 seconds
    useEffect(() => {
        let timeoutId: NodeJS.Timeout | undefined;
        if (message && message.text) {
            timeoutId = setTimeout(() => {
                setMessage(null);
            }, 3000);
        }
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [message]);

    return (
        <div>
            <div className={`${styles.containerForm} m-auto my-5 w-50 border p-3`}>
                <h2 className="text-center mb-5">Iniciar Sessão</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                        E-mail
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                            placeholder="seunome@email.com"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                        Senha
                        </label>
                        <input type="password" className="form-control" id="password" placeholder="**********" />
                    </div>
                    <div className="d-md-flex justify-content-md-end">
                        <MainButton buttonText="Acessar" onClick={makeLogin} />
                    </div>
                    <div className="text-center mt-3">
                        <span className="mx-1">
                            Não possui conta?
                        <a href="/cliente/registre" className="mx-1">
                            Faça seu registro.
                        </a>
                        </span>
                    </div>
                    <div className='m-3 mt-5'>
                        {message && <MessageReturn text={message.text} variant={message.variant} />}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;




