// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DocumentAPI from './document';
import * as DuplicateAPI from './duplicate';
import {
  Duplicate,
  DuplicateDuplicateParams,
  DuplicateGlobalParams,
  DuplicateGlobalResponse,
} from './duplicate';
import * as HubAPI from '../hub/hub';
import * as ResponseAPI from './section/response';
import * as SectionAPI from './section/section';
import {
  CreateDocumentSection,
  Section as SectionAPISection,
  SectionCreateParams,
  SectionCreateResponse,
  SectionDeleteParams,
  SectionDeleteResponse,
  SectionDuplicateAsyncParams,
  SectionDuplicateAsyncResponse,
  SectionDuplicateParams,
  SectionDuplicateResponse,
  SectionRestoreParams,
  SectionRestoreResponse,
  SectionRetrieveParams,
  SectionRetrieveResponse,
  SectionUpdateParams,
  SectionUpdateResponse,
} from './section/section';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class DocumentResource extends APIResource {
  duplicate: DuplicateAPI.Duplicate = new DuplicateAPI.Duplicate(this._client);
  section: SectionAPI.Section = new SectionAPI.Section(this._client);

  /**
   * Create a new document in a specified hub
   */
  create(body: DocumentCreateParams, options?: RequestOptions): APIPromise<DocumentCreateResponse> {
    return this._client.post('/v1/document', { body, ...options });
  }

  /**
   * Retrieve detailed information of a specific document by its UUID
   */
  retrieve(
    documentID: string,
    query: DocumentRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DocumentRetrieveResponse> {
    return this._client.get(path`/v1/document/${documentID}`, { query, ...options });
  }

  /**
   * Update an existing documents's details by document ID
   */
  update(
    documentID: string,
    body: DocumentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DocumentUpdateResponse> {
    return this._client.put(path`/v1/document/${documentID}`, { body, ...options });
  }

  /**
   * Delete a document identified by its UUID
   */
  delete(documentID: string, options?: RequestOptions): APIPromise<DocumentDeleteResponse> {
    return this._client.delete(path`/v1/document/${documentID}`, options);
  }

  /**
   * Create multiple new sections within a specified document, each with an optional
   * parent section
   */
  createMultipleSections(
    documentID: string,
    body: DocumentCreateMultipleSectionsParams,
    options?: RequestOptions,
  ): APIPromise<DocumentCreateMultipleSectionsResponse> {
    return this._client.post(path`/v1/document/${documentID}/multiple-section`, { body, ...options });
  }

  /**
   * Create multiple new sections within a document
   */
  createSections(
    documentID: string,
    body: DocumentCreateSectionsParams,
    options?: RequestOptions,
  ): APIPromise<DocumentCreateSectionsResponse> {
    return this._client.post(path`/v1/document/${documentID}/sections`, { body, ...options });
  }

  /**
   * Export a specific document by its UUID
   */
  export(
    documentID: string,
    query: DocumentExportParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get(path`/v1/document/${documentID}/export`, {
      query,
      ...options,
      headers: buildHeaders([
        { Accept: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' },
        options?.headers,
      ]),
      __binaryResponse: true,
    });
  }

  /**
   * Retrieve all deleted sections of a specific document, with an optional filter
   * for a specific document section
   */
  getDeletedSections(
    documentID: string,
    query: DocumentGetDeletedSectionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DocumentGetDeletedSectionsResponse> {
    return this._client.get(path`/v1/document/${documentID}/deletedsections`, { query, ...options });
  }

  /**
   * Get duplicated children of a document
   */
  getDuplicatedChildren(
    documentID: string,
    options?: RequestOptions,
  ): APIPromise<DocumentGetDuplicatedChildrenResponse> {
    return this._client.get(path`/v1/document/${documentID}/duplicated-children`, options);
  }

  /**
   * Restore a deleted document identified by its UUID
   */
  restore(documentID: string, options?: RequestOptions): APIPromise<DocumentRestoreResponse> {
    return this._client.put(path`/v1/document/${documentID}/restore`, options);
  }

  /**
   * Sync template changes to children of a document
   */
  syncTemplate(documentID: string, options?: RequestOptions): APIPromise<DocumentSyncTemplateResponse> {
    return this._client.get(path`/v1/document/${documentID}/sync-template`, options);
  }

  /**
   * Update multiple existing document sections.
   */
  updateMultipleSections(
    documentID: string,
    body: DocumentUpdateMultipleSectionsParams,
    options?: RequestOptions,
  ): APIPromise<DocumentUpdateMultipleSectionsResponse> {
    return this._client.put(path`/v1/document/${documentID}/update-multiple-section`, { body, ...options });
  }

  /**
   * Update the order of document sections within a document.
   */
  updateSectionOrder(
    documentID: string,
    body: DocumentUpdateSectionOrderParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DocumentUpdateSectionOrderResponse> {
    return this._client.put(path`/v1/document/${documentID}/changesectionorder`, { body, ...options });
  }

  /**
   * Update permissions for all views using as reference the permissions in a
   * document.
   */
  updateViewsPermissions(
    params: DocumentUpdateViewsPermissionsParams,
    options?: RequestOptions,
  ): APIPromise<DocumentUpdateViewsPermissionsResponse> {
    const { resource_id } = params;
    return this._client.put('/v1/document/sync-views-permissions', { query: { resource_id }, ...options });
  }
}

export interface Document {
  name?: string;

  publicId?: string;
}

export interface DocumentSection1 {
  children?: Array<DocumentSection1>;

  createdAt?: string | null;

  deletedAt?: string | null;

  description?: Draftjs;

  isDeleted?: boolean;

  name?: string;

  openCommentThreads?: number;

  pageBreakBefore?: boolean;

  parentId?: string;

  pdfIncludeDescription?: boolean;

  pdfIncludeSection?: boolean;

  position?: number;

  publicId?: string;

  responses?: Array<ResponseAPI.DocumentResponse>;
}

export interface Draftjs {
  content: Draftjs.Content;
}

export namespace Draftjs {
  export interface Content {
    blocks: Array<Content.Block>;

    entityMap: { [key: string]: unknown };
  }

  export namespace Content {
    export interface Block {
      data: { [key: string]: unknown };

      depth: number;

      entityRanges: Array<Block.EntityRange>;

      inlineStyleRanges: Array<Block.InlineStyleRange>;

      key: string;

      text: string;

      type: string;
    }

    export namespace Block {
      export interface EntityRange {
        key: number;

        length: number;

        offset: number;
      }

      export interface InlineStyleRange {
        length: number;

        offset: number;

        style: string;
      }
    }
  }
}

export interface MortaDocument {
  allowComments?: boolean;

  children?: Array<DocumentSection1>;

  createdAt?: string;

  deletedAt?: string | null;

  description?: unknown;

  expandByDefault?: boolean;

  isDeleted?: boolean;

  isTemplate?: boolean;

  lockedTemplate?: boolean;

  logo?: string;

  name?: string;

  projectName?: string;

  projectPublicId?: string;

  publicId?: string;

  type?: string;

  updatedAt?: string;

  variables?: Array<string>;

  variableValues?: Array<string>;
}

export interface MortaDocumentSection {
  children?: Array<MortaDocumentSection>;

  createdAt?: string | null;

  deletedAt?: string | null;

  description?: Draftjs;

  isDeleted?: boolean;

  name?: string;

  openCommentThreads?: number;

  pageBreakBefore?: boolean;

  parentId?: string;

  pdfIncludeDescription?: boolean;

  pdfIncludeSection?: boolean;

  position?: number;

  publicId?: string;

  responses?: Array<ResponseAPI.DocumentResponse>;
}

export interface SimpleDocument {
  allowComments?: boolean;

  children?: Array<SimpleDocument.Child>;

  createdAt?: string;

  deletedAt?: string | null;

  description?: unknown;

  expandByDefault?: boolean;

  isDeleted?: boolean;

  isTemplate?: boolean;

  lockedTemplate?: boolean;

  logo?: string;

  name?: string;

  projectName?: string;

  projectPublicId?: string;

  publicId?: string;

  type?: string;

  updatedAt?: string;

  variables?: Array<string>;

  variableValues?: Array<string>;
}

export namespace SimpleDocument {
  export interface Child {
    name?: string;

    publicId?: string;
  }
}

export interface DocumentCreateResponse {
  data?: Document;

  metadata?: DocumentCreateResponse.Metadata;
}

export namespace DocumentCreateResponse {
  export interface Metadata {
    /**
     * The changes made during document creation
     */
    change?: unknown;

    /**
     * The event type, e.g., 'process.created'
     */
    event?: string;

    /**
     * The UUID of the newly created document
     */
    resourceId?: string;
  }
}

export interface DocumentRetrieveResponse {
  data?: MortaDocument;

  metadata?: unknown;
}

export interface DocumentUpdateResponse {
  data?: SimpleDocument;

  metadata?: unknown;
}

export interface DocumentDeleteResponse {
  data?: MortaDocument;

  metadata?: unknown;
}

export interface DocumentCreateMultipleSectionsResponse {
  data?: string;

  metadata?: DocumentCreateMultipleSectionsResponse.Metadata;
}

export namespace DocumentCreateMultipleSectionsResponse {
  export interface Metadata {
    /**
     * List of UUIDs for the newly created document sections
     */
    resourceIds?: Array<string>;
  }
}

export interface DocumentCreateSectionsResponse {
  data?: Array<MortaDocumentSection>;

  metadata?: unknown;
}

export type DocumentGetDeletedSectionsResponse = Array<MortaDocumentSection>;

export interface DocumentGetDuplicatedChildrenResponse {
  data?: Array<DocumentGetDuplicatedChildrenResponse.Data>;

  metadata?: unknown;
}

export namespace DocumentGetDuplicatedChildrenResponse {
  export interface Data {
    createdAt?: string;

    link?: string;

    name?: string;

    user?: string;
  }
}

export interface DocumentRestoreResponse {
  data?: MortaDocument;

  metadata?: unknown;
}

export interface DocumentSyncTemplateResponse {
  data?: Array<Document>;

  metadata?: unknown;
}

export interface DocumentUpdateMultipleSectionsResponse {
  data?: Array<MortaDocumentSection>;

  metadata?: unknown;
}

export interface DocumentUpdateSectionOrderResponse {
  data?: MortaDocument;

  metadata?: unknown;
}

export interface DocumentUpdateViewsPermissionsResponse {
  data?: string;
}

export interface DocumentCreateParams {
  name: string;

  projectId: string;

  type: string;

  context?: HubAPI.BaseRequestContext;
}

export interface DocumentRetrieveParams {
  /**
   * Flag to exclude child elements from the document response
   */
  exclude_children?: boolean;
}

export interface DocumentUpdateParams {
  allowComments?: boolean;

  context?: HubAPI.BaseRequestContext;

  description?: unknown | Draftjs;

  expandByDefault?: boolean;

  isTemplate?: boolean;

  lockedTemplate?: boolean;

  logo?: string | null;

  name?: string | null;

  plaintextDescription?: string | null;

  type?: string | null;

  variables?: Array<string> | null;
}

export interface DocumentCreateMultipleSectionsParams {
  sections: Array<SectionAPI.CreateDocumentSection>;

  context?: HubAPI.BaseRequestContext;
}

export interface DocumentCreateSectionsParams {
  context?: HubAPI.BaseRequestContext;

  details?: Array<SectionAPI.CreateDocumentSection>;
}

export interface DocumentExportParams {
  /**
   * Page format for the export
   */
  page_format?: 'A1' | 'A2' | 'A3' | 'A4' | 'letter' | 'legal';

  /**
   * Page orientation for the export
   */
  page_orientation?: 'portrait' | 'landscape';

  /**
   * Include table links in the export
   */
  table_links?: boolean;
}

export interface DocumentGetDeletedSectionsParams {
  /**
   * Optional UUID of a specific document section to filter deleted sections
   */
  process_section_id?: string;
}

export interface DocumentUpdateMultipleSectionsParams {
  sections: Array<DocumentUpdateMultipleSectionsParams.Section>;

  context?: HubAPI.BaseRequestContext;
}

export namespace DocumentUpdateMultipleSectionsParams {
  export interface Section {
    publicId: string;

    context?: HubAPI.BaseRequestContext;

    description?: unknown | DocumentAPI.Draftjs;

    name?: string | null;

    pageBreakBefore?: boolean | null;

    pdfIncludeDescription?: boolean | null;

    pdfIncludeSection?: boolean | null;

    plaintextDescription?: string | null;
  }
}

export interface DocumentUpdateSectionOrderParams {
  context?: HubAPI.BaseRequestContext;

  processSections?: Array<DocumentUpdateSectionOrderParams.ProcessSection>;
}

export namespace DocumentUpdateSectionOrderParams {
  export interface ProcessSection {
    parentId?: string | null;

    position?: number;

    sectionId?: string;
  }
}

export interface DocumentUpdateViewsPermissionsParams {
  /**
   * UUID of the document for which to retrieve permissions.
   */
  resource_id: string;
}

DocumentResource.Duplicate = Duplicate;
DocumentResource.Section = SectionAPISection;

export declare namespace DocumentResource {
  export {
    type Document as Document,
    type DocumentSection1 as DocumentSection1,
    type Draftjs as Draftjs,
    type MortaDocument as MortaDocument,
    type MortaDocumentSection as MortaDocumentSection,
    type SimpleDocument as SimpleDocument,
    type DocumentCreateResponse as DocumentCreateResponse,
    type DocumentRetrieveResponse as DocumentRetrieveResponse,
    type DocumentUpdateResponse as DocumentUpdateResponse,
    type DocumentDeleteResponse as DocumentDeleteResponse,
    type DocumentCreateMultipleSectionsResponse as DocumentCreateMultipleSectionsResponse,
    type DocumentCreateSectionsResponse as DocumentCreateSectionsResponse,
    type DocumentGetDeletedSectionsResponse as DocumentGetDeletedSectionsResponse,
    type DocumentGetDuplicatedChildrenResponse as DocumentGetDuplicatedChildrenResponse,
    type DocumentRestoreResponse as DocumentRestoreResponse,
    type DocumentSyncTemplateResponse as DocumentSyncTemplateResponse,
    type DocumentUpdateMultipleSectionsResponse as DocumentUpdateMultipleSectionsResponse,
    type DocumentUpdateSectionOrderResponse as DocumentUpdateSectionOrderResponse,
    type DocumentUpdateViewsPermissionsResponse as DocumentUpdateViewsPermissionsResponse,
    type DocumentCreateParams as DocumentCreateParams,
    type DocumentRetrieveParams as DocumentRetrieveParams,
    type DocumentUpdateParams as DocumentUpdateParams,
    type DocumentCreateMultipleSectionsParams as DocumentCreateMultipleSectionsParams,
    type DocumentCreateSectionsParams as DocumentCreateSectionsParams,
    type DocumentExportParams as DocumentExportParams,
    type DocumentGetDeletedSectionsParams as DocumentGetDeletedSectionsParams,
    type DocumentUpdateMultipleSectionsParams as DocumentUpdateMultipleSectionsParams,
    type DocumentUpdateSectionOrderParams as DocumentUpdateSectionOrderParams,
    type DocumentUpdateViewsPermissionsParams as DocumentUpdateViewsPermissionsParams,
  };

  export {
    Duplicate as Duplicate,
    type DuplicateGlobalResponse as DuplicateGlobalResponse,
    type DuplicateDuplicateParams as DuplicateDuplicateParams,
    type DuplicateGlobalParams as DuplicateGlobalParams,
  };

  export {
    SectionAPISection as Section,
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
}
