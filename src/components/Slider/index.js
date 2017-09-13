import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Slider from 'react-slick';
import SamplePrevArrow from './SamplePrevArrow';
import SampleNextArrow from './SampleNextArrow';

import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';

import Styles from './styles.scss';

export default class CustomSlider extends Component {
    static propTypes = {
        children: PropTypes.node
    };

    render () {
        const settings = {
            arrows:         true,
            dots:           false,
            infinite:       true,
            adaptiveHeight: false,
            speed:          500,
            slidesToShow:   4,
            slidesToScroll: 4,
            prevArrow:      <SamplePrevArrow />,
            nextArrow:      <SampleNextArrow />,
            responsive:     [
                {
                    breakpoint: 780,
                    settings:   {
                        slidesToShow:   2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings:   {
                        slidesToShow:   1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <div className = { Styles.wrap }>
                <Slider { ...settings }>{this.props.children}</Slider>
            </div>
        );
    }
}
