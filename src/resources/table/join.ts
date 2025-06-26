// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as HubAPI from '../hub/hub';
import * as TableAPI from './table';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Join extends APIResource {
  /**
   * Create a join between two tables.
   */
  create(tableID: string, body: JoinCreateParams, options?: RequestOptions): APIPromise<JoinCreateResponse> {
    return this._client.post(path`/v1/table/${tableID}/join`, { body, ...options });
  }

  /**
   * Update an existing join on a table.
   */
  update(joinID: string, params: JoinUpdateParams, options?: RequestOptions): APIPromise<JoinUpdateResponse> {
    const { table_id, ...body } = params;
    return this._client.put(path`/v1/table/${table_id}/join/${joinID}`, { body, ...options });
  }

  /**
   * Delete a join from a table.
   */
  delete(joinID: string, params: JoinDeleteParams, options?: RequestOptions): APIPromise<JoinDeleteResponse> {
    const { table_id } = params;
    return this._client.delete(path`/v1/table/${table_id}/join/${joinID}`, options);
  }
}

export interface TableColumnJoin {
  sourceColumnId?: string;

  targetColumnId?: string;
}

export interface JoinCreateResponse {
  data?: TableAPI.Table;

  metadata?: { [key: string]: unknown };
}

export interface JoinUpdateResponse {
  data?: TableAPI.Table;

  metadata?: { [key: string]: unknown };
}

export interface JoinDeleteResponse {
  data?: string;

  metadata?: { [key: string]: unknown };
}

export interface JoinCreateParams {
  context?: HubAPI.BaseRequestContext;

  dataColumns?: Array<string>;

  isOneToMany?: boolean;

  joinColumns?: Array<TableColumnJoin>;

  joinViewId?: string;
}

export interface JoinUpdateParams {
  /**
   * Path param: UUID of the table with the join to be updated.
   */
  table_id: string;

  /**
   * Body param:
   */
  context?: HubAPI.BaseRequestContext;

  /**
   * Body param:
   */
  dataColumns?: Array<string>;

  /**
   * Body param:
   */
  isOneToMany?: boolean;

  /**
   * Body param:
   */
  joinColumns?: Array<TableColumnJoin>;

  /**
   * Body param:
   */
  joinViewId?: string;
}

export interface JoinDeleteParams {
  /**
   * UUID of the table from which the join will be deleted.
   */
  table_id: string;
}

export declare namespace Join {
  export {
    type TableColumnJoin as TableColumnJoin,
    type JoinCreateResponse as JoinCreateResponse,
    type JoinUpdateResponse as JoinUpdateResponse,
    type JoinDeleteResponse as JoinDeleteResponse,
    type JoinCreateParams as JoinCreateParams,
    type JoinUpdateParams as JoinUpdateParams,
    type JoinDeleteParams as JoinDeleteParams,
  };
}
