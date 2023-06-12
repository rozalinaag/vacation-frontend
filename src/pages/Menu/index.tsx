import React from 'react';
import type {MenuProps} from 'antd';
import {Menu} from 'antd';
import {items} from './items'


function MenuItems() {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
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