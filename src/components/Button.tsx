import styled from '@emotion/styled';
import React from 'react';

const StyledButton = styled.button`
  background: blue;
  color: white;
  font-size: 14px;
  padding: 6px 12px;
  border: 1px solid grey;
  border-radius: 5px;
`;

function Button() {
  return <StyledButton>Styled button</StyledButton>;
}

export default Button;
