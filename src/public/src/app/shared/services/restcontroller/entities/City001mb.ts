import { BaseEntity } from "./BaseEntity";
import { State001mb } from "./State001mb";

export class City001mb extends BaseEntity {

countryname?: string;
countrydesc?: string;
stateid?: State001mb;
}