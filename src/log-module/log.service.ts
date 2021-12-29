import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {TouchLogEntity} from "../entities/touch-log.entity";
import {TouchLogDto} from "../dtos/touch-log.dto";

@Injectable()
export class LogService {
    constructor(
        @InjectRepository(TouchLogEntity)
        private touchLogRepository: Repository<TouchLogEntity>) {}

    findAll(): Promise<TouchLogEntity[]> {
        return this.touchLogRepository.find();
    }

    insertTouchLog(touchLogDto: TouchLogDto): TouchLogEntity {
        try {
            let resultPromise;
            this.touchLogRepository.insert(new TouchLogEntity(touchLogDto)).then(value => {
                resultPromise = value;
            });
            return resultPromise;
        } catch (e) {
            throw new HttpException(e,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
