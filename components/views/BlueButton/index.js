import React from 'react';
import { StyledView, StyledTouchableHighlight, StyledText } from './style';

const BlueButton = handler => displayName  => (
    <StyledView>
      <StyledTouchableHighlight underlayColor={'red'}  onPress={handler}>
        <StyledText>{displayName}</StyledText>
      </StyledTouchableHighlight>
    </StyledView>
);

export default BlueButton;


