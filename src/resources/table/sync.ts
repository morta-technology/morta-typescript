// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as HubAPI from '../hub/hub';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Sync extends APIResource {
  /**
   * Update a synced table with a specified integration.
   */
  update(
    integrationName: string,
    params: SyncUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SyncUpdateResponse> {
    const { table_id, ...body } = params;
    return this._client.post(path`/v1/table/${table_id}/sync/${integrationName}/update`, {
      body,
      ...options,
    });
  }

  /**
   * Remove a specific integration from a table.
   */
  deleteIntegration(
    integrationName: string,
    params: SyncDeleteIntegrationParams,
    options?: RequestOptions,
  ): APIPromise<SyncDeleteIntegrationResponse> {
    const { table_id } = params;
    return this._client.delete(path`/v1/table/${table_id}/sync/${integrationName}`, options);
  }

  /**
   * Retrieve the integration sync info of a given table.
   */
  getSyncInfo(tableID: string, options?: RequestOptions): APIPromise<SyncGetSyncInfoResponse> {
    return this._client.get(path`/v1/table/${tableID}/sync/info`, options);
  }

  /**
   * Retry a failed integration sync.
   */
  retryIntegrationSync(
    tableID: string,
    options?: RequestOptions,
  ): APIPromise<SyncRetryIntegrationSyncResponse> {
    return this._client.get(path`/v1/table/${tableID}/sync/manual`, options);
  }

  /**
   * Sync a table with a specified integration.
   */
  syncWithIntegration(
    integrationName: string,
    params: SyncSyncWithIntegrationParams,
    options?: RequestOptions,
  ): APIPromise<SyncSyncWithIntegrationResponse> {
    const { table_id, ...body } = params;
    return this._client.post(path`/v1/table/${table_id}/sync/${integrationName}`, { body, ...options });
  }
}

export interface SyncUpdateResponse {
  data?: string;

  metadata?: { [key: string]: unknown };
}

export interface SyncDeleteIntegrationResponse {
  data?: string;

  metadata?: { [key: string]: unknown };
}

export interface SyncGetSyncInfoResponse {
  data?: SyncGetSyncInfoResponse.Data;
}

export namespace SyncGetSyncInfoResponse {
  export interface Data {
    createdAt?: string;

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

    isReviztoIssuesSynced?: boolean;

    isSynced?: boolean;

    isSyncing?: boolean;

    isViewpointRfisSynced?: boolean;

    isViewpointSynced?: boolean;

    lastSync?: string;

    name?: string;

    publicId?: string;

    syncHourlyFrequency?: number;

    type?: string;

    updatedAt?: string;
  }
}

export interface SyncRetryIntegrationSyncResponse {
  data?: string;

  metadata?: { [key: string]: unknown };
}

export interface SyncSyncWithIntegrationResponse {
  data?: string;

  metadata?: { [key: string]: unknown };
}

export interface SyncUpdateParams {
  /**
   * Path param: UUID of the table to update.
   */
  table_id: string;

  /**
   * Body param:
   */
  companyId?: string;

  /**
   * Body param:
   */
  context?: HubAPI.BaseRequestContext;

  /**
   * Body param:
   */
  docTypes?: Array<string>;

  /**
   * Body param:
   */
  enterpriseId?: string;

  /**
   * Body param:
   */
  folderId?: string;

  /**
   * Body param:
   */
  hubId?: string;

  /**
   * Body param:
   */
  licenseId?: string;

  /**
   * Body param:
   */
  modelId?: string;

  /**
   * Body param:
   */
  projectId?: string;

  /**
   * Body param:
   */
  projectIds?: Array<string>;

  /**
   * Body param:
   */
  properties?: Array<string>;

  /**
   * Body param:
   */
  region?: string;

  /**
   * Body param:
   */
  topFolderId?: string;

  /**
   * Body param:
   */
  type?:
    | 'Projects'
    | 'Resources'
    | 'Users'
    | 'Documents'
    | 'Workflows'
    | 'Comments'
    | 'RFIs'
    | 'Checklists'
    | 'Columns'
    | 'Issues'
    | 'AEC Data Model'
    | 'Forms';
}

export interface SyncDeleteIntegrationParams {
  /**
   * UUID of the table from which the integration will be removed.
   */
  table_id: string;
}

export interface SyncSyncWithIntegrationParams {
  /**
   * Path param: UUID of the table to sync.
   */
  table_id: string;

  /**
   * Body param:
   */
  companyId?: string;

  /**
   * Body param:
   */
  context?: HubAPI.BaseRequestContext;

  /**
   * Body param:
   */
  docTypes?: Array<string>;

  /**
   * Body param:
   */
  enterpriseId?: string;

  /**
   * Body param:
   */
  folderId?: string;

  /**
   * Body param:
   */
  hubId?: string;

  /**
   * Body param:
   */
  licenseId?: string;

  /**
   * Body param:
   */
  modelId?: string;

  /**
   * Body param:
   */
  projectId?: string;

  /**
   * Body param:
   */
  projectIds?: Array<string>;

  /**
   * Body param:
   */
  properties?: Array<string>;

  /**
   * Body param:
   */
  region?: string;

  /**
   * Body param:
   */
  topFolderId?: string;

  /**
   * Body param:
   */
  type?:
    | 'Projects'
    | 'Resources'
    | 'Users'
    | 'Documents'
    | 'Workflows'
    | 'Comments'
    | 'RFIs'
    | 'Checklists'
    | 'Columns'
    | 'Issues'
    | 'AEC Data Model'
    | 'Forms';
}

export declare namespace Sync {
  export {
    type SyncUpdateResponse as SyncUpdateResponse,
    type SyncDeleteIntegrationResponse as SyncDeleteIntegrationResponse,
    type SyncGetSyncInfoResponse as SyncGetSyncInfoResponse,
    type SyncRetryIntegrationSyncResponse as SyncRetryIntegrationSyncResponse,
    type SyncSyncWithIntegrationResponse as SyncSyncWithIntegrationResponse,
    type SyncUpdateParams as SyncUpdateParams,
    type SyncDeleteIntegrationParams as SyncDeleteIntegrationParams,
    type SyncSyncWithIntegrationParams as SyncSyncWithIntegrationParams,
  };
}
