import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

export const Landing: React.FC = () => {
    const history = useHistory();
    const [name, setName] = useState('');

    const handleAuth = () => {
        axios.get(`http://localhost:5000/api/posts`, {headers: {
            'auth-token': localStorage.getItem('auth-token')
        }})
        .then(e => setName(`${e.data.firstName} ${e.data.lastName}`));
    }

    const handleLogout = () => {
        localStorage.removeItem('auth-token');
        history.push("/login")
    }

    useEffect(() => {
        handleAuth();
    }, []);

    return(
        <div className="container mx-auto h-screen">
            <h1>Dashboard</h1>
            <h2>Welcome {name }</h2>
            <button onClick={handleLogout} className="rounded-md shadow-md bg-blue-400 text-white my-2 py-2 px-5">Logout</button>
        </div>
    );
}