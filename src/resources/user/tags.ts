// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tags extends APIResource {
  /**
   * Delete a tag from a specific user
   */
  delete(tagID: string, params: TagDeleteParams, options?: RequestOptions): APIPromise<TagDeleteResponse> {
    const { user_id } = params;
    return this._client.delete(path`/v1/user/${user_id}/tags/${tagID}`, options);
  }

  /**
   * Add a tag to a specific user
   */
  add(userID: string, body: TagAddParams, options?: RequestOptions): APIPromise<TagAddResponse> {
    return this._client.post(path`/v1/user/${userID}/tags`, { body, ...options });
  }

  /**
   * Apply multiple tags to a specific user
   */
  bulkApply(
    userID: string,
    body: TagBulkApplyParams,
    options?: RequestOptions,
  ): APIPromise<TagBulkApplyResponse> {
    return this._client.put(path`/v1/user/${userID}/tags`, { body, ...options });
  }
}

export interface Tag {
  documentTableId?: string;

  projectPublicId?: string;

  publicId?: string;

  referencePublicId?: string;

  value?: unknown;
}

export interface TagDeleteResponse {
  data?: string;

  metadata?: { [key: string]: unknown };
}

export interface TagAddResponse {
  data?: Tag;

  /**
   * Additional metadata
   */
  metadata?: unknown;
}

export interface TagBulkApplyResponse {
  data?: Array<Tag>;

  /**
   * Additional metadata
   */
  metadata?: unknown;
}

export interface TagDeleteParams {
  /**
   * Public UUID of the user from whom the tag is to be deleted
   */
  user_id: string;
}

export interface TagAddParams {
  tagReferenceId: string;
}

export interface TagBulkApplyParams {
  projectId: string;

  tableId: string;

  tagReferenceIds: Array<string>;
}

export declare namespace Tags {
  export {
    type Tag as Tag,
    type TagDeleteResponse as TagDeleteResponse,
    type TagAddResponse as TagAddResponse,
    type TagBulkApplyResponse as TagBulkApplyResponse,
    type TagDeleteParams as TagDeleteParams,
    type TagAddParams as TagAddParams,
    type TagBulkApplyParams as TagBulkApplyParams,
  };
}
