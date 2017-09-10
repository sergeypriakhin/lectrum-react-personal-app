import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Containers
import Home from '../Home';
import Films from '../Films';
import Page from '../Page';

// Components
import ScrollToTop from '../../components/ScrollToTop';
import Header from '../../components/Header';

// Styles
import '../../theme/reset.css';
import Styles from './styles.scss';

export const options = {
    apiKey: '2dfafd696cb0cb7e9762639cbd218321',
    api:    'https://api.themoviedb.org/3'
};

export default class App extends Component {
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
                    <div className = { Styles.app }>
                        <Header />
                        <main className = { Styles.main }>
                            <Route
                                exact
                                path = '/'
                                render = { (props) => <Home test = 'hi' { ...props } /> }
                            />
                            <Route component = { Films } path = '/films' />
                            <Route component = { Page } path = '/film/:id' />
                        </main>
                    </div>
                </ScrollToTop>
            </Router>
        );
    }
}
