import React, {useState} from 'react';
import {BellOutlined} from "@ant-design/icons";
// @ts-ignore
import styles from "./styles.module.scss";
import {Dropdown, Modal} from "antd";
import type {MenuProps} from 'antd';

function Notification() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [bell, setBell] = useState(true);

    const items: any = [
        {
            label: 'Заявление №421 согласовано',
            key: '1',
        },
        {
            label: 'Заявление отправлено на согласование',
            key: '2',
        },
        {
            label: 'Заявление создано',
            key: '3',
        },
    ];

    const onClick: MenuProps['onClick'] = ({key}: { key: string }): void => {
        setIsModalOpen(true);
        setBell(false);
        for (let i = 0; i < items.length; i++) {
            if (items[i].key === key) {
                setMessage(items[i].label)
            }
        }
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles.wrapper}>
            <Dropdown menu={{items, onClick}} placement="bottom" arrow>
                <div onClick={(e) => e.preventDefault()} className={styles.bellWrapper}>
                    <BellOutlined className={styles.bell}/>
                    {bell && <div className={styles.point}></div>}
                </div>
            </Dropdown>
            <Modal title="Уведомление:" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                {message}
            </Modal>
        </div>
    );
}

export default Notification;