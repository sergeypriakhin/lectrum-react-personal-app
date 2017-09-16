import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styles from './styles.scss';
import MdStar from 'react-icons/lib/md/star';
import MdPlaylistAdd from 'react-icons/lib/md/playlist-add';

export default class Card extends Component {
    static propTypes = {
        imgSrc:      PropTypes.string.isRequired,
        title:       PropTypes.string.isRequired,
        overview:    PropTypes.string,
        voteAverage: PropTypes.number
    };

    constructor () {
        super();

        this.setShowOverviewState = ::this._setShowOverviewState;
    }

    state = {
        showOverview: false
    };

    _setShowOverviewState (value) {
        this.setState({
            showOverview: value
        });
    }

    render () {
        const { imgSrc, title, overview, voteAverage } = this.props;
        const { showOverview } = this.state;

        const overlay = showOverview && (
            <div className = { Styles.overlay }>
                <div className = { Styles.header }>
                    <span>
                        <MdStar />
                        <i>{voteAverage} / 10</i>
                    </span>
                    <span className = { Styles.addMyList } title = 'Add my list'>
                        <MdPlaylistAdd />
                    </span>
                </div>
                <div className = { Styles.text }>
                    {overview && overview.length > 150 ?
                        `${overview.substring(0, 150)}...`
                        :
                        overview
                    }
                </div>
            </div>
        );

        const image = imgSrc !== null && (
            <img src = { `http://image.tmdb.org/t/p/original/${imgSrc}` } />
        );

        return (
            <figure
                className = { Styles.card }
                onMouseEnter = { () => this.setShowOverviewState(true) }
                onMouseLeave = { () => this.setShowOverviewState(false) }>
                <div className = { Styles.imgWrap }>
                    {image}
                    {overlay}
                </div>
                <figcaption className = { Styles.caption }>{title}</figcaption>
            </figure>
        );
    }
}
