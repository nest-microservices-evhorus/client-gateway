import {
  createParamDecorator,
  ExecutionContext,
  InternalServerErrorException,
} from '@nestjs/common';

export const Token = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (!request.token) {
      throw new InternalServerErrorException(
        'Token not found in request (AuthGuard called?)',
      );
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return request.token;
  },
);
