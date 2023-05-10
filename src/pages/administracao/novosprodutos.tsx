import React from 'react'
import Header from '@/components/Header'
import FormNewProduct from '@/components/administration/addproduct/FormNewProduct'
import Footer from '@/components/Footer'
import { Provider } from 'react-redux'
import store from '../../store/store'
import withAuth from '@/components/middleware/withAuth'

const novosprodutos: React.FC = () => {
  
    return (
        <Provider store={store}>
            <div>
                <Header />
                    <div className='container'>
                        <FormNewProduct />
                    </div>
                <Footer />
            </div>
        </Provider>
    );
};

export default withAuth(novosprodutos, { accessLevel: 'any' });