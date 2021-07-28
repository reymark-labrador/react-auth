import { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from "react-router-dom";
import { Card, Textbox } from '../../components';

export const Login: React.FC = () => {
    const history = useHistory();
    const [field, setField] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (event: any) => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/login', {
            email: field.email,
            password: field.password
        })
        .then(e => {
            localStorage.setItem('auth-token', e.data);
            history.push("")
        });
    }

    return(
        <div className="container mx-auto h-screen">
            <div className="flex justify-center justify-items-center items-center h-full">
                <div className="w-80">
                  <Card title="Sign in">
                      <form onSubmit={handleSubmit}>
                        <Textbox placeholder="Email" onChange={e => setField({...field, email: e.target.value})}/>
                        <Textbox placeholder="Password" type="password" onChange={e => setField({...field, password: e.target.value})}/>
                        <button type="submit" className="rounded-md shadow-md bg-blue-400 text-white my-2 py-2 px-5">Login</button>
                        <Link to="/register" className="text-xs mx-2">Sign up</Link>
                      </form>
                  </Card>
                </div>
            </div>
        </div>
    );
}