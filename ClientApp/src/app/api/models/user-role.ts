/* tslint:disable */
/* eslint-disable */
import { ActionAccess } from '../models/action-access';
import { User } from '../models/user';
export interface UserRole {
  id?: number;
  name?: string | null;
  roleOwners?: Array<User> | null;
  ruleId?: number;
  rules?: Array<ActionAccess> | null;
}
