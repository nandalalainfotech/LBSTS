import { BaseEntity } from "./BaseEntity";
import { State001mb } from "./State001mb";

export class Country001mb extends BaseEntity {

countryname?: string;
countrydesc?: string;
stateid?: State001mb;
}