import React from 'react';
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';

const Button = styled(Touchable).attrs({
  feedback: 'opacity',
  hitslop: { top: 20, bottom: 20, right: 20, left: 20 }
})`
  marginLeft: ${props => props.side === 'left' ? 15: 0};
  marginRight: ${props => props.side === 'right' ? 15 : 0};
  justifyContent: center;
  alignItems: center;
`;

export default function ButtonHeader({ side, children, onPress, disabled }) {
  return (
    <Button onPress={onPress} disabled={disabled}>
      {children}
    </Button>
  )
}
