import React from 'react';
import { shallow } from 'enzyme';
import Wrapper from './';

const result = shallow(
    <Wrapper>
        <span />
    </Wrapper>
);

describe('Wrapper component:', () => {
    test('Should have 1 \'div\' element', () => {
        expect(result.find('div').length).toBe(1);
    });

    test('Should have 1 \'span\' element', () => {
        expect(result.find('div span').length).toBe(1);
    });
});
