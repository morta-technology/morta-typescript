// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as HubAPI from '../../hub/hub';
import * as RowAPI from '../row';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Rows extends APIResource {
  /**
   * Update existing rows in a specified table view.
   */
  update(viewID: string, body: RowUpdateParams, options?: RequestOptions): APIPromise<RowUpdateResponse> {
    return this._client.put(path`/v1/table/views/${viewID}/rows`, { body, ...options });
  }

  /**
   * Retrieve the actual data for a specific table view.
   */
  list(
    viewID: string,
    query: RowListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RowListResponse> {
    return this._client.get(path`/v1/table/views/${viewID}/rows`, { query, ...options });
  }

  /**
   * Delete specific rows from a table view based on row IDs.
   */
  delete(viewID: string, options?: RequestOptions): APIPromise<RowDeleteResponse> {
    return this._client.delete(path`/v1/table/views/${viewID}/rows`, options);
  }

  /**
   * Insert new rows at the end of the specified table view.
   */
  add(viewID: string, body: RowAddParams, options?: RequestOptions): APIPromise<RowAddResponse> {
    return this._client.post(path`/v1/table/views/${viewID}/rows`, { body, ...options });
  }

  /**
   * Upsert (add or update) rows in a table view based on a specified column.
   */
  upsert(viewID: string, body: RowUpsertParams, options?: RequestOptions): APIPromise<RowUpsertResponse> {
    return this._client.post(path`/v1/table/views/${viewID}/rows/upsert`, { body, ...options });
  }
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

export interface RowListResponse {
  data?: Array<RowListResponse.Data>;

  metadata?: RowListResponse.Metadata;
}

export namespace RowListResponse {
  export interface Data {
    publicId?: string;

    rowData?: { [key: string]: unknown };

    sortOrder?: number;
  }

  export interface Metadata {
    next_page_token?: string;

    size?: number;

    total?: number;
  }
}

export interface RowDeleteResponse {
  data?: string;

  metadata?: { [key: string]: unknown };
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

export interface RowListParams {
  /**
   * If true, columns in row data are sorted alphabetically otherwise columns in row
   * data follows their order in the view.
   */
  alphabeticalColumnSort?: boolean;

  /**
   * URL encoded JSON string of filter criteria (e.g.
   * 'filter=%7B%22columnName%22%3A%22Price%22%2C%22value%22%3A%22100%22%2C%22filterType%22%3A%22gt%22%7D')
   */
  filter?: string;

  /**
   * Page number for pagination.
   */
  page?: number;

  /**
   * Number of items per page for pagination.
   */
  size?: number;

  /**
   * Sort the results by a field, this parameter takes the form
   * `ColumnName:SortDirection`, for example to sort by price ascending
   * `sort=Price:asc`. Sort direction can be either `asc` or `desc`. You can pass
   * multiple sort parameters to add secondary and tertiary sorts etc., the sort will
   * be applied in the order of the query string.
   */
  sort?: string;
}

export interface RowAddParams {
  rows: Array<RowAPI.TableRowAction>;

  context?: HubAPI.BaseRequestContext;
}

export interface RowUpsertParams {
  rows: Array<RowAPI.TableRowAction>;

  upsertColumnName: string;

  context?: HubAPI.BaseRequestContext;
}

export declare namespace Rows {
  export {
    type RowUpdateResponse as RowUpdateResponse,
    type RowListResponse as RowListResponse,
    type RowDeleteResponse as RowDeleteResponse,
    type RowAddResponse as RowAddResponse,
    type RowUpsertResponse as RowUpsertResponse,
    type RowUpdateParams as RowUpdateParams,
    type RowListParams as RowListParams,
    type RowAddParams as RowAddParams,
    type RowUpsertParams as RowUpsertParams,
  };
}
