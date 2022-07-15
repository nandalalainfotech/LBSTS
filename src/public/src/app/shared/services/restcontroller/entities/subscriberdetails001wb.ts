import { BaseEntity } from "./BaseEntity";
import { Contentmaster001mb } from "./Contentmaster001mb";
import { Payment001mb } from "./Payment001mb";
import { Person001mb } from "./Person001mb";
import { Subscriptionmaster001mb } from "./Subscriptionmaster001mb";

export class Subscriberdetails001wb extends BaseEntity {
personid?: Person001mb;
subpid?: Subscriptionmaster001mb;
payid?: Payment001mb;
contentid?:Contentmaster001mb;
horoscope?: string;
subscdesc?: string;
subscapproval?: boolean;
approvedby?: string;
approvedon?: string;
monthlyregistration?:Date
}