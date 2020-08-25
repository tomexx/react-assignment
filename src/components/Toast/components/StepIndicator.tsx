import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { StepIndicatorProps } from '../types';

const StyledStepIndicatorWrapper = styled.div`
  width: 1em;
  height: 0.35em;
  border-radius: 0.35em;
  background: #dadada;
`;

const StyledStepIndicator = styled(motion.div)`
  width: 100%;
  height: 100%;
  border-radius: 0.35em;
`;

export const StepIndicator: React.FC<StepIndicatorProps> = (
  props: StepIndicatorProps,
) => {
  const { active } = props;
  return (
    <StyledStepIndicatorWrapper>
      <StyledStepIndicator
        data-test-toast-indicator={active === true}
        animate={{
          backgroundColor: active === true ? `#01B757` : `#dadada`,
        }}
      />
    </StyledStepIndicatorWrapper>
  );
};
