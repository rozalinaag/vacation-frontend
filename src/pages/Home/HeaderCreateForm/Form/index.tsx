import React, {useState} from 'react';
// @ts-ignore
import styles from "./styles.module.scss";
import {ConfigProvider, DatePicker} from "antd";
import dayjs from "dayjs";
import locale from "antd/locale/ru_RU";
import Button from "@mui/material/Button";
import {useAppDispatch} from '../../../../redux/store';
import {setSelectedYear, setSelectedDates, setSelectedNewDate} from "../../../../redux/slices/vacation";
import {Modal} from "antd";
import CreateVacation from "../../CreateVacation";

function Form() {
  const [createVacationModal, setCreateVacationModal] = useState <boolean>(false);
  const [dates, setDates] = useState <any>();
  const {RangePicker} = DatePicker;


  const dispatch = useAppDispatch();

  const handleChangeYear = (date: any, dateString: string) => {
    dispatch(setSelectedYear(dateString))
  };

  const disabledDate = (current: any) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf('day');
  };

  const handleDates = (date: any) => {
    dispatch(setSelectedDates(date))
    setDates(date)
  }

  const handleClick = () => {
    setCreateVacationModal(true);
  };

  const handleOk = () => {
    //запрос на создание отпуска
    setCreateVacationModal(false);
    dispatch(setSelectedNewDate(dates))
  };

  const handleCancel = () => {
    setCreateVacationModal(false);
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerBlock}>
        <div>Выберите год</div>
        <DatePicker defaultValue={dayjs()} onChange={handleChangeYear} picker="year"/>
      </div>
      <div className={styles.headerBlock}>
        <div>Выберите даты отпуска</div>
        <ConfigProvider locale={locale}>
          <RangePicker format={"DD MMMM YYYY"} onChange={handleDates}  disabledDate={disabledDate}/>
        </ConfigProvider>
      </div>
      <Button onClick={handleClick} className={styles.create} style={{boxShadow: 'none', background: '#5666bd'}}
              variant="contained">Создать отпуск</Button>
      <Modal title="Проверьте даты отпуска"
             open={createVacationModal}
             onOk={handleOk}
             onCancel={handleCancel}
             okText={"Отправить на согласование"}
      >
        <CreateVacation/>
      </Modal>
    </div>
  );
}

export default Form;