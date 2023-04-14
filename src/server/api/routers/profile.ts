import {clerkClient} from '@clerk/nextjs/server';
import {TRPCError} from '@trpc/server';
import {createTRPCRouter, publicProcedure} from '@/server/api/trpc';
import {filterUserForClient} from '@/server/helpers/filterUserForClient';
import {z} from 'zod';

export const profileRouter = createTRPCRouter({
  getUserByUsername: publicProcedure
    .input(z.object({username: z.string()}))
    .query(async ({input}) => {
      const [user] = await clerkClient.users.getUserList({
        username: [input.username],
      });
      if (!user) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'Could not find user 😥',
        });
      }
      return filterUserForClient(user);
    }),
});
