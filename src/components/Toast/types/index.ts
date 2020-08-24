import { ReactNode } from 'react';

export type Active = number;

export interface Step {
  text: string;
}

export interface ToastProps {
  image?: string;
  steps: Array<Step>;
  active: Active;
  close: () => void;
}

export interface StepIndicatorProps {
  active: boolean;
}

export interface ButtonProps {
  action: () => void;
  children: ReactNode;
}

export interface ImageProps {
  children: ReactNode;
}

export type ToastAction =
  | { type: 'show' }
  | { type: 'close' }
  | { type: 'previous' }
  | { type: 'next' };

export type ToastDispatch = (action: ToastAction) => void;

export type ToastState = {
  active: Active;
  isVisible: boolean;
  steps: Array<Step>;
};

export type ToastProviderProps = {
  steps: Array<Step>;
  children: React.ReactNode;
};
