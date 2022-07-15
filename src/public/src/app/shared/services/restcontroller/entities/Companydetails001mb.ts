import { BaseEntity } from "./BaseEntity";
import { Regionaldetails001mb } from "./Regionaldetails001mb";

export class Companydetails001mb extends BaseEntity {

companyname?: String;
address?: String;
phonenumber?: Number;
regionalid?: Regionaldetails001mb;
}