import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styles from './styles.scss';
import MdArrowDropDown from 'react-icons/lib/md/arrow-drop-down';

export default class Select extends Component {
    static propTypes = {
        children: PropTypes.array.isRequired,
        name:     PropTypes.string.isRequired,
        submenu:  PropTypes.string.isRequired
    };

    constructor () {
        super();
        this.toggleSubmenu = ::this._toggleSubmenu;
        // this.activeMenu = ::this._activeMenu;
    }

    state = {
        activeSubmenu:  false,
        nameActiveMenu: ''
    };

    _toggleSubmenu (name) {
        this.setState({
            activeSubmenu:  !this.state.activeSubmenu,
            nameActiveMenu: name
        });
    }

    // _activeMenu (name) {
    //     this.setState({
    //         nameActiveMenu: name
    //     });
    // }

    render () {
        const { name, children, submenu } = this.props;
        const { activeSubmenu } = this.state;

        return (
            <div className = { Styles.item } data-filter = { submenu }>
                <div
                    className = { Styles.select }
                    onClick = { () => this.toggleSubmenu(submenu) }>
                    <span>
                        {name} <MdArrowDropDown />
                    </span>
                </div>
                {activeSubmenu && (
                    <div className = { Styles.submenu }>{children}</div>
                )}
            </div>
        );
    }
}
