import React, {ReactElement, ReactFragment, useEffect, useState} from 'react';
import styles from './styles.module.scss'
import './styles.css'


type Props = {
    reserved?: number[]
    idPerson: string
}

function TimeLine({reserved, idPerson}: Props) {
    const [selectedTd, setSelectedId] = useState <HTMLElement>();

    const createWeeksLine = (): ReactFragment => {
        const weeks = [];
        for (let i = 0; i < 52; i++) {
            weeks.push(<div className={styles.week} id={i + idPerson} key={i}></div>)
        }
        return weeks.map((item: ReactElement) => item)
    }

    function highlight(elem: HTMLElement) {
        selectedTd.classList.remove('selected');
        setSelectedId(elem);
        elem.classList.add('selected'); // подсветить новый td
    }

    function colorReservedItems(elem: HTMLElement) {
        elem.classList.remove('selected');
        setSelectedId(elem);
        elem.classList.add('reserved'); // подсветить новый td
    }

    useEffect(() => {
        if(!reserved) return;
        for (let i = 0; i< reserved.length; i++){
            let element = document.getElementById(reserved[i] + idPerson);
            if (element){
                colorReservedItems(element)
            }
        }
    }, [reserved, idPerson])

    const handleClick = (e: any) => {
        let target = e.target;
        // console.log(target.id)
        highlight(target);
    }

    return (
        <div className={styles.timeLine}>
            <div className={styles.weeks} onClick={handleClick}>
                {createWeeksLine()}
            </div>
        </div>
    );
}

export default TimeLine;