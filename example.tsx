import DialogExample from './lib/components/dialog/dialog.example'
import ButtonExample from './lib/components/button/button.example'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, NavLink } from 'react-router-dom'
import LayoutExample from './lib/components/layout/layout.example';
import { Layout, Header, Aside, Content, Footer } from './lib/components/layout/layout';
import './example.scss';
import IconDemo from './lib/components/icon/icon.demo';
const x = require('./logo.png')


ReactDOM.render(
    <Router>
        <Layout className="page">
            <Header className="site-header">
               <div className="logo">
                 <img width="100" height="100" src={x} alt=""/>
                 <span>
                   FlyReact
                 </span>
               </div>
            </Header>
            <Layout>
                <Aside className="site-aside">
                    <h2>组件</h2>
                    <ul>
                        <li>
                            <NavLink to="/icon">Icon</NavLink>
                        </li>
                        <li>
                            <NavLink to="/button">Button</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dialog">Dialog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/layout">Layout</NavLink>
                        </li>
                    </ul>
                </Aside>
                <Content className="site-content">
                    <Route path="/" exact render={() => <div>Hello FlyReact</div>}></Route>
                    <Route path="/icon" component={IconDemo}></Route>
                    <Route path="/button" component={ButtonExample}></Route>
                    <Route path="/dialog" component={DialogExample}></Route>
                    <Route path="/layout" component={LayoutExample}></Route>
                </Content>
            </Layout>
            <Footer className="site-footer">
                footer
            </Footer>
        </Layout>
    </Router>,
    document.querySelector('#root')
)