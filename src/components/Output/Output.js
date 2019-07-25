import React, { Component } from 'react';
import { Layout } from 'antd';

// Components
import MainHeader from '../MainHeader';
import MainSlider from '../MainSlider';
import Interactive from '../Interactive';
import MainFooter from '../MainFooter';

const { Header, Footer, Content } = Layout;

class Output extends Component {
    render() {
        return (
            <Layout>
                <Header>
                    <MainHeader />
                </Header>
                <Content>
                    <MainSlider />
                    <Interactive />
                </Content>
                <Footer>
                    <MainFooter />
                </Footer>
            </Layout>
        )
    }
};

export default Output;
