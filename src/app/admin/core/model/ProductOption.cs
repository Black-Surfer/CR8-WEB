export interface ProductOption {
    id:                  number;
    name:                string;
    description?:        string;
    productOptionTypes?: ProductOption[];
    createdOn:           Date;
    createdBy:           string;
    modifiedOn:          Date;
    modifiedBy:          string;
    productOptionID?:    number;
}
