import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Componets
import Page from '../../components/Page';

export default class PageContainer extends Component {
    static contextTypes = {
        apiKey: PropTypes.string.isRequired,
        api:    PropTypes.string.isRequired
    };

    static propTypes = {
        match: PropTypes.object
    };

    constructor () {
        super();

        this.getMovieDetail = ::this._getMovieDetail;
        this.setMovieDeatil = ::this._setMovieDeatil;
        this.getMovieActors = ::this._getMovieActors;
        this.getMovieRecommendations = ::this._getMovieRecommendations;
    }

    state = {
        movieDetail:     {},
        actors:          [],
        recommendations: []
    };

    componentWillMount () {
        this.setMovieDeatil();
    }

    componentDidUpdate (nextProps) {
        const { match } = this.props;

        if (nextProps.match.params.id !== match.params.id) {
            this.setMovieDeatil();
        }

        return false;
    }

    _setMovieDeatil () {
        const { match } = this.props;

        this.getMovieDetail(match.params.id);
        this.getMovieActors(match.params.id);
        this.getMovieRecommendations(match.params.id);
    }

    _getMovieDetail (movieId) {
        const { api, apiKey } = this.context;

        const requestUrl = `${api}/movie/${movieId}?&language=ru&api_key=${apiKey}`;

        fetch(requestUrl, { method: 'GET' })
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('Movies detail was not loaded');
                }

                return response.json();
            })
            .then((detail) => {
                this.setState({
                    movieDetail: detail
                });
            });
    }

    _getMovieActors (movieId) {
        const { api, apiKey } = this.context;

        const requestUrl = `${api}/movie/${movieId}/credits?api_key=${apiKey}`;

        fetch(requestUrl, { method: 'GET' })
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('Actors list was not loaded');
                }

                return response.json();
            })
            .then(({ cast }) => {
                this.setState({
                    actors: cast
                });
            });
    }

    _getMovieRecommendations (movieId) {
        const { api, apiKey } = this.context;

        const requestUrl = `${api}/movie/${movieId}/recommendations?api_key=${apiKey}&language=ru&page=1`;

        fetch(requestUrl, { method: 'GET' })
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('Recommendations list was not loaded');
                }

                return response.json();
            })
            .then(({ results }) => {
                this.setState({
                    recommendations: results
                });
            });
    }

    render () {
        const { movieDetail, actors, recommendations } = this.state;

        return (
            <Page
                actors = { actors }
                movieDetail = { movieDetail }
                recommendations = { recommendations }
                setMovieDeatil = { this.setMovieDeatil }
            />
        );
    }
}
