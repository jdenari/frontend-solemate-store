import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '../store/store';
import { CLEAR_MESSAGE } from '../store/actions';

function MyApp({ Component, pageProps }: AppProps) {
    store.dispatch(CLEAR_MESSAGE());

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Component {...pageProps} />
            </PersistGate>
        </Provider>
    );
}

export default MyApp;

