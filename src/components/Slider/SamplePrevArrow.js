import React from 'react';
import PropTypes from 'prop-types';
import MdKeyboardArrowLeft from 'react-icons/lib/md/keyboard-arrow-left';

import Styles from './styles.scss';

const SamplePrevArrow = ({ onClick }) => (
    <div className = { Styles.leftArrow } onClick = { onClick }>
        <MdKeyboardArrowLeft />
    </div>
);

SamplePrevArrow.propTypes = {
    onClick: PropTypes.func
};

export default SamplePrevArrow;
