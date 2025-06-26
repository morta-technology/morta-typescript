// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DocumentAPI from '../document';
import * as HubAPI from '../../hub/hub';
import * as ResponseAPI from './response';
import {
  DocumentResponse,
  Response,
  ResponseCreateParams,
  ResponseCreateResponse,
  ResponseDeleteParams,
  ResponseDeleteResponse,
  ResponseResetParams,
  ResponseResetResponse,
  ResponseRestoreParams,
  ResponseRestoreResponse,
  ResponseSubmitParams,
  ResponseSubmitResponse,
  ResponseUpdateParams,
  ResponseUpdateResponse,
} from './response';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Section extends APIResource {
  response: ResponseAPI.Response = new ResponseAPI.Response(this._client);

  /**
   * Create a new section within a specified document, with an option to set a parent
   * section
   */
  create(
    documentID: string,
    body: SectionCreateParams,
    options?: RequestOptions,
  ): APIPromise<SectionCreateResponse> {
    return this._client.post(path`/v1/document/${documentID}/section`, { body, ...options });
  }

  /**
   * Retrieve a specific Document section.
   */
  retrieve(
    documentSectionID: string,
    params: SectionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<SectionRetrieveResponse> {
    const { document_id, ...query } = params;
    return this._client.get(path`/v1/document/${document_id}/section/${documentSectionID}`, {
      query,
      ...options,
    });
  }

  /**
   * Update an existing document section's details by document section ID
   */
  update(
    documentSectionID: string,
    params: SectionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SectionUpdateResponse> {
    const { document_id, ...body } = params;
    return this._client.put(path`/v1/document/${document_id}/section/${documentSectionID}`, {
      body,
      ...options,
    });
  }

  /**
   * Delete a specific document section.
   */
  delete(
    documentSectionID: string,
    params: SectionDeleteParams,
    options?: RequestOptions,
  ): APIPromise<SectionDeleteResponse> {
    const { document_id } = params;
    return this._client.delete(path`/v1/document/${document_id}/section/${documentSectionID}`, options);
  }

  /**
   * Duplicate a specific document section.
   */
  duplicate(
    documentSectionID: string,
    params: SectionDuplicateParams,
    options?: RequestOptions,
  ): APIPromise<SectionDuplicateResponse> {
    const { document_id } = params;
    return this._client.post(
      path`/v1/document/${document_id}/section/${documentSectionID}/duplicate`,
      options,
    );
  }

  /**
   * Duplicate a specific document section asynchronously.
   */
  duplicateAsync(
    documentSectionID: string,
    params: SectionDuplicateAsyncParams,
    options?: RequestOptions,
  ): APIPromise<SectionDuplicateAsyncResponse> {
    const { document_id } = params;
    return this._client.post(
      path`/v1/document/${document_id}/section/${documentSectionID}/duplicate-async`,
      options,
    );
  }

  /**
   * Restore a previously deleted document section.
   */
  restore(
    documentSectionID: string,
    params: SectionRestoreParams,
    options?: RequestOptions,
  ): APIPromise<SectionRestoreResponse> {
    const { document_id } = params;
    return this._client.put(path`/v1/document/${document_id}/section/${documentSectionID}/restore`, options);
  }
}

export interface CreateDocumentSection {
  name: string;

  context?: HubAPI.BaseRequestContext;

  description?: DocumentAPI.Draftjs | unknown;

  parentId?: string | null;

  plaintextDescription?: string | null;
}

export interface SectionCreateResponse {
  data?: DocumentAPI.MortaDocumentSection;

  metadata?: unknown;
}

export interface SectionRetrieveResponse {
  data?: DocumentAPI.MortaDocumentSection;

  metadata?: unknown;
}

export interface SectionUpdateResponse {
  data?: DocumentAPI.MortaDocumentSection;

  metadata?: unknown;
}

export interface SectionDeleteResponse {
  data?: DocumentAPI.MortaDocumentSection;

  metadata?: unknown;
}

export interface SectionDuplicateResponse {
  data?: DocumentAPI.MortaDocumentSection;

  metadata?: unknown;
}

export interface SectionDuplicateAsyncResponse {
  data?: string;

  metadata?: unknown;
}

export interface SectionRestoreResponse {
  data?: DocumentAPI.MortaDocumentSection;

  metadata?: unknown;
}

export interface SectionCreateParams {
  name: string;

  context?: HubAPI.BaseRequestContext;

  description?: DocumentAPI.Draftjs | unknown;

  parentId?: string | null;

  plaintextDescription?: string | null;
}

export interface SectionRetrieveParams {
  /**
   * Path param: The UUID of the document.
   */
  document_id: string;

  /**
   * Query param: Flag to retrieve the main parent section of the document section
   */
  main_parent_section?: boolean;
}

export interface SectionUpdateParams {
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
  description?: unknown | DocumentAPI.Draftjs;

  /**
   * Body param:
   */
  name?: string | null;

  /**
   * Body param:
   */
  pageBreakBefore?: boolean | null;

  /**
   * Body param:
   */
  pdfIncludeDescription?: boolean | null;

  /**
   * Body param:
   */
  pdfIncludeSection?: boolean | null;

  /**
   * Body param:
   */
  plaintextDescription?: string | null;
}

export interface SectionDeleteParams {
  /**
   * The UUID of the document.
   */
  document_id: string;
}

export interface SectionDuplicateParams {
  /**
   * The UUID of the document.
   */
  document_id: string;
}

export interface SectionDuplicateAsyncParams {
  /**
   * The UUID of the document.
   */
  document_id: string;
}

export interface SectionRestoreParams {
  /**
   * The UUID of the document.
   */
  document_id: string;
}

Section.Response = Response;

export declare namespace Section {
  export {
    type CreateDocumentSection as CreateDocumentSection,
    type SectionCreateResponse as SectionCreateResponse,
    type SectionRetrieveResponse as SectionRetrieveResponse,
    type SectionUpdateResponse as SectionUpdateResponse,
    type SectionDeleteResponse as SectionDeleteResponse,
    type SectionDuplicateResponse as SectionDuplicateResponse,
    type SectionDuplicateAsyncResponse as SectionDuplicateAsyncResponse,
    type SectionRestoreResponse as SectionRestoreResponse,
    type SectionCreateParams as SectionCreateParams,
    type SectionRetrieveParams as SectionRetrieveParams,
    type SectionUpdateParams as SectionUpdateParams,
    type SectionDeleteParams as SectionDeleteParams,
    type SectionDuplicateParams as SectionDuplicateParams,
    type SectionDuplicateAsyncParams as SectionDuplicateAsyncParams,
    type SectionRestoreParams as SectionRestoreParams,
  };

  export {
    Response as Response,
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
