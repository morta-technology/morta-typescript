// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PermissionsAPI from './permissions';
import * as DocumentAPI from './document/document';
import * as HubAPI from './hub/hub';
import * as TableAPI from './table/table';
import * as TagsAPI from './user/tags';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Permissions extends APIResource {
  /**
   * Create permissions for a specific resource (such as a table, table view, or
   * process).
   */
  create(body: PermissionCreateParams, options?: RequestOptions): APIPromise<PermissionCreateResponse> {
    return this._client.post('/v1/permissions', { body, ...options });
  }

  /**
   * Retrieve permissions for a specified resource, such as a table, table view, or
   * process.
   */
  retrieve(
    query: PermissionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<PermissionRetrieveResponse> {
    return this._client.get('/v1/permissions', { query, ...options });
  }

  /**
   * Update permissions for a specific resource (such as a table, table view, or
   * process).
   */
  update(
    id: string,
    body: PermissionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PermissionUpdateResponse> {
    return this._client.put(path`/v1/permissions/${id}`, { body, ...options });
  }

  /**
   * Delete permissions for a specific resource (such as a table, table view, or
   * process).
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/permissions/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create permissions for a specific resource (such as a table, table view, or
   * process).
   */
  createAll(
    body: PermissionCreateAllParams,
    options?: RequestOptions,
  ): APIPromise<PermissionCreateAllResponse> {
    return this._client.post('/v1/permissions/all', { body, ...options });
  }

  /**
   * Request permissions for a specific resource (such as a table, table view, or
   * process).
   */
  request(id: string, params: PermissionRequestParams, options?: RequestOptions): APIPromise<void> {
    const { hub_id, type } = params;
    return this._client.get(path`/v1/permissions/request/${hub_id}/${type}/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a tag by its public ID.
   */
  retrieveTag(
    query: PermissionRetrieveTagParams,
    options?: RequestOptions,
  ): APIPromise<PermissionRetrieveTagResponse> {
    return this._client.get('/v1/permissions/tag', { query, ...options });
  }
}

export interface AccessPolicy {
  accessAttribute?: AccessPolicy.AccessAttribute;

  accessResource?: AccessPolicy.AccessResource;

  publicId?: string;

  role?: number;

  roleLabel?: string;
}

export namespace AccessPolicy {
  export interface AccessAttribute {
    documentTable?: PermissionsAPI.Table3;

    kind?: string;

    project?: TableAPI.Project;

    publicId?: string;

    tag?: TagsAPI.Tag;

    user?: AccessAttribute.User;
  }

  export namespace AccessAttribute {
    export interface User {
      firebaseUserId?: string;

      name?: string;

      publicId?: string;
    }
  }

  export interface AccessResource {
    documentTable?: PermissionsAPI.Table3;

    kind?: string;

    process?: DocumentAPI.Document;

    publicId?: string;
  }
}

export interface CreatePermissions {
  attributeKind: 'user' | 'tag' | 'project' | 'all_table_tags';

  resourceId: string;

  resourceKind: 'process' | 'table' | 'table_view';

  role: 0 | 1 | 2 | 3 | 4;

  attributeId?: string;

  context?: HubAPI.BaseRequestContext;

  tagReferenceId?: string;
}

export interface Table3 {
  name?: string;

  publicId?: string;
}

export interface PermissionCreateResponse {
  data?: AccessPolicy;

  metadata?: unknown;
}

export interface PermissionRetrieveResponse {
  data?: Array<AccessPolicy>;

  metadata?: unknown;
}

export interface PermissionUpdateResponse {
  data?: AccessPolicy;

  metadata?: unknown;
}

export interface PermissionCreateAllResponse {
  data?: AccessPolicy;

  metadata?: unknown;
}

export interface PermissionRetrieveTagResponse {
  data?: TagsAPI.Tag;

  metadata?: unknown;
}

export interface PermissionCreateParams {
  attributeKind: 'user' | 'tag' | 'project' | 'all_table_tags';

  resourceId: string;

  resourceKind: 'process' | 'table' | 'table_view';

  role: 0 | 1 | 2 | 3 | 4;

  attributeId?: string;

  context?: HubAPI.BaseRequestContext;

  tagReferenceId?: string;
}

export interface PermissionRetrieveParams {
  /**
   * The kind of resource for which to retrieve permissions. Valid options are
   * 'process', 'table', or 'table_view'.
   */
  resource: 'process' | 'table' | 'table_view';

  /**
   * UUID of the resource for which to retrieve permissions.
   */
  resource_id: string;
}

export interface PermissionUpdateParams {
  role: 0 | 1 | 2 | 3 | 4;

  context?: HubAPI.BaseRequestContext;
}

export interface PermissionCreateAllParams {
  attributeKind: 'user' | 'tag' | 'project' | 'all_table_tags';

  resourceId: string;

  resourceKind: 'process' | 'table' | 'table_view';

  role: 0 | 1 | 2 | 3 | 4;

  attributeId?: string;

  context?: HubAPI.BaseRequestContext;

  tagReferenceId?: string;
}

export interface PermissionRequestParams {
  /**
   * UUID of the hub that the resource belongs to.
   */
  hub_id: string;

  /**
   * The kind of resource for which to request permissions. Valid options are
   * 'project', 'process', 'table', or 'view'.
   */
  type: 'project' | 'process' | 'table' | 'view';
}

export interface PermissionRetrieveTagParams {
  /**
   * Public ID of the tag to retrieve.
   */
  tag_id: string;
}

export declare namespace Permissions {
  export {
    type AccessPolicy as AccessPolicy,
    type CreatePermissions as CreatePermissions,
    type Table3 as Table3,
    type PermissionCreateResponse as PermissionCreateResponse,
    type PermissionRetrieveResponse as PermissionRetrieveResponse,
    type PermissionUpdateResponse as PermissionUpdateResponse,
    type PermissionCreateAllResponse as PermissionCreateAllResponse,
    type PermissionRetrieveTagResponse as PermissionRetrieveTagResponse,
    type PermissionCreateParams as PermissionCreateParams,
    type PermissionRetrieveParams as PermissionRetrieveParams,
    type PermissionUpdateParams as PermissionUpdateParams,
    type PermissionCreateAllParams as PermissionCreateAllParams,
    type PermissionRequestParams as PermissionRequestParams,
    type PermissionRetrieveTagParams as PermissionRetrieveTagParams,
  };
}
