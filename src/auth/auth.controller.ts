import { Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy, Payload } from '@nestjs/microservices';
import { NATS_SERVICE } from 'src/config';
import { LoginUserDto, RegisterUserDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(NATS_SERVICE)
    private readonly client: ClientProxy,
  ) {}

  @Post('register')
  registerUser(@Payload() registerUserDto: RegisterUserDto) {
    return this.client.send('auth.register.user', registerUserDto);
  }

  @Post('login')
  loginUser(@Payload() loginUserDto: LoginUserDto) {
    return this.client.send('auth.login.user', loginUserDto);
  }

  @Post('verify')
  verifyUser() {
    return this.client.send('auth.verify.user', {});
  }
}
