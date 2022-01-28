import React from 'react'
import { connect } from 'react-redux'
import { openModal } from '../../actions/modal_actions'
import Splash from './splash'

const mapSTP = state => {
    return {
        state: state
    }
}

const mapDTP = dispatch => {
    return {
        openModal: (modalType) => dispatch(openModal(modalType))
    }
}

export default connect(mapSTP, mapDTP)(Splash)
