import React from 'react'
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';

const LayoutExample = () => {
    return (
      <div>
         <Layout>
             <Header></Header>
             <Content></Content>
             <Footer></Footer>
         </Layout>
      </div>
    )
}

export default LayoutExample;