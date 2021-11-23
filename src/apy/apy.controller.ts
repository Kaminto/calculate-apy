import {
  Controller,
  Get,
  Post,
  CacheInterceptor,
  Delete,
  Body,
  Param,
  UseInterceptors,
} from '@nestjs/common';

import { ApyService } from './apy.service';
import { ApyEntity } from './apy.entity';

@Controller('apy')
@UseInterceptors(CacheInterceptor)
export class ApyController {
  constructor(private apyService: ApyService) {}

  @Get(':customer_id')
  async findByCustomerId(@Param('customer_id') customer_id) {
    const cache = await this.apyService.getFromCache('apys');
    console.log('cache2', cache);
    if (cache) {
      return cache;
    } else {
      const response = await this.apyService.findByCustomerId(customer_id);

      await this.apyService.addToCache('apys', response);
      return response;
    }
  }

  @Post()
  async create(@Body() entitytData: ApyEntity): Promise<any> {
    return await this.apyService.create(entitytData);
  }

  @Delete(':customer_id')
  async delete(@Param('customer_id') customer_id): Promise<any> {
    return await this.apyService.delete(customer_id);
  }
}
