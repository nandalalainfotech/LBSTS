

import { Audio001wb } from "./Audio001wb";
import { BaseEntity } from "./BaseEntity";
import { Photo001wb } from "./Photo001wb";
import { Subscriberdetails001wb } from "./subscriberdetails001wb";
import { Video001wb } from "./Video001wb";

export class Contentmaster001mb extends BaseEntity {

 name?: string;
 description?: string;
 size?: string;
 quality?: string;
 format?: string;
 photo?:Photo001wb;
 video?: Video001wb;
 audio?:Audio001wb;
 discountflag?: boolean;
 subid?: Subscriberdetails001wb;
 }