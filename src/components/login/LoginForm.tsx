// patterns imports
import React from 'react';
import styles from './LoginForm.module.css';

// child components imports
import SolemateButton from '../SolemateButton';
import MessageReturn from '../../components/MessageReturn';

// actions imports
import { useDispatch, useSelector } from 'react-redux';
import { AUTHENTICATE, SET_MESSAGE, CLEAR_MESSAGE } from '../../store/actions';
import { RootState } from '../../store/types';

const LoginForm = () => {

    const dispatch = useDispatch();
    const message = useSelector((state: RootState) => state.returnMessage);

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
            dispatch(SET_MESSAGE({ text: data.error, variant: 'danger'}));
            setTimeout(() => { dispatch(CLEAR_MESSAGE());}, 3000);
        };
    };

    return (
        <div>
            <div className={`${styles.containerForm} m-auto my-5 w-50 border px-5 py-3`}>
                <h2 className="text-center mb-5">Session</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                        Email
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
                        Password
                        </label>
                        <input type="password" className="form-control" id="password" placeholder="**********" />
                    </div>
                    <div className="d-flex justify-content-end">
                        <SolemateButton 
                            buttonText="Access" 
                            onClick={makeLogin} 
                            variant='purple'
                        />
                    </div>
                    <div className="text-center mt-3">
                        <span className="mx-1">
                            Don't have an account?
                        <a href="/cliente/registre" className="mx-1">
                            Make your registration.
                        </a>
                        </span>
                    </div>
                    <div className='m-3 mt-5'>
                        {message.message && <MessageReturn text={message.message.text} variant={message.message.variant} />}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;




