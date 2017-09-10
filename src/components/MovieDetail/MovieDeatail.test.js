import React from 'react';
import { shallow } from 'enzyme';
import MovieDetail from './';

const result = shallow(<MovieDetail movieDetail = { {} } />);

describe('Header component:', () => {
    test('Should have \'h1\' element', () => {
        expect(result.find('h1').length).toBe(1);
    });

    test('Should have \'figure\' element', () => {
        expect(result.find('figure').length).toBe(1);
    });

    test('Should have \'figure img\' element', () => {
        expect(result.find('figure img').length).toBe(1);
    });
});
