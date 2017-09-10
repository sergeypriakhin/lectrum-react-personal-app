import React from 'react';
import PropTypes from 'prop-types';

import MdKeyboardArrowRight from 'react-icons/lib/md/keyboard-arrow-right';

import Styles from './styles.scss';

const SampleNextArrow = ({ onClick }) => (
    <div className = { Styles.rightArrow } onClick = { onClick }>
        <MdKeyboardArrowRight />
    </div>
);

SampleNextArrow.propTypes = {
    onClick: PropTypes.func
};

export default SampleNextArrow;
