import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import _ from 'lodash/fp';
import * as svgURL from 'logo.svg'
import trace from 'trace'

_.flow(console.log, trace)(svgURL)

ReactDOM.render(<App />, document.getElementById('root'));
