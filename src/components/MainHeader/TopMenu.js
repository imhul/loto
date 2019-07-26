import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UI_ACTIONS from '../../redux/ui_actions';
import { Menu, Icon, Popconfirm } from 'antd';

const { SubMenu } = Menu;


class TopMenu extends Component {

    onClickMenu = e => {
        const key = e.key.slice(0, 4);
        if (key === "city") {
            this.props.uiActions.clickMenu(e.item.props.children)
        }
    };

    signin(e) {
        console.warn("signin: ", e.target);
    }

    signup(e) {
        console.warn("signup: ", e.target);
    }

    render() {
        const { city } = this.props.ui;
        return (
            <Menu mode="horizontal" onClick={this.onClickMenu}>
                <SubMenu key="1" title={
                    <span className="submenu-title-wrapper">
                        <Icon type="environment" />
                        {city}
                    </span>
                }>

                    <Menu.Item key="city:1">Город #1</Menu.Item>
                    <Menu.Item key="city:2">Город #2</Menu.Item>
                    <Menu.Item key="city:3">Город #3</Menu.Item>

                </SubMenu>

                <Menu.Item key="2">
                    <Popconfirm
                        title="Вход на сайт"
                        onConfirm={this.signin}
                        onCancel={this.signup}
                        okText="Вход"
                        cancelText="Регистрация"
                        icon={<Icon type="user" />}
                    >
                        <a href="#login" title="Вход">Вход</a>
                    </Popconfirm>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="shopping-cart" style={{fontSize: 20, verticalAlign: "-0.3em"}} />
                </Menu.Item>
            </Menu>
        )
    }

};

function mapDispatchToProps(dispatch) {
    return {
        uiActions: bindActionCreators(UI_ACTIONS, dispatch),
    }
};

function mapStateToProps(state) {
    return {
        ui: state.ui,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopMenu);