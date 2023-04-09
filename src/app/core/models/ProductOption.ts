import { BaseModel } from "./BaseModel";

export interface ProductOption extends BaseModel{
    id?:                  number;
    name?:                string;
    description?:        string;
    productOptionTypes?: ProductOption[];
}