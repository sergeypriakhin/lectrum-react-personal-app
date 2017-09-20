import React from 'react';
import { shallow } from 'enzyme';
import Films from './';
import FIlmsContainer from '../../containers/Films';

const state = {
    data:         [],
    page:         1,
    totalResults: 0,
    totalPages:   0,
    genreMovie:   [],
    filterGenre:  { id: '', name: 'Жанры' },
    filterSortBy: 'popularity.desc',
    searchString: ''
};

const result = shallow(
    <Films
        data = { state.data }
        filterGenre = { state.filterGenre }
        genreMovie = { state.genreMovie }
        handleChangeSearch = { new FIlmsContainer().handleChangeSearch }
        page = { state.page }
        searchString = { state.searchString }
        setCountPageDecrement = { new FIlmsContainer().setCountPageDecrement }
        setCountPageIncrement = { new FIlmsContainer().setCountPageIncrement }
        setSortGenre = { new FIlmsContainer().setSortGenre }
        setSortMovie = { new FIlmsContainer().setSortMovie }
        totalResults = { state.totalResults }
    />
);

describe('FIlms component:', () => {
    test('Should have 1 root \'Wrapper\' element', () => {
        expect(result.find('Wrapper').length).toBe(1);
    });
    test('Should have 1 \'Filter\' element', () => {
        expect(result.find('Filter').length).toBe(1);
    });

    test('Should have 2 \'Pagination\' element', () => {
        expect(result.find('Pagination').length).toBe(2);
    });

    test('Should have 1 \'MoviesList\' element', () => {
        expect(result.find('MoviesList').length).toBe(1);
    });
});
