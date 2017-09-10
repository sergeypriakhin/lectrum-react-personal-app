import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import Styles from './styles.scss';

export default class Search extends Component {
    static propTypes = {
        handleChangeSearch: PropTypes.func.isRequired,
        searchString:       PropTypes.string.isRequired,
        placeholder:        PropTypes.string
    };

    render () {
        const { handleChangeSearch, searchString, placeholder } = this.props;

        return (
            <div className = { Styles.search }>
                <input
                    className = { Styles.input }
                    placeholder = { placeholder }
                    type = 'search'
                    value = { searchString }
                    onChange = { handleChangeSearch }
                />
            </div>
        );
    }
}
