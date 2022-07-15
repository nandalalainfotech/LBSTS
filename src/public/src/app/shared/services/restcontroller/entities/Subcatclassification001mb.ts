
import { BaseEntity } from "./BaseEntity";
import { Categorydetails001mb } from "./Categorydetails001mb";
import { Subcategory001mb } from "./Subcategory001mb";

export class Subcatclassification001mb extends BaseEntity {
subcatclasiid?:number;
catcode?: Categorydetails001mb;
subcatcode?:Subcategory001mb;
classificationname?: string;
}