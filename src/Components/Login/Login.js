import React from 'react';
import s from './Login.module.css';

const Login = () => {

    return (
        <div className={s.loginPanel}>
            <div className={s.loginRegistration}>
                <button>Login</button>
                <button>Registration</button>
            </div>
            <div className={s.loginInputs}>
                Email
                <input type="email" placeholder="Email@"/>
                Passward
                <input type="password" placeholder="Password"/>
            </div>
            <div className={s.loginRegistration}>
                <input type="checkbox"/>
                <h5>Remember me</h5>
                <input type="button" value="Login"/>
            </div>
        </div>
    );
}


export default Login