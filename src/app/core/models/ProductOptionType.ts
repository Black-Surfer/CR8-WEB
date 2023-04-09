import { BaseModel } from "./BaseModel";

export interface productOptionTypes extends BaseModel {
    id:                  number;
    name:                string;
    productOptionId?:    number;
}