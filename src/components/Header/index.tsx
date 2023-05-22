import React from 'react';
import Button from '@mui/material/Button';
// @ts-ignore
import styles from './Header.module.scss';
import {Link} from 'react-router-dom'
import Container from '@mui/material/Container';
import { useSelector} from "react-redux";
import { selectIsAuth} from "../../redux/slices/auth";
import UserHeader from "./UserHeader";

export const Header = () => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <div className={styles.root}>
      <Container maxWidth="xl">
        <div className={styles.inner}>
          <Link className={styles.logo} to="/">
            <div>Vacation schedule</div>
          </Link>
          <div className={styles.buttons}>
            {isAuth ? (
                <UserHeader/>
            ) : (
              <div>
                <Link to="/login">
                  <Button variant="outlined">Войти</Button>
                </Link>
                <Link to="/register">
                  <Button variant="contained">Создать аккаунт</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </Container >
    </div>
  );
};
