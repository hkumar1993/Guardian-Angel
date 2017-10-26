import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';

import styled from 'styled-components/native';
import { Platform, Keyboard } from 'react-native';

import Touchable from '@appandflow/touchable';

import { GOOGLE_API_KEY, colors } from '../utils/constants';

// graphql
import CREATE_NEED_MUTATION from '../graphql/mutations/createNeed';
import GET_NEEDS_QUERY from '../graphql/queries/getNeeds';

const Root = styled(Touchable).attrs({
  feedback: 'none',
})`
  backgroundColor: white;
  flex: 1;
  alignItems: center;
`;

const Wrapper = styled(Touchable).attrs({
  feedback: 'none',
})`
  height: 80%;
  width: 90%;
  paddingTop: 5;
  position: relative;
`;

const InputWrapper = styled.View`
  height: 50;
  width: 100%;
  borderWidth: 1;
  borderColor: ${props => props.theme.LIGHT_GREY};
  borderRadius: 5;
  marginVertical: 5;
  justifyContent: center;
  paddingHorizontal: 10;
`;

const InputDescription = styled.TextInput.attrs({
  multiline: true,
  placeholder: 'Write something here ...',
  maxLength: 175,
  autoFocus: true,
  selectionColor: Platform.OS === 'ios' && colors.LIGHT_PINK,
  underlineColorAndroid: 'transparent',
  textAlignVertical: 'top'
})`
  height: 40%;
  width: 100%;
  fontSize: 18;
  color: ${props => props.theme.DARK_GREY};
  borderWidth: 1;
  borderColor: ${props => props.theme.LIGHT_GREY};
  borderRadius: 5;
  paddingHorizontal: 10;
  paddingVertical: 10;
`;

const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.LIGHT_GREY,
  placeholder: 'Title ...',
  selectionColor: Platform.OS === 'ios' ? colors.TAG_BLUE : undefined,
  autoCorrect: false,
  underlineColorAndroid: 'transparent'
})`
  height: 30;
  color: ${props => props.theme.LIGHT_BLUE}
`;
const ZipInput = styled.TextInput.attrs({
  placeholderTextColor: colors.LIGHT_GREY,
  placeholder: 'Zip ...',
  selectionColor: Platform.OS === 'ios' ? colors.TAG_BLUE : undefined,
  autoCorrect: false,
  underlineColorAndroid: 'transparent'
})`
  height: 30;
  color: ${props => props.theme.LIGHT_BLUE}
`;



const NeedButton = styled(Touchable).attrs({
  feedback: 'opacity',
  hitSlop: { top: 20, left: 20, right: 20, bottom: 20 }
})`
  backgroundColor: ${props => props.theme.LIGHT_BLUE};
  justifyContent: center;
  alignItems: center;
  width: 100%;
  height: 40;
  borderRadius: 5;
  marginTop: 10;
`;

const NeedButtonText = styled.Text`
  color: white;
  fontSize: 16;
`;


const TextLength = styled.Text`
  fontSize: 18;
  color: ${props => props.theme.LIGHT_BLUE};
`;



class NewNeedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      area: ''
    }
  }

  _onChangeText = (value, type) => this.setState({ [type]: value });

  componentWillMount() {
    console.log('=-=-=-=-=-=-=-=-==');
    navigator.geolocation.getCurrentPosition(position => {
      console.log('position was ', position);
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${GOOGLE_API_KEY}`)
      .then(resp => resp.json())
      .then((responseJson) => {
        this.setState({area:responseJson.results[0].address_components[7].short_name})
      })
    });
  }

  componentDidUpdate() {
    console.log('component updated, state is ', this.state);
  }

  descriptionLength() {
    return 200 - this.state.description.length;
  }

  _handleSubmit = async () => {
    const { title, description, area } = this.state;
    const { user } = this.props;

    await this.props.mutate({
      variables: {
        title,
        description,
        area
      },

      optimisticResponse: {
        __typename: 'Mutation',
        createNeed: {
          __typename: 'Need',
          title: this.state.title,
          description: this.state.description,
          area: {
            __typename: 'Area',
            _id: Math.round(Math.random() - 10000000),
            zipcode: this.state.area,
            name: ''
          },
          _id: Math.round(Math.random() - 10000000),
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),

          user: {
            __typename: 'User',
            _id: user._id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            avatar: user.avatar,
            createdAt: new Date(),
            updatedAt: new Date(),
          }
        },
      },

      // update after submitted the need
      update: (store, { data: { createNeed } }) => {
        const data = store.readQuery({ query: GET_NEEDS_QUERY });

        if(!data.getNeeds.find(need => need._id === createNeed._id)) {
          store.writeQuery({ query: GET_NEEDS_QUERY, data: { getNeeds: [{ ...createNeed }, ...data.getNeeds] } });
        }
      }

    });

    Keyboard.dismiss();
    this.props.navigation.goBack(null);
  }

  get _disabledButton() {
    return  this.state.title.length < 3 || this.state.description.length < 5;
  }

  dismissKeyboard() {
    return () => Keyboard.dismiss();
  }

  render() {
    return (
      <Root onPress={this.dismissKeyboard}>
        <Wrapper onPress={this.dismissKeyboard}>

          <InputWrapper>
            <Input value={this.state.title} onChangeText={value => this._onChangeText(value, 'title')}/>
          </InputWrapper>

          <InputWrapper>
            <ZipInput value={this.state.area} onChangeText={value => this._onChangeText(value, 'area')}/>
          </InputWrapper>

          <InputDescription value={this.state.description} onChangeText={value => this._onChangeText(value, 'description')}/>
            <TextLength>
              {this.descriptionLength()}
            </TextLength>

          <NeedButton onPress={this._handleSubmit} disabled={this._disabledButton}>
            <NeedButtonText>Add Need</ NeedButtonText>
          </NeedButton>

        </Wrapper>
      </Root>
    )
  }
}

export default compose(
  graphql(CREATE_NEED_MUTATION),
  connect(state => ({ user: state.user.info }))
)(NewNeedScreen);
