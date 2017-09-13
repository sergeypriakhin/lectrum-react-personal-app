import React from 'react';
import { shallow } from 'enzyme';
import Filter from './';

const result = shallow(
    <Filter
        filterGenre = { { id: '', name: 'Жанры' } }
        filterGenreName = '28'
        filterSortBy = 'popularity.desc'
        genreMovie = { [] }
        handleChangeSearch = { new Filter().handleChangeSearch }
        searchString = ''
    />
);

describe('Filter component:', () => {
    test('Should have \'div\' element', () => {
        expect(result.find('div').length).toBe(2);
    });
});
