// patterns imports
import React, { useState, useEffect } from 'react';
import styles from './RegisterForm.module.css';
import Link from 'next/link';

// child components imports
import SolemateButton from '../SolemateButton';
import MessageReturn from '../../components/MessageReturn';

// actions imports
import { useDispatch, useSelector } from 'react-redux';
import { AUTHENTICATE, SET_MESSAGE, CLEAR_MESSAGE } from '../../store/actions';
import { RootState } from '../../store/types';

const RegisterForm = () => {
    
    // message alert
    const dispatch = useDispatch();
    const message = useSelector((state: RootState) => state.returnMessage);

    // regist function
    const makeRegister = async () => {

        const firstName = document.getElementById('firstName') as HTMLInputElement;
        const lastName = document.getElementById('lastName') as HTMLInputElement;
        const email = document.getElementById('email') as HTMLInputElement;
        const password = document.getElementById('password') as HTMLInputElement;
        const confirmPassword = document.getElementById('confirmPassword') as HTMLInputElement;

        const response = await fetch('http://localhost:5000/api/user/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstName: firstName.value, lastName: lastName.value, access: 'client', email: email.value, password: password.value, confirmPassword: confirmPassword.value }),
        });

        if (response.ok) {
            const data = await response.json();
            window.location.href = '/';
            dispatch(AUTHENTICATE({ id: data.id, firstName: data.firstName, lastName: data.lastName, email: data.email, access: data.access }));
        } else {
            const data = await response.json();
            dispatch(SET_MESSAGE({ text: data.error, variant: 'danger'}));
            setTimeout(() => { dispatch(CLEAR_MESSAGE());}, 3000);
        }
        
    };

    return (
        <div>
            <div className={`${styles.containerForm} m-auto my-5 w-50 border p-3`}>
                <h2 className="text-center mb-5">Create an account</h2>
                <form className='text-end'>
                    <div className="mb-1 d-flex align-items-center">
                        <label htmlFor="firstName" className="form-label col-3 m-1">
                            First Name
                        </label>
                        <input
                            type="text"
                            className="form-control m-1"
                            id="firstName"
                            placeholder="Your first name"
                        />
                    </div>
                    <div className="mb-1 d-flex align-items-center">
                        <label htmlFor="lastName" className="form-label col-3 m-1">
                            Last Name
                        </label>
                        <input
                            type="text"
                            className="form-control m-1"
                            id="lastName"
                            placeholder="Your last name"
                        />
                    </div>
                    <div className="mb-1 d-flex align-items-center">
                        <label htmlFor="email" className="form-label col-3 m-1">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control m-1"
                            id="email"
                            aria-describedby="emailHelp"
                            placeholder="yourname@email.com"
                        />
                    </div>
                    <div className="mb-1 d-flex align-items-center">
                        <label htmlFor="password" className="form-label col-3 m-1">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control m-1"
                            id="password"
                            placeholder="**********"
                        />
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                        <label htmlFor="confirmPassword" className="form-label col-3 m-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            className="form-control m-1"
                            id="confirmPassword"
                            placeholder="**********"
                        />
                    </div>
                    <div className="d-flex justify-content-end">
                        <SolemateButton 
                            buttonText="Register" 
                            onClick={makeRegister} 
                            variant='purple'
                        />
                    </div>
                    <div className="text-center mt-3">
                        <span className="mx-1">Already have an account?</span>
                        <Link href="/cliente/login" className="mx-1">
                            Log in.
                        </Link>
                    </div>
                    <div className='m-3 mt-5'>
                        {message.message && <MessageReturn text={message.message.text} variant={message.message.variant} />}
                    </div>
                </form>
            </div>
        </div>
    );
};
    
export default RegisterForm;