import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import ScrollToTop from '../../components/ScrollToTop';
import App from '../../components/App';

export const options = {
    apiKey: '2dfafd696cb0cb7e9762639cbd218321',
    api:    'https://api.themoviedb.org/3'
};

export default class AppContainer extends Component {
    static childContextTypes = {
        apiKey: PropTypes.string.isRequired,
        api:    PropTypes.string.isRequired
    };

    static propTypes = {
        location: PropTypes.string
    };

    getChildContext () {
        return options;
    }

    componentDidUpdate (prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }

    render () {
        return (
            <Router>
                <ScrollToTop>
                    <App />
                </ScrollToTop>
            </Router>
        );
    }
}
