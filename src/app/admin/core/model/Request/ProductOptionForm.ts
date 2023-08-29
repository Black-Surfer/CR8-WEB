import { ProductOption } from "../ProductOption";

export interface ProductOptionForm {
    name:                string;
    description?:        string;
    productOptionTypes?: ProductOption[];
}
