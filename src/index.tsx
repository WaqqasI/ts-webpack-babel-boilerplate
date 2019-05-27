import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import _ from 'lodash/fp';
import svgURL from 'logo.svg'

_.flow(console.log, console.log)(svgURL)

ReactDOM.render(<App />, document.getElementById('root'));
