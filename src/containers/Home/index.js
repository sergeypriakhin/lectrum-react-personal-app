import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Home from '../../components/Home';

export default class HomeContainer extends Component {
    static contextTypes = {
        apiKey: PropTypes.string.isRequired,
        api:    PropTypes.string.isRequired
    };

    constructor () {
        super();

        this.getTopRatedMovie = ::this._getTopRatedMovie;
        this.getUpComingMovie = ::this._getUpComingMovie;
        this.getPopularMovie = ::this._getPopularMovie;
    }

    state = {
        topRated: [],
        upcoming: { results: [], dates: {}},
        popular:  []
    };

    componentWillMount () {
        this.getTopRatedMovie();
        this.getUpComingMovie();
        this.getPopularMovie();
    }

    _getTopRatedMovie () {
        const { api, apiKey } = this.context;

        const requestUrl = `${api}/movie/top_rated?api_key=${apiKey}&language=ru&page=1`;

        fetch(requestUrl, { method: 'GET' })
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('Top rated movies was not loaded');
                }

                return response.json();
            })
            .then(({ results }) => {
                this.setState({
                    topRated: results
                });
            });
    }

    _getUpComingMovie () {
        const { api, apiKey } = this.context;

        const requestUrl = `${api}/movie/upcoming?api_key=${apiKey}&language=ru&page=1`;

        fetch(requestUrl, { method: 'GET' })
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('Top rated movies was not loaded');
                }

                return response.json();
            })
            .then(({ results, dates }) => {
                this.setState({
                    upcoming: {
                        results,
                        dates
                    }
                });
            });
    }

    _getPopularMovie () {
        const { api, apiKey } = this.context;

        const requestUrl = `${api}/movie/popular?api_key=${apiKey}&language=ru&page=1&region=ukraine`;

        fetch(requestUrl, { method: 'GET' })
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('Top rated movies was not loaded');
                }

                return response.json();
            })
            .then(({ results }) => {
                this.setState({
                    popular: results
                });
            });
    }

    render () {
        const { topRated, upcoming, popular } = this.state;

        return (
            <Home popular = { popular } topRated = { topRated } upcoming = { upcoming } />
        );
    }
}
