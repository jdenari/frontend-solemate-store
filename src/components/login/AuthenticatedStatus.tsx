import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';

const AuthenticatedStatus = () => {
  const isAuthenticated = useSelector((state: RootState) => state.authenticated.authenticated);

    if (isAuthenticated) {
        return <p>Você está autenticado!</p>;
    } else {
        return <p>Você não está autenticado.</p>;
    }
};

export default AuthenticatedStatus;
