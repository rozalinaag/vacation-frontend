import React, {useEffect} from "react";
import Typography from "@mui/material/Typography";
import {useDispatch, useSelector} from "react-redux";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import {useForm} from "react-hook-form";
import {Navigate} from "react-router-dom";
import styles from "./Login.module.scss";
import {fetchAuth} from "../../redux/slices/auth";
import {selectIsAuth} from "../../redux/slices/auth";

export const Login = () => {
    const dispatch: any = useDispatch();
    const isAuth = useSelector(selectIsAuth);

    const {register, handleSubmit, setError, formState: {errors, isValid}} =
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useForm({
        defaultValues: {
            email: 'agisheva@magnit.com',
            password: ''
        },
        mode: 'onChange'
    })

    const onSubmit = async (values: any) => {
        const data = await dispatch(fetchAuth(values));

        if (!data.payload){
            return alert("Не удалось авторизоваться");
        }

        if ('token' in data.payload){
            window.localStorage.setItem('token', data.payload.token);
        }
    }

    return (
        <Paper classes={{root: styles.root}}>
            {isAuth && (
                <Navigate to="/" replace={true} />
            )}
            <Typography classes={{root: styles.title}} variant="h5">
                Вход в аккаунт
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    className={styles.field}
                    label="E-Mail"
                    error = {Boolean(errors.email?.message)}
                    helperText={errors.email?.message}
                    type={"email"}
                    {...register('email', {required: 'Укажите почту'})}
                    fullWidth
                />
                <TextField className={styles.field} label="Пароль"
                           error = {Boolean(errors.password?.message)}
                           helperText={errors.password?.message}
                           fullWidth
                           {...register('password', {required: 'Укажите пароль'})}/>
                <Button type="submit" size="large" variant="contained" fullWidth>
                    Войти
                </Button>
            </form>
        </Paper>
    );
};
