import React from 'react';
import { useDispatch } from 'react-redux';
import { authenticated } from '../../store/actions';
import MainButton from '../MainButton';
import styles from './LoginForm.module.css';

const LoginForm = () => {
    const dispatch = useDispatch();

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
        dispatch(authenticated());
        } else {console.error(response.statusText);}
    };

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
                        <a href="#" className="mx-1">
                            Preencha o formulário.
                        </a>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;



