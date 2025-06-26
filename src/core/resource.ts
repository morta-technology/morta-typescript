// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Morta } from '../client';

export abstract class APIResource {
  protected _client: Morta;

  constructor(client: Morta) {
    this._client = client;
  }
}
