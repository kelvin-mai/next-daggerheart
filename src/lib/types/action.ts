import { z } from 'zod';

export type ActionState<T extends z.ZodTypeAny, R = z.ZodTypeAny> = {
  success: boolean;
  errors?: {
    validation?: Partial<Record<keyof z.infer<T>, string[]>> | null;
    action?: string | null;
  };
  data?: R | null;
};
