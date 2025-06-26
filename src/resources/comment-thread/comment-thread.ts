// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CommentAPI from './comment';
import {
  Comment,
  CommentCreateParams,
  CommentCreateResponse,
  CommentDeleteParams,
  CommentDeleteResponse,
  CommentModel,
  CommentUpdateParams,
  CommentUpdateResponse,
} from './comment';
import * as HubAPI from '../hub/hub';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class CommentThreadResource extends APIResource {
  comment: CommentAPI.Comment = new CommentAPI.Comment(this._client);

  /**
   * Create a new comment thread
   */
  create(body: CommentThreadCreateParams, options?: RequestOptions): APIPromise<CommentThreadCreateResponse> {
    return this._client.post('/v1/comment_thread', { body, ...options });
  }

  /**
   * Retrieve a specific comment thread by its ID
   */
  retrieve(commentThreadID: string, options?: RequestOptions): APIPromise<CommentThreadRetrieveResponse> {
    return this._client.get(path`/v1/comment_thread/${commentThreadID}`, options);
  }

  /**
   * Retrieve all comment threads associated with a specific reference
   */
  list(query: CommentThreadListParams, options?: RequestOptions): APIPromise<CommentThreadListResponse> {
    return this._client.get('/v1/comment_thread', { query, ...options });
  }

  /**
   * Delete a comment thread
   */
  delete(commentThreadID: string, options?: RequestOptions): APIPromise<CommentThreadDeleteResponse> {
    return this._client.delete(path`/v1/comment_thread/${commentThreadID}`, options);
  }

  /**
   * Retrieve statistics for comment threads based on reference type and main
   * reference ID
   */
  getStats(
    query: CommentThreadGetStatsParams,
    options?: RequestOptions,
  ): APIPromise<CommentThreadGetStatsResponse> {
    return this._client.get('/v1/comment_thread/stats', { query, ...options });
  }

  /**
   * Reopen a previously resolved comment thread
   */
  reopen(commentThreadID: string, options?: RequestOptions): APIPromise<CommentThreadReopenResponse> {
    return this._client.put(path`/v1/comment_thread/${commentThreadID}/reopen`, options);
  }

  /**
   * Resolve a comment thread
   */
  resolve(commentThreadID: string, options?: RequestOptions): APIPromise<CommentThreadResolveResponse> {
    return this._client.put(path`/v1/comment_thread/${commentThreadID}/resolve`, options);
  }
}

export interface CommentThread {
  comments?: Array<CommentAPI.CommentModel>;

  createdAt?: string;

  deletedAt?: string;

  isCommentInitiator?: unknown;

  publicId?: string;

  resolvedAt?: string;

  resolver?: CommentThread.Resolver;

  updatedAt?: string;
}

export namespace CommentThread {
  export interface Resolver {
    name?: string;
  }
}

export interface CommentThreadCreateResponse {
  data?: CommentThread;

  metadata?: CommentThreadCreateResponse.Metadata;
}

export namespace CommentThreadCreateResponse {
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
     * UUID of the newly created comment thread
     */
    resourceId?: string;
  }
}

export interface CommentThreadRetrieveResponse {
  data?: CommentThread;

  metadata?: unknown;
}

export interface CommentThreadListResponse {
  data?: Array<CommentThread>;

  metadata?: unknown;
}

export interface CommentThreadDeleteResponse {
  data?: CommentThread;

  metadata?: CommentThreadDeleteResponse.Metadata;
}

export namespace CommentThreadDeleteResponse {
  export interface Metadata {
    /**
     * Changes made to the comment thread
     */
    change?: unknown;

    /**
     * Event type for the operation
     */
    event?: string;

    /**
     * UUID of the deleted comment thread
     */
    resourceId?: string;
  }
}

export interface CommentThreadGetStatsResponse {
  data?: Array<CommentThreadGetStatsResponse.Data>;

  metadata?: unknown;
}

export namespace CommentThreadGetStatsResponse {
  export interface Data {
    openCommentThreads: number;

    resolvedCommentThreads: number;

    referenceId?: string;
  }
}

export interface CommentThreadReopenResponse {
  data?: CommentThread;

  metadata?: CommentThreadReopenResponse.Metadata;
}

export namespace CommentThreadReopenResponse {
  export interface Metadata {
    /**
     * Changes made to the comment thread
     */
    change?: unknown;

    /**
     * Event type for the operation
     */
    event?: string;

    /**
     * UUID of the reopened comment thread
     */
    resourceId?: string;
  }
}

export interface CommentThreadResolveResponse {
  data?: CommentThread;

  metadata?: CommentThreadResolveResponse.Metadata;
}

export namespace CommentThreadResolveResponse {
  export interface Metadata {
    /**
     * Changes made to the comment thread
     */
    change?: unknown;

    /**
     * Event type for the operation
     */
    event?: string;

    /**
     * UUID of the resolved comment thread
     */
    resourceId?: string;
  }
}

export interface CommentThreadCreateParams {
  commentText: string;

  referenceId: string;

  referenceType: string;

  context?: HubAPI.BaseRequestContext;

  mainReferenceId?: string;
}

export interface CommentThreadListParams {
  /**
   * UUID of the reference associated with the comment threads
   */
  reference_id: string;

  /**
   * Type of the reference (process_section, table, or table_view) associated with
   * the comment threads
   */
  reference_type: 'process_section' | 'table' | 'table_view';

  /**
   * Optional main reference for additional filtering
   */
  main_reference?: string;
}

export interface CommentThreadGetStatsParams {
  /**
   * Type of the reference (process_section, table, or table_view) for which to
   * gather statistics
   */
  reference_type: 'process_section' | 'table' | 'table_view';

  /**
   * UUID of the main reference for which to gather statistics
   */
  main_reference_id?: string;
}

CommentThreadResource.Comment = Comment;

export declare namespace CommentThreadResource {
  export {
    type CommentThread as CommentThread,
    type CommentThreadCreateResponse as CommentThreadCreateResponse,
    type CommentThreadRetrieveResponse as CommentThreadRetrieveResponse,
    type CommentThreadListResponse as CommentThreadListResponse,
    type CommentThreadDeleteResponse as CommentThreadDeleteResponse,
    type CommentThreadGetStatsResponse as CommentThreadGetStatsResponse,
    type CommentThreadReopenResponse as CommentThreadReopenResponse,
    type CommentThreadResolveResponse as CommentThreadResolveResponse,
    type CommentThreadCreateParams as CommentThreadCreateParams,
    type CommentThreadListParams as CommentThreadListParams,
    type CommentThreadGetStatsParams as CommentThreadGetStatsParams,
  };

  export {
    Comment as Comment,
    type CommentModel as CommentModel,
    type CommentCreateResponse as CommentCreateResponse,
    type CommentUpdateResponse as CommentUpdateResponse,
    type CommentDeleteResponse as CommentDeleteResponse,
    type CommentCreateParams as CommentCreateParams,
    type CommentUpdateParams as CommentUpdateParams,
    type CommentDeleteParams as CommentDeleteParams,
  };
}
