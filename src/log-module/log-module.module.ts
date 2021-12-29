import { Module } from '@nestjs/common';
import {LogController} from "./log.controller";
import {LogService} from "./log.service";
import {TouchLogRepository} from "../repositories/touch-log.repository";

@Module({
    imports:[TouchLogRepository],
    controllers:[LogController],
    providers:[LogService],
})
export class LogModuleModule {}
