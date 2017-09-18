import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import MoviesList from './index';
import Card from '../Card';

const data = ['Test 1', 'Test 2'];

const result = shallow(<MoviesList data = { data } />);

describe('MoviesList component:', () => {
    test('Should have 1 \'div\' element', () => {
        expect(result.find('div').length).toBe(1);
    });

    test('Should have 2 \'Link\' element', () => {
        expect(result.find(Link).length).toBe(2);
    });

    test('Should have 2 \'Card\' element', () => {
        expect(result.find(Card).length).toBe(2);
    });
});
