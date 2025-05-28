'use client';

import * as React from 'react';

export function useBoolean(defaultValue = false) {
  if (typeof defaultValue !== 'boolean') {
    throw new Error('defaultValue must be `true` or `false`');
  }
  const [value, setValue] = React.useState(defaultValue);

  const setTrue = React.useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = React.useCallback(() => {
    setValue(false);
  }, []);

  const toggle = React.useCallback(() => {
    setValue((x) => !x);
  }, []);

  return { value, setValue, setTrue, setFalse, toggle };
}
