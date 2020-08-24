import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from '../types';

const StyledButton = styled.button`
  display: block;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  border: 0;
  background: #eee;
  cursor: pointer;
  border-radius: 100%;
  & > * {
    display: block;
    margin: 0 auto;
    transform: scale(1.3);
  }
  @media (max-width: 320px) {
    background: transparent;
  }
`;

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { action, children } = props;
  return (
    <StyledButton type="button" onClick={action} aria-label="Close">
      {children}
    </StyledButton>
  );
};
