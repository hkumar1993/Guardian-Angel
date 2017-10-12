import React from 'react'
import { connect } from 'react-redux'
import ProfileScreen from './ProfileScreen'
const mapStateToProps = state => {
  return {
    currentUser: state.user.info
  }
}

export default connect(mapStateToProps)(ProfileScreen)
