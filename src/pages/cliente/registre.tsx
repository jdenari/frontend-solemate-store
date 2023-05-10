import React from 'react'
import Header from '@/components/Header'
import RegisterForm from '@/components/login/RegisterForm'
import Footer from '@/components/Footer'
import { Provider } from 'react-redux'
import store from '../../store/store'
import withAuth from '@/components/middleware/withAuth'

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

export default withAuth(login, { accessLevel: 'any' });