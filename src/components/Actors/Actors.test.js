import React from 'react';
import { shallow } from 'enzyme';
import Actor from './index';

const state = {
    showImgProfileActor: false
};

const mutatedState = {
    showImgProfileActor: true
};

const result = shallow(<Actor />);

describe('ActorsList component:', () => {
    test('Should have 1 \'div\' element', () => {
        expect(result.find('div').length).toBe(1);
    });

    test('Should have valid initial state', () => {
        expect(result.state()).toEqual(state);
    });

    test('Should respond to state change properly', () => {
        result.setState({
            showImgProfileActor: true
        });

        expect(result.state()).toEqual(mutatedState);

        result.setState({
            showImgProfileActor: false
        });

        expect(result.state()).toEqual(state);
    });

    test('onMouseEnter', () => {
        result.find('span').simulate('mouseEnter');
        expect(result.state()).toEqual(mutatedState);
    });

    test('onMouseLeave', () => {
        result.find('span').simulate('mouseLeave');
        expect(result.state()).toEqual(state);
    });
});
