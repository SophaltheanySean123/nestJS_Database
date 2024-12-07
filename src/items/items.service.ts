import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemsService {
    noFind(): object {
        return {
            3: {
                name: 'Konfu Panda',
                age: 18,
            },
            4: {
                name: 'Barbie Girl',
                age: 20,
            }
        };
    }
    oneFind(): object {
        return {
            10: {
                name: 'Nana',
                age: 18,
            },
            20: {
                name: 'Dora',
                age: 20,
            }
        };
    }
}
