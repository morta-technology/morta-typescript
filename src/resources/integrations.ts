// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as HubAPI from './hub/hub';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Integrations extends APIResource {
  /**
   * Make a passthrough API call to an external source system.
   */
  createPassthrough(
    body: IntegrationCreatePassthroughParams,
    options?: RequestOptions,
  ): APIPromise<IntegrationCreatePassthroughResponse> {
    return this._client.post('/v1/integrations/passthrough', { body, ...options });
  }

  /**
   * Make a passthrough API call to an external source system for downloading files.
   */
  createPassthroughDownload(
    body: IntegrationCreatePassthroughDownloadParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.post('/v1/integrations/passthrough-download', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface PassthroughAPICall {
  method: 'GET' | 'PUT' | 'POST' | 'DELETE' | 'PATCH';

  path: string;

  sourceSystem: 'viewpoint' | 'aconex' | 'autodesk-bim360' | 'procore' | 'revizto' | 'morta' | 'asite';

  context?: HubAPI.BaseRequestContext;

  data?: unknown;

  headers?: unknown;

  onBehalfUserId?: string | null;
}

export interface IntegrationCreatePassthroughResponse {
  data?: IntegrationCreatePassthroughResponse.Data;

  metadata?: { [key: string]: unknown };
}

export namespace IntegrationCreatePassthroughResponse {
  export interface Data {
    body?: unknown;

    contentType?: string;

    headers?: unknown;

    status?: string;
  }
}

export interface IntegrationCreatePassthroughParams {
  method: 'GET' | 'PUT' | 'POST' | 'DELETE' | 'PATCH';

  path: string;

  sourceSystem: 'viewpoint' | 'aconex' | 'autodesk-bim360' | 'procore' | 'revizto' | 'morta' | 'asite';

  context?: HubAPI.BaseRequestContext;

  data?: unknown;

  headers?: unknown;

  onBehalfUserId?: string | null;
}

export interface IntegrationCreatePassthroughDownloadParams {
  method: 'GET' | 'PUT' | 'POST' | 'DELETE' | 'PATCH';

  path: string;

  sourceSystem: 'viewpoint' | 'aconex' | 'autodesk-bim360' | 'procore' | 'revizto' | 'morta' | 'asite';

  context?: HubAPI.BaseRequestContext;

  data?: unknown;

  headers?: unknown;

  onBehalfUserId?: string | null;
}

export declare namespace Integrations {
  export {
    type PassthroughAPICall as PassthroughAPICall,
    type IntegrationCreatePassthroughResponse as IntegrationCreatePassthroughResponse,
    type IntegrationCreatePassthroughParams as IntegrationCreatePassthroughParams,
    type IntegrationCreatePassthroughDownloadParams as IntegrationCreatePassthroughDownloadParams,
  };
}
