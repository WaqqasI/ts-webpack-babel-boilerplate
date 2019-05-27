import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import _ from 'lodash/fp';

_.memoize((f) => f('hi'))(console.log)

ReactDOM.render(<App />, document.getElementById('root'));
