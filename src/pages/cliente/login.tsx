import React from 'react'
import Header from '@/components/Header'
import LoginForm from '@/components/login/LoginForm'
import Footer from '@/components/Footer'
import { Provider } from 'react-redux'
import store from '../../store/store'

const login: React.FC = () => {
  
    return (
        <Provider store={store}>
            <div>
                <Header />
                    <div className='container'>
                    <LoginForm />
                    </div>
                <Footer />
            </div>
        </Provider>
    );
};

export default login;