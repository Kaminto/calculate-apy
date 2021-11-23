import { Module, CacheModule } from '@nestjs/common';
import { ApyService } from './apy.service';
import { ApyController } from './apy.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApyEntity } from './apy.entity';

@Module({
  imports: [CacheModule.register(), TypeOrmModule.forFeature([ApyEntity])],
  providers: [ApyService],
  controllers: [ApyController],
})
export class ApyModule {}
