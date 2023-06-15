import React, {useState} from 'react';
import Button from "@mui/material/Button";
import {logout} from "../../../redux/slices/auth";
import {useDispatch, useSelector} from "react-redux";
import {Menu, Modal} from 'antd';
import {Link} from "react-router-dom";
import type {MenuProps} from 'antd';
// @ts-ignore
import styles from './styles.module.scss'
import {UserOutlined} from "@ant-design/icons";
import Notification from "../Notification";
import {setSelectedStatement} from "../../../redux/slices/vacation";

function UserHeader() {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
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

    const handleOk = () => {
        setIsModalOpen(false);
        dispatch(logout())
        window.localStorage.removeItem('token')
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const items: MenuProps['items'] = [
        getItem(userData.fullName, 'sub1', <UserOutlined/>, [
            getItem(<Link to='/cabinet'>Личный кабинет</Link>, '1'),
            getItem(<Link to='/'>На главную</Link>, '2'),
            getItem(<div onClick={showModal}>Выйти</div>, '3'),
        ]),
    ];

    const handlerClick = () => {
        dispatch(setSelectedStatement(''))
    }

    return (
        <div className={styles.UserField}>
            <Notification/>
              <Link to="/posts/create">
                <Button onClick={handlerClick}  className={styles.create} style={{background: '#5666bd', boxShadow: 'none'}}
                variant="contained" >Создать заявление</Button>
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
            <Modal title="Выйти из приложения?" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            </Modal>
        </div>
    );
}

export default UserHeader;