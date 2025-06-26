// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Apikey extends APIResource {
  /**
   * Create an API key for the currently logged in user
   */
  create(body: ApikeyCreateParams, options?: RequestOptions): APIPromise<ApikeyCreateResponse> {
    return this._client.post('/v1/user/apikey', { body, ...options });
  }

  /**
   * Update an API key for the currently logged in user
   */
  update(
    apiKeyID: string,
    body: ApikeyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ApikeyUpdateResponse> {
    return this._client.put(path`/v1/user/apikey/${apiKeyID}`, { body, ...options });
  }

  /**
   * Delete an API key for the currently logged in user
   */
  delete(apiKeyID: string, options?: RequestOptions): APIPromise<ApikeyDeleteResponse> {
    return this._client.delete(path`/v1/user/apikey/${apiKeyID}`, options);
  }
}

export interface APIKey {
  accessLevel?: number;

  documentRestrictions?: Array<string>;

  hash?: string;

  name?: string;

  prefix?: string;

  projectRestrictions?: Array<string>;

  publicId?: string;

  tableRestrictions?: Array<string>;
}

export interface ApikeyCreateResponse {
  data?: APIKey;

  metadata?: unknown;
}

export interface ApikeyUpdateResponse {
  /**
   * Updated API key details
   */
  apiKey?: string;
}

export interface ApikeyDeleteResponse {
  data?: string;

  /**
   * Additional metadata
   */
  metadata?: unknown;
}

export interface ApikeyCreateParams {
  accessLevel: 0 | 1;

  documentRestrictions?: Array<string> | null;

  name?: string | null;

  projectRestrictions?: Array<string> | null;

  tableRestrictions?: Array<string> | null;
}

export interface ApikeyUpdateParams {
  accessLevel: 0 | 1;

  documentRestrictions?: Array<string> | null;

  name?: string | null;

  projectRestrictions?: Array<string> | null;

  tableRestrictions?: Array<string> | null;
}

export declare namespace Apikey {
  export {
    type APIKey as APIKey,
    type ApikeyCreateResponse as ApikeyCreateResponse,
    type ApikeyUpdateResponse as ApikeyUpdateResponse,
    type ApikeyDeleteResponse as ApikeyDeleteResponse,
    type ApikeyCreateParams as ApikeyCreateParams,
    type ApikeyUpdateParams as ApikeyUpdateParams,
  };
}
