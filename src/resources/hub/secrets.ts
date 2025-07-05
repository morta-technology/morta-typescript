// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class Secrets extends APIResource {}

export interface HubSecret {
  createdAt?: string;

  name?: string;

  publicId?: string;

  updatedAt?: string;

  value?: string;
}

export declare namespace Secrets {
  export { type HubSecret as HubSecret };
}
