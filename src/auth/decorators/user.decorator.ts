import {
  createParamDecorator,
  ExecutionContext,
  InternalServerErrorException,
} from '@nestjs/common';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (!request.user) {
      throw new InternalServerErrorException(
        'User not found in request (AuthGuard called?)',
      );
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return request.user;
  },
);
