// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TagsAPI from '../user/tags';
import * as UserAPI from '../user/user';

export class Invite extends APIResource {}

export interface InvitedMember {
  createdAt?: string;

  email?: string;

  invitedBy?: UserAPI.SummaryUser;

  projectRole?: string;

  publicId?: string;

  tags?: Array<TagsAPI.Tag>;
}

export declare namespace Invite {
  export { type InvitedMember as InvitedMember };
}
