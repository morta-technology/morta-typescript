// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DocumentAPI from '../document';
import * as HubAPI from '../../hub/hub';
import * as ResponseAPI from './response';
import { DocumentResponse, Response } from './response';

export class Section extends APIResource {
  response: ResponseAPI.Response = new ResponseAPI.Response(this._client);
}

export interface CreateDocumentSection {
  name: string;

  context?: HubAPI.BaseRequestContext;

  description?: DocumentAPI.Draftjs | unknown;

  parentId?: string | null;

  plaintextDescription?: string | null;
}

Section.Response = Response;

export declare namespace Section {
  export { type CreateDocumentSection as CreateDocumentSection };

  export { Response as Response, type DocumentResponse as DocumentResponse };
}
