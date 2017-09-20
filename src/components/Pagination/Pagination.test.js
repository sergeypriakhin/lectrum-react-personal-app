import React from 'react';
import { shallow } from 'enzyme';
import Pagination from './';
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
    <Pagination
        page = { state.page }
        setCountPageDecrement = { new FIlmsContainer().setCountPageDecrement }
        setCountPageIncrement = { new FIlmsContainer().setCountPageIncrement }
        totalPages = { state.totalPages }
        totalResults = { state.totalResults }
    />
);

describe('Pagination component:', () => {
    test('Should have 6 \'div\' element', () => {
        expect(result.find('div').length).toBe(6);
    });
});
