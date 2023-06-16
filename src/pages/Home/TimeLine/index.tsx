import React, {ReactElement, ReactFragment, useEffect, useState} from 'react';
// @ts-ignore
import styles from './styles.module.scss'
import './styles.css'
import {ConfigProvider, DatePicker, Modal} from 'antd'
import locale from "antd/locale/ru_RU";
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import dayjs from "dayjs";
import {setSelectedDates, setSelectedNewDate} from "../../../redux/slices/vacation";
import weekOfYear from 'dayjs/plugin/weekOfYear';

type Props = {
  reserved?: {weekNumber: number, vacationDays: number}[]
  idPerson: string,
  selectedNewDates?: any
}

function TimeLine({reserved, idPerson, selectedNewDates}: Props) {
  const dispatch = useAppDispatch();
  dayjs.extend(weekOfYear)
  const [openModal, setOpenModal] = useState(false);
  const [selectedTd, setSelectedId] = useState<HTMLElement>();
  const {RangePicker} = DatePicker;
  const [countDays, setCountDays] = useState(0);
  const [newDates, setNewDates] = useState<any>();
  const weeks = 50;

  const disabledDate = (current: any) => {
    return current && current < dayjs().endOf('day');
  };

  const handleDates = (date: any) => {
    setCountDays(date[1].diff(date[0], 'day'))
    setNewDates(date)
    dispatch(setSelectedDates(date))
  }

  const createWeeksLine = (): ReactFragment => {
    const weeks = [];
    for (let i = 0; i < 52; i++) {
      weeks.push(<div className={styles.week} id={i + idPerson} key={i}></div>)
    }
    return weeks.map((item: ReactElement) => item)
  }

  function colorReservedItems(elem: HTMLElement) {
    elem.classList.remove('new');
    elem.classList.add('reserved'); // подсветить новый td
  }


  useEffect(() => {
    for (let i = 1; i< weeks; i++){
      let element = document.getElementById(i + idPerson);
      if (element) {
        element.classList.remove( 'reserved', 'new');
        element.textContent = '';
      }
    }
    for (let i = 0; i < reserved.length; i++) {
      let element = document.getElementById(reserved[i].weekNumber + idPerson);
      if (element) {
        colorReservedItems(element)
        element.textContent = reserved[i].vacationDays + '';
      }
    }
    colorNewDates(selectedNewDates)
  }, [reserved, idPerson, selectedTd, selectedNewDates])

  const handleClick = (e: any) => {
    let target = e.target;
    setSelectedId(target.id);
    setOpenModal(true)
  }

  function colorNewDates (newDates: any){
    if (newDates){
      let firstWeek = dayjs(newDates[0]).week()
      let lastWeek = dayjs(newDates[1]).week()
      let itemWeek = firstWeek;

      let firstDay = dayjs(newDates[0]).day();
      let lastDay = dayjs(newDates[1]).day()
      console.log(firstDay)
      console.log(lastDay)

      while(itemWeek<=lastWeek){
        let element = document.getElementById(itemWeek + idPerson);
        if (element) {
          element.classList.remove('reserved');
          element.classList.add('new');
          if (itemWeek === firstWeek) {
            element.textContent = (7 - firstDay) + '';
          }
          else if (itemWeek === lastWeek){
            element.textContent = (7 - lastDay) + '';
          }
          else{
            element.textContent = 7 + '';
          }
        }
        itemWeek++;
      }
    }
  }

  const handleOk = () => {
    setOpenModal(false);
    dispatch(setSelectedNewDate(newDates))
  };

  const handleCancel = () => {
    setOpenModal(false);
  };

  return (
    <div className={styles.timeLine}>
      <div className={styles.weeks} onClick={handleClick}>
        {createWeeksLine()}
      </div>
      <Modal title="Создать отпуск" open={openModal} onOk={handleOk} onCancel={handleCancel} okText={"Отправить на согласование"}>
        <div className={styles.createVacation}>
          <div className={styles.title}>
            Выберите даты отпуска:
          </div>
          <div className={styles.days}>
            <ConfigProvider locale={locale}>
              <RangePicker format={"DD MMMM YYYY"} onChange={handleDates}  disabledDate={disabledDate}/>
            </ConfigProvider>
            <div>
              Выбрано <span className={styles.count}>{countDays}</span> дней
            </div>
          </div>
          <div className={styles.check}>
            Проверьте даты перед отправкой на согласование руководителю!
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default TimeLine;