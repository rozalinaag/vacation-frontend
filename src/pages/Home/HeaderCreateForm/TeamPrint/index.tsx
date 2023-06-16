import React from 'react';
// @ts-ignore
import styles from "./styles.module.scss";
// @ts-ignore
import group from "../img/group.svg";
import {PrinterOutlined} from "@ant-design/icons";

function TeamPrint() {
  return (
    <div className={styles.upLine}>
      <div className={styles.title}>
        <img src={group} alt={'group'} className={styles.titleIcon}/>Команда развития Sharepoint</div>
      <div><PrinterOutlined className={styles.print}/></div>
    </div>
  );
}

export default TeamPrint;