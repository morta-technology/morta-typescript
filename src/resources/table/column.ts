// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DocumentAPI from '../document/document';
import * as HubAPI from '../hub/hub';
import * as ViewsAPI from './views/views';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Column extends APIResource {
  /**
   * Add a new column to an existing table.
   */
  create(
    tableID: string,
    body: ColumnCreateParams,
    options?: RequestOptions,
  ): APIPromise<ColumnCreateResponse> {
    return this._client.post(path`/v1/table/${tableID}/column`, { body, ...options });
  }

  /**
   * Update the properties of a specific column in a table.
   */
  update(
    columnID: string,
    params: ColumnUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ColumnUpdateResponse> {
    const { table_id, ...body } = params;
    return this._client.put(path`/v1/table/${table_id}/column/${columnID}`, { body, ...options });
  }

  /**
   * Delete a specific column from a table.
   */
  delete(
    columnID: string,
    params: ColumnDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ColumnDeleteResponse> {
    const { table_id } = params;
    return this._client.delete(path`/v1/table/${table_id}/column/${columnID}`, options);
  }

  /**
   * Retrieve all views in which a specific table column is used.
   */
  checkViews(
    columnID: string,
    params: ColumnCheckViewsParams,
    options?: RequestOptions,
  ): APIPromise<ColumnCheckViewsResponse> {
    const { table_id } = params;
    return this._client.get(path`/v1/table/${table_id}/column/${columnID}/views`, options);
  }

  /**
   * Retrieve a list of distinct (unique) values for a specified column in a table.
   */
  getDistinctValues(
    columnID: string,
    params: ColumnGetDistinctValuesParams,
    options?: RequestOptions,
  ): APIPromise<ColumnGetDistinctValuesResponse> {
    const { table_id, ...query } = params;
    return this._client.get(path`/v1/table/${table_id}/column/${columnID}/distinct`, { query, ...options });
  }

  /**
   * Restore a previously deleted column in a table.
   */
  restore(
    columnID: string,
    params: ColumnRestoreParams,
    options?: RequestOptions,
  ): APIPromise<ColumnRestoreResponse> {
    const { table_id } = params;
    return this._client.put(path`/v1/table/${table_id}/column/${columnID}/restore`, options);
  }
}

export interface SelectOptionsLookup {
  autopopulate?: boolean;

  manualOptions?: Array<string>;

  tableOptions?: SelectOptionsLookup.TableOptions;
}

export namespace SelectOptionsLookup {
  export interface TableOptions {
    columnId?: string;

    dependencies?: Array<TableOptions.Dependency> | null;

    liveValues?: boolean;

    tableId?: string;

    viewId?: string;
  }

  export namespace TableOptions {
    export interface Dependency {
      columnId: string;

      columnJoinId?: string | null;
    }
  }
}

export interface TableColumn {
  aggregate?: number;

  alterOptions?: TableColumnAlter | unknown;

  dateFormat?: string | null;

  decimalPlaces?: number;

  description?: unknown | DocumentAPI.Draftjs;

  displayLink?: boolean;

  exportWidth?: number | null;

  formula?: string | null;

  formulaEnabled?: boolean;

  headerBackgroundColor?: string | null;

  headerTextColor?: string | null;

  isIndexed?: boolean;

  isJoined?: boolean | null;

  isSynced?: boolean;

  kind?:
    | 'text'
    | 'datetime'
    | 'date'
    | 'link'
    | 'multilink'
    | 'select'
    | 'multiselect'
    | 'integer'
    | 'float'
    | 'percentage'
    | 'tag'
    | 'variable'
    | 'attachment'
    | 'phone'
    | 'email'
    | 'vote'
    | 'checkbox'
    | 'duration';

  kindOptions?: SelectOptionsLookup;

  name?: string;

  publicId?: string;

  script?: string | null;

  scriptEnabled?: boolean;

  thousandSeparator?: boolean;

  width?: number;
}

export interface TableColumnAlter {
  dateConversionFormat?: 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'ISO8601' | 'DD-Mon-YY';

  runScriptOnAllCells?: boolean;
}

export interface ColumnCreateResponse {
  data?: TableColumn;

  metadata?: unknown;
}

export interface ColumnUpdateResponse {
  data?: TableColumn;

  metadata?: unknown;
}

export interface ColumnDeleteResponse {
  data?: string;

  metadata?: unknown;
}

export interface ColumnCheckViewsResponse {
  data?: Array<ViewsAPI.TableView>;

  metadata?: unknown;
}

export interface ColumnGetDistinctValuesResponse {
  data?: Array<string>;

  metadata?: { [key: string]: unknown };
}

export interface ColumnRestoreResponse {
  data?: TableColumn;

  metadata?: unknown;
}

export interface ColumnCreateParams {
  aggregate?: number;

  alterOptions?: TableColumnAlter | unknown;

  context?: HubAPI.BaseRequestContext;

  dateFormat?: string | null;

  decimalPlaces?: number;

  description?: unknown | DocumentAPI.Draftjs;

  displayLink?: boolean;

  exportWidth?: number | null;

  formula?: string | null;

  formulaEnabled?: boolean;

  headerBackgroundColor?: string | null;

  headerTextColor?: string | null;

  isIndexed?: boolean;

  isJoined?: boolean | null;

  isSynced?: boolean;

  kind?:
    | 'text'
    | 'datetime'
    | 'date'
    | 'link'
    | 'multilink'
    | 'select'
    | 'multiselect'
    | 'integer'
    | 'float'
    | 'percentage'
    | 'tag'
    | 'variable'
    | 'attachment'
    | 'phone'
    | 'email'
    | 'vote'
    | 'checkbox'
    | 'duration';

  kindOptions?: SelectOptionsLookup;

  name?: string;

  publicId?: string;

  script?: string | null;

  scriptEnabled?: boolean;

  thousandSeparator?: boolean;

  width?: number;
}

export interface ColumnUpdateParams {
  /**
   * Path param: UUID of the table containing the column
   */
  table_id: string;

  /**
   * Body param:
   */
  aggregate?: number;

  /**
   * Body param:
   */
  alterOptions?: TableColumnAlter | unknown;

  /**
   * Body param:
   */
  context?: HubAPI.BaseRequestContext;

  /**
   * Body param:
   */
  dateFormat?: string | null;

  /**
   * Body param:
   */
  decimalPlaces?: number;

  /**
   * Body param:
   */
  description?: unknown | DocumentAPI.Draftjs;

  /**
   * Body param:
   */
  displayLink?: boolean;

  /**
   * Body param:
   */
  exportWidth?: number | null;

  /**
   * Body param:
   */
  formula?: string | null;

  /**
   * Body param:
   */
  formulaEnabled?: boolean;

  /**
   * Body param:
   */
  headerBackgroundColor?: string | null;

  /**
   * Body param:
   */
  headerTextColor?: string | null;

  /**
   * Body param:
   */
  isIndexed?: boolean;

  /**
   * Body param:
   */
  isJoined?: boolean | null;

  /**
   * Body param:
   */
  isSynced?: boolean;

  /**
   * Body param:
   */
  kind?:
    | 'text'
    | 'datetime'
    | 'date'
    | 'link'
    | 'multilink'
    | 'select'
    | 'multiselect'
    | 'integer'
    | 'float'
    | 'percentage'
    | 'tag'
    | 'variable'
    | 'attachment'
    | 'phone'
    | 'email'
    | 'vote'
    | 'checkbox'
    | 'duration';

  /**
   * Body param:
   */
  kindOptions?: SelectOptionsLookup;

  /**
   * Body param:
   */
  name?: string;

  /**
   * Body param:
   */
  publicId?: string;

  /**
   * Body param:
   */
  script?: string | null;

  /**
   * Body param:
   */
  scriptEnabled?: boolean;

  /**
   * Body param:
   */
  thousandSeparator?: boolean;

  /**
   * Body param:
   */
  width?: number;
}

export interface ColumnDeleteParams {
  /**
   * UUID of the table containing the column
   */
  table_id: string;
}

export interface ColumnCheckViewsParams {
  /**
   * UUID of the table containing the column
   */
  table_id: string;
}

export interface ColumnGetDistinctValuesParams {
  /**
   * Path param: UUID of the table containing the column
   */
  table_id: string;

  /**
   * Query param: Filter criteria for the distinct values
   */
  filter?: string;

  /**
   * Query param: Specify columns for grouping values
   */
  group_columns?: Array<string>;
}

export interface ColumnRestoreParams {
  /**
   * UUID of the table containing the column to be restored
   */
  table_id: string;
}

export declare namespace Column {
  export {
    type SelectOptionsLookup as SelectOptionsLookup,
    type TableColumn as TableColumn,
    type TableColumnAlter as TableColumnAlter,
    type ColumnCreateResponse as ColumnCreateResponse,
    type ColumnUpdateResponse as ColumnUpdateResponse,
    type ColumnDeleteResponse as ColumnDeleteResponse,
    type ColumnCheckViewsResponse as ColumnCheckViewsResponse,
    type ColumnGetDistinctValuesResponse as ColumnGetDistinctValuesResponse,
    type ColumnRestoreResponse as ColumnRestoreResponse,
    type ColumnCreateParams as ColumnCreateParams,
    type ColumnUpdateParams as ColumnUpdateParams,
    type ColumnDeleteParams as ColumnDeleteParams,
    type ColumnCheckViewsParams as ColumnCheckViewsParams,
    type ColumnGetDistinctValuesParams as ColumnGetDistinctValuesParams,
    type ColumnRestoreParams as ColumnRestoreParams,
  };
}
