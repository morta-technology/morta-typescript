// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DuplicateAPI from './duplicate';
import { Duplicate } from './duplicate';
import * as ResponseAPI from './section/response';
import * as SectionAPI from './section/section';
import { CreateDocumentSection, Section } from './section/section';

export class DocumentResource extends APIResource {
  duplicate: DuplicateAPI.Duplicate = new DuplicateAPI.Duplicate(this._client);
  section: SectionAPI.Section = new SectionAPI.Section(this._client);
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

DocumentResource.Duplicate = Duplicate;
DocumentResource.Section = Section;

export declare namespace DocumentResource {
  export {
    type Document as Document,
    type DocumentSection1 as DocumentSection1,
    type Draftjs as Draftjs,
    type MortaDocument as MortaDocument,
    type MortaDocumentSection as MortaDocumentSection,
    type SimpleDocument as SimpleDocument,
  };

  export { Duplicate as Duplicate };

  export { Section as Section, type CreateDocumentSection as CreateDocumentSection };
}
