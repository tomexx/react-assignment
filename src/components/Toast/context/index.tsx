import React, { createContext, useReducer, useContext } from 'react';
import {
  ToastState,
  ToastAction,
  ToastDispatch,
  ToastProviderProps,
} from '../types';

const ToastStateContext = createContext<ToastState | undefined>(undefined);
const ToastDispatchContext = createContext<ToastDispatch | undefined>(
  undefined,
);

function toastReducer(state: ToastState, action: ToastAction): ToastState {
  switch (action.type) {
    case `show`: {
      return {
        ...state,
        isVisible: true,
        active: 0,
      };
    }
    case `close`: {
      return {
        ...state,
        isVisible: false,
      };
    }
    case `previous`: {
      return {
        ...state,
        active: state.active > 0 ? state.active - 1 : 0,
      };
    }
    case `next`: {
      return {
        ...state,
        active:
          state.active < state.steps.length - 1
            ? state.active + 1
            : state.active,
      };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
}

function ToastProvider({ children, steps }: ToastProviderProps): JSX.Element {
  const [state, dispatch] = useReducer(toastReducer, {
    active: 0,
    isVisible: false,
    steps,
  });
  return (
    <ToastStateContext.Provider value={state}>
      <ToastDispatchContext.Provider value={dispatch}>
        {children}
      </ToastDispatchContext.Provider>
    </ToastStateContext.Provider>
  );
}

function useToastState(): ToastState {
  const context = useContext(ToastStateContext);
  if (context === undefined) {
    throw new Error(`useToastState must be used within a ToastProvider`);
  }
  return context;
}

function useToastDispatch(): ToastDispatch {
  const context = useContext(ToastDispatchContext);
  if (context === undefined) {
    throw new Error(`useToastDispatch must be used within a ToastProvider`);
  }
  return context;
}

export { ToastProvider, useToastState, useToastDispatch };
