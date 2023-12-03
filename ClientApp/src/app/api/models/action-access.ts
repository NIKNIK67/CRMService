/* tslint:disable */
/* eslint-disable */
import { Document } from '../models/document';
import { User } from '../models/user';
import { UserRole } from '../models/user-role';
export interface ActionAccess {
  documentId?: number;
  id?: number;
  isDocumentAccessManager?: boolean;
  isDocumentDeleter?: boolean;
  isDocumentEditor?: boolean;
  isDocumentReader?: boolean;
  roleId?: number;
  rootDocument?: Document;
  rootRole?: UserRole;
  rootUser?: User;
  userId?: number;
}
