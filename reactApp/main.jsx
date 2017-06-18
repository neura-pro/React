import React from 'react';
import ReactDOM from 'react-dom';

import App from './lab/App.jsx';
import Clock from './lab/Clock.jsx';
import Reservation from './lab/Reservation.jsx';
import Calculator from './lab/Calculator.jsx';
import FilterableProductTable from './lab/FilterableProductTable.jsx';
import HashRoutedApp from './lab/HashRoutedApp.jsx';
import Container from './lab/router/Container.jsx';

//var app = <App />;
//var app = Clock;
//var app = Reservation;
//var app = Calculator;
//var app = FilterableProductTable;
//var app = HashRoutedApp;
var app = Container;

ReactDOM.render(React.createElement(app, null), document.getElementById('root'));

