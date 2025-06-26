// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as HubAPI from '../hub/hub';
import * as UserAPI from '../user/user';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Comment extends APIResource {
  /**
   * Create a new comment within a specific comment thread
   */
  create(
    commentThreadID: string,
    body: CommentCreateParams,
    options?: RequestOptions,
  ): APIPromise<CommentCreateResponse> {
    return this._client.post(path`/v1/comment_thread/${commentThreadID}/comment`, { body, ...options });
  }

  /**
   * Update a specific comment within a comment thread
   */
  update(
    commentID: string,
    params: CommentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CommentUpdateResponse> {
    const { comment_thread_id, ...body } = params;
    return this._client.put(path`/v1/comment_thread/${comment_thread_id}/comment/${commentID}`, {
      body,
      ...options,
    });
  }

  /**
   * Delete a specific comment within a comment thread
   */
  delete(
    commentID: string,
    params: CommentDeleteParams,
    options?: RequestOptions,
  ): APIPromise<CommentDeleteResponse> {
    const { comment_thread_id } = params;
    return this._client.delete(path`/v1/comment_thread/${comment_thread_id}/comment/${commentID}`, options);
  }
}

export interface CommentModel {
  commentText?: string;

  createdAt?: string;

  deletedAt?: string;

  isOwner?: unknown;

  publicId?: string;

  updatedAt?: string;

  user?: UserAPI.SummaryUser;
}

export interface CommentCreateResponse {
  data?: CommentModel;

  metadata?: CommentCreateResponse.Metadata;
}

export namespace CommentCreateResponse {
  export interface Metadata {
    /**
     * Changes made in this operation
     */
    change?: unknown;

    /**
     * Event type for the operation
     */
    event?: string;

    /**
     * UUID of the newly created comment
     */
    resourceId?: string;
  }
}

export interface CommentUpdateResponse {
  data?: CommentModel;

  metadata?: CommentUpdateResponse.Metadata;
}

export namespace CommentUpdateResponse {
  export interface Metadata {
    /**
     * Changes made to the comment
     */
    change?: unknown;

    /**
     * Event type for the operation
     */
    event?: string;

    /**
     * UUID of the updated comment
     */
    resourceId?: string;
  }
}

export interface CommentDeleteResponse {
  data?: CommentModel;

  metadata?: CommentDeleteResponse.Metadata;
}

export namespace CommentDeleteResponse {
  export interface Metadata {
    /**
     * Changes made to the comment
     */
    change?: unknown;

    /**
     * Event type for the operation
     */
    event?: string;

    /**
     * UUID of the deleted comment
     */
    resourceId?: string;
  }
}

export interface CommentCreateParams {
  commentText: string;

  context?: HubAPI.BaseRequestContext;
}

export interface CommentUpdateParams {
  /**
   * Path param: UUID of the comment thread containing the comment
   */
  comment_thread_id: string;

  /**
   * Body param:
   */
  commentText: string;

  /**
   * Body param:
   */
  context?: HubAPI.BaseRequestContext;
}

export interface CommentDeleteParams {
  /**
   * UUID of the comment thread containing the comment
   */
  comment_thread_id: string;
}

export declare namespace Comment {
  export {
    type CommentModel as CommentModel,
    type CommentCreateResponse as CommentCreateResponse,
    type CommentUpdateResponse as CommentUpdateResponse,
    type CommentDeleteResponse as CommentDeleteResponse,
    type CommentCreateParams as CommentCreateParams,
    type CommentUpdateParams as CommentUpdateParams,
    type CommentDeleteParams as CommentDeleteParams,
  };
}
