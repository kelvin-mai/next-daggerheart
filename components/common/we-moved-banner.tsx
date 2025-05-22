'use client';

import * as React from 'react';

export const WeMovedBanner = () => {
  const [show, setShow] = React.useState<boolean>(false);
  React.useEffect(() => {
    if (!window.location.hostname.includes('daggerheartbrews')) {
      setShow(true);
    }
  }, []);
  if (!show) return null;

  return (
    <div className='mt-4 rounded-lg border border-dh-gold bg-dh-purple-light p-4 text-white'>
      <p>
        We have moved to a new domain! Please visit{' '}
        <a
          className='underline underline-offset-4'
          href='https://daggerheartbrews.com'
          rel='noopener'
          target='_blank'
        >
          daggerheartbrews.com
        </a>
      </p>
    </div>
  );
};
