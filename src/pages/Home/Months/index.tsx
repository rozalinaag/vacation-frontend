import React from 'react';
import styles from './styles.module.scss'


function Months() {
    const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
    return (
        <div className={styles.months}>
            {months.map((item: string) =>
                    <div key={item} className={styles.month}>
                        <div>
                            {item}
                        </div>
                    </div>
            )}
        </div>
    );
}

export default Months;