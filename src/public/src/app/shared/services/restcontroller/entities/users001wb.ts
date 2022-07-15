
import { BaseEntity } from "./BaseEntity";
import { Person001mb } from "./Person001mb";

export class User001wb extends BaseEntity {

    personid?: any;
    employeeid?: string;
    bankname?: string;
    accountnumber?: string;
    insurance?: string;
    accounttype?: string;
}