import { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { Card, Textbox } from '../../components';

export const Register: React.FC = () => {
    const history = useHistory();
    const [field, setField] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleSubmit = (event: any) => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/register', {
            firstName: field.firstName,
            lastName: field.lastName,
            email: field.email,
            password: field.password
        })
        .then(() => {
            history.push("/login")
        });
    }

    return(
        <div className="container mx-auto h-screen">
            <div className="flex justify-center justify-items-center items-center h-full">
                <div className="w-80">
                  <Card title="Registration">
                      <form onSubmit={handleSubmit}>
                        <Textbox placeholder="First Name" onChange={e => setField({...field, firstName: e.target.value})}/>
                        <Textbox placeholder="Last Name" onChange={e => setField({...field, lastName: e.target.value})}/>
                        <Textbox placeholder="Email" onChange={e => setField({...field, email: e.target.value})}/>
                        <Textbox placeholder="Password" type="password" onChange={e => setField({...field, password: e.target.value})}/>
                        <button type="submit" className="rounded-md shadow-md bg-blue-400 text-white my-2 py-2 px-5">Sign up</button>
                      </form>
                  </Card>
                </div>
            </div>
        </div>
    );
}