'use server';

import { headers } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { eq, sql } from 'drizzle-orm';

import type { ActionState } from '@/lib/types';
import { db } from '@/lib/database';
import { users } from '@/lib/database/schema';
import { auth } from '@/lib/auth';

const profileSchema = z.object({
  email: z.string().email(),
  name: z.string(),
});

export const updateProfile = async (
  _: ActionState<typeof profileSchema>,
  formData: FormData,
): Promise<ActionState<typeof profileSchema>> => {
  const validation = profileSchema.safeParse({
    email: formData.get('email'),
    name: formData.get('name'),
  });
  if (!validation.success) {
    return {
      errors: { validation: validation.error.flatten().fieldErrors },
      success: false,
    };
  } else {
    try {
      const session = await auth.api.getSession({
        headers: await headers(),
      });
      if (validation.data.email !== session?.user.email) {
        throw new Error('Unauthorized');
      }
      await db
        .update(users)
        .set({ name: validation.data.name, updatedAt: sql`now()` })
        .where(eq(users.email, validation.data.email));
      revalidatePath('/profile');
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
