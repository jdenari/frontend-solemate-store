import React from 'react'
import Header from '@/components/Header'
import InventoryDatabase from '@/components/administration/inventory/InventoryDatabase'
import Footer from '@/components/Footer'
import { Provider } from 'react-redux'
import store from '../../store/store'
import withAuth from '@/components/middleware/withAuth'

const controledeestoque: React.FC = () => {
  
    return (
        <Provider store={store}>
            <div>
                <Header />
                    <div className='m-auto containerInventory'>
                        <InventoryDatabase />
                    </div>
                <Footer />
            </div>
        </Provider>
    );
};

export default withAuth(controledeestoque, { accessLevel: 'any' });