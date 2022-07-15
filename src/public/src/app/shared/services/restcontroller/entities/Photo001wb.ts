
import { BaseEntity } from "./BaseEntity";
import { Contentmaster001mb } from "./Contentmaster001mb";

export class Photo001wb extends BaseEntity {
contentid?: Contentmaster001mb;
photoid?:string;
fieldname?: String;
filename?: String;
originalname?: String;
content?: Buffer;
flag?:boolean;
fileid?:string;
}