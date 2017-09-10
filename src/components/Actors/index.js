import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styles from './styles.scss';

export default class Actors extends Component {
    static propTypes = {
        name:        PropTypes.string,
        profilePath: PropTypes.string
    };

    constructor () {
        super();

        this.setShowImgProfileActor = ::this._setShowImgProfileActor;
    }

    state = {
        showImgProfileActor: false
    };

    _setShowImgProfileActor (value) {
        this.setState({
            showImgProfileActor: value
        });
    }

    render () {
        const { showImgProfileActor } = this.state;
        const { name, profilePath } = this.props;

        return (
            <div className = { Styles.actors }>
                <span
                    onMouseEnter = { () => this.setShowImgProfileActor(true) }
                    onMouseLeave = { () => this.setShowImgProfileActor(false) }>
                    {name}
                </span>
                {showImgProfileActor &&
                    (profilePath !== null ? (
                        <img
                            alt = { name }
                            src = { `http://image.tmdb.org/t/p/original/${profilePath}` }
                        />
                    ) : null)}
            </div>
        );
    }
}
