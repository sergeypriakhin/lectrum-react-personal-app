import React from 'react';
import { shallow } from 'enzyme';
import ActorsList from './index';

const actorsList = ['Name 1', 'Name 2'];

const result = shallow(<ActorsList actors = { actorsList } />);

describe('ActorsList component:', () => {
    test('Should have 1 \'div\' element', () => {
        expect(result.find('div').length).toBe(1);
    });
});
