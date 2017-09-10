import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import Styles from './styles.scss';

export default class Wrapper extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    };

    render () {
        const { children } = this.props;

        return <div className = { Styles.wrapper }>{children}</div>;
    }
}
