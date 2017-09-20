import React from 'react';
import { shallow, render } from 'enzyme';
import RecommendationList from './';
import Card from '../Card/';

const upcoming = {
    results: ['0', '1'],
    dates:   { minimum: '2017-09-19', maximum: '2017-10-12' }
};

const result = shallow(
    <RecommendationList recommendations = { upcoming.results } />
);

describe('Home component:', () => {
    test('Should have 1 root \'div\' element', () => {
        expect(result.find('div').length).toBe(1);
    });

    test('Should have 2 \'Link\' element', () => {
        expect(result.find('Link').length).toBe(2);
    });
});
