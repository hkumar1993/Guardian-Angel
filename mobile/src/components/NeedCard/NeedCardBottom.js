import React from 'react';
import styled from 'styled-components/native';
import { Ionicons, Entypo, FontAwesome, EvilIcons } from '@expo/vector-icons';
import Touchable from '@appandflow/touchable';

import { colors } from '../../utils/constants';

const ICON_SIZE = 20;

const Root = styled.View`
  height: 40;
  backgroundColor: pink;
  flexDirection: row;
`

const Button = styled(Touchable).attrs({
  feedback: 'opacity'
})`
  flex: 1;
  backgroundColor: green;
  flexDirection: row;
  alignItems: center;
  justifyContent: space-around;
  paddingHorizontal: 32px;
  marginLeft: 5px;
`;

const ButtonText = styled.Text`
  fontSize: 14;
  fontWeight: 500;
  color: ${ props => props.theme.LIGHT_GREY }
`;

const favoriteCount = 3;
const isFavorited = false;
const location = 94114;
const tag = 'housing'

function NeedCardBottom() {
  return (
    <Root>
      <Button>
        <EvilIcons
          name="location"
          size={ICON_SIZE}
          color={colors.LIGHT_GREY}
        />
        <ButtonText>
          { location }
        </ButtonText>
      </Button>
      <Button>
        <Ionicons
          name="md-pricetags"
          size={ICON_SIZE}
          color={colors.LIGHT_GREY}
        />
        <ButtonText>
          { tag }
        </ButtonText>
      </Button>
      <Button>
        <ButtonText>
          Follow
        </ButtonText>
      </Button>
    </Root>
  )
}

export default NeedCardBottom;
