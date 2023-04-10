import React from 'react'
import Header from '@/components/Header'
import FormNewProduct from '@/components/administration/FormNewProduct'
import Footer from '@/components/Footer'
import { Provider } from 'react-redux'
import store from '../../store/store'

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

export default novosprodutos;