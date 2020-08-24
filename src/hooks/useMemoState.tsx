import { useState, useCallback } from 'react';
import _ from 'lodash';

const useMemoState = (value: any) => {
  console.log(typeof value);
  const [state, setState] = useState(value);
  console.log('render memoState');

  const newState = useCallback(
    (prevState) => {
      if (!_.isEqual(prevState, state)) setState(prevState);
    },
    [state]
  );

  return [state, newState];
};

export default useMemoState;
