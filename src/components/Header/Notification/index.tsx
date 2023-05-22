import React from 'react';
import {BellOutlined} from "@ant-design/icons";
// @ts-ignore
import styles from "./styles.module.scss";
import {Dropdown} from "antd";
import type {MenuProps} from 'antd';
import {Link} from 'react-router-dom'

function Notification() {

    // @ts-ignore
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <Link to={'/'}>
                    Заявление №421 согласовано
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link to={'/'}>
                    Заявление №421 отправлено на согласование
                </Link>
            ),
        },
        {
            key: '3',
            label: (
                <Link to={'/'}>
                    Заявление №421 создано
                </Link>
            ),
        },
    ];

    return (
        <div className={styles.wrapper}>
            <Dropdown menu={{items}} placement="bottom" arrow>
                <BellOutlined className={styles.bell}/>
            </Dropdown>
        </div>
    );
}

export default Notification;