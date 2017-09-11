import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Componets
import Wrapper from '../../components/Wrapper';
import MovieDetail from '../../components/MovieDetail';
import ActorList from '../../components/ActorList';
import RecommendationList from '../../components/RecommendationList';

// Styles
import Styles from './styles.scss';

export default class Page extends Component {
    static propTypes = {
        actors:          PropTypes.array,
        movieDetail:     PropTypes.object,
        recommendations: PropTypes.array,
        setMovieDeatil:  PropTypes.func
    };

    render () {
        const {
            movieDetail,
            actors,
            recommendations,
            setMovieDeatil
        } = this.props;

        return (
            <Wrapper>
                <div className = { Styles.page }>
                    <MovieDetail movieDetail = { movieDetail } />
                    <div>
                        <h3 className = { Styles.title }>Актеры: </h3>
                        <ActorList actors = { actors } />
                    </div>
                    <div>
                        <h3 className = { Styles.title }>
                            Вместе с фильмом «{movieDetail.title}» также смотрят
                        </h3>
                        <RecommendationList
                            recommendations = { recommendations }
                            setMovieDeatil = { setMovieDeatil }
                        />
                    </div>
                </div>
            </Wrapper>
        );
    }
}
