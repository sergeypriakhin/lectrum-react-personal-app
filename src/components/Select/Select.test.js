import React from 'react';
import { shallow, render } from 'enzyme';
import Select from './';

const state = {
    activeSubmenu:  false,
    nameActiveMenu: ''
};

const mutatedState = {
    activeSubmenu:  true,
    nameActiveMenu: 'rating-filter'
};

const result = shallow(<Select name = 'Сортировать' submenu = 'rating-filter' />);

describe('Card component:', () => {
    test('Should have 1 \'data-filter\' element', () => {
        expect(result.find('[data-filter="rating-filter"]').length).toBe(1);
    });

    test('onclick toggleSubmenu', () => {
        result.find('div > div').simulate('click', 1);

        expect(result.state()).toEqual(mutatedState);
    });
});
