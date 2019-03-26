import { Icon } from './lib'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

ReactDOM.render(
    <Router>

        <div>
            <header>
                <h1>FlyReact</h1>
            </header>
            <div>
                <aside>
                    <h2>组件</h2>
                    <ul>
                        <li>
                            <Link to="/icon">Icon</Link>
                        </li>
                    </ul>
                </aside>
                <main>
                  <Route path="/" component={Icon}></Route>
                  <Route path="/icon" component={Icon}></Route>
                </main>
            </div>
        </div>
    </Router>,
    document.querySelector('#root')
)