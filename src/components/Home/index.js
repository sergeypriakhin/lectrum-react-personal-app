import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import RecommendationList from '../RecommendationList';

// Styles
import Styles from './styles.scss';

export default class Home extends Component {
    static propTypes = {
        popular:  PropTypes.array.isRequired,
        topRated: PropTypes.array.isRequired,
        upcoming: PropTypes.object.isRequired
    };

    render () {
        const { topRated, upcoming, popular } = this.props;

        return (
            <section className = { Styles.container }>
                <div>
                    <h2 className = { Styles.title }>
                        Cкоро в кино{' '}
                        <small>
                            {upcoming.dates.minimum} / {upcoming.dates.maximum}
                        </small>
                    </h2>
                    <RecommendationList recommendations = { upcoming.results } />
                </div>
                <div>
                    <h2 className = { Styles.title }>Самые популярные</h2>
                    <RecommendationList recommendations = { topRated } />
                </div>
                <div>
                    <h2 className = { Styles.title }>Популярные в Украине</h2>
                    <RecommendationList recommendations = { popular } />
                </div>
            </section>
        );
    }
}
