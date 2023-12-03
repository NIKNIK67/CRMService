/* tslint:disable */
/* eslint-disable */
import { ActionAccess } from '../models/action-access';
import { AnnoucementObject } from '../models/annoucement-object';
import { UserRole } from '../models/user-role';
export interface User {
  annoucements?: Array<AnnoucementObject> | null;
  email?: string | null;
  id?: number;
  password?: string | null;
  role?: UserRole;
  roleId?: number;
  rule?: ActionAccess;
  ruleId?: number;
}
