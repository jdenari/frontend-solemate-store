import React from 'react';
import { useDispatch } from 'react-redux';
import { authenticated } from '../../store/actions';
import MainButton from '../MainButton';
import styles from './RegisterForm.module.css';

const RegisterForm = () => {
    const dispatch = useDispatch();

    const makeRegister = async () => {
        const firstName = document.getElementById('firstName') as HTMLInputElement;
        const lastName = document.getElementById('lastName') as HTMLInputElement;
        const email = document.getElementById('email') as HTMLInputElement;
        const password = document.getElementById('password') as HTMLInputElement;
        const confirmPassword = document.getElementById('confirmPassword') as HTMLInputElement;

        if (password.value !== confirmPassword.value) {
            console.error('As senhas não correspondem');
            return;
        }

        const response = await fetch('http://localhost:5000/api/user/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstName: firstName.value, lastName: lastName.value, email: email.value, password: password.value }),
        });

        if (response.ok) {
            const data = await response.json();
            window.location.href = '/';
            dispatch(authenticated());
        } else {console.error(response.statusText);}
    };

    return (
        <div>
            <div className={`${styles.containerForm} m-auto my-5 w-50 border p-3`}>
                <h2 className="text-center mb-5">Criar conta</h2>
                <form className='text-end'>
                    <div className="mb-3 d-flex align-items-center">
                        <label htmlFor="firstName" className="form-label col-3 m-1">
                            Primeiro Nome
                        </label>
                        <input
                            type="text"
                            className="form-control m-1"
                            id="firstName"
                            placeholder="Seu primeiro nome"
                        />
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                        <label htmlFor="lastName" className="form-label col-3 m-1">
                            Último Nome
                        </label>
                        <input
                            type="text"
                            className="form-control m-1"
                            id="lastName"
                            placeholder="Seu último nome"
                        />
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                        <label htmlFor="email" className="form-label col-3 m-1">
                            E-mail
                        </label>
                        <input
                            type="email"
                            className="form-control m-1"
                            id="email"
                            aria-describedby="emailHelp"
                            placeholder="seunome@email.com"
                        />
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                        <label htmlFor="password" className="form-label col-3 m-1">
                            Senha
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
                            Confirmar senha
                        </label>
                        <input
                            type="password"
                            className="form-control m-1"
                            id="confirmPassword"
                            placeholder="**********"
                        />
                    </div>
                    <div className="d-md-flex justify-content-md-end">
                        <MainButton buttonText="Registrar" onClick={makeRegister} />
                    </div>
                    <div className="text-center mt-3">
                        <span className="mx-1">Já possui uma conta?</span>
                        <a href="/cliente/login" className="mx-1">
                            Faça login.
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};
    
export default RegisterForm;