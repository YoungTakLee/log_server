import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {TouchLogDto} from "../dtos/touch-log.dto";

@Entity("touch_log")
export class TouchLogEntity {
    constructor(touchLogDto: TouchLogDto) {
        if (null != touchLogDto) {
            this.type = touchLogDto.type;
            this.id = touchLogDto.id;
            this.site = touchLogDto.site;
            this.version = touchLogDto.version;
        }
    }

    @PrimaryGeneratedColumn()
    seq: number;

    @Column()
    type: string;

    @Column()
    id: string;

    @Column()
    site: string;

    @Column()
    version: string;

    @Column({type: "datetime", name: "reg_date"})
    regDate: string;
}