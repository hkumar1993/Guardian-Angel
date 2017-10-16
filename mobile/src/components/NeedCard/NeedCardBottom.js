import React from 'react';
import styled from 'styled-components/native';
import { Ionicons, Entypo, FontAwesome, EvilIcons } from '@expo/vector-icons';
import Touchable from '@appandflow/touchable';

import { colors } from '../../utils/constants';

const ICON_SIZE = 20;

const Root = styled.View`
  minHeight: 20;
  flexDirection: row;
  justifyContent: space-between;
`

const InfoContainer = styled.View`
flexDirection: row;
`;

const ZipCode = styled.View`
flexDirection: row;
marginRight: 5;
`;

const TagsContainer = styled.View`
flexDirection: row;
`;

const Tag = styled(Touchable).attrs({
  feedback: 'opacity'
})`
  flexDirection: row;
  justifyContent: flex-start;
  marginRight: 5px;
  backgroundColor: ${props => props.theme.TAG_BLUE}
  paddingHorizontal: 10px;
  borderRadius: 5px;

`;

const Button = styled(Touchable).attrs({
  feedback: 'opacity'
})`
  flexDirection: row;
  justifyContent: flex-start;
  marginRight: 5px;
`;

const ButtonText = styled.Text`
  fontSize: 14;
  fontWeight: 500;
  color: ${ props => props.theme.LIGHT_GREY }
`;

const TagText = styled.Text`
  fontSize: 14;
  fontWeight: 500;
  alignSelf: center;
  color: ${ props => props.theme.DARK_GREY }
`;

const favoriteCount = 3;
const isFavorited = false;
const location = 94114;
const tag = 'housing'

function NeedCardBottom({area}) {
  return (
    <Root>
      <InfoContainer>
        <ZipCode>
          <EvilIcons
            name="location"
            size={ICON_SIZE}
            color={colors.LIGHT_GREY}
            style={{marginRight: '1%'}}
            />
          <Button>
            <ButtonText>
              { area.zipcode }
            </ButtonText>
          </Button>
        </ZipCode>

      </InfoContainer>

    </Root>
  )
}

export default NeedCardBottom;
