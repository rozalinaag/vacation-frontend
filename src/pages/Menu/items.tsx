import {MenuProps} from "antd";
import {AppstoreOutlined, MailOutlined, SettingOutlined, UserOutlined} from "@ant-design/icons";
import React from "react";

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

export const items: MenuProps['items'] = [
    getItem('Заявление на отпуск', 'sub1', <MailOutlined/>, [
        getItem('Неоплачиваемый отпуск', 'ggf54', null),
        getItem('Больничный', 'ggf1', null),
        getItem('Отзыв из отпуска', 'kfff1', null),
        getItem('Отпуск за свой счет', 'msdd1', null),
        getItem('О продлении отпуска', 'nsd1', null),
        getItem('Дни донора', 'dfjs1', null),
        getItem('Учебный отпуск', 'rgh1', null),
        getItem('Ненормированный рабочий день', 'shy1', null),
        getItem('Отпуск по выполнению государственных обязанностей', 'm1', null),
        getItem('Участникам ЧАЭС', 'kw1', null),
    ]),
    getItem('Декретный отпуск', 'sub2', <AppstoreOutlined/>, [
        getItem('Уйти в декретный отпуск', '5'),
        getItem('Уход за детьми', 'ps1', null),
        getItem('Дни для диспансеризации', 'n1', null),
        getItem('Отпуск в период беременности', 'o1', null),
        getItem('Уход за детьми', 'pre1', null),
        getItem('Рождением ребенка', 'ryt1', null),
        getItem('Досрочный выход из отпуска', 'vn1', null),
        getItem('Заявление о выходе на работу', 'sl1', null),
    ]),
    {type: 'divider'},
    getItem('Настройки', 'sub4', <SettingOutlined/>),
    getItem('Личный кабинет', 'sub65', <UserOutlined />),
];

export const itemsWithLabels= [
    { key: "ggf54", label: "Неоплачиваемый отпуск" },
    { key: "ggf1", label: "Больничный" },
    { key: "kfff1", label: "Отзыв из отпуска" },
    { key: "msdd1", label: "Отпуск за свой счет" },
    { key: "nsd1", label: "О продлении отпуска" },
    { key: "dfjs1", label: "Дни донора" },
    { key: "rgh1", label: "Учебный отпуск" },
    { key: "shy1", label: "Ненормированный рабочий день" },
    { key: "m1", label: "Отпуск по выполнению государственных обязанностей" },
    { key: "kw1", label: "Участникам ЧАЭС" },
    { key: "5", label: "Уйти в декретный отпуск" },
    { key: "ps1", label: "Уход за детьми" },
    { key: "n1", label: "Дни для диспансеризации" },
    { key: "o1", label: "Отпуск в период беременности" },
    { key: "pre1", label: "Уход за детьми" },
    { key: "ryt1", label: "Рождением ребенка" },
    { key: "vn1", label: "Досрочный выход из отпуска" },
    { key: "sl1", label: "Заявление о выходе на работу" },
];