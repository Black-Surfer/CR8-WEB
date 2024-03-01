import { ProductOption } from "src/app/core/models/ProductOption";

export interface ProductOptionForm {
    name:                string;
    description?:        string;
    productOptionTypes?: ProductOption[];
}
