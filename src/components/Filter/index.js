import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Componetns
import Select from '../Select';
import Search from '../../components/Search';

// Styles
import Styles from './styles.scss';

export default class Filter extends Component {
    static propTypes = {
        filterGenreName:    PropTypes.string.isRequired,
        genreMovie:         PropTypes.array,
        handleChangeSearch: PropTypes.func,
        searchString:       PropTypes.string,
        setSortGenre:       PropTypes.func,
        setSortMovie:       PropTypes.func
    };

    render () {
        const {
            setSortMovie,
            genreMovie,
            setSortGenre,
            handleChangeSearch,
            searchString,
            filterGenreName
        } = this.props;

        const genreList = genreMovie.map((genre) => (
            <span
                key = { genre.id }
                onClick = { () => setSortGenre(genre.id, genre.name) }>
                {genre.name}
            </span>
        ));

        return (
            <div className = { Styles.filter }>
                <div className = { Styles.container }>
                    <Select name = { filterGenreName } submenu = 'genre-filter'>
                        {genreList}
                    </Select>
                    <Select name = 'Сортировать' submenu = 'rating-filter'>
                        <span onClick = { () => setSortMovie('popularity.desc') }>
                            По популярности
                        </span>
                        <span onClick = { () => setSortMovie('vote_count.desc') }>
                            По количеству голосов
                        </span>
                        <span onClick = { () => setSortMovie('vote_average.desc') }>
                            По рейтингу
                        </span>
                        <span onClick = { () => setSortMovie('revenue.desc') }>
                            По доходу
                        </span>
                    </Select>
                    <Search
                        handleChangeSearch = { handleChangeSearch }
                        placeholder = 'Search movie'
                        searchString = { searchString }
                    />
                </div>
            </div>
        );
    }
}
