import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
require('dotenv').config({path: __dirname + '/.env'});

ReactDOM.render(<App />, document.getElementById('root'));
