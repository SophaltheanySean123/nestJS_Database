import { Controller, Get } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}

    @Get()
    noFind(): object {
        return this.itemsService.noFind(); 
    }
    @Get('/outside')
    oneFind(): object {
        return this.itemsService.oneFind(); 
    }
}
