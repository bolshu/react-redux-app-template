import React from 'react';

import Button from 'components/Button';

type TProps = {
  counter: number;
  increment: () => void;
  decrement: () => void;
};

const Counter: React.FC<TProps> = ({
  counter,
  increment,
  decrement,
}) => (
  <>
    <h1>Counter</h1>
    <div>
      <Button onClick={decrement}>
        -
      </Button>

      {counter}

      <Button onClick={increment}>
        +
      </Button>
    </div>
  </>
);

export default Counter;
