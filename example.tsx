import IconExample from './lib/components/icon/icon.example'
import DialogExample from './lib/components/dialog/dialog.example'
import ButtonExample from './lib/components/button/button.example'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
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
                            <Link to="/icon">Icon</Link>
                        </li>
                        <li>
                            <Link to="/button">Button</Link>
                        </li>
                        <li>
                            <Link to="/dialog">Dialog</Link>
                        </li>
                        <li>
                            <Link to="/layout">Layout</Link>
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