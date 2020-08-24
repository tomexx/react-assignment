import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { StepIndicatorProps } from '../types';

const StyledStepIndicator = styled(motion.div)`
  width: 1em;
  height: 0.35em;
  border-radius: 0.35em;
`;

export const StepIndicator: React.FC<StepIndicatorProps> = (
  props: StepIndicatorProps,
) => {
  const { active } = props;
  return (
    <StyledStepIndicator
      data-test-toast-indicator={active === true}
      animate={{ background: active === true ? `#01B757` : `#dadada` }}
    />
  );
};
