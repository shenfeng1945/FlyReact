import React from 'react'
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Aside from "./aside";

const LayoutExample = () => {
    return (
        <div>
            <Layout style={{height: '500px'}} className={'hello'}>
                <Aside>aside</Aside>
                <Layout>
                    <Header>header</Header>
                    <Content>content</Content>
                    <Footer>footer</Footer>
                </Layout>
            </Layout>
        </div>
    )
};

export default LayoutExample;