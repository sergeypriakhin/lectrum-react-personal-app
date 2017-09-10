import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Components
import Card from '../../components/Card';
import CustomSlider from '../../components/Slider';

export default class RecommendationList extends Component {
    static propTypes = {
        recommendations: PropTypes.array.isRequired
    };
    render () {
        const { recommendations } = this.props;

        const recommendationList = recommendations.map((item) => (
            <Link key = { item.id } to = { `/film/${item.id}` }>
                <Card
                    imgSrc = { item.poster_path }
                    overview = { item.overview }
                    title = { item.title }
                    voteAverage = { item.vote_average }
                />
            </Link>
        ));

        return (
            <div>
                {recommendationList.length > 0 ? (
                    <CustomSlider>{recommendationList}</CustomSlider>
                ) : null}
            </div>
        );
    }
}
