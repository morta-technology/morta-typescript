// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ViewsAPI from './views';
import * as DocumentAPI from '../../document/document';
import * as HubAPI from '../../hub/hub';
import * as TableAPI from '../table';
import * as ColumnsAPI from './columns';
import {
  ColumnAIFormulaHelperParams,
  ColumnAIFormulaHelperResponse,
  ColumnAddParams,
  ColumnAddResponse,
  ColumnDistinctParams,
  ColumnDistinctResponse,
  ColumnFormulaInfoParams,
  ColumnFormulaInfoResponse,
  ColumnUpdateParams,
  ColumnUpdateResponse,
  Columns,
  TableViewColumn,
  UpdateTableViewColumn,
} from './columns';
import * as RowsAPI from './rows';
import {
  RowAddParams,
  RowAddResponse,
  RowDeleteResponse,
  RowListParams,
  RowListResponse,
  RowUpdateParams,
  RowUpdateResponse,
  RowUpsertParams,
  RowUpsertResponse,
  Rows,
} from './rows';
import { APIPromise } from '../../../core/api-promise';
import { type Uploadable } from '../../../core/uploads';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Views extends APIResource {
  rows: RowsAPI.Rows = new RowsAPI.Rows(this._client);
  columns: ColumnsAPI.Columns = new ColumnsAPI.Columns(this._client);

  /**
   * Create a new view for a specific table.
   */
  create(tableID: string, body: ViewCreateParams, options?: RequestOptions): APIPromise<ViewCreateResponse> {
    return this._client.post(path`/v1/table/${tableID}/views`, { body, ...options });
  }

  /**
   * Retrieve a specific view by its ID for a table.
   */
  retrieve(
    viewID: string,
    query: ViewRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ViewRetrieveResponse> {
    return this._client.get(path`/v1/table/views/${viewID}`, { query, ...options });
  }

  /**
   * Update an existing view for a specific table.
   */
  update(viewID: string, body: ViewUpdateParams, options?: RequestOptions): APIPromise<ViewUpdateResponse> {
    return this._client.put(path`/v1/table/views/${viewID}`, { body, ...options });
  }

  /**
   * Retrieve all views associated with a specific table.
   */
  list(
    tableID: string,
    query: ViewListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ViewListResponse> {
    return this._client.get(path`/v1/table/${tableID}/views`, { query, ...options });
  }

  /**
   * Delete a specific view of a table.
   */
  delete(viewID: string, options?: RequestOptions): APIPromise<ViewDeleteResponse> {
    return this._client.delete(path`/v1/table/views/${viewID}`, options);
  }

  /**
   * Download the data of a specific table view in CSV format.
   */
  downloadCsv(
    viewID: string,
    query: ViewDownloadCsvParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get(path`/v1/table/views/${viewID}/csv`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/csv' }, options?.headers]),
    });
  }

  /**
   * Create a duplicate of an existing view for a specific table.
   */
  duplicate(
    viewID: string,
    params: ViewDuplicateParams,
    options?: RequestOptions,
  ): APIPromise<ViewDuplicateResponse> {
    const { table_id } = params;
    return this._client.post(path`/v1/table/${table_id}/views/${viewID}/duplicate`, options);
  }

  /**
   * Create a duplicate of the default view for a specific table.
   */
  duplicateDefault(
    tableID: string,
    body: ViewDuplicateDefaultParams,
    options?: RequestOptions,
  ): APIPromise<ViewDuplicateDefaultResponse> {
    return this._client.post(path`/v1/table/${tableID}/views/duplicate-default`, { body, ...options });
  }

  /**
   * Preview the resulting row from given inputs in a specific table view.
   */
  previewRow(
    viewID: string,
    body: ViewPreviewRowParams,
    options?: RequestOptions,
  ): APIPromise<ViewPreviewRowResponse> {
    return this._client.post(path`/v1/table/views/${viewID}/preview-row`, { body, ...options });
  }

  /**
   * Designate a specific table view as the default view for the table.
   */
  setDefault(viewID: string, options?: RequestOptions): APIPromise<ViewSetDefaultResponse> {
    return this._client.post(path`/v1/table/views/${viewID}/default`, options);
  }

  /**
   * Retrieve statistical data for columns in a specific table view.
   */
  stats(
    viewID: string,
    query: ViewStatsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ViewStatsResponse> {
    return this._client.get(path`/v1/table/views/${viewID}/stats`, { query, ...options });
  }

  /**
   * Stream the data of all rows for a specific table view.
   */
  streamRows(
    viewID: string,
    query: ViewStreamRowsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get(path`/v1/table/views/${viewID}/rows-stream`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/x-msgppack' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Update specific cells in a table view.
   */
  updateCells(
    viewID: string,
    body: ViewUpdateCellsParams,
    options?: RequestOptions,
  ): APIPromise<ViewUpdateCellsResponse> {
    return this._client.put(path`/v1/table/views/${viewID}/cells`, { body, ...options });
  }
}

export interface Chart {
  aggregate?: 'sum' | 'count' | 'avg' | null;

  chartType?:
    | 'bar'
    | 'horizontal-bar'
    | 'stacked-bar'
    | 'stacked-horizontal-bar'
    | 'clustered-bar'
    | 'clustered-horizontal-bar'
    | 'grouped-bar'
    | 'area'
    | 'line'
    | 'multiaxis-line'
    | 'pie'
    | 'doughnut'
    | 'polar-area'
    | 'radar'
    | 'scatter'
    | 'bubble'
    | 'gantt';

  columnGanttEndDateId?: string | null;

  columnGanttStartDateId?: string | null;

  columnLabelId?: string;

  columnStackId?: string | null;

  columnValueId?: string | null;

  showLegend?: boolean;

  showTitle?: boolean;

  showValues?: boolean;

  sortAggregate?: 'asc' | 'desc' | null;
}

export interface Colour {
  backgroundColour: string;

  columnName: string;

  filterType:
    | 'eq'
    | 'lt'
    | 'gt'
    | 'lte'
    | 'gte'
    | 'neq'
    | 'contains'
    | 'in'
    | 'row_id'
    | 'is'
    | 'is_not'
    | 'one_of'
    | 'not_one_of'
    | 'is_null'
    | 'is_not_null'
    | 'not_contains'
    | 'starts_with'
    | 'ends_with'
    | 'is_valid'
    | 'is_not_valid';

  fontColour: string;

  columnId?: string;

  multipleValues?: Array<unknown>;

  value?: unknown;
}

export interface Filter {
  columnName: string;

  filterType:
    | 'eq'
    | 'lt'
    | 'gt'
    | 'lte'
    | 'gte'
    | 'neq'
    | 'contains'
    | 'in'
    | 'row_id'
    | 'is'
    | 'is_not'
    | 'one_of'
    | 'not_one_of'
    | 'is_null'
    | 'is_not_null'
    | 'not_contains'
    | 'starts_with'
    | 'ends_with'
    | 'is_valid'
    | 'is_not_valid';

  columnId?: string;

  multipleValues?: Array<unknown>;

  orGroup?: string;

  value?: unknown;
}

export interface Group {
  columnName: string;

  direction: string;

  columnId?: string;
}

export interface Sort {
  columnName: string;

  direction: string;

  columnId?: string;
}

export interface TableView {
  name: string;

  allowContributorDelete?: boolean;

  chartSettings?: Chart;

  collapsedGroupView?: boolean;

  colourSettings?: Array<Colour>;

  columns?: Array<ColumnsAPI.TableViewColumn>;

  description?: DocumentAPI.Draftjs;

  disableNewRow?: boolean;

  disableSyncCsv?: boolean;

  displayCommentRows?: number;

  displayValidationErrorRows?: number;

  filterSettings?: Array<Filter>;

  frozenIndex?: number;

  groupSettings?: Array<Group> | null;

  isDefault?: boolean;

  lockedFromDuplication?: boolean;

  publicId?: string;

  rowHeight?: number;

  sortSettings?: Array<Sort>;

  type?: number;

  unpackMultiselectGroupView?: boolean;
}

export interface ViewCreateResponse {
  data?: TableView;

  metadata?: { [key: string]: unknown };
}

export interface ViewRetrieveResponse {
  data?: ViewRetrieveResponse.Data;

  metadata?: { [key: string]: unknown };
}

export namespace ViewRetrieveResponse {
  export interface Data {
    name: string;

    allowContributorDelete?: boolean;

    chartSettings?: ViewsAPI.Chart;

    collapsedGroupView?: boolean;

    colourSettings?: Array<ViewsAPI.Colour>;

    columns?: Array<ColumnsAPI.TableViewColumn>;

    description?: DocumentAPI.Draftjs;

    disableNewRow?: boolean;

    disableSyncCsv?: boolean;

    displayCommentRows?: number;

    displayValidationErrorRows?: number;

    documentTable?: Data.DocumentTable;

    filterSettings?: Array<ViewsAPI.Filter>;

    frozenIndex?: number;

    groupSettings?: Array<ViewsAPI.Group> | null;

    isDefault?: boolean;

    lockedFromDuplication?: boolean;

    publicId?: string;

    rowHeight?: number;

    sortSettings?: Array<ViewsAPI.Sort>;

    type?: number;

    unpackMultiselectGroupView?: boolean;
  }

  export namespace Data {
    export interface DocumentTable {
      createdAt?: string;

      name?: string;

      publicId?: string;

      type?: string;

      updatedAt?: string;
    }
  }
}

export interface ViewUpdateResponse {
  data?: TableView;

  metadata?: { [key: string]: unknown };
}

export interface ViewListResponse {
  data?: Array<TableView>;

  metadata?: { [key: string]: unknown };
}

export interface ViewDeleteResponse {
  data?: string;

  metadata?: { [key: string]: unknown };
}

export type ViewDownloadCsvResponse = Uploadable;

export interface ViewDuplicateResponse {
  data?: TableView;

  metadata?: { [key: string]: unknown };
}

export interface ViewDuplicateDefaultResponse {
  data?: TableView;

  metadata?: { [key: string]: unknown };
}

export interface ViewPreviewRowResponse {
  data?: ViewPreviewRowResponse.Data;

  metadata?: { [key: string]: unknown };
}

export namespace ViewPreviewRowResponse {
  export interface Data {
    publicId?: string;

    rowData?: { [key: string]: string };

    sortOrder?: number;
  }
}

export interface ViewSetDefaultResponse {
  data?: TableView;

  metadata?: { [key: string]: unknown };
}

export interface ViewStatsResponse {
  data?: Array<TableAPI.TableColumnWithAggregation>;

  metadata?: { [key: string]: unknown };
}

export interface ViewUpdateCellsResponse {
  data?: Array<ViewUpdateCellsResponse.Data>;

  metadata?: { [key: string]: unknown };
}

export namespace ViewUpdateCellsResponse {
  export interface Data {
    publicId?: string;

    rowData?: { [key: string]: unknown };

    sortOrder?: number;
  }
}

export interface ViewCreateParams {
  name: string;

  allowContributorDelete?: boolean;

  chartSettings?: unknown | Chart;

  collapsedGroupView?: boolean;

  colourSettings?: Array<Colour>;

  columns?: Array<ViewCreateParams.Column>;

  context?: HubAPI.BaseRequestContext;

  description?: unknown | DocumentAPI.Draftjs;

  disableNewRow?: boolean;

  disableSyncCsv?: boolean;

  displayCommentRows?: number;

  displayValidationErrorRows?: 0 | 1 | 2;

  filterSettings?: Array<Filter>;

  frozenIndex?: number;

  groupSettings?: Array<Group>;

  includeAllColumns?: boolean;

  isDefault?: boolean;

  rowHeight?: number;

  sortSettings?: Array<Sort>;

  type?: number;

  unpackMultiselectGroupView?: boolean;
}

export namespace ViewCreateParams {
  export interface Column {
    columnName: string;

    columnId?: string;

    description?: DocumentAPI.Draftjs | unknown;

    displayValidationError?: boolean;

    hardValidation?: boolean;

    locked?: boolean;

    required?: boolean;

    stringValidation?: string | null;

    validationMessage?: string | null;

    validationNoBlanks?: boolean;

    validationNoDuplicates?: boolean;
  }
}

export interface ViewRetrieveParams {
  /**
   * Flag to indicate whether to ignore cached options in the response.
   */
  ignore_cached_options?: boolean;
}

export interface ViewUpdateParams {
  allowContributorDelete?: boolean;

  chartSettings?: unknown | Chart;

  collapsedGroupView?: boolean;

  colourSettings?: Array<Colour>;

  columns?: Array<ColumnsAPI.UpdateTableViewColumn>;

  context?: HubAPI.BaseRequestContext;

  description?: unknown | DocumentAPI.Draftjs;

  disableNewRow?: boolean;

  disableSyncCsv?: boolean;

  displayCommentRows?: number;

  displayValidationErrorRows?: 0 | 1 | 2;

  filterSettings?: Array<Filter>;

  frozenIndex?: number;

  groupSettings?: Array<Group>;

  name?: string;

  rowHeight?: number;

  sortSettings?: Array<Sort>;

  type?: number;

  unpackMultiselectGroupView?: boolean;
}

export interface ViewListParams {
  /**
   * Flag to indicate whether to ignore column data in the response.
   */
  ignore_columns?: boolean;
}

export interface ViewDownloadCsvParams {
  /**
   * Filters to apply to the CSV data.
   */
  filter?: string;

  /**
   * Optional UUID of a process to filter the data.
   */
  process_id?: string;

  /**
   * Sorting parameters for the CSV data.
   */
  sort?: string;
}

export interface ViewDuplicateParams {
  /**
   * The UUID of the table for which the view is to be duplicated.
   */
  table_id: string;
}

export interface ViewDuplicateDefaultParams {
  context?: HubAPI.BaseRequestContext;

  name?: string;

  type?: number;
}

export interface ViewPreviewRowParams {
  rowData: { [key: string]: unknown };

  context?: HubAPI.BaseRequestContext;
}

export interface ViewStatsParams {
  /**
   * Filters to apply to the statistical data retrieval.
   */
  filter?: string;

  /**
   * Optional UUID of a process to filter the data.
   */
  process_id?: string;

  /**
   * Specify columns to perform sum, average, max, min, or count operations.
   */
  'sum, avg, max, min, count'?: Array<string>;
}

export interface ViewStreamRowsParams {
  /**
   * Filters to apply to the streaming data.
   */
  filter?: string;

  /**
   * Page number for pagination
   */
  page?: number;

  /**
   * Optional UUID of a process to filter the data.
   */
  process_id?: string;

  /**
   * Number of items per page for pagination
   */
  size?: number;

  /**
   * Sorting parameters for the streaming data.
   */
  sort?: string;
}

export interface ViewUpdateCellsParams {
  cells: Array<ViewUpdateCellsParams.Cell>;

  context?: HubAPI.BaseRequestContext;
}

export namespace ViewUpdateCellsParams {
  export interface Cell {
    columnName: string;

    rowId: string;

    value: unknown;

    context?: HubAPI.BaseRequestContext;
  }
}

Views.Rows = Rows;
Views.Columns = Columns;

export declare namespace Views {
  export {
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

  export {
    Rows as Rows,
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

  export {
    Columns as Columns,
    type TableViewColumn as TableViewColumn,
    type UpdateTableViewColumn as UpdateTableViewColumn,
    type ColumnUpdateResponse as ColumnUpdateResponse,
    type ColumnAddResponse as ColumnAddResponse,
    type ColumnAIFormulaHelperResponse as ColumnAIFormulaHelperResponse,
    type ColumnDistinctResponse as ColumnDistinctResponse,
    type ColumnFormulaInfoResponse as ColumnFormulaInfoResponse,
    type ColumnUpdateParams as ColumnUpdateParams,
    type ColumnAddParams as ColumnAddParams,
    type ColumnAIFormulaHelperParams as ColumnAIFormulaHelperParams,
    type ColumnDistinctParams as ColumnDistinctParams,
    type ColumnFormulaInfoParams as ColumnFormulaInfoParams,
  };
}
