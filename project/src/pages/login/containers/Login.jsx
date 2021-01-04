import React from "react";
import Container from '@material-ui/core/Container';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import "./Login.scss";

export const Login = () => {
    return (
        <Container maxWidth="sm">
            <div class="login__wrapper">
                <form class="login__form" noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Login" />
                    <TextField id="standard-password-input" type="password" label="Hasło" />
                    <div class="login__button">
                        <Button fullWidth="true" variant="contained" color="primary">
                            Zaluguj
                        </Button>
                    </div>
                </form>
                
                
            </div>
        </Container>
    );
}
