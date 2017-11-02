import React from 'react';
import { ActivityIndicator } from 'react-native';

import styled from 'styled-components/native';
import { colors } from '../utils/constants';

const Root = styled.View`
  justifyContent: center;
  alignItems: center;
  marginVertical: 10;
`;

export default function Loading({ color=colors.LIGHT_BLUE, size } = {}) {
  return (
    <Root>
      <ActivityIndicator color={color} size={size} />
    </Root>
  )
}
