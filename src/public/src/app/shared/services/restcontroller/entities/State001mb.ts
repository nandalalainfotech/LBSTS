import { BaseEntity } from "./BaseEntity";
import { City001mb } from "./City001mb";
import { Country001mb } from "./Country001mb";

export class State001mb extends BaseEntity {
statename?: string;
statedesc?: string;
cityid?:  City001mb;
countryid?:Country001mb;
}