
import { BaseEntity } from "./BaseEntity";
import { Contentmaster001mb } from "./Contentmaster001mb";

export class Video001wb extends BaseEntity {
    videoid?:string;
    contentid?: Contentmaster001mb;
    fieldname?: String;
    filename?: String;
    originalname?: String;
    content?: Buffer;
    flag?:boolean;
    fileid?:string;
}