import React from 'react';
import { shallow, render } from 'enzyme';
import Card from './';

const state = {
    showOverview: false
};

const mutatedState = {
    showOverview: true
};

const result = shallow(<Card imgSrc = 'test-img.jpg' title = 'Test' />);

describe('Card component:', () => {
    test('Should have 1 \'figure\' element', () => {
        expect(result.find('figure').length).toBe(1);
    });

    test('should render props', () => {
        expect(result.find('figcaption').text()).toBe('Test');
        expect(result.find('img').prop('src')).toEqual(
            'http://image.tmdb.org/t/p/original/test-img.jpg'
        );
        expect(result.find('img').prop('src')).toEqual(
            'http://image.tmdb.org/t/p/original/test-img.jpg'
        );
    });

    test('Should have valid initial state', () => {
        expect(result.state()).toEqual(state);
    });

    test('onMouseEnter', () => {
        result.find('figure').simulate('mouseEnter');
        expect(result.state()).toEqual(mutatedState);
    });

    test('onMouseLeave', () => {
        result.find('figure').simulate('mouseLeave');
        expect(result.state()).toEqual(state);
    });
});
