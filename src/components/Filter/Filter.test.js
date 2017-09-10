import React from 'react';
import { shallow } from 'enzyme';
import Filter from './';

const state = {
    showOverview: false
};

const mutatedState = {
    showOverview: true
};

// state = {
//   data:         [],
//   genreMovie:   [],
//   filterGenre:  { id: '', name: 'Жанры' },
//   filterSortBy: 'popularity.desc',
//   searchString: ''
// };

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

    // test('sort by popularity.desc onClick', () => {
    //     result.find('span').simulate('onClick');
    // });
});
