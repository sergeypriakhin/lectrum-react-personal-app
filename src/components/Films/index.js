import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Wrapper from '../../components/Wrapper';
import Filter from '../../components/Filter';
import MoviesList from '../../components/MoviesList';

export default class Films extends Component {
    static propTypes = {
        data:               PropTypes.array.isRequired,
        filterGenre:        PropTypes.object.isRequired,
        genreMovie:         PropTypes.array.isRequired,
        handleChangeSearch: PropTypes.func.isRequired,
        searchString:       PropTypes.string.isRequired,
        setSortGenre:       PropTypes.func.isRequired,
        setSortMovie:       PropTypes.func.isRequired
    };

    render () {
        const {
            data,
            filterGenre,
            genreMovie,
            searchString,
            setSortGenre,
            setSortMovie,
            handleChangeSearch
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
                <MoviesList data = { data } />
            </Wrapper>
        );
    }
}
