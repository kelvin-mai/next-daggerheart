'use client';
import { useState } from 'react';
import { useMotionTemplate, useMotionValue, motion } from 'framer-motion';

import { Label } from '@/components/ui';

type FormFieldProps = React.PropsWithChildren & {
  label: string;
  htmlFor: string;
};

export const FormField: React.FC<FormFieldProps> = ({
  label,
  htmlFor,
  children,
}) => {
  const radius = 100;
  const [visible, setVisible] = useState(false);

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div className='flex w-full flex-col space-y-2'>
      <Label htmlFor={htmlFor}>{label}</Label>
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + 'px' : '0px'} circle at ${mouseX}px ${mouseY}px,
          var(--dh-purple),
          transparent 80%
        )
      `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className='group/input rounded-lg p-[2px] transition duration-300'
      >
        {children}
      </motion.div>
    </div>
  );
};
