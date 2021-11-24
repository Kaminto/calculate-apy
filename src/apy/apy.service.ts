import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeleteResult } from 'typeorm';
import { ApyEntity } from './apy.entity';
import { Cache } from 'cache-manager';
@Injectable()
export class ApyService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    @InjectRepository(ApyEntity)
    private apyRepository: Repository<ApyEntity>,
  ) {}

  async addToCache(key: string, item) {
    //Limit caching 1 hour
    await this.cacheManager.set(key, item, { ttl: 3600 });
  }

  async getFromCache(key: string) {
    const value = await this.cacheManager.get(key);
    return value;
  }

  async findByCustomerId(customer_id): Promise<ApyEntity[]> {
    return await this.apyRepository.find({ where: { customer_id } });
  }

  async create(entity: ApyEntity): Promise<ApyEntity> {
    const interest_rate = entity.interest_rate;
    const yearly_compound_times = entity.yearly_compound_times;
    let apy =
      Math.pow(
        1 + interest_rate / yearly_compound_times,
        yearly_compound_times,
      ) - 1;
    apy = Number(apy.toFixed(5)) * 100;
    return await this.apyRepository.save({
      ...entity,
      apy,
      amount: apy + entity.deposit,
    });
  }

  async delete(customer_id): Promise<DeleteResult> {
    return await this.apyRepository.delete({ customer_id });
  }
}
