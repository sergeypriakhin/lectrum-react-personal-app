import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Componets
import Wrapper from '../../components/Wrapper';
import MovieDetail from '../../components/MovieDetail';
import ActorList from '../../components/ActorList';
import RecommendationList from '../../components/RecommendationList';

// Styles
import Styles from './styles.scss';

export default class Page extends Component {
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
            <Wrapper>
                <div className = { Styles.page }>
                    <MovieDetail movieDetail = { movieDetail } />
                    <div>
                        <h3 className = { Styles.title }>Актеры: </h3>
                        <ActorList actors = { actors } />
                    </div>
                    <div>
                        <h3 className = { Styles.title }>
                            Вместе с фильмом «{movieDetail.title}» также смотрят
                        </h3>
                        <RecommendationList
                            recommendations = { recommendations }
                            setMovieDeatil = { this.setMovieDeatil }
                        />
                    </div>
                </div>
            </Wrapper>
        );
    }
}
