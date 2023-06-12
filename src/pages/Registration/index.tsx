import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import {Navigate} from "react-router-dom";
// @ts-ignore
import styles from './styles.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {fetchRegister, selectIsAuth} from "../../redux/slices/auth";
import {useForm} from "react-hook-form";

export const Registration = () => {
  const dispatch: any = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const {register, handleSubmit, formState: {errors, isValid}} =
    useForm({
      defaultValues: {
        fullName: 'Иван Иванов',
        email: 'ivan@magnit.com',
        password: '123'
      },
      mode: 'onChange'
    })

  const onSubmit = async (values: any) => {
    const data = await dispatch(fetchRegister(values));

    if (!data.payload) {
      return alert("Не удалась регистрация");
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
  }

  return (
    <Paper classes={{root: styles.root}}>
      {isAuth && (
        <Navigate to="/" replace={true}/>
      )}
      <Typography classes={{root: styles.title}} variant="h5">
        Создание аккаунта
      </Typography>
      <div className={styles.avatar}>
        <Avatar sx={{width: 100, height: 100}}/>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField error={Boolean(errors.fullName?.message)}
                   helperText={errors.fullName?.message}
                   {...register('fullName', {required: 'Укажите полное имя'})}
                   className={styles.field} label="Полное имя" fullWidth/>
        <TextField error={Boolean(errors.email?.message)}
                   helperText={errors.email?.message}
                   type={"email"}
                   {...register('email', {required: 'Укажите почту'})}
                   className={styles.field} label="E-Mail" fullWidth/>
        <TextField error={Boolean(errors.password?.message)}
                   helperText={errors.password?.message}
                   type={"password"}
                   {...register('password', {required: 'Укажите пароль'})}
                   className={styles.field} label="Пароль" fullWidth/>
        <Button disabled={!isValid} type={"submit"} size="large" variant="contained" fullWidth>
          Зарегистрироваться
        </Button>
      </form>
    </Paper>
  );
};
