import React from 'react';
import { shallow } from 'enzyme';
import Wrapper from './';

const result = shallow(<Wrapper />);

describe('Wrapper component:', () => {
    test('Should have 1 \'div\' element', () => {
        expect(result.find('div').length).toBe(1);
    });
});
