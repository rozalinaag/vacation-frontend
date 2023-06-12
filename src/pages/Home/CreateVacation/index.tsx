import React from 'react';
// @ts-ignore
import styles from './styles.module.scss'
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import locale from "antd/locale/ru_RU";
import {ConfigProvider, DatePicker} from "antd";
import {setSelectedDates} from "../../../redux/slices/vacation";
import dayjs from "dayjs";
import {UserInfo} from "../../../components";
// @ts-ignore
import exclamination from './img/exclamination.png'

function CreateVacation() {
  const dispatch = useAppDispatch();
  const dates = useAppSelector((state) => state.vacation.selectedDates);
  const {RangePicker} = DatePicker;

  const disabledDate = (current: any) => {
    return current && current < dayjs().endOf('day');
  };

  const handleDates = (date: any) => {
    dispatch(setSelectedDates(date))
  }

  return (
    <div>
      {dates && <div className={styles.date}>
       <div className={styles.title}>
        Ваш отпуск:
       </div>
       <div className={styles.days}>
         {dayjs(dates[0]).format("DD MMMM")}
        <div>-</div>
         {dayjs(dates[1]).format("DD MMMM YYYY")}
        <div>года</div>
       </div>
       <div>
        <div className={styles.wrapper}>
         <img className={styles.icon} src={exclamination} alt={"exl"}/>
         <div>
          <div className={styles.title}>Пересечения по отпуску:</div>
          <div className={styles.user}>
           <UserInfo avatarUrl={"https://img.freepik.com/free-photo/portrait-of-white-man-isolated_53876-40306.jpg?w=900&t=st=1685548525~exp=1685549125~hmac=ac13b9d4a61fc4ae30ceaeeca07810f52334b277e8f0a991a834fa6a777cbfca"} fullName={"Кирилл Игнатов"} position={`${dayjs(dates[0]).format("DD MMMM")} - ${dayjs(dates[1]).format("DD MMMM YYYY")}`}/>
          </div>
         </div>
        </div>
       </div>
      </div>}
      {!dates && <div>
       <div className={styles.title}>
        Выберите даты отпуска:
       </div>
       <ConfigProvider locale={locale}>
        <RangePicker format={"DD MMMM YYYY"} onChange={handleDates}  disabledDate={disabledDate}/>
       </ConfigProvider>
      </div>}
    </div>
  );
}

export default CreateVacation;