import { PasswordRequirements } from '@/components/common';

export const passwordRequirements: PasswordRequirements[] = [
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
];
