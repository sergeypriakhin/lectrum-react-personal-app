import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Components
import Wrapper from '../../components/Wrapper';
import Filter from '../../components/Filter';
import Card from '../../components/Card';

// Styles
import Styles from './styles.scss';

export default class Films extends Component {
    static contextTypes = {
        apiKey: PropTypes.string.isRequired,
        api:    PropTypes.string.isRequired
    };

    constructor () {
        super();
        this.getDiscoverMovie = ::this._getDiscoverMovie;
        this.getGenreMovieList = ::this._getGenreMovieList;
        this.handleChangeSearch = ::this._handleChangeSearch;
        this.setSortMovie = ::this._setSortMovie;
        this.setSortGenre = ::this._setSortGenre;
    }

    state = {
        data:         [],
        genreMovie:   [],
        filterGenre:  { id: '', name: 'Жанры' },
        filterSortBy: 'popularity.desc',
        searchString: ''
    };

    componentWillMount () {
        const { filterGenre, filterSortBy } = this.state;

        this.getDiscoverMovie(filterGenre.id, filterSortBy);
        this.getGenreMovieList();
    }

    shouldComponentUpdate (nextProps, nextState) {
        const { filterGenre, filterSortBy } = this.state;

        if (
            nextState.filterSortBy !== filterSortBy ||
            nextState.filterGenre.id !== filterGenre.id
        ) {
            this.getDiscoverMovie(
                nextState.filterGenre.id,
                nextState.filterSortBy
            );

            return false;
        }

        return true;
    }

    _getDiscoverMovie (genre, sort) {
        const { api, apiKey } = this.context;

        const requestUrl = `${api}/discover/movie?&language=ru&with_genres=${genre}&sort_by=${sort}&page=1/&api_key=${apiKey}`;

        fetch(requestUrl, { method: 'GET' })
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('Movies was not loaded');
                }

                return response.json();
            })
            .then(({ results }) => {
                this.setState({
                    data: results
                });
            });
    }

    _getGenreMovieList () {
        const { api, apiKey } = this.context;

        const requestUrl = `${api}/genre/movie/list?api_key=${apiKey}&language=ru`;

        fetch(requestUrl, { method: 'GET' })
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('Genre movies was not loaded');
                }

                return response.json();
            })
            .then(({ genres }) => {
                this.setState({
                    genreMovie: genres
                });
            });
    }

    _setSortMovie (name) {
        this.setState({
            filterSortBy: name
        });
    }

    _setSortGenre (id, name) {
        this.setState({
            filterGenre: { id, name }
        });
    }

    _handleChangeSearch (e) {
        this.setState({
            searchString: e.target.value
        });
    }

    render () {
        let { data } = this.state;
        const { genreMovie, filterGenre } = this.state;
        const searchString = this.state.searchString.trim().toLowerCase();

        if (searchString.length > 0) {
            data = data.filter((s) => s.title.toLowerCase().match(searchString));
        }

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

        return (
            <Wrapper>
                <div>
                    <Filter
                        filterGenreName = { filterGenre.name }
                        genreMovie = { genreMovie }
                        handleChangeSearch = { this.handleChangeSearch }
                        placeholder = 'Search movie'
                        searchString = { this.state.searchString }
                        setSortGenre = { this.setSortGenre }
                        setSortMovie = { this.setSortMovie }
                    />
                </div>
                <div className = { Styles.list }>{moviesList}</div>
            </Wrapper>
        );
    }
}
