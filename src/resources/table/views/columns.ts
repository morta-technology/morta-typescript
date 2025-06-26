// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DocumentAPI from '../../document/document';
import * as HubAPI from '../../hub/hub';
import * as ColumnAPI from '../column';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Columns extends APIResource {
  /**
   * Update a specific column in a table view.
   */
  update(
    columnID: string,
    params: ColumnUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ColumnUpdateResponse> {
    const { view_id, ...body } = params;
    return this._client.put(path`/v1/table/views/${view_id}/columns/${columnID}`, { body, ...options });
  }

  /**
   * Add a new column to a specific table view.
   */
  add(viewID: string, body: ColumnAddParams, options?: RequestOptions): APIPromise<ColumnAddResponse> {
    return this._client.post(path`/v1/table/views/${viewID}/columns`, { body, ...options });
  }

  /**
   * Get AI formula helper for a specific column in a table view.
   */
  aiFormulaHelper(
    columnID: string,
    params: ColumnAIFormulaHelperParams,
    options?: RequestOptions,
  ): APIPromise<ColumnAIFormulaHelperResponse> {
    const { view_id, ...body } = params;
    return this._client.post(path`/v1/table/views/${view_id}/column/${columnID}/ai-formula-helper`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieve the unique/distinct values for a specific column in a table view.
   */
  distinct(
    columnID: string,
    params: ColumnDistinctParams,
    options?: RequestOptions,
  ): APIPromise<ColumnDistinctResponse> {
    const { view_id, ...query } = params;
    return this._client.get(path`/v1/table/views/${view_id}/column/${columnID}/distinct`, {
      query,
      ...options,
    });
  }

  /**
   * Retrieve formula information for a specific column in a table view.
   */
  formulaInfo(
    columnID: string,
    params: ColumnFormulaInfoParams,
    options?: RequestOptions,
  ): APIPromise<ColumnFormulaInfoResponse> {
    const { view_id } = params;
    return this._client.get(path`/v1/table/views/${view_id}/column/${columnID}/formula-info`, options);
  }
}

export interface TableViewColumn {
  aconexSynced?: number;

  aconexWorkflowsSynced?: number;

  aggregate?: number;

  alterOptions?: ColumnAPI.TableColumnAlter | unknown;

  asiteDocumentsSynced?: number;

  asiteFormsSynced?: number;

  autodeskBim360ChecklistsSynced?: number;

  autodeskBim360IssuesSynced?: number;

  autodeskBim360ModelsSynced?: number;

  autodeskBim360Synced?: number;

  autodeskBim360UsersSynced?: number;

  dateFormat?: string | null;

  decimalPlaces?: number;

  description?: unknown | DocumentAPI.Draftjs;

  displayLink?: boolean;

  displayValidationError?: boolean;

  exportWidth?: number | null;

  formula?: string | null;

  formulaEnabled?: boolean;

  hardValidation?: boolean;

  headerBackgroundColor?: string | null;

  headerTextColor?: string | null;

  isIndexed?: boolean;

  isJoined?: boolean | null;

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

  kindOptions?: ColumnAPI.SelectOptionsLookup;

  locked?: boolean;

  mortaSynced?: number;

  name?: string;

  procoreSynced?: number;

  publicId?: string;

  required?: boolean;

  reviztoIssuesSynced?: number;

  script?: string | null;

  scriptEnabled?: boolean;

  sortOrder?: number;

  stringValidation?: string | null;

  thousandSeparator?: boolean;

  validationMessage?: string | null;

  validationNoBlanks?: boolean;

  validationNoDuplicates?: boolean;

  viewpointRfisSynced?: number;

  viewpointSynced?: number;

  width?: number;
}

export interface UpdateTableViewColumn {
  aconexSynced?: number;

  aconexWorkflowsSynced?: number;

  aggregate?: number;

  alterOptions?: ColumnAPI.TableColumnAlter | unknown;

  asiteDocumentsSynced?: number;

  asiteFormsSynced?: number;

  autodeskBim360ChecklistsSynced?: number;

  autodeskBim360IssuesSynced?: number;

  autodeskBim360ModelsSynced?: number;

  autodeskBim360Synced?: number;

  autodeskBim360UsersSynced?: number;

  context?: HubAPI.BaseRequestContext;

  dateFormat?: string | null;

  decimalPlaces?: number;

  description?: unknown | DocumentAPI.Draftjs;

  displayLink?: boolean;

  displayValidationError?: boolean;

  exportWidth?: number | null;

  formula?: string | null;

  formulaEnabled?: boolean;

  hardValidation?: boolean;

  headerBackgroundColor?: string | null;

  headerTextColor?: string | null;

  isIndexed?: boolean;

  isJoined?: boolean | null;

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

  kindOptions?: ColumnAPI.SelectOptionsLookup;

  locked?: boolean;

  mortaSynced?: number;

  name?: string;

  procoreSynced?: number;

  publicId?: string;

  required?: boolean;

  reviztoIssuesSynced?: number;

  script?: string | null;

  scriptEnabled?: boolean;

  sortOrder?: number;

  stringValidation?: string | null;

  thousandSeparator?: boolean;

  validationMessage?: string | null;

  validationNoBlanks?: boolean;

  validationNoDuplicates?: boolean;

  viewpointRfisSynced?: number;

  viewpointSynced?: number;

  width?: number;
}

export interface ColumnUpdateResponse {
  data?: TableViewColumn;

  metadata?: { [key: string]: unknown };
}

export interface ColumnAddResponse {
  data?: TableViewColumn;

  metadata?: { [key: string]: unknown };
}

export interface ColumnAIFormulaHelperResponse {
  data?: ColumnAIFormulaHelperResponse.Data;

  metadata?: { [key: string]: unknown };
}

export namespace ColumnAIFormulaHelperResponse {
  export interface Data {
    ai_formula_helper?: { [key: string]: unknown };
  }
}

export interface ColumnDistinctResponse {
  data?: Array<string>;

  metadata?: { [key: string]: unknown };
}

export interface ColumnFormulaInfoResponse {
  data?: ColumnFormulaInfoResponse.Data;

  metadata?: { [key: string]: unknown };
}

export namespace ColumnFormulaInfoResponse {
  export interface Data {
    formula_info?: { [key: string]: unknown };
  }
}

export interface ColumnUpdateParams {
  /**
   * Path param: The UUID of the table view containing the column to be updated.
   */
  view_id: string;

  /**
   * Body param:
   */
  aconexSynced?: number;

  /**
   * Body param:
   */
  aconexWorkflowsSynced?: number;

  /**
   * Body param:
   */
  aggregate?: number;

  /**
   * Body param:
   */
  alterOptions?: ColumnAPI.TableColumnAlter | unknown;

  /**
   * Body param:
   */
  asiteDocumentsSynced?: number;

  /**
   * Body param:
   */
  asiteFormsSynced?: number;

  /**
   * Body param:
   */
  autodeskBim360ChecklistsSynced?: number;

  /**
   * Body param:
   */
  autodeskBim360IssuesSynced?: number;

  /**
   * Body param:
   */
  autodeskBim360ModelsSynced?: number;

  /**
   * Body param:
   */
  autodeskBim360Synced?: number;

  /**
   * Body param:
   */
  autodeskBim360UsersSynced?: number;

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
  displayValidationError?: boolean;

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
  hardValidation?: boolean;

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
  kindOptions?: ColumnAPI.SelectOptionsLookup;

  /**
   * Body param:
   */
  locked?: boolean;

  /**
   * Body param:
   */
  mortaSynced?: number;

  /**
   * Body param:
   */
  name?: string;

  /**
   * Body param:
   */
  procoreSynced?: number;

  /**
   * Body param:
   */
  publicId?: string;

  /**
   * Body param:
   */
  required?: boolean;

  /**
   * Body param:
   */
  reviztoIssuesSynced?: number;

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
  sortOrder?: number;

  /**
   * Body param:
   */
  stringValidation?: string | null;

  /**
   * Body param:
   */
  thousandSeparator?: boolean;

  /**
   * Body param:
   */
  validationMessage?: string | null;

  /**
   * Body param:
   */
  validationNoBlanks?: boolean;

  /**
   * Body param:
   */
  validationNoDuplicates?: boolean;

  /**
   * Body param:
   */
  viewpointRfisSynced?: number;

  /**
   * Body param:
   */
  viewpointSynced?: number;

  /**
   * Body param:
   */
  width?: number;
}

export interface ColumnAddParams {
  locked: boolean;

  required: boolean;

  sortOrder: number;

  aconexSynced?: number;

  aconexWorkflowsSynced?: number;

  aggregate?: number;

  alterOptions?: ColumnAPI.TableColumnAlter | unknown;

  asiteDocumentsSynced?: number;

  asiteFormsSynced?: number;

  autodeskBim360ChecklistsSynced?: number;

  autodeskBim360IssuesSynced?: number;

  autodeskBim360ModelsSynced?: number;

  autodeskBim360Synced?: number;

  autodeskBim360UsersSynced?: number;

  context?: HubAPI.BaseRequestContext;

  dateFormat?: string | null;

  decimalPlaces?: number;

  description?: unknown | DocumentAPI.Draftjs;

  displayLink?: boolean;

  displayValidationError?: boolean;

  exportWidth?: number | null;

  formula?: string | null;

  formulaEnabled?: boolean;

  hardValidation?: boolean;

  headerBackgroundColor?: string | null;

  headerTextColor?: string | null;

  isIndexed?: boolean;

  isJoined?: boolean | null;

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

  kindOptions?: ColumnAPI.SelectOptionsLookup;

  mortaSynced?: number;

  name?: string;

  procoreSynced?: number;

  publicId?: string;

  reviztoIssuesSynced?: number;

  script?: string | null;

  scriptEnabled?: boolean;

  stringValidation?: string | null;

  thousandSeparator?: boolean;

  validationMessage?: string | null;

  validationNoBlanks?: boolean;

  validationNoDuplicates?: boolean;

  viewpointRfisSynced?: number;

  viewpointSynced?: number;

  width?: number;
}

export interface ColumnAIFormulaHelperParams {
  /**
   * Path param: The UUID of the table view containing the column.
   */
  view_id: string;

  /**
   * Body param:
   */
  text: string;
}

export interface ColumnDistinctParams {
  /**
   * Path param: The UUID of the table view.
   */
  view_id: string;

  /**
   * Query param: Filters to apply to the data retrieval.
   */
  filter?: string;

  /**
   * Query param: Optional columns to group the distinct values.
   */
  group_columns?: Array<string>;
}

export interface ColumnFormulaInfoParams {
  /**
   * The UUID of the table view containing the column.
   */
  view_id: string;
}

export declare namespace Columns {
  export {
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
