import { Provider } from 'react-redux';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProduct } from '../store/actions';
import Head from 'next/head';
import Header from '../components/Header';
import MainSection from '../components/landingpage/MainSection';
import SecondarySection from '../components/landingpage/SecondarySection';
import Footer from '@/components/Footer';
import store  from '../store/store';

const Home: React.FC = () => {
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(getProduct());
    }, []);

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Provider store={store}>
                <Header />
                <div className="bg-light-white">
                    <div className="container d-flex">
                        <div className="row">
                            <div className="col-8">
                                <MainSection />
                            </div>
                            <div className="col-4 bg-medium-gray px-0">
                                <SecondarySection />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Provider>
        </>
    );
};

export default Home;

