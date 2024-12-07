import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    findAll(): object {   
        return {
            1: {
                name: 'Kokoma',
                age: 18, 
            },
            2: {
                name: 'Taylor Swift',
                age: 23, 
            },
        };
    }
}
