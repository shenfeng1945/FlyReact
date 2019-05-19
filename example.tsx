import DialogExample from './lib/components/dialog/dialog.example'
import ButtonExample from './lib/components/button/button.example'
import FormExample from './lib/components/form/form.example';
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, NavLink } from 'react-router-dom'
import LayoutExample from './lib/components/layout/layout.example';
import { Layout, Header, Aside, Content, Footer } from './lib/components/layout/layout';
import './example.scss';
import IconDemo from './lib/components/icon/icon.demo';
import ScrollExample from "./lib/components/scroll/scroll.example";

const x = require('./logo.png');


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
                        <li>
                            <NavLink to="/form">Form</NavLink>
                        </li>
                        <li>
                            <NavLink to="/scroll">Scroll</NavLink>
                        </li>
                    </ul>
                </Aside>
                <Content className="site-content">
                    <Route path="/" exact render={() => <div>Hello FlyReact</div>}/>
                    <Route path="/icon" component={IconDemo}/>
                    <Route path="/button" component={ButtonExample}/>
                    <Route path="/dialog" component={DialogExample}/>
                    <Route path="/layout" component={LayoutExample}/>
                    <Route path="/form" component={FormExample}/>
                    <Route path="/scroll" component={ScrollExample}/>
                </Content>
            </Layout>
            <Footer className="site-footer">
                footer
            </Footer>
        </Layout>
    </Router>,
    document.querySelector('#root')
);