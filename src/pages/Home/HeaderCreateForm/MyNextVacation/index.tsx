import React from 'react';
// @ts-ignore
import styles from './styles.module.scss'
// @ts-ignore
import icon from '../img/vacationIcon.png';

function MyNextVacation() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        Ваш ближайший отпуск:
      </div>
      <div className={styles.body}>
        <img className={styles.icon} src={icon} alt={"vacation"}/>
        <div className={styles.days}>
          <div className={styles.dates}>
            <div className={styles.date}>18.10.23</div> - <div className={styles.date}>01.11.23</div>
          </div>
          <div className={styles.day}>14 дней</div>
        </div>
      </div>
    </div>
  );
}

export default MyNextVacation;