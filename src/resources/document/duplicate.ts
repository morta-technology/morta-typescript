// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DocumentAPI from './document';
import * as HubAPI from '../hub/hub';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Duplicate extends APIResource {
  /**
   * Duplicate an existing document, potentially in a different hub
   */
  duplicate(documentID: string, body: DuplicateDuplicateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v1/document/${documentID}/duplicate`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Duplicate an existing document, optionally into a different hub
   */
  global(body: DuplicateGlobalParams, options?: RequestOptions): APIPromise<DuplicateGlobalResponse> {
    return this._client.post('/v1/document/duplicate', { body, ...options });
  }
}

export interface DuplicateGlobalResponse {
  data?: DocumentAPI.MortaDocument;

  metadata?: unknown;
}

export interface DuplicateDuplicateParams {
  targetProjectId: string;

  context?: HubAPI.BaseRequestContext;

  duplicateLinkedTables?: boolean | null;

  duplicatePermissions?: boolean;
}

export interface DuplicateGlobalParams {
  processId: string;

  context?: HubAPI.BaseRequestContext;

  projectId?: string | null;
}

export declare namespace Duplicate {
  export {
    type DuplicateGlobalResponse as DuplicateGlobalResponse,
    type DuplicateDuplicateParams as DuplicateDuplicateParams,
    type DuplicateGlobalParams as DuplicateGlobalParams,
  };
}
