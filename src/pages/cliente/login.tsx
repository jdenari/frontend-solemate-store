import React from 'react'
import Header from '@/components/Header'
import LoginForm from '@/components/login/LoginForm'
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
                    <LoginForm />
                    </div>
                <Footer />
            </div>
        </Provider>
    );
};

export default withAuth(login, { accessLevel: 'any' });