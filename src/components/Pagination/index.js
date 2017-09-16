// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import FaArrowCircleLeft from 'react-icons/lib/fa/arrow-circle-left';
import FaArrowCircleRight from 'react-icons/lib/fa/arrow-circle-right';

// Styles
import Styles from './styles.scss';

export default class Pagination extends Component {
    static propTypes = {
        page:                  PropTypes.number.isRequired,
        setCountPageDecrement: PropTypes.func.isRequired,
        setCountPageIncrement: PropTypes.func.isRequired,
        totalPages:            PropTypes.number,
        totalResults:          PropTypes.number
    };

    render () {
        const {
            page,
            setCountPageDecrement,
            setCountPageIncrement,
            totalPages,
            totalResults
        } = this.props;

        const leftArrow = (
            <div
                className = { page > 1 ? Styles.left : Styles.disable }
                onClick = { setCountPageDecrement }>
                <FaArrowCircleLeft />
            </div>
        );

        const rightArrow = (
            <div
                className = { page < totalPages ? Styles.right : Styles.disable }
                onClick = { setCountPageIncrement }>
                <FaArrowCircleRight />
            </div>
        );

        return (
            <div className = { Styles.pagination }>
                <div className = { Styles.countWrap }>
                    {leftArrow}
                    <div className = { Styles.count }>
                        {`${page} из ${totalPages}`}
                    </div>
                    {rightArrow}
                </div>
                <div className = { Styles.totalResults }>Всего: {totalResults}</div>
            </div>
        );
    }
}
