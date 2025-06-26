// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TagsAPI from '../user/tags';
import * as UserAPI from '../user/user';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Invite extends APIResource {
  /**
   * Invite a single user to join a hub by email. If the user already exists, they
   * are added directly; otherwise, an invite is sent. Requires owner or admin
   * permissions.
   */
  create(
    hubID: string,
    body: InviteCreateParams,
    options?: RequestOptions,
  ): APIPromise<InviteCreateResponse> {
    return this._client.post(path`/v1/hub/${hubID}/invite`, { body, ...options });
  }

  /**
   * Update an existing invite in a hub
   */
  update(
    inviteID: string,
    params: InviteUpdateParams,
    options?: RequestOptions,
  ): APIPromise<InviteUpdateResponse> {
    const { hub_id, ...body } = params;
    return this._client.put(path`/v1/hub/${hub_id}/invite/${inviteID}`, { body, ...options });
  }

  /**
   * Delete an invite to a hub
   */
  delete(
    inviteID: string,
    params: InviteDeleteParams,
    options?: RequestOptions,
  ): APIPromise<InviteDeleteResponse> {
    const { hub_id } = params;
    return this._client.delete(path`/v1/hub/${hub_id}/invite/${inviteID}`, options);
  }

  /**
   * Resend an invitation to a user for a hub. This is applicable for both new users
   * and existing users who have previously been invited. Requires owner or admin
   * permissions.
   */
  resend(
    inviteID: string,
    params: InviteResendParams,
    options?: RequestOptions,
  ): APIPromise<InviteResendResponse> {
    const { hub_id } = params;
    return this._client.post(path`/v1/hub/${hub_id}/invite/${inviteID}`, options);
  }
}

export interface InvitedMember {
  createdAt?: string;

  email?: string;

  invitedBy?: UserAPI.SummaryUser;

  projectRole?: string;

  publicId?: string;

  tags?: Array<TagsAPI.Tag>;
}

export interface InviteCreateResponse {
  data?: string;

  metadata?: unknown;
}

export interface InviteUpdateResponse {
  data?: InvitedMember;

  metadata?: unknown;
}

export interface InviteDeleteResponse {
  data?: string;

  metadata?: unknown;
}

export interface InviteResendResponse {
  data?: string;

  metadata?: unknown;
}

export interface InviteCreateParams {
  email: string;

  projectRole?: 'member' | 'admin' | 'owner';

  tags?: Array<string>;
}

export interface InviteUpdateParams {
  /**
   * Path param: The UUID of the hub in which the invite is located
   */
  hub_id: string;

  /**
   * Body param:
   */
  projectRole?: 'member' | 'admin' | 'owner';

  /**
   * Body param:
   */
  tags?: Array<string>;
}

export interface InviteDeleteParams {
  /**
   * The UUID of the hub from which the invite is to be deleted
   */
  hub_id: string;
}

export interface InviteResendParams {
  /**
   * The UUID of the hub for which the invite is being resent
   */
  hub_id: string;
}

export declare namespace Invite {
  export {
    type InvitedMember as InvitedMember,
    type InviteCreateResponse as InviteCreateResponse,
    type InviteUpdateResponse as InviteUpdateResponse,
    type InviteDeleteResponse as InviteDeleteResponse,
    type InviteResendResponse as InviteResendResponse,
    type InviteCreateParams as InviteCreateParams,
    type InviteUpdateParams as InviteUpdateParams,
    type InviteDeleteParams as InviteDeleteParams,
    type InviteResendParams as InviteResendParams,
  };
}
