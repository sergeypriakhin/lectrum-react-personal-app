import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styles from './styles.scss';

export default class Recommendation extends Component {
    static propTypes = {
        title:  PropTypes.string.isRequired,
        imgSrc: PropTypes.string
    };

    render () {
        const { title, imgSrc } = this.props;

        return (
            <div className = { Styles.recommendation }>
                {imgSrc !== null && (
                    <img src = { `http://image.tmdb.org/t/p/original/${imgSrc}` } />
                )}
                <span>{title}</span>
            </div>
        );
    }
}
