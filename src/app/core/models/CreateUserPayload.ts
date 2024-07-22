import { DateTime } from 'luxon';

export interface CreateUserPayload {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  contactAddress: string;
  createdOn: DateTime;
  createdBy: string;
  modifiedOn: DateTime;
  modifiedBy: string;
}
