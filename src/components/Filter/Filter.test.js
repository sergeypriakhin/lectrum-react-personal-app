import React from 'react';
import { shallow } from 'enzyme';
import Filter from './';
import Films from '../../containers/Films';
import Select from '../Select';
import Search from '../Search';

const result = shallow(
    <Filter
        filterGenre = { { id: '', name: 'Жанры' } }
        filterGenreName = 'Боевик'
        filterSortBy = 'popularity.desc'
        genreMovie = { [] }
        handleChangeSearch = { new Films().handleChangeSearch }
        searchString = 'Search'
    />
);

describe('Filter component:', () => {
    test('Should have \'div\' element', () => {
        expect(result.find('div').length).toBe(2);
    });

    test('renders two <Select /> components', () => {
        expect(result.find(Select).length).toBe(2);
    });

    test('renders one <Search /> components', () => {
        expect(result.find(Search).length).toBe(1);
    });

    // test('should render a document filterGenreName', () => {
    //     const wrapper = shallow(<Filter filterGenreName = 'Events' />);

    //     expect(wrapper.prop('filterGenreName')).toEqual('Events');
    // });
});
