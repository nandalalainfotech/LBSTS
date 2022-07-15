import { BaseEntity } from "./BaseEntity";
import { Person001mb } from "./Person001mb";

export class Subscriptionmaster001mb extends BaseEntity {
    subpid?: string|any;
    subpname?: string;
    description?: string;
    tenure?: string;
    amount?: number;
    discountflag?: boolean;
    personid?: Person001mb;
}
