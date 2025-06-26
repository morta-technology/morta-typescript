// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DocumentAPI from '../document';
import * as HubAPI from '../../hub/hub';
import * as UserAPI from '../../user/user';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Response extends APIResource {
  /**
   * Create a new response for a document section.
   */
  create(
    documentSectionID: string,
    params: ResponseCreateParams,
    options?: RequestOptions,
  ): APIPromise<ResponseCreateResponse> {
    const { document_id, ...body } = params;
    return this._client.post(path`/v1/document/${document_id}/section/${documentSectionID}/response`, {
      body,
      ...options,
    });
  }

  /**
   * Update an existing response for a document section.
   */
  update(
    documentResponseID: string,
    params: ResponseUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ResponseUpdateResponse> {
    const { document_id, document_section_id, ...body } = params;
    return this._client.put(
      path`/v1/document/${document_id}/section/${document_section_id}/response/${documentResponseID}`,
      { body, ...options },
    );
  }

  /**
   * Delete a specific document response.
   */
  delete(
    documentResponseID: string,
    params: ResponseDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ResponseDeleteResponse> {
    const { document_id, document_section_id } = params;
    return this._client.delete(
      path`/v1/document/${document_id}/section/${document_section_id}/response/${documentResponseID}`,
      options,
    );
  }

  /**
   * Reset an existing document response to its initial state.
   */
  reset(
    documentResponseID: string,
    params: ResponseResetParams,
    options?: RequestOptions,
  ): APIPromise<ResponseResetResponse> {
    const { document_id, document_section_id } = params;
    return this._client.put(
      path`/v1/document/${document_id}/section/${document_section_id}/response/${documentResponseID}/reset`,
      options,
    );
  }

  /**
   * Restore a previously deleted document response.
   */
  restore(
    documentResponseID: string,
    params: ResponseRestoreParams,
    options?: RequestOptions,
  ): APIPromise<ResponseRestoreResponse> {
    const { document_id, document_section_id } = params;
    return this._client.put(
      path`/v1/document/${document_id}/section/${document_section_id}/response/${documentResponseID}/restore`,
      options,
    );
  }

  /**
   * Submit a document response, marking it as completed.
   */
  submit(
    documentResponseID: string,
    params: ResponseSubmitParams,
    options?: RequestOptions,
  ): APIPromise<ResponseSubmitResponse> {
    const { document_id, document_section_id, ...body } = params;
    return this._client.put(
      path`/v1/document/${document_id}/section/${document_section_id}/response/${documentResponseID}/submit`,
      { body, ...options },
    );
  }
}

export interface DocumentResponse {
  createdAt?: string;

  deletedAt?: string | null;

  enableSubmission?: boolean;

  isDeleted?: boolean;

  pdfIncludeResponse?: boolean;

  position?: number;

  publicId?: string;

  resetAfterResponse?: boolean;

  response?: unknown;

  responseDate?: string;

  type?: string;

  typeOptions?: unknown;

  updatedAt?: string;

  user?: UserAPI.SummaryUser;
}

export interface ResponseCreateResponse {
  data?: DocumentResponse;

  metadata?: unknown;
}

export interface ResponseUpdateResponse {
  data?: ResponseUpdateResponse.Data;

  metadata?: unknown;
}

export namespace ResponseUpdateResponse {
  export interface Data {
    createdAt?: string;

    deletedAt?: string | null;

    enableSubmission?: boolean;

    isDeleted?: boolean;

    pdfIncludeResponse?: boolean;

    position?: number;

    publicId?: string;

    resetAfterResponse?: boolean;

    response?: unknown;

    responseDate?: string;

    type?: string;

    typeOptions?: unknown;

    updatedAt?: string;

    user?: UserAPI.SummaryUser;
  }
}

export interface ResponseDeleteResponse {
  data?: DocumentAPI.MortaDocumentSection;

  metadata?: { [key: string]: unknown };
}

export interface ResponseResetResponse {
  data?: DocumentAPI.MortaDocumentSection;

  metadata?: { [key: string]: unknown };
}

export interface ResponseRestoreResponse {
  data?: DocumentResponse;

  metadata?: { [key: string]: unknown };
}

export interface ResponseSubmitResponse {
  data?: DocumentAPI.MortaDocumentSection;

  metadata?: { [key: string]: unknown };
}

export interface ResponseCreateParams {
  /**
   * Path param: The UUID of the document.
   */
  document_id: string;

  /**
   * Body param:
   */
  context?: HubAPI.BaseRequestContext;

  /**
   * Body param:
   */
  type?: 'Flexible' | 'File Upload' | 'Table' | 'Signature' | 'Selection' | null;
}

export interface ResponseUpdateParams {
  /**
   * Path param: The UUID of the document.
   */
  document_id: string;

  /**
   * Path param: The UUID of the document section.
   */
  document_section_id: string;

  /**
   * Body param:
   */
  context?: HubAPI.BaseRequestContext;

  /**
   * Body param:
   */
  enableSubmission?: boolean | null;

  /**
   * Body param:
   */
  pdfIncludeResponse?: boolean | null;

  /**
   * Body param:
   */
  resetAfterResponse?: boolean | null;

  /**
   * Body param:
   */
  type?: 'Flexible' | 'File Upload' | 'Table' | 'Signature' | 'Selection' | null;

  /**
   * Body param:
   */
  typeOptions?: unknown;
}

export interface ResponseDeleteParams {
  /**
   * The UUID of the document.
   */
  document_id: string;

  /**
   * The UUID of the document section.
   */
  document_section_id: string;
}

export interface ResponseResetParams {
  /**
   * The UUID of the document.
   */
  document_id: string;

  /**
   * The UUID of the document section.
   */
  document_section_id: string;
}

export interface ResponseRestoreParams {
  /**
   * The UUID of the document.
   */
  document_id: string;

  /**
   * The UUID of the document section.
   */
  document_section_id: string;
}

export interface ResponseSubmitParams {
  /**
   * Path param: The UUID of the document.
   */
  document_id: string;

  /**
   * Path param: The UUID of the document section.
   */
  document_section_id: string;

  /**
   * Body param:
   */
  context?: HubAPI.BaseRequestContext;

  /**
   * Body param:
   */
  response?: unknown;
}

export declare namespace Response {
  export {
    type DocumentResponse as DocumentResponse,
    type ResponseCreateResponse as ResponseCreateResponse,
    type ResponseUpdateResponse as ResponseUpdateResponse,
    type ResponseDeleteResponse as ResponseDeleteResponse,
    type ResponseResetResponse as ResponseResetResponse,
    type ResponseRestoreResponse as ResponseRestoreResponse,
    type ResponseSubmitResponse as ResponseSubmitResponse,
    type ResponseCreateParams as ResponseCreateParams,
    type ResponseUpdateParams as ResponseUpdateParams,
    type ResponseDeleteParams as ResponseDeleteParams,
    type ResponseResetParams as ResponseResetParams,
    type ResponseRestoreParams as ResponseRestoreParams,
    type ResponseSubmitParams as ResponseSubmitParams,
  };
}
