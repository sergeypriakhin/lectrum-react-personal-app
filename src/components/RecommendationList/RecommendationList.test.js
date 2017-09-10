import React from 'react';
import { shallow } from 'enzyme';
import RecommendationList from './';

const result = shallow(
    <RecommendationList
        recommendations = { [] }
        // setMovieDeatil = { new RecommendationList().setMovieDeatil }
    />
);

describe('RecommendationList component:', () => {
    test('Should have 1 \'div\' element', () => {
        expect(result.find('div').length).toBe(1);
    });
});
