// import { Body, Controller, Post } from '@nestjs/common';
// import { UserService } from './user.service';
// import { ApiTags } from '@nestjs/swagger';
// import { CreateUserDto } from './dto/create-user.dto';
// @ApiTags('Users')
// @Controller('users')
// export class UserController {
//   constructor(private userService: UserService) {}

//   @Post()
//   createUser(@Body() requestBody: CreateUserDto) {
//     return this.userService.create(requestBody);
//   }

//   @Post('register')
//   registerUser(@Body() requestBody: CreateUserDto) {
//     return this.userService.register(requestBody);
//   }

  
// }

import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto'; // Thêm DTO cho login

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  createUser(@Body() requestBody: CreateUserDto) {
    return this.userService.create(requestBody);
  }

  @Post('register')
  registerUser(@Body() requestBody: CreateUserDto) {
    return this.userService.register(requestBody);
  }

  @Post('login')
  loginUser(@Body() requestBody: LoginUserDto) {
    return this.userService.login(requestBody.email, requestBody.password);
  }
}
