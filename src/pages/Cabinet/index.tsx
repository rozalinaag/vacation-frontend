import React from 'react';
import styles from './styles.module.scss'
import picture from '../Home/img/myphoto.jpg'
import {PlusOutlined} from "@ant-design/icons";
import {Button, Form, Input, Upload} from "antd";

const {TextArea} = Input;

function Cabinet() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        Личный кабинет
      </div>
      <div className={styles.aboutMe}>
        <div className={styles.myPicture}>
          <img className={styles.picture} src={picture} alt={''}/>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined/>
              <div style={{marginTop: 8}}>Выберите файл</div>
            </div>
          </Upload>
        </div>
        <div className={styles.name}>
          <div className={styles.myName}>
            Агишева Розалина, разработчик
          </div>
          <div>
            Команда развития Магнит
          </div>
        </div>
        <Form.Item label="О себе">
          <TextArea rows={2}/>
        </Form.Item>
      </div>
      <Button>Сохранить</Button>
    </div>
  );
}

export default Cabinet;