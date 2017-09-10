import React from 'react';
import { shallow } from 'enzyme';
import Header from './';

const result = shallow(<Header />);

describe('Header component:', () => {
    test('Should have 1 \'header\' element', () => {
        expect(result.find('header').length).toBe(1);
    });

    test('Should have \'Link\' element', () => {
        expect(result.find('Link').length).toBe(2);
    });
});
