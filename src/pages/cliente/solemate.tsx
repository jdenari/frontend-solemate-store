import React from 'react'
import Header from '@/components/Header'
import SectionAbout from '@/components/about/SectionAbout'
import Footer from '@/components/Footer'
import { Provider } from 'react-redux'
import store from '../../store/store'

const solemate = () => {
  return (
    <Provider store={store}>
        <div>
            <Header />
              <SectionAbout />
            <Footer />
        </div>
    </Provider>
);
}

export default solemate