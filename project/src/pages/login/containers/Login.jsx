import React, { useState } from "react";
import Container from '@material-ui/core/Container';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import "./Login.scss";

const onLogin = (username, password) => {
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
        res => console.log(res),
        (error) => {
            console.log(error);
        }
    );
};

export const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    return (
        <Container maxWidth="sm">
            <div class="login__wrapper">
                <form class="login__form" noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Login" onChange={(event) => setLogin(event.target.value)}/>
                    <TextField id="standard-password-input" type="password" label="Password" onChange={(event) => setPassword(event.target.value)}/>
                    <div class="login__button">
                        <Button fullWidth="true" variant="contained" color="primary" onClick={() => onLogin(login, password)}>
                            Zaluguj
                        </Button>
                    </div>
                </form>
            </div>
        </Container>
    );
}
