import React, { Component } from 'react';
import styled from 'styled-components/native';
import Profile from '../components/Profile/Profile'
const Root = styled.View`

`;

const T = styled.Text`

`;

class ProfileScreen extends Component {
  state = {};

  render() {
    console.log(this.props);
    const navParams = this.props.navigation.state.params
    const currentUser = this.props.currentUser
    const redirUser = navParams ? navParams.user : null
    const user = redirUser ? redirUser : currentUser
    return (
      <Profile user={user} _id={user._id}/>
    )
  }
}

export default ProfileScreen;
