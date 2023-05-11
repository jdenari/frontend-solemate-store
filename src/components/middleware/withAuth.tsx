import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CLEAR_MESSAGE } from '../../store/actions'; // ajuste o caminho para o arquivo de ação, se necessário
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';

interface Props {
  accessLevel: 'any' | 'not-logged-in' | 'client' | 'admin';
}

const withAuth = (WrappedComponent: NextPage, { accessLevel }: Props) => {
    const Wrapper: NextPage = (props) => {
        const router = useRouter();
        const dispatch = useDispatch();
        const authState = useSelector((state: RootState) => state.authenticated);

        useEffect(() => {
            if (accessLevel === 'not-logged-in' && authState.authenticated) {
                router.replace('/');
            } else if (
                accessLevel === 'client' &&
                (!authState.authenticated || authState.user?.access !== 'client')
            ) {
                router.replace('/cliente/login');
            } else if (
                accessLevel === 'admin' &&
                (!authState.authenticated || authState.user?.access !== 'admin')
            ) {
                router.replace('/cliente/login');
            }
        }, [authState, router, accessLevel]);

        return <WrappedComponent {...props} />;
    };

    

    Wrapper.getInitialProps = async (ctx: NextPageContext) => {
        if (WrappedComponent.getInitialProps) {
            return WrappedComponent.getInitialProps(ctx);
        }
        return {};
    };

    return Wrapper;
};

export default withAuth;

