import React from 'react';
import type {MenuProps} from 'antd';
import {Menu} from 'antd';
import {items} from './items'
import {itemsWithLabels} from "./items";
import {setSelectedStatement} from "../../redux/slices/vacation";
import {useAppDispatch} from "../../redux/store";
import {Link} from "react-router-dom"
// @ts-ignore
import styles from './index.module.scss';

function MenuItems() {
  const dispatch = useAppDispatch();

  // @ts-ignore
  const onClick: MenuProps['onClick'] = (e: any, text: string) => {
    for (let i=0; i<itemsWithLabels.length; i++){
      if (e.key === itemsWithLabels[i].key){
        dispatch(setSelectedStatement(itemsWithLabels[i].label))
      }
    }
  };

  return (
    <div className={styles.links}>
      <Link to={"/posts/create"}>
        <Menu
          onClick={onClick}
          style={{width: 237, background: 'transparent', border: 'none'}}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          items={items}
        />
      </Link>
    </div>
  );
}

export default MenuItems;