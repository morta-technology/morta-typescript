// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Secrets extends APIResource {
  /**
   * Create a new secret for a specified hub
   */
  create(
    hubID: string,
    body: SecretCreateParams,
    options?: RequestOptions,
  ): APIPromise<SecretCreateResponse> {
    return this._client.post(path`/v1/hub/${hubID}/secrets`, { body, ...options });
  }

  /**
   * Update a specific secret in a hub
   */
  update(
    secretID: string,
    params: SecretUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SecretUpdateResponse> {
    const { hub_id, ...body } = params;
    return this._client.put(path`/v1/hub/${hub_id}/secrets/${secretID}`, { body, ...options });
  }

  /**
   * Retrieve all secrets for a specified hub
   */
  list(hubID: string, options?: RequestOptions): APIPromise<SecretListResponse> {
    return this._client.get(path`/v1/hub/${hubID}/secrets`, options);
  }

  /**
   * Delete a specific secret from a hub
   */
  delete(
    secretID: string,
    params: SecretDeleteParams,
    options?: RequestOptions,
  ): APIPromise<SecretDeleteResponse> {
    const { hub_id } = params;
    return this._client.delete(path`/v1/hub/${hub_id}/secrets/${secretID}`, options);
  }
}

export interface HubSecret {
  createdAt?: string;

  name?: string;

  publicId?: string;

  updatedAt?: string;

  value?: string;
}

export interface SecretCreateResponse {
  data?: HubSecret;

  metadata?: unknown;
}

export interface SecretUpdateResponse {
  data?: HubSecret;

  metadata?: unknown;
}

export interface SecretListResponse {
  data?: Array<HubSecret>;

  metadata?: unknown;
}

export interface SecretDeleteResponse {
  data?: string;

  metadata?: unknown;
}

export interface SecretCreateParams {
  name: string;

  value: string;
}

export interface SecretUpdateParams {
  /**
   * Path param: The UUID of the hub where the secret is located
   */
  hub_id: string;

  /**
   * Body param:
   */
  name: string;

  /**
   * Body param:
   */
  value: string;
}

export interface SecretDeleteParams {
  /**
   * The UUID of the hub from which the secret will be deleted
   */
  hub_id: string;
}

export declare namespace Secrets {
  export {
    type HubSecret as HubSecret,
    type SecretCreateResponse as SecretCreateResponse,
    type SecretUpdateResponse as SecretUpdateResponse,
    type SecretListResponse as SecretListResponse,
    type SecretDeleteResponse as SecretDeleteResponse,
    type SecretCreateParams as SecretCreateParams,
    type SecretUpdateParams as SecretUpdateParams,
    type SecretDeleteParams as SecretDeleteParams,
  };
}
