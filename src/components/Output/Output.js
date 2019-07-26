import React, { Component } from 'react';
import { Layout } from 'antd';

// Components
import MainHeader from '../MainHeader';
import MainSlider from '../MainSlider';
import Interactive from '../Interactive';
import MainFooter from '../MainFooter';

const { Content } = Layout;

class Output extends Component {
    render() {
        return (
            <Layout>
                <MainHeader />
                <Content>
                    <MainSlider />
                    <Interactive />
                </Content>
                <MainFooter />
            </Layout>
        )
    }
};

export default Output;
