import React from 'react';
import { Navigate } from 'react-router-dom';
import useSessionStorageManager from './SessionStorageManager';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { retrieveToken } = useSessionStorageManager();
    const token = retrieveToken();;

    if(!token) {
        return <Navigate to='/' replace />
    }

    return <>{children}</>
}

export default ProtectedRoute