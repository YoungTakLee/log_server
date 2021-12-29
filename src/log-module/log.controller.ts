import {Body, Controller, Get, Post} from '@nestjs/common';
import {LogService} from "./log.service";
import {TouchLogDto} from "../dtos/touch-log.dto";
import {TouchLogEntity} from "../entities/touch-log.entity";

@Controller('log')
export class LogController {

    constructor(private readonly logService: LogService) {
    }

    @Get()
    async findAllLogs(): Promise<TouchLogEntity[]> {
        return this.logService.findAll();
    }

    @Post("/insert")
    insertTouchLog(@Body() touchLogDto: TouchLogDto): TouchLogEntity {
        return this.logService.insertTouchLog(touchLogDto);
    }

}
