import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Styles from './styles.scss';

export default class Header extends Component {
    render () {
        return (
            <header className = { Styles.header }>
                <div className = { Styles.container }>
                    <div>
                        <nav className = { Styles.nav }>
                            <Link to = '/'>Главная</Link>
                            <Link to = '/films'>Фильмы</Link>
                        </nav>
                    </div>
                    <div>
                        <nav className = { Styles.nav }>
                            <a href = '#'>Мой список</a>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}
