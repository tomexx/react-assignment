## Demo

[react-assignment.vercel.app](https://react-assignment.vercel.app/)

## Installation

```
yarn
```

## Development

```
yarn dev
```

## Integration tests

```
yarn cypress open
yarn cypress run
yarn cypress run --browser chrome
yarn cypress run --browser firefox
```

## Example usage

```typescript
import {
  ToastHolder,
  ToastProvider,
  useToastDispatch,
} from '@/components/Toast';

const steps: Step[] = [
  {
    text: `Confirm on your Trezor`,
  },
  {
    text: `Thank you`,
  },
];

const ToastControls: React.FC<{}> = () => {
  const dispatch = useToastDispatch();
  return (
    <StyledToastControls>
      <button type="button" onClick={() => dispatch({ type: `show` })}>
        Initialize / show Toast instance
      </button>
      <button type="button" onClick={() => dispatch({ type: `previous` })}>
        Previous step
      </button>
      <button type="button" onClick={() => dispatch({ type: `next` })}>
        Next step
      </button>
      <button type="button" onClick={() => dispatch({ type: `close` })}>
        Close Toast instance
      </button>
    </StyledToastControls>
  );
};

<ToastProvider steps={steps}>
  <ToastControls />
  <ToastHolder />
</ToastProvider>;
```
