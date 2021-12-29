import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {TouchLogEntity} from "./entities/touch-log.entity";
import {LogModuleModule} from './log-module/log-module.module';

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type:'mysql',
        host:'ges-maria-db.cmuqvovinlcr.ap-northeast-2.rds.amazonaws.com',
        timezone:'Z',
        port: 3306,
        username: 'gadmin',
        password: 'green2020',
        database: 'touch_event',
        entities: [TouchLogEntity],
      }), LogModuleModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
