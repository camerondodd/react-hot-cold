import React from 'react';
import {connect} from 'react-redux';
import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export class Header extends React.Component  {
    let infoModal;
    if (props.showInfoModal) {
        infoModal = <InfoModal />;
    }

    return (
        <header>
            <TopNav />
            {infoModal}
            <h1>HOT or COLD</h1>
        </header>
    );
};

let mapStateToProps = state => ({
    showInfoModal: state.showInfoModal
});

export default connect(mapStateToProps)(Header);