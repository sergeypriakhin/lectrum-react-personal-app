import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
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

    render () {
        return <App />;
    }
}
