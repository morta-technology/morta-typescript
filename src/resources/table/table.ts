// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TableAPI from './table';
import * as HubAPI from '../hub/hub';
import * as ColumnAPI from './column';
import {
  Column as ColumnAPIColumn,
  ColumnCheckViewsParams,
  ColumnCheckViewsResponse,
  ColumnCreateParams,
  ColumnCreateResponse,
  ColumnDeleteParams,
  ColumnDeleteResponse,
  ColumnGetDistinctValuesParams,
  ColumnGetDistinctValuesResponse,
  ColumnRestoreParams,
  ColumnRestoreResponse,
  ColumnUpdateParams,
  ColumnUpdateResponse,
  SelectOptionsLookup,
  TableColumn,
  TableColumnAlter,
} from './column';
import * as JoinAPI from './join';
import {
  Join as JoinAPIJoin,
  JoinCreateParams,
  JoinCreateResponse,
  JoinDeleteParams,
  JoinDeleteResponse,
  JoinUpdateParams,
  JoinUpdateResponse,
  TableColumnJoin,
} from './join';
import * as RowAPI from './row';
import {
  CreateTableRows,
  Row,
  RowAddParams,
  RowAddResponse,
  RowGetRowsParams,
  RowGetRowsResponse,
  RowUpdateParams,
  RowUpdateResponse,
  RowUpsertParams,
  RowUpsertResponse,
  TableRowAction,
  UpdateTableRows,
  UpsertTableRows,
} from './row';
import * as SyncAPI from './sync';
import {
  Sync,
  SyncDeleteIntegrationParams,
  SyncDeleteIntegrationResponse,
  SyncGetSyncInfoResponse,
  SyncRetryIntegrationSyncResponse,
  SyncSyncWithIntegrationParams,
  SyncSyncWithIntegrationResponse,
  SyncUpdateParams,
  SyncUpdateResponse,
} from './sync';
import * as ViewsAPI from './views/views';
import {
  Chart,
  Colour,
  Filter,
  Group,
  Sort,
  TableView,
  ViewCreateParams,
  ViewCreateResponse,
  ViewDeleteResponse,
  ViewDownloadCsvParams,
  ViewDownloadCsvResponse,
  ViewDuplicateDefaultParams,
  ViewDuplicateDefaultResponse,
  ViewDuplicateParams,
  ViewDuplicateResponse,
  ViewListParams,
  ViewListResponse,
  ViewPreviewRowParams,
  ViewPreviewRowResponse,
  ViewRetrieveParams,
  ViewRetrieveResponse,
  ViewSetDefaultResponse,
  ViewStatsParams,
  ViewStatsResponse,
  ViewStreamRowsParams,
  ViewUpdateCellsParams,
  ViewUpdateCellsResponse,
  ViewUpdateParams,
  ViewUpdateResponse,
  Views,
} from './views/views';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class TableResource extends APIResource {
  column: ColumnAPI.Column = new ColumnAPI.Column(this._client);
  row: RowAPI.Row = new RowAPI.Row(this._client);
  join: JoinAPI.Join = new JoinAPI.Join(this._client);
  sync: SyncAPI.Sync = new SyncAPI.Sync(this._client);
  views: ViewsAPI.Views = new ViewsAPI.Views(this._client);

  /**
   * Create a new document table within a hub.
   */
  create(body: TableCreateParams, options?: RequestOptions): APIPromise<TableCreateResponse> {
    return this._client.post('/v1/table', { body, ...options });
  }

  /**
   * Retrieve a table and its rows based on provided parameters
   */
  retrieve(
    tableID: string,
    query: TableRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TableRetrieveResponse> {
    return this._client.get(path`/v1/table/${tableID}`, { query, ...options });
  }

  /**
   * Update the properties of an existing table.
   */
  update(
    tableID: string,
    body: TableUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TableUpdateResponse> {
    return this._client.put(path`/v1/table/${tableID}`, { body, ...options });
  }

  /**
   * Delete a specified table by its UUID.
   */
  delete(tableID: string, options?: RequestOptions): APIPromise<TableDeleteResponse> {
    return this._client.delete(path`/v1/table/${tableID}`, options);
  }

  /**
   * Check and return a list of documents, table joins, and selects where the
   * specified table is used.
   */
  checkUsage(tableID: string, options?: RequestOptions): APIPromise<TableCheckUsageResponse> {
    return this._client.get(path`/v1/table/${tableID}/used`, options);
  }

  /**
   * Create an index on one or more columns of a table to improve query performance.
   */
  createIndex(
    tableID: string,
    body: TableCreateIndexParams,
    options?: RequestOptions,
  ): APIPromise<TableCreateIndexResponse> {
    return this._client.post(path`/v1/table/${tableID}/indexes`, { body, ...options });
  }

  /**
   * Delete all rows or specific rows from a table.
   */
  deleteRows(tableID: string, options?: RequestOptions): APIPromise<TableDeleteRowsResponse> {
    return this._client.delete(path`/v1/table/${tableID}/rows`, options);
  }

  /**
   * Download the data of a specified table as a CSV file.
   */
  downloadCsv(
    tableID: string,
    query: TableDownloadCsvParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get(path`/v1/table/${tableID}/csv`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/csv' }, options?.headers]),
    });
  }

  /**
   * Create a duplicate of an existing table along with its data, settings, and
   * optionally linked tables.
   */
  duplicate(
    tableID: string,
    body: TableDuplicateParams,
    options?: RequestOptions,
  ): APIPromise<TableDuplicateResponse> {
    return this._client.post(path`/v1/table/${tableID}/duplicate`, { body, ...options });
  }

  /**
   * Get a CSV backup of a table at a specific date
   */
  getCsvBackup(tableID: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/v1/table/${tableID}/csv-backup`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Get duplicated children of a table
   */
  getDuplicatedChildren(
    tableID: string,
    options?: RequestOptions,
  ): APIPromise<TableGetDuplicatedChildrenResponse> {
    return this._client.get(path`/v1/table/${tableID}/duplicated-children`, options);
  }

  /**
   * Retrieve a file associated with a specific cell in a table.
   */
  getFile(tableID: string, query: TableGetFileParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/v1/table/${tableID}/file`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Retrieve statistics for table columns based on specified parameters.
   */
  getStatistics(
    tableID: string,
    query: TableGetStatisticsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TableGetStatisticsResponse> {
    return this._client.get(path`/v1/table/${tableID}/stats`, { query, ...options });
  }

  /**
   * Retrieve all active columns of a specific table.
   */
  listColumns(tableID: string, options?: RequestOptions): APIPromise<TableListColumnsResponse> {
    return this._client.get(path`/v1/table/${tableID}/columns`, options);
  }

  /**
   * Retrieve all joins associated with a table.
   */
  listJoins(tableID: string, options?: RequestOptions): APIPromise<TableListJoinsResponse> {
    return this._client.get(path`/v1/table/${tableID}/joins`, options);
  }

  /**
   * Restore a previously deleted table using its UUID.
   */
  restore(tableID: string, options?: RequestOptions): APIPromise<TableRestoreResponse> {
    return this._client.put(path`/v1/table/${tableID}/restore`, options);
  }

  /**
   * Stream the data of all rows for a specific table.
   */
  streamRows(
    tableID: string,
    query: TableStreamRowsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get(path`/v1/table/${tableID}/rows-stream`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/x-msgppack' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Deletes all rows from the specified table.
   */
  truncate(tableID: string, options?: RequestOptions): APIPromise<TableTruncateResponse> {
    return this._client.delete(path`/v1/table/${tableID}/truncate`, options);
  }

  /**
   * Update specific cells in a table.
   */
  updateCells(
    tableID: string,
    body: TableUpdateCellsParams,
    options?: RequestOptions,
  ): APIPromise<TableUpdateCellsResponse> {
    return this._client.put(path`/v1/table/${tableID}/cells`, { body, ...options });
  }
}

export interface Project {
  name?: string;

  publicId?: string;
}

export interface Table {
  allowComments?: boolean;

  autodeskBim360ModelProperties?: unknown;

  columns?: Array<ColumnAPI.TableColumn>;

  createdAt?: string;

  defaultViewId?: string;

  deletedAt?: string;

  failedSyncAttempts?: number;

  isAconexSynced?: boolean;

  isAconexWorkflowsSynced?: boolean;

  isAsiteDocumentsSynced?: boolean;

  isAsiteFormsSynced?: boolean;

  isAutodeskBim360ChecklistsSynced?: boolean;

  isAutodeskBim360IssuesSynced?: boolean;

  isAutodeskBim360ModelsSynced?: boolean;

  isAutodeskBim360Synced?: boolean;

  isAutodeskBim360UsersSynced?: boolean;

  isDeleted?: boolean;

  isMortaColumnsSynced?: boolean;

  isMortaCommentsSynced?: boolean;

  isMortaProjectsSynced?: boolean;

  isMortaResourcesSynced?: boolean;

  isMortaSynced?: boolean;

  isMortaUsersSynced?: boolean;

  isProcoreSynced?: boolean;

  isReferenceTable?: boolean;

  isReviztoIssuesSynced?: boolean;

  isSynced?: boolean;

  isSyncing?: boolean;

  isViewpointRfisSynced?: boolean;

  isViewpointSynced?: boolean;

  joins?: Array<TableJoin> | null;

  keepColoursInSync?: boolean;

  keepValidationsInSync?: boolean;

  lastSync?: string;

  lockedFromDuplication?: boolean;

  logo?: string;

  name?: string;

  projectName?: string;

  projectPublicId?: string;

  projects?: Array<Project>;

  publicId?: string;

  syncHourlyFrequency?: number;

  syncUser?: Table.SyncUser;

  type?: string;

  updatedAt?: string;
}

export namespace Table {
  export interface SyncUser {
    name?: string;

    publicId?: string;
  }
}

export interface TableColumnWithAggregation {
  aggregation?: TableColumnWithAggregation.Aggregation;

  name?: string;

  publicId?: string;
}

export namespace TableColumnWithAggregation {
  export interface Aggregation {
    name?: string;

    value?: number;
  }
}

export interface TableJoin {
  dataColumns?: Array<TableJoinImportedColumns>;

  isOneToMany?: boolean;

  joinColumns?: Array<JoinAPI.TableColumnJoin>;

  joinTableId?: string;

  joinViewId?: string;

  publicId?: string;
}

export interface TableJoinImportedColumns {
  sourceColumnId?: string;

  targetColumnId?: string;
}

export interface UpdateDocumentTableCells {
  cells: Array<UpdateDocumentTableCells.Cell>;

  context?: HubAPI.BaseRequestContext;
}

export namespace UpdateDocumentTableCells {
  export interface Cell {
    columnName: string;

    rowId: string;

    value: unknown;

    context?: HubAPI.BaseRequestContext;
  }
}

export interface TableCreateResponse {
  data?: Table;

  metadata?: unknown;
}

export interface TableRetrieveResponse {
  data?: Table;

  metadata?: TableRetrieveResponse.Metadata;
}

export namespace TableRetrieveResponse {
  export interface Metadata {
    /**
     * Current page number
     */
    page?: number;

    /**
     * Number of items per page
     */
    size?: number;

    /**
     * Total number of rows in the table
     */
    total?: number;
  }
}

export interface TableUpdateResponse {
  data?: Table;

  metadata?: unknown;
}

export interface TableDeleteResponse {
  data?: string;

  metadata?: unknown;
}

export interface TableCheckUsageResponse {
  data?: Array<TableCheckUsageResponse.Data>;

  metadata?: unknown;
}

export namespace TableCheckUsageResponse {
  export interface Data {
    /**
     * Direct link to the document, join or select
     */
    link?: string;

    /**
     * Name of the document, join or select where the table is used
     */
    name?: string;

    /**
     * Type of usage (process, sourceJoin, targetJoin, sourceSelect, etc.)
     */
    type?: string;
  }
}

export interface TableCreateIndexResponse {
  data?: Array<ColumnAPI.TableColumn>;

  metadata?: { [key: string]: unknown };
}

export interface TableDeleteRowsResponse {
  data?: string;

  metadata?: { [key: string]: unknown };
}

export type TableDownloadCsvResponse = Uploadable;

export interface TableDuplicateResponse {
  data?: string;

  metadata?: unknown;
}

export interface TableGetDuplicatedChildrenResponse {
  data?: Array<TableGetDuplicatedChildrenResponse.Data>;

  metadata?: unknown;
}

export namespace TableGetDuplicatedChildrenResponse {
  export interface Data {
    createdAt?: string;

    link?: string;

    name?: string;

    user?: string;
  }
}

export interface TableGetStatisticsResponse {
  data?: Array<TableColumnWithAggregation>;

  metadata?: unknown;
}

export interface TableListColumnsResponse {
  data?: Array<ColumnAPI.TableColumn>;

  metadata?: unknown;
}

export interface TableListJoinsResponse {
  data?: Array<TableJoin>;

  metadata?: { [key: string]: unknown };
}

export interface TableRestoreResponse {
  data?: Table;

  metadata?: unknown;
}

export interface TableTruncateResponse {
  data?: string;

  metadata?: { [key: string]: unknown };
}

export interface TableUpdateCellsResponse {
  data?: string;

  metadata?: { [key: string]: unknown };
}

export interface TableCreateParams {
  columns: Array<ColumnAPI.TableColumn>;

  name: string;

  projectId: string;

  context?: HubAPI.BaseRequestContext;

  joins?: Array<TableCreateParams.Join>;

  type?: string;
}

export namespace TableCreateParams {
  export interface Join {
    dataColumns?: Array<TableAPI.TableJoinImportedColumns>;

    isOneToMany?: boolean;

    joinColumns?: Array<JoinAPI.TableColumnJoin>;

    joinTableName?: string;

    joinViewId?: string;

    joinViewName?: string;
  }
}

export interface TableRetrieveParams {
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
   * Flag to indicate whether to ignore cached options in the response.
   */
  ignore_cached_options?: boolean;

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

export interface TableUpdateParams {
  allowComments?: boolean;

  context?: HubAPI.BaseRequestContext;

  isReferenceTable?: boolean;

  joins?: Array<TableUpdateParams.Join>;

  keepColoursInSync?: boolean;

  keepValidationsInSync?: boolean;

  logo?: string | null;

  name?: string;

  syncHourlyFrequency?: 0 | 24;

  type?: string | null;
}

export namespace TableUpdateParams {
  export interface Join {
    dataColumns?: Array<TableAPI.TableJoinImportedColumns>;

    isOneToMany?: boolean;

    joinColumns?: Array<JoinAPI.TableColumnJoin>;

    joinTableName?: string;

    joinViewId?: string;

    joinViewName?: string;

    publicId?: string;
  }
}

export interface TableCreateIndexParams {
  columns: Array<TableCreateIndexParams.Column>;
}

export namespace TableCreateIndexParams {
  export interface Column {
    publicId: string;
  }
}

export interface TableDownloadCsvParams {
  /**
   * Filter criteria for the table rows
   */
  filter?: string;

  /**
   * Sorting criteria for the table rows
   */
  sort?: string;
}

export interface TableDuplicateParams {
  targetProjectId: string;

  context?: HubAPI.BaseRequestContext;

  duplicateLinkedTables?: boolean | null;

  duplicatePermissions?: boolean;
}

export interface TableGetFileParams {
  /**
   * UUID of the column containing the cell.
   */
  column_id: string;

  /**
   * Name of the file to retrieve.
   */
  filename: string;
}

export interface TableGetStatisticsParams {
  /**
   * Aggregation functions to apply on columns
   */
  aggregation?: { [key: string]: string };

  /**
   * Filter criteria for the columns
   */
  filter?: string;
}

export interface TableStreamRowsParams {
  /**
   * Filters to apply to the streaming data.
   */
  filter?: string;

  /**
   * Page number for pagination
   */
  page?: number;

  /**
   * Number of items per page for pagination
   */
  size?: number;

  /**
   * Sorting parameters for the streaming data.
   */
  sort?: string;
}

export interface TableUpdateCellsParams {
  cells: Array<TableUpdateCellsParams.Cell>;

  context?: HubAPI.BaseRequestContext;
}

export namespace TableUpdateCellsParams {
  export interface Cell {
    columnName: string;

    rowId: string;

    value: unknown;

    context?: HubAPI.BaseRequestContext;
  }
}

TableResource.Column = ColumnAPIColumn;
TableResource.Row = Row;
TableResource.Join = JoinAPIJoin;
TableResource.Sync = Sync;
TableResource.Views = Views;

export declare namespace TableResource {
  export {
    type Project as Project,
    type Table as Table,
    type TableColumnWithAggregation as TableColumnWithAggregation,
    type TableJoin as TableJoin,
    type TableJoinImportedColumns as TableJoinImportedColumns,
    type UpdateDocumentTableCells as UpdateDocumentTableCells,
    type TableCreateResponse as TableCreateResponse,
    type TableRetrieveResponse as TableRetrieveResponse,
    type TableUpdateResponse as TableUpdateResponse,
    type TableDeleteResponse as TableDeleteResponse,
    type TableCheckUsageResponse as TableCheckUsageResponse,
    type TableCreateIndexResponse as TableCreateIndexResponse,
    type TableDeleteRowsResponse as TableDeleteRowsResponse,
    type TableDownloadCsvResponse as TableDownloadCsvResponse,
    type TableDuplicateResponse as TableDuplicateResponse,
    type TableGetDuplicatedChildrenResponse as TableGetDuplicatedChildrenResponse,
    type TableGetStatisticsResponse as TableGetStatisticsResponse,
    type TableListColumnsResponse as TableListColumnsResponse,
    type TableListJoinsResponse as TableListJoinsResponse,
    type TableRestoreResponse as TableRestoreResponse,
    type TableTruncateResponse as TableTruncateResponse,
    type TableUpdateCellsResponse as TableUpdateCellsResponse,
    type TableCreateParams as TableCreateParams,
    type TableRetrieveParams as TableRetrieveParams,
    type TableUpdateParams as TableUpdateParams,
    type TableCreateIndexParams as TableCreateIndexParams,
    type TableDownloadCsvParams as TableDownloadCsvParams,
    type TableDuplicateParams as TableDuplicateParams,
    type TableGetFileParams as TableGetFileParams,
    type TableGetStatisticsParams as TableGetStatisticsParams,
    type TableStreamRowsParams as TableStreamRowsParams,
    type TableUpdateCellsParams as TableUpdateCellsParams,
  };

  export {
    ColumnAPIColumn as Column,
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

  export {
    Row as Row,
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

  export {
    JoinAPIJoin as Join,
    type TableColumnJoin as TableColumnJoin,
    type JoinCreateResponse as JoinCreateResponse,
    type JoinUpdateResponse as JoinUpdateResponse,
    type JoinDeleteResponse as JoinDeleteResponse,
    type JoinCreateParams as JoinCreateParams,
    type JoinUpdateParams as JoinUpdateParams,
    type JoinDeleteParams as JoinDeleteParams,
  };

  export {
    Sync as Sync,
    type SyncUpdateResponse as SyncUpdateResponse,
    type SyncDeleteIntegrationResponse as SyncDeleteIntegrationResponse,
    type SyncGetSyncInfoResponse as SyncGetSyncInfoResponse,
    type SyncRetryIntegrationSyncResponse as SyncRetryIntegrationSyncResponse,
    type SyncSyncWithIntegrationResponse as SyncSyncWithIntegrationResponse,
    type SyncUpdateParams as SyncUpdateParams,
    type SyncDeleteIntegrationParams as SyncDeleteIntegrationParams,
    type SyncSyncWithIntegrationParams as SyncSyncWithIntegrationParams,
  };

  export {
    Views as Views,
    type Chart as Chart,
    type Colour as Colour,
    type Filter as Filter,
    type Group as Group,
    type Sort as Sort,
    type TableView as TableView,
    type ViewCreateResponse as ViewCreateResponse,
    type ViewRetrieveResponse as ViewRetrieveResponse,
    type ViewUpdateResponse as ViewUpdateResponse,
    type ViewListResponse as ViewListResponse,
    type ViewDeleteResponse as ViewDeleteResponse,
    type ViewDownloadCsvResponse as ViewDownloadCsvResponse,
    type ViewDuplicateResponse as ViewDuplicateResponse,
    type ViewDuplicateDefaultResponse as ViewDuplicateDefaultResponse,
    type ViewPreviewRowResponse as ViewPreviewRowResponse,
    type ViewSetDefaultResponse as ViewSetDefaultResponse,
    type ViewStatsResponse as ViewStatsResponse,
    type ViewUpdateCellsResponse as ViewUpdateCellsResponse,
    type ViewCreateParams as ViewCreateParams,
    type ViewRetrieveParams as ViewRetrieveParams,
    type ViewUpdateParams as ViewUpdateParams,
    type ViewListParams as ViewListParams,
    type ViewDownloadCsvParams as ViewDownloadCsvParams,
    type ViewDuplicateParams as ViewDuplicateParams,
    type ViewDuplicateDefaultParams as ViewDuplicateDefaultParams,
    type ViewPreviewRowParams as ViewPreviewRowParams,
    type ViewStatsParams as ViewStatsParams,
    type ViewStreamRowsParams as ViewStreamRowsParams,
    type ViewUpdateCellsParams as ViewUpdateCellsParams,
  };
}
