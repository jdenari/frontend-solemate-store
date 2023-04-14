import React from 'react'
import Header from '@/components/Header'
import RegisterForm from '@/components/login/RegisterForm'
import Footer from '@/components/Footer'
import { Provider } from 'react-redux'
import store from '../../store/store'

const login: React.FC = () => {
  
    return (
        <Provider store={store}>
            <div>
                <Header />
                    <div className='container'>
                    <RegisterForm />
                    </div>
                <Footer />
            </div>
        </Provider>
    );
};

export default login;