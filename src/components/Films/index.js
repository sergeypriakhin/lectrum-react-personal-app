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
                        handleChangeSearch = { handleChangeSearch }
                        placeholder = 'Search movie'
                        searchString = { searchString }
                        setSortGenre = { setSortGenre }
                        setSortMovie = { setSortMovie }
                    />
                </div>
                <div className = { Styles.list }>{moviesList}</div>
            </Wrapper>
        );
    }
}