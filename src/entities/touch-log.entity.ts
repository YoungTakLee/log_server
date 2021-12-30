import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {TouchLogDto} from "../dtos/touch-log.dto";
import {IsEnum} from "class-validator";
import {ContentType} from "../enums/content-type.enum";
import {DisplayType} from "../enums/display-type.enum";

@Entity("touch_log")
export class TouchLogEntity {
    constructor(touchLogDto: TouchLogDto) {
        if (null != touchLogDto) {
            this.productName = touchLogDto.productName;
            this.equipId = touchLogDto.equipId;
            this.equipIdx = touchLogDto.equipIdx;
            this.theme = touchLogDto.theme;
            this.displayType = touchLogDto.displayType;
            this.contentType = touchLogDto.contentType;
            this.code = touchLogDto.code;
            this.site = touchLogDto.site;
            this.version = touchLogDto.version;
        }
    }

    @PrimaryGeneratedColumn()
    seq: number;
    @Column({name:"product_name"})
    productName: string;
    @Column({name:"equip_idx"})
    equipIdx: string;
    @Column({name:"equip_id"})
    equipId: string;
    @Column()
    theme: string;
    @Column({name:"display_type"})
    displayType: string;
    @Column({name:"content_type"})
    contentType: string;
    @Column()
    code: string;
    @Column()
    site: string;
    @Column()
    version: string;
    @Column({type: "datetime", name: "reg_date"})
    regDate: string;
}