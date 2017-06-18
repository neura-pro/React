import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route, Link} from 'react-router-dom';

import {Home, About, Contact} from './components.jsx';
import Component1 from './Component1.jsx';
import Component2 from './Component2.jsx';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/component1'>Component1</Link></li>
        <li><Link to='/component2'>Component2</Link></li>
      </ul>
    </nav>
  </header>
)

const Main = () => (
  <main>
    <Switch>
        <Route exact path = '/' component = {Home} />
        <Route path = '/about' component = {About} />
        <Route path = '/contact' component = {Contact} />
        <Route path = '/component1' component = {Component1} />
        <Route path = '/component2' component = {Component2} />
    </Switch>
  </main>
)

const Container = () => (
    <HashRouter>
        <div>
            <Header />
            <Main />
        </div>
    </HashRouter>
)

export default Container;