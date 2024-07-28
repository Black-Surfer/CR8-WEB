import { DateTime } from 'luxon';

export interface ProductOption {
  createdOn: DateTime;
  createdBy: string;
  modifiedOn: DateTime;
  modifiedBy: string;
  id: number;
  name: string;
  description: string;
  productOptionTypes: ProductOption[];
}

export interface ProductOptionForm {
  name: string;
  description: string;
  productOptionTypes: ProductOption[];
}
