import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import _ from 'lodash/fp';
import svgURL from './static/logo.svg'

_.memoize((f) => f(svgURL))(console.log)

ReactDOM.render(<App />, document.getElementById('root'));
