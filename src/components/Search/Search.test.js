import React from 'react';
import { shallow } from 'enzyme';
import Search from './';
import Films from '../../containers/Films';

const result = shallow(
    <Search
        handleChangeSearch = { new Films().handleChangeSearch }
        searchString = ''
    />
);

describe('Search component:', () => {
    test('Should have 1 \'Search\' element root', () => {
        expect(result.find('div').length).toBe(1);
    });

    test('Should have 1 \'input\' element', () => {
        expect(result.find('input').length).toBe(1);
    });
});
