'use client';

import * as React from 'react';
import { Check, X } from 'lucide-react';

import { cn } from '@/lib/utils';

export type PasswordRequirements = {
  text: string;
  test: (password: string) => boolean;
};

export const defaultRequirements: PasswordRequirements[] = [
  {
    text: 'At least 8 characters',
    test: (s) => s.length >= 8,
  },
  {
    text: 'At least 1 number',
    test: (s) => /[0-9]/.test(s),
  },
  {
    text: 'At least 1 uppercase letter',
    test: (s) => /[A-Z]/.test(s),
  },
  {
    text: 'At least 1 lowercase letter',
    test: (s) => /[a-z]/.test(s),
  },
  {
    text: 'At least one special character',
    test: (s) => /[^A-Za-z0-9]/.test(s),
  },
];

type PasswordStrengthMeterProps = {
  password: string;
  requirements?: PasswordRequirements[];
};

export const PasswordStrengthMeter: React.FC<PasswordStrengthMeterProps> = ({
  password,
  requirements = defaultRequirements,
}) => {
  const [requirementsMet, setRequirementsMet] = React.useState<boolean[]>([]);
  React.useEffect(() => {
    const met = requirements.map((req) => req.test(password));
    setRequirementsMet(met);
  }, [password, requirements]);

  const strengthScore = requirementsMet.filter(Boolean).length;

  const strengthText = React.useMemo(() => {
    if (!password || password.length === 0) {
      return 'Enter a password';
    } else if (strengthScore >= requirements.length - 1) {
      return 'Strong password';
    } else if (strengthScore >= Math.floor(requirements.length - 1 / 2)) {
      return 'Medium password';
    } else {
      return 'Weak password';
    }
  }, [password, requirements, strengthScore]);

  const strengthColor = React.useMemo(() => {
    if (!password || password.length === 0) {
      return 'bg-border';
    } else if (strengthScore >= requirements.length - 1) {
      return 'bg-emerald-500';
    } else if (strengthScore >= Math.floor(requirements.length - 1 / 2)) {
      return 'bg-amber-500';
    } else {
      return 'bg-orange-500';
    }
  }, [password, requirements, strengthScore]);

  return (
    <div>
      <div
        className='bg-border mb-4 h-1 w-full overflow-hidden rounded-full'
        role='progressbar'
        aria-valuenow={strengthScore}
        aria-valuemin={0}
        aria-valuemax={requirements.length}
        aria-label='Password strength'
      >
        <div
          className={cn(
            'h-full transition-all duration-500 ease-out',
            strengthColor,
          )}
          style={{ width: `${(strengthScore / requirements.length) * 100}%` }}
        ></div>
      </div>
      <p className='text-foreground mb-2 text-sm font-medium'>
        {strengthText}. Must contain:
      </p>

      <ul className='space-y-1.5' aria-label='Password requirements'>
        {requirements.map((req, i) => (
          <li key={i} className='flex items-center gap-2'>
            {requirementsMet[i] ? (
              <Check
                size={16}
                className='text-emerald-500'
                aria-hidden='true'
              />
            ) : (
              <X
                size={16}
                className='text-muted-foreground/80'
                aria-hidden='true'
              />
            )}
            <span
              className={cn(
                'text-xs',
                requirementsMet[i]
                  ? 'text-emerald-600'
                  : 'text-muted-foreground',
              )}
            >
              {req.text}
              <span className='sr-only'>
                {requirementsMet[i]
                  ? ' - Requirement met'
                  : ' - Requirement not met'}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
