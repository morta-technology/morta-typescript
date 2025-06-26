// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TagsAPI from './tags';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Hubs extends APIResource {
  /**
   * Get all hubs the currently logged in user is part of
   */
  list(options?: RequestOptions): APIPromise<HubListResponse> {
    return this._client.get('/v1/user/hubs', options);
  }

  /**
   * Get all favourite hubs the currently logged in user is part of
   */
  listFavourites(options?: RequestOptions): APIPromise<HubListFavouritesResponse> {
    return this._client.get('/v1/user/hubs/favourites', options);
  }

  /**
   * Get all tags for current user in a hub
   */
  listTags(hubID: string, options?: RequestOptions): APIPromise<HubListTagsResponse> {
    return this._client.put(path`/v1/user/hubs/${hubID}/tags`, options);
  }

  /**
   * Change whether the hub is a favourite for the currently logged in user
   */
  toggleFavourite(hubID: string, options?: RequestOptions): APIPromise<HubToggleFavouriteResponse> {
    return this._client.put(path`/v1/user/hubs/${hubID}/favourite`, options);
  }

  /**
   * Change whether the hub is pinned for the currently logged in user
   */
  togglePin(hubID: string, options?: RequestOptions): APIPromise<HubTogglePinResponse> {
    return this._client.put(path`/v1/user/hubs/${hubID}/pin`, options);
  }
}

export interface HomeHub {
  aiSearchEnabled?: boolean;

  allowDocumentExport?: boolean;

  allowTableExport?: boolean;

  deletedAt?: string;

  domainsAccess?: Array<string>;

  fontColour?: string;

  hideProcessCreated?: boolean;

  isDeleted?: boolean;

  mfaRequired?: boolean;

  name?: string;

  primaryColour?: string;

  publicId?: string;

  wordTemplate?: string;
}

export interface HubListResponse {
  data?: Array<HomeHub>;

  /**
   * Additional metadata
   */
  metadata?: unknown;
}

export interface HubListFavouritesResponse {
  data?: Array<HubListFavouritesResponse.Data>;

  /**
   * Additional metadata
   */
  metadata?: unknown;
}

export namespace HubListFavouritesResponse {
  export interface Data {
    /**
     * Indicates if the hub is deleted
     */
    isDeleted?: boolean;

    /**
     * Name of the hub
     */
    name?: string;

    /**
     * User's role in the hub
     */
    projectRole?: string;

    /**
     * Public ID of the hub
     */
    publicId?: string;
  }
}

export interface HubListTagsResponse {
  data?: Array<TagsAPI.Tag>;

  /**
   * Additional metadata
   */
  metadata?: unknown;
}

export interface HubToggleFavouriteResponse {
  data?: Array<HubToggleFavouriteResponse.Data>;

  /**
   * Additional metadata
   */
  metadata?: unknown;
}

export namespace HubToggleFavouriteResponse {
  export interface Data {
    /**
     * Indicates if the hub is deleted
     */
    isDeleted?: boolean;

    /**
     * Name of the hub
     */
    name?: string;

    /**
     * User's role in the hub
     */
    projectRole?: string;

    /**
     * Public ID of the hub
     */
    publicId?: string;
  }
}

export interface HubTogglePinResponse {
  data?: Array<HubTogglePinResponse.Data>;

  /**
   * Additional metadata
   */
  metadata?: unknown;
}

export namespace HubTogglePinResponse {
  export interface Data {
    /**
     * Number of contributors to the hub
     */
    contributors?: number;

    /**
     * Name of the hub
     */
    name?: string;

    /**
     * Primary colour of the hub
     */
    primaryColour?: string;

    /**
     * Public ID of the hub
     */
    publicId?: string;

    /**
     * Number of views of the hub
     */
    views?: number;
  }
}

export declare namespace Hubs {
  export {
    type HomeHub as HomeHub,
    type HubListResponse as HubListResponse,
    type HubListFavouritesResponse as HubListFavouritesResponse,
    type HubListTagsResponse as HubListTagsResponse,
    type HubToggleFavouriteResponse as HubToggleFavouriteResponse,
    type HubTogglePinResponse as HubTogglePinResponse,
  };
}
