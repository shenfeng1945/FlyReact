import IconExample from './lib/icon/icon.example'
import DialogExample from './lib/dialog/dialog.example'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

ReactDOM.render(
    <Router>
        <div className="page">
            <header>
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
                            <Link to="/dialog">Dialog</Link>
                        </li>
                    </ul>
                </aside>
                <main>
                    <Route path="/" exact render={() => <div>Hello FlyReact</div>}></Route>
                    <Route path="/icon" component={IconExample}></Route>
                    <Route path="/dialog" component={DialogExample}></Route>
                </main>
            </div>
        </div>
    </Router>,
    document.querySelector('#root')
)