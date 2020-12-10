import React from "react";
import Container from '@material-ui/core/Container';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
}));

export const Login = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="sm">
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Login" variant="outlined" />
                <TextField id="standard-password-input" type="password" label="Hasło" variant="outlined" />
            </form>
            <Button variant="contained" color="primary">
                Zaluguj
            </Button>
        </Container>
    );
}
