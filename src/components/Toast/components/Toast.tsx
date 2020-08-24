import React from 'react';
import styled from 'styled-components';
import { ToastProps } from '../types';
import { StepIndicator } from './StepIndicator';
import { Button } from './Button';
import { Image } from './Image';
import { IconClose } from './IconClose';

const StyledToast = styled.div`
  position: fixed;
  display: flex;
  right: 0;
  left: 0;
  bottom: 2em;
  margin-right: auto;
  margin-left: auto;
  width: 90%;
  max-width: 400px;
  height: 5em;
  background: #fff;
  box-sizing: border-box;
  padding: 0.7em 1em 0.7em 1.3em;
  font-size: 1em;
  text-align: center;
  border-radius: 3em;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  transition: opacity 0.3s ease, margin-bottom 0.3s ease;
  @media (max-width: 320px) {
    width: 100%;
    bottom: 0;
    border-radius: 0;
    padding: 0.2em 0.2em 0 0;
    box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.12);
  }
`;

const StyledFirst = styled.div`
  flex: 0 0 3.7em;
  @media (max-width: 320px) {
    display: none;
  }
`;

const StyledMiddle = styled.div`
  padding: 0.1em 1em 0;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const StyledLast = styled.div`
  flex: 0 0 3.7em;
  box-sizing: border-box;
  padding: 0.3em;
`;

const StyledText = styled.div`
  line-height: 1.2;
  font-size: 1em;
  display: flex;
  flex: 0 0 2.6em;
  justify-content: center;
  align-items: center;
  max-height: 2.6em;
  overflow: hidden;
  margin: 0 0 0.2em 0;
`;

const StyledSteps = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0.2em 0 0 0;
  & > * {
    margin: 0 0.2em;
  }
`;

export const Toast: React.FC<ToastProps> = (props: ToastProps) => {
  const { image, steps, active, close } = props;

  return (
    <StyledToast data-test-toast>
      {image !== undefined && (
        <StyledFirst>
          <Image>
            <img src={image} alt="Trezor icon" />
          </Image>
        </StyledFirst>
      )}
      <StyledMiddle>
        {active !== undefined && <StyledText>{steps[active].text}</StyledText>}
        <StyledSteps>
          {steps.map((item, i) => {
            return (
              <StepIndicator key={`item-${item.text}`} active={i === active} />
            );
          })}
        </StyledSteps>
      </StyledMiddle>
      <StyledLast>
        <Button action={() => close()}>
          <IconClose />
        </Button>
      </StyledLast>
    </StyledToast>
  );
};
