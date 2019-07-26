import React from 'react';
import { Menu } from 'antd';

const MainMenu = () => (
    <Menu
        theme="dark"
        mode="horizontal"

        style={{ lineHeight: '64px' }}
    >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
        <Menu.Item key="4">nav 4</Menu.Item>
    </Menu>
);

export default MainMenu;