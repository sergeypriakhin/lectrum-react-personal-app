import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Containers
import HomeContainer from '../../containers/Home';
import FilmsContainer from '../../containers/Films';
import PageContainer from '../../containers/Page';

// Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Styles
import '../../theme/reset.css';
import Styles from './styles.scss';

export default class App extends Component {
    render () {
        return (
            <div className = { Styles.app }>
                <Header />
                <main className = { Styles.main }>
                    <Switch>
                        <Route
                            exact
                            path = '/'
                            render = { (props) => (
                                <HomeContainer test = 'hi' { ...props } />
                            ) }
                        />
                        <Route component = { FilmsContainer } path = '/films' />
                        <Route component = { PageContainer } path = '/film/:id' />
                    </Switch>
                </main>
                <Footer />
            </div>
        );
    }
}
