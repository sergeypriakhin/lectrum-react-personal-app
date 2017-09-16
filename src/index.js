// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Instruments
import './theme/reset.css';

// Components
import AppContainer from './containers/App';
import ScrollToTop from './components/ScrollToTop';

ReactDOM.render(
    <BrowserRouter>
        <ScrollToTop>
            <AppContainer />
        </ScrollToTop>
    </BrowserRouter>,
    document.getElementById('root')
);
