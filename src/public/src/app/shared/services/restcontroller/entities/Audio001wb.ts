
import { BaseEntity } from "./BaseEntity";
import { Contentmaster001mb } from "./Contentmaster001mb";

export class Audio001wb extends BaseEntity {
    audioid?:string;
    contentid?: Contentmaster001mb;
    fieldname?: String;
    filename?: String;
    originalname?: String;
    content?: Buffer;
    flag?:Boolean;
    fileid?:string;
}