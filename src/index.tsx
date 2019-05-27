import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import _ from 'lodash/fp';
import svgURL from 'assets/logo.svg'
import {trace} from 'logger'

_.flow(console.log, console.log)(svgURL)

ReactDOM.render(<App />, document.getElementById('root'));
