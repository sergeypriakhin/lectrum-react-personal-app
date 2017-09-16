// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Films from '../../components/Films';

export default class FilmsContainer extends Component {
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
        this.setCountPageIncrement = ::this._setCountPageIncrement;
        this.setCountPageDecrement = ::this._setCountPageDecrement;
    }

    state = {
        data:         [],
        page:         1,
        totalResults: 0,
        totalPages:   0,
        genreMovie:   [],
        filterGenre:  { id: '', name: 'Жанры' },
        filterSortBy: 'popularity.desc',
        searchString: ''
    };

    componentWillMount () {
        const { page, filterGenre, filterSortBy } = this.state;

        this.getDiscoverMovie(page, filterGenre.id, filterSortBy);
        this.getGenreMovieList();
    }

    shouldComponentUpdate (nextProps, nextState) {
        const { page, filterGenre, filterSortBy } = this.state;

        if (
            nextState.filterSortBy !== filterSortBy ||
            nextState.filterGenre.id !== filterGenre.id ||
            nextState.page !== page
        ) {
            this.getDiscoverMovie(
                nextState.page,
                nextState.filterGenre.id,
                nextState.filterSortBy
            );

            return false;
        }

        return true;
    }

    _getDiscoverMovie (page, genre, sort) {
        const { api, apiKey } = this.context;

        const requestUrl = `${api}/discover/movie?&language=ru&with_genres=${genre}&sort_by=${sort}&page=${page}&api_key=${apiKey}`;

        fetch(requestUrl, { method: 'GET' })
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('Movies was not loaded');
                }

                return response.json();
            })
            .then(({ results, total_results, total_pages }) => {
                this.setState({
                    data:         results,
                    totalResults: total_results,
                    totalPages:   total_pages
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
            filterSortBy: name,
            page:         1
        });
    }

    _setSortGenre (id, name) {
        this.setState({
            filterGenre: { id, name },
            page:        1
        });
    }

    _setCountPageIncrement () {
        this.setState({
            page: this.state.page + 1
        });
        // window.scrollTo(0, 0);
    }

    _setCountPageDecrement () {
        this.setState({
            page: this.state.page - 1
        });
        // window.scrollTo(0, 0);
    }

    _handleChangeSearch (e) {
        this.setState({
            searchString: e.target.value
        });
    }

    render () {
        let { data } = this.state;
        const {
            genreMovie,
            filterGenre,
            page,
            totalResults,
            totalPages
        } = this.state;
        const searchString = this.state.searchString.trim().toLowerCase();

        if (searchString.length > 0) {
            data = data.filter((s) => s.title.toLowerCase().match(searchString));
        }

        return (
            <Films
                data = { data }
                filterGenre = { filterGenre }
                genreMovie = { genreMovie }
                handleChangeSearch = { this.handleChangeSearch }
                page = { page }
                searchString = { searchString }
                setCountPageDecrement = { this.setCountPageDecrement }
                setCountPageIncrement = { this.setCountPageIncrement }
                setSortGenre = { this.setSortGenre }
                setSortMovie = { this.setSortMovie }
                totalPages = { totalPages }
                totalResults = { totalResults }
            />
        );
    }
}
