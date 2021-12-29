import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {TouchLogEntity} from "../entities/touch-log.entity";

@Module({
    imports: [TypeOrmModule.forFeature([TouchLogEntity])],
    exports: [TypeOrmModule]
})
export class TouchLogRepository {
}