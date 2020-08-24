import React from 'react';
import styled from 'styled-components';
import { ImageProps } from '../types';

const StyledImage = styled.div`
  & > img {
    display: block;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const Image: React.FC<ImageProps> = (props: ImageProps) => {
  const { children } = props;
  return <StyledImage>{children}</StyledImage>;
};
