import React from 'react';
import { shallow } from 'enzyme';
import Page from './';
import PageContainer from '../../containers/Page';
import ActorList from '../ActorList';

const state = {
    movieDetail:     {},
    actors:          ['Bred Pitt', 'Tom Hardy'],
    recommendations: [],
    loading:         true
};

const result = shallow(
    <Page
        actors = { state.actors }
        movieDetail = { state.movieDetail }
        recommendations = { state.recommendations }
        setMovieDeatil = { new PageContainer().setMovieDeatil }
    />
);

describe('Page component:', () => {
    test('Should have 1 root \'Wrapper\' element', () => {
        expect(result.find('Wrapper').length).toBe(1);
    });

    test('Should have 1 \'MovieDetail\' component', () => {
        expect(result.find('MovieDetail').length).toBe(1);
    });

    test('Should have 1 \'RecommendationList\' component', () => {
        expect(result.find('RecommendationList').length).toBe(1);
    });
});
