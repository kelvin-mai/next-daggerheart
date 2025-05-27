'use server';

import { z } from 'zod';

import type { ActionState } from '@/lib/types';
import { auth } from '@/lib/auth';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const login = async (
  _: ActionState<typeof loginSchema>,
  formData: FormData,
): Promise<ActionState<typeof loginSchema>> => {
  const validation = loginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });
  if (!validation.success) {
    return {
      errors: { validation: validation.error.flatten().fieldErrors },
      success: false,
    };
  } else {
    try {
      await auth.api.signInEmail({
        body: {
          email: validation.data.email,
          password: validation.data.password,
        },
      });

      return {
        success: true,
      };
    } catch (e) {
      return {
        errors: { action: (e as Error).message },
        success: false,
      };
    }
  }
};

const registerSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8),
});

export const register = async (
  _: ActionState<typeof registerSchema>,
  formData: FormData,
): Promise<ActionState<typeof registerSchema>> => {
  const validation = registerSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  });
  if (!validation.success) {
    return {
      errors: { validation: validation.error.flatten().fieldErrors },
      success: false,
    };
  } else {
    try {
      await auth.api.signUpEmail({
        body: {
          name: validation.data.name,
          email: validation.data.email,
          password: validation.data.password,
        },
      });
      return {
        success: true,
      };
    } catch (e) {
      return {
        errors: { action: (e as Error).message },
        success: false,
      };
    }
  }
};
