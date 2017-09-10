// Core
import React from 'react';
import ReactDOM from 'react-dom';

// Instruments
import './theme/reset.css';

// App
import App from './containers/App';

export default ReactDOM.render(
    <App />,
    document.getElementById('root') || document.createElement('div')
);
