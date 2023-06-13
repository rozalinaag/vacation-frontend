import React from 'react';
import type {MenuProps} from 'antd';
import {Menu} from 'antd';
import {items} from './items'
import {itemsWithLabels} from "./items";
import {setSelectedStatement} from "../../redux/slices/vacation";
import {useAppDispatch} from "../../redux/store";

function MenuItems() {
  const dispatch = useAppDispatch();

  const onClick: MenuProps['onClick'] = (e, text) => {
    for (let i=0; i<itemsWithLabels.length; i++){
      if (e.key === itemsWithLabels[i].key){
        dispatch(setSelectedStatement(itemsWithLabels[i].label))
      }
    }
  };

  return (
    <Menu
      onClick={onClick}
      style={{width: 237, background: 'transparent', border: 'none'}}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
}

export default MenuItems;