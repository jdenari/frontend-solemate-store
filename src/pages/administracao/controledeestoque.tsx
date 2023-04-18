import React from 'react'
import Header from '@/components/Header'
import InventoryDatabase from '@/components/administration/inventory/InventoryDatabase'
import Footer from '@/components/Footer'
import { Provider } from 'react-redux'
import store from '../../store/store'

const novosprodutos: React.FC = () => {
  
    return (
        <Provider store={store}>
            <div>
                <Header />
                    <div className='m-auto container'>
                        <InventoryDatabase />
                    </div>
                <Footer />
            </div>
        </Provider>
    );
};

export default novosprodutos;