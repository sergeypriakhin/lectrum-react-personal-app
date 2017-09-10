import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Componets
import Actors from '../Actors';

export default class ActorsList extends Component {
    static propTypes = {
        actors: PropTypes.array.isRequired
    };

    render () {
        const { actors } = this.props;

        const actorList = actors.map((item) => (
            <Actors
                key = { item.cast_id }
                name = { item.name }
                profilePath = { item.profile_path }
            />
        ));

        return <div>{actorList}</div>;
    }
}
