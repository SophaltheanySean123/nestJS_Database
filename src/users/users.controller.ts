import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Get()
    findAll(): object{
        return this.usersService.findAll();

    }
}
