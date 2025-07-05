// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as UserAPI from '../../user/user';

export class Response extends APIResource {}

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

export declare namespace Response {
  export { type DocumentResponse as DocumentResponse };
}
