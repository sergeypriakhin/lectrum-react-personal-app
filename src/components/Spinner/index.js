import React from 'react';

import Styles from './styles.scss';

import img from '../../theme/assets/giphy-downsized.gif';

const Spinner = () => (
    <div className = { Styles.spinner }>
        <img alt = 'Spinner' src = { img } />
    </div>
);

export default Spinner;
