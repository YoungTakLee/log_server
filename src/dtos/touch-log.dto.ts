import {IsEnum, IsString, MaxLength} from "class-validator";
import {DisplayType} from "../enums/display-type.enum";
import {ContentType} from "../enums/content-type.enum";

export class TouchLogDto {
    @IsString()
    @MaxLength(10,{message:"ProductName is too long"})
    readonly productName:string;

    @IsString()
    @MaxLength(10,{message:"EquipIdx is too long"})
    readonly equipIdx:string;

    @IsString()
    @MaxLength(10,{message:"EquipId is too long"})
    readonly equipId:string;

    @IsString()
    @MaxLength(10,{message:"Theme is too long"})
    readonly theme:string;

    @IsString()
    @IsEnum(DisplayType)
    @MaxLength(10,{message:"DisplayType is too long"})
    readonly displayType:string;

    @IsString()
    @IsEnum(ContentType)
    @MaxLength(10,{message:"contentType is too long"})
    readonly contentType:string;

    @IsString()
    @MaxLength(20,{message:"Site is too long"})
    readonly site:string;

    @IsString()
    @MaxLength(10,{message:"Version is too long"})
    readonly version:string;

    @IsString()
    @MaxLength(20,{message:"Code is too long"})
    readonly code:string;
}