// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as HubAPI from '../hub/hub';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Row extends APIResource {
  /**
   * Update existing rows in the specified table.
   */
  update(tableID: string, body: RowUpdateParams, options?: RequestOptions): APIPromise<RowUpdateResponse> {
    return this._client.put(path`/v1/table/${tableID}/row`, { body, ...options });
  }

  /**
   * Add a new row to the specified table.
   */
  add(tableID: string, body: RowAddParams, options?: RequestOptions): APIPromise<RowAddResponse> {
    return this._client.post(path`/v1/table/${tableID}/row`, { body, ...options });
  }

  /**
   * Retrieve rows from a table based on provided query parameters.
   */
  getRows(
    tableID: string,
    query: RowGetRowsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RowGetRowsResponse> {
    return this._client.get(path`/v1/table/${tableID}/row`, { query, ...options });
  }

  /**
   * Add or update a row in the specified table based on a unique column value.
   */
  upsert(tableID: string, body: RowUpsertParams, options?: RequestOptions): APIPromise<RowUpsertResponse> {
    return this._client.post(path`/v1/table/${tableID}/row/upsert`, { body, ...options });
  }
}

export interface CreateTableRows {
  rows: Array<TableRowAction>;

  context?: HubAPI.BaseRequestContext;
}

export interface TableRowAction {
  rowData: { [key: string]: unknown };

  context?: HubAPI.BaseRequestContext;

  sortOrder?: number;
}

export interface UpdateTableRows {
  rows: Array<UpdateTableRows.Row>;

  context?: HubAPI.BaseRequestContext;
}

export namespace UpdateTableRows {
  export interface Row {
    publicId: string;

    rowData: { [key: string]: unknown };

    context?: HubAPI.BaseRequestContext;

    sortOrder?: number;
  }
}

export interface UpsertTableRows {
  rows: Array<TableRowAction>;

  upsertColumnName: string;

  context?: HubAPI.BaseRequestContext;
}

export interface RowUpdateResponse {
  data?: Array<RowUpdateResponse.Data>;

  metadata?: { [key: string]: unknown };
}

export namespace RowUpdateResponse {
  export interface Data {
    publicId?: string;

    rowData?: { [key: string]: unknown };

    sortOrder?: number;
  }
}

export interface RowAddResponse {
  data?: Array<RowAddResponse.Data>;

  metadata?: { [key: string]: unknown };
}

export namespace RowAddResponse {
  export interface Data {
    publicId?: string;

    rowData?: { [key: string]: unknown };

    sortOrder?: number;
  }
}

export interface RowGetRowsResponse {
  data?: Array<RowGetRowsResponse.Data>;

  metadata?: RowGetRowsResponse.Metadata;
}

export namespace RowGetRowsResponse {
  export interface Data {
    publicId?: string;

    rowData?: { [key: string]: unknown };

    sortOrder?: number;
  }

  export interface Metadata {
    next_page_token?: string;

    page?: number;

    size?: number;

    total?: number;
  }
}

export interface RowUpsertResponse {
  data?: Array<RowUpsertResponse.Data>;

  metadata?: { [key: string]: unknown };
}

export namespace RowUpsertResponse {
  export interface Data {
    publicId?: string;

    rowData?: { [key: string]: unknown };

    sortOrder?: number;
  }
}

export interface RowUpdateParams {
  rows: Array<RowUpdateParams.Row>;

  context?: HubAPI.BaseRequestContext;
}

export namespace RowUpdateParams {
  export interface Row {
    publicId: string;

    rowData: { [key: string]: unknown };

    context?: HubAPI.BaseRequestContext;

    sortOrder?: number;
  }
}

export interface RowAddParams {
  rows: Array<TableRowAction>;

  context?: HubAPI.BaseRequestContext;
}

export interface RowGetRowsParams {
  /**
   * Specific columns to include in the response
   */
  columns?: Array<string>;

  /**
   * Columns to apply distinct filtering
   */
  distinct_columns?: Array<string>;

  /**
   * Filter criteria for the table rows
   */
  filter?: string;

  /**
   * Filter for rows created after this date
   */
  last_created_at?: string;

  /**
   * Filter for rows updated after this date
   */
  last_updated_at?: string;

  /**
   * Token for fetching the next page of results
   */
  next_page_token?: string;

  /**
   * Page number for pagination
   */
  page?: number;

  /**
   * Number of items per page for pagination
   */
  size?: number;

  /**
   * Sorting criteria for the table rows
   */
  sort?: string;
}

export interface RowUpsertParams {
  rows: Array<TableRowAction>;

  upsertColumnName: string;

  context?: HubAPI.BaseRequestContext;
}

export declare namespace Row {
  export {
    type CreateTableRows as CreateTableRows,
    type TableRowAction as TableRowAction,
    type UpdateTableRows as UpdateTableRows,
    type UpsertTableRows as UpsertTableRows,
    type RowUpdateResponse as RowUpdateResponse,
    type RowAddResponse as RowAddResponse,
    type RowGetRowsResponse as RowGetRowsResponse,
    type RowUpsertResponse as RowUpsertResponse,
    type RowUpdateParams as RowUpdateParams,
    type RowAddParams as RowAddParams,
    type RowGetRowsParams as RowGetRowsParams,
    type RowUpsertParams as RowUpsertParams,
  };
}
