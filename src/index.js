import React from 'react';
import ReactDOM from 'react-dom';
//import 'semantic-ui-css/semantic.min.css';

import App from './App';
import Geolocation from './Geolocation';
import Thundercounter from './Thundercounter';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Geolocation />, document.getElementById('rootDwa'));
ReactDOM.render(<Thundercounter />, document.getElementById('rootTrzy'));
ReactDOM.render(<Thundercounter />, document.getElementById('rootCztery'));

