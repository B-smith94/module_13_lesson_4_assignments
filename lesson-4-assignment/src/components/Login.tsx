import React, { useState } from 'react';
import axios from 'axios';
import useSessionStorageManager from './SessionStorageManager';
import { useNavigate } from 'react-router-dom';
// Task 4
const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { storeToken } = useSessionStorageManager();
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://fakestoreapi.com/auth/login', {
                username,
                password
            });
            
            const jwToken = response.data.token;
            storeToken(jwToken);
            navigate('/protected-page')
        
        } catch (error) {
            console.error('Login failed:', error);
            return <p>Login failed...</p>
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login;