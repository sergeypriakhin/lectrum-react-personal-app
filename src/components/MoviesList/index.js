import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Components
import Card from '../Card';

// Styles
import Styles from './styles.scss';

export default class MoviesList extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired
    };

    render () {
        const { data } = this.props;

        const moviesList = data.map((item) => (
            <Link className = { Styles.item } key = { item.id } to = { `/film/${item.id}` }>
                <Card
                    imgSrc = { item.poster_path }
                    overview = { item.overview }
                    title = { item.title }
                    voteAverage = { item.vote_average }
                />
            </Link>
        ));

        return <div className = { Styles.list }>{moviesList}</div>;
    }
}
