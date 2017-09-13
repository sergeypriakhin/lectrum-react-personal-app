// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Instruments
import './theme/reset.css';

// Components
import AppContainer from './containers/App';
import ScrollToTop from './components/ScrollToTop';

ReactDOM.render(
    <Router>
        <ScrollToTop>
            <AppContainer />
        </ScrollToTop>
    </Router>,
    document.getElementById('root')
);
