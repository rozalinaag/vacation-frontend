import React, {useState} from 'react';
import Divider from "@mui/material/Divider";
// @ts-ignore
import styles from "./styles.module.scss";
import {DatePicker} from "antd";
import dayjs from "dayjs";
import Button from "@mui/material/Button";

function HeaderCreateForm() {
    const { RangePicker } = DatePicker;
    const [year, setYear] = useState('2023');

    const handleChangeYear = (date: any, dateString: string) => {
        setYear(dateString);
    };

    const disabledDate = (current: any) => {
        // Can not select days before today and today
        return current && current < dayjs().endOf('day');
    };

    return (
        <div>
            <Divider className={styles.divider}>График отпусков {year}</Divider>
            <div className={styles.header}>
                <div className={styles.headerBlock}>
                    <div>Выберите год</div>
                    <DatePicker defaultValue={dayjs()} onChange={handleChangeYear} picker="year"/>
                </div>
                <div className={styles.headerBlock}>
                    <div>Выберите даты отпуска</div>
                    <RangePicker disabledDate={disabledDate}/>
                </div>
                <Button className={styles.create} style={{boxShadow: 'none', background: '#5666bd'}}
                        variant="contained">Создать отпуск</Button>
            </div>
            <Divider className={styles.divider2}></Divider>
        </div>
    );
}

export default HeaderCreateForm;