import React from 'react';
import { Layout, Row, Col, Icon, } from 'antd';

// Components
import BottomMenu from './BottomMenu';

const { Footer } = Layout;

const MainFooter = () => (
    <Footer>
        <Row gutter={24} type="flex" justify="space-around">
            <Col span={6}><BottomMenu /></Col>
            <Col span={6}><BottomMenu /></Col>
            <Col span={6}><BottomMenu /></Col>
            <Col span={6}>
                <a href="#github" title="github">
                    <Icon type="github" />
                </a>
                <a href="#instagram" title="instagram">
                    <Icon type="instagram" />
                </a>
                <a href="#facebook" title="facebook">
                    <Icon type="facebook" />
                </a>
                <a href="#twitter" title="twitter">
                    <Icon type="twitter" />
                </a>
            </Col>
        </Row>
    </Footer>
);

export default MainFooter;
