import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styles from './styles.scss';

export default class MovieDetail extends Component {
    static propTypes = {
        movieDetail: PropTypes.object.isRequired
    };

    render () {
        const { movieDetail } = this.props;
        const {
            title,
            genres = [],
            overview,
            tagline,
            budget,
            revenue
        } = movieDetail;

        const genresList = genres.map(({ id, name }) => <a key = { id }>{name}</a>);

        return (
            <div>
                <h1 className = { Styles.title }>
                    {title} <small>{tagline}</small>
                </h1>
                <figure className = { Styles.poster }>
                    {movieDetail.backdrop_path !== null && (
                        <img
                            alt = { movieDetail.original_title }
                            src = { `http://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}` }
                        />
                    )}
                </figure>
                <div>
                    <div className = { Styles.properties }>
                        <span>
                            Релиз: <a>{movieDetail.release_date}</a>
                        </span>
                        <span>Жанр: {genresList}</span>
                        <span>
                            Бюджет: <a>${budget}</a>
                        </span>
                        <span>
                            Сборы: <a>${revenue}</a>
                        </span>
                    </div>
                    <div className = { Styles.properties }>
                        <span>
                            Голосов: <a>{movieDetail.vote_count}</a>
                        </span>
                        <span>
                            Средний рейтинг: <a>{movieDetail.vote_average}</a>
                        </span>
                    </div>
                    <div className = { Styles.description }>{overview}</div>
                </div>
            </div>
        );
    }
}
