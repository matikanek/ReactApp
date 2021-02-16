import React, { useState } from "react";
import Container from '@material-ui/core/Container';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import "./Login.scss";
import { setToken } from "../../../auth/AuthService";
import { useHistory } from "react-router-dom";

const onLogin = (username, password, history) => {
    fetch(
        'http://localhost:5000/auth/login',
        { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({username, password}) 
        }
    )
    .then(res => res.json())
    .then(
        res => {
            setToken(res.access_token);
            history.push('/app/tasks');
        },
        (error) => {
            console.log(error);
        }
    );
};

export const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    return (
        <Container maxWidth="sm">
            <div class="login__wrapper">
                <form class="login__form" noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Login" onChange={(event) => setLogin(event.target.value)}/>
                    <TextField id="standard-password-input" type="password" label="Password" onChange={(event) => setPassword(event.target.value)}/>
                    <div class="login__button">
                        <Button fullWidth="true" variant="contained" color="primary" onClick={() => onLogin(login, password, history)}>
                            Zaluguj
                        </Button>
                    </div>
                </form>
            </div>
        </Container>
    );
}
