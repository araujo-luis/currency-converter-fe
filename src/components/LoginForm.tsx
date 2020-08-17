import React, { FC, FormEvent, ChangeEvent, useState } from "react";
import { login } from "../services/login";
import { Redirect } from "react-router-dom";
import Notification from './Notification';

const LoginForm: FC = () => {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [logged, setLogged] = useState(false);

    const onUserChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setUser(e.target.value);
    }
    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setPassword(e.target.value);
    }
    const onSubmit = async (data: FormEvent<HTMLFormElement>) => {
        data.preventDefault();
        try {
            const response = await login(user, password);

            if (!response) {
                setError(true);
            }
            else {
                setError(false);
                setLogged(true);
            }

        } catch (error) {

            console.log('login error', error)
        }
    }
    return (
        <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">

                <form className="login-form" onSubmit={onSubmit}>
                    <label htmlFor="">Username</label>
                    <input className="form-control" type="text" onChange={onUserChange} placeholder="user" />
                    <label htmlFor="">Password</label>
                    <input className="form-control" type="password" onChange={onPasswordChange} placeholder="password" />
                    <button className="btn btn-secondary btn-xl" id="sendMessageButton" type="submit">Login</button>
                </form>
                {error ? <Notification text="User/password incorrect. Try again" /> : null}
                {logged ? <Redirect to="/" /> : null}

            </div>
        </header>
    )
}

export default LoginForm;