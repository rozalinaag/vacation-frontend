import React from 'react';
import Button from "@mui/material/Button";
import {logout} from "../../../redux/slices/auth";
import {useDispatch, useSelector} from "react-redux";
import {Menu, Dropdown} from 'antd';
import {Link} from "react-router-dom";
import type {MenuProps} from 'antd';
// @ts-ignore
import styles from './styles.module.scss'
import {UserOutlined, BellOutlined} from "@ant-design/icons";
import Notification from "../Notification";

function UserHeader() {
    const dispatch = useDispatch();
    const userData = useSelector((state: any) => state.auth.data)

    type MenuItem = Required<MenuProps>['items'][number];

    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
        type?: 'group',
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
            type,
        } as MenuItem;
    }

    const onClickLogout = () => {
        if (window.confirm('Выйти из приложения?')) {
            dispatch(logout())
            //добавить модалку позже
            window.localStorage.removeItem('token')
        }
    };

    const items: MenuProps['items'] = [
        getItem(userData.fullName, 'sub1',  <UserOutlined />, [
            getItem(<Link to = '/cabinet'>Личный кабинет</Link>, '1'),
            getItem(<Link to = '/'>На главную</Link>, '2'),
            getItem(<div onClick={onClickLogout}>Выйти</div>, '3'),
        ]),
    ];

    return (
        <div className={styles.UserField}>
            <Notification/>
            <Link to="/posts/create">
                <Button className={styles.create} style={{background: '#5666bd', boxShadow: 'none'}} variant="contained">Создать заявление</Button>
            </Link>
            <div className={styles.UserFieldHeader}>
                <Menu
                    className={styles.menu}
                    style={{width: '220px', border: 'none', borderRadius: '5px', color: 'black'}}
                    mode="inline"
                    items={items}
                    triggerSubMenuAction={"click"}
                />
            </div>
        </div>
    );
}

export default UserHeader;