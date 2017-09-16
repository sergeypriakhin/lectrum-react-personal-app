// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Wrapper from '../../components/Wrapper';
import Filter from '../../components/Filter';
import MoviesList from '../../components/MoviesList';
import Pagination from '../../components/Pagination';

export default class Films extends Component {
    static propTypes = {
        data:                  PropTypes.array.isRequired,
        filterGenre:           PropTypes.object.isRequired,
        genreMovie:            PropTypes.array.isRequired,
        handleChangeSearch:    PropTypes.func.isRequired,
        searchString:          PropTypes.string.isRequired,
        setSortGenre:          PropTypes.func.isRequired,
        setSortMovie:          PropTypes.func.isRequired,
        page:                  PropTypes.number,
        setCountPageDecrement: PropTypes.func,
        setCountPageIncrement: PropTypes.func,
        totalPages:            PropTypes.number,
        totalResults:          PropTypes.number
    };

    render () {
        const {
            data,
            filterGenre,
            genreMovie,
            searchString,
            setCountPageDecrement,
            setCountPageIncrement,
            setSortGenre,
            setSortMovie,
            handleChangeSearch,
            page,
            totalPages,
            totalResults
        } = this.props;

        return (
            <Wrapper>
                <Filter
                    filterGenreName = { filterGenre.name }
                    genreMovie = { genreMovie }
                    handleChangeSearch = { handleChangeSearch }
                    placeholder = 'Search movie'
                    searchString = { searchString }
                    setSortGenre = { setSortGenre }
                    setSortMovie = { setSortMovie }
                />
                <Pagination
                    page = { page }
                    setCountPageDecrement = { setCountPageDecrement }
                    setCountPageIncrement = { setCountPageIncrement }
                    totalPages = { totalPages }
                    totalResults = { totalResults }
                />
                <MoviesList data = { data } />
                <Pagination
                    page = { page }
                    setCountPageDecrement = { setCountPageDecrement }
                    setCountPageIncrement = { setCountPageIncrement }
                    totalPages = { totalPages }
                    totalResults = { totalResults }
                />
            </Wrapper>
        );
    }
}
