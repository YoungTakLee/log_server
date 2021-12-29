import {IsNumber, IsString} from "class-validator";

export class TouchLogDto {
    @IsString()
    readonly type:string;
    @IsString()
    readonly code:string;
    @IsString()
    readonly id:string;
    @IsString()
    readonly site:string;
    @IsString()
    readonly version:string;
}