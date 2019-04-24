import IconExample from './lib/components/icon/icon.example'
import DialogExample from './lib/components/dialog/dialog.example'
import ButtonExample from './lib/components/button/button.example'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, NavLink } from 'react-router-dom'
import LayoutExample from './lib/components/layout/layout.example';

ReactDOM.render(
    <Router>
        <div className="page">
            <header className="header">
                <h1>
                    FlyReact
                </h1>
            </header>
            <div className="content">
                <aside>
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
                </aside>
                <main className="main">
                    <Route path="/" exact render={() => <div>Hello FlyReact</div>}></Route>
                    <Route path="/icon" component={IconExample}></Route>
                    <Route path="/button" component={ButtonExample}></Route>
                    <Route path="/dialog" component={DialogExample}></Route>
                    <Route path="/layout" component={LayoutExample}></Route>
                </main>
            </div>
        </div>
    </Router>,
    document.querySelector('#root')
)