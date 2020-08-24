import React from 'react';
import Head from 'next/head';
import { Reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import { LayoutProps } from '../types';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
  }
`;

const LayoutIndex: React.FC<LayoutProps> = (props: LayoutProps) => {
  const { children } = props;
  return (
    <div className="container">
      <Head>
        <title>React assignment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
      <Reset />
      <GlobalStyle />
    </div>
  );
};

export default LayoutIndex;
