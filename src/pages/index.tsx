import React from 'react';
import LayoutIndex from 'layout';
import styled from 'styled-components';
import {
  ToastHolder,
  ToastProvider,
  useToastDispatch,
} from '@/components/Toast';
import { Step } from '@/components/Toast/types';

const StyledMain = styled.main`
  margin: 2em;
  max-width: 80em;
  text-align: center;
  & > h1 {
    font-size: 2em;
    margin: 0 0 1em;
  }
`;

const StyledToastControls = styled.div`
  & > button {
    margin: 0.2em;
  }
`;

const steps: Step[] = [
  {
    text: `Confirm on your Trezor`,
  },
  {
    text: `2nd sample step`,
  },
  {
    text: `3rd sample step`,
  },
  {
    text: `Confirmation done. Thank you for using Trezor.`,
  },
];

const ToastControls: React.FC<{}> = () => {
  const dispatch = useToastDispatch();
  return (
    <StyledToastControls>
      <button
        type="button"
        data-test-toast-init
        onClick={() => dispatch({ type: `show` })}
      >
        Initialize / show Toast instance
      </button>
      <button
        type="button"
        data-test-toast-previous
        onClick={() => dispatch({ type: `previous` })}
      >
        Previous step
      </button>
      <button
        type="button"
        data-test-toast-next
        onClick={() => dispatch({ type: `next` })}
      >
        Next step
      </button>
      <button
        type="button"
        data-test-toast-close
        onClick={() => dispatch({ type: `close` })}
      >
        Close Toast instance
      </button>
    </StyledToastControls>
  );
};

const Home: React.FC<{}> = () => (
  <LayoutIndex>
    <div className="container">
      <StyledMain>
        <h1>React Toast component playground</h1>
        <ToastProvider steps={steps}>
          <ToastControls />
          <ToastHolder />
        </ToastProvider>
      </StyledMain>
    </div>
  </LayoutIndex>
);

export default Home;
