import React from 'react';
import { shallow } from 'enzyme';
import Home from './';

const upcoming = {
    results: [],
    dates:   { minimum: '2017-09-19', maximum: '2017-10-12' }
};

const result = shallow(<Home popular = { [] } topRated = { [] } upcoming = { upcoming } />);

describe('Home component:', () => {
    test('Should have 1 root \'section\' element', () => {
        expect(result.find('section').length).toBe(1);
    });

    test('Should have 3 \'RecommendationList\' element', () => {
        expect(result.find('RecommendationList').length).toBe(3);
    });
});
