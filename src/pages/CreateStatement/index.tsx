import {AppstoreOutlined, PlusOutlined} from '@ant-design/icons';
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Select,
  Upload,
} from 'antd';
import React from 'react';
// @ts-ignore
import styles from './index.module.scss'
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {itemsWithLabels} from "../Menu/items";
import {setSelectedNewDate} from "../../redux/slices/vacation";

const {RangePicker} = DatePicker;
const {TextArea} = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export const CreateStatement = () => {
  const dispatch = useAppDispatch();
  const statement: string = useAppSelector(state => state.vacation.selectedStatement)

  const handlerSubmit =() => {
    console.log(statement)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <div className={styles.title}>Создание заявления</div>
        <Form
          labelCol={{span: 8}}
          wrapperCol={{span: 9}}
          layout="horizontal"
          style={{width: 800}}
        >
          <Form.Item label="Заявление">
            {statement ? <div className={styles.statement}>{statement}</div> :
              <Select defaultValue={{statement}}>
                {itemsWithLabels.map((item) =>
                  <Select.Option value={item.key}>{item.label}</Select.Option>
                )}
              </Select>}

          </Form.Item>
          <Form.Item label="Выберите даты">
            <RangePicker format={"DD MMMM YYYY"}/>
          </Form.Item>
          <Form.Item label="Комментарий">
            <TextArea rows={4}/>
          </Form.Item>
          <Form.Item label="Загрузка файлов" valuePropName="fileList" getValueFromEvent={normFile}>
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined/>
                <div style={{marginTop: 8}}>Выберите файл</div>
              </div>
            </Upload>
          </Form.Item>
          <div className={styles.bottom}>
            <Form.Item name="disabled" valuePropName="checked">
              <Checkbox>Я согласен на обработку данных</Checkbox>
            </Form.Item>
            <Form.Item>
              <Button onSubmit={handlerSubmit}>Отправить на согласование</Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateStatement;