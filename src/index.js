// Core
import React from 'react';
import ReactDOM from 'react-dom';

// Instruments
import './theme/reset.css';

// App
import AppContainer from './containers/App';

export default ReactDOM.render(
    <AppContainer />,
    document.getElementById('root') || document.createElement('div')
);
