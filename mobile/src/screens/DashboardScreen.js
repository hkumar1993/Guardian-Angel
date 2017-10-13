import React, { Component } from 'react';
import styled from 'styled-components/native';
import { TabNavigator } from 'react-navigation';
import { colors } from '../utils/constants'
import PostedNeedScreen from './PostedNeedScreen'
import RequestedNeedScreen from './RequestedNeedScreen'
import Touchable from '@appandflow/touchable';

const Root = styled.View`
  alignItems: center;
  paddingTop: 10;
`;

const T = styled.Text`
  color: ${colors.LIGHT_BLUE}
`;

const TabContainer = styled.View`
  flexDirection: row;
  width: 80%;
  justifyContent: center;
  borderRadius: 5;
`;

const Tab = styled(Touchable).attrs({
  feedback: 'none',
})`
  height: 30;
  backgroundColor: white;
  justifyContent: center;
  alignItems: center;
  paddingHorizontal: 15;
  borderColor: ${colors.LIGHT_BLUE};
  borderWidth: 1;
`;

const activeButton = {
  backgroundColor: colors.LIGHT_BLUE,
}

const activeText = {
  color: 'white'
}

class DashboardScreen extends Component {
  constructor(props){
    super(props)
    this.state = { currentTab: 1 }
  }

  render() {
    return (
      <Root>
        <TabContainer>
          <Tab style={[{
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
            }, this.state.currentTab === 1 ? activeButton : {} ]}
            onPress={ () => this.setState({currentTab: 1})}
            >
            <T style={this.state.currentTab === 1 ? activeText : {} }>Posted Needs</T>
          </Tab>
          <Tab style={[{
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
            }, this.state.currentTab === 2 ? activeButton : {} ]}
            onPress={ () => this.setState({currentTab: 2})}
            >
            <T style={this.state.currentTab === 2 ? activeText : {} }>Requested Needs</T>
          </Tab>
        </TabContainer>
      </Root>
    )
  }
}

export default DashboardScreen;
