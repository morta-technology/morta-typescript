// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as UserAPI from './user';
import * as HubAPI from '../hub/hub';
import * as ApikeyAPI from './apikey';
import {
  APIKey,
  Apikey,
  ApikeyCreateParams,
  ApikeyCreateResponse,
  ApikeyDeleteResponse,
  ApikeyUpdateParams,
  ApikeyUpdateResponse,
} from './apikey';
import * as HubsAPI from './hubs';
import {
  HomeHub,
  HubListFavouritesResponse,
  HubListResponse,
  HubListTagsResponse,
  HubToggleFavouriteResponse,
  HubTogglePinResponse,
  Hubs,
} from './hubs';
import * as TagsAPI from './tags';
import {
  Tag,
  TagAddParams,
  TagAddResponse,
  TagBulkApplyParams,
  TagBulkApplyResponse,
  TagDeleteParams,
  TagDeleteResponse,
  Tags,
} from './tags';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class UserResource extends APIResource {
  apikey: ApikeyAPI.Apikey = new ApikeyAPI.Apikey(this._client);
  hubs: HubsAPI.Hubs = new HubsAPI.Hubs(this._client);
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);

  /**
   * Create a new user
   */
  create(body: UserCreateParams, options?: RequestOptions): APIPromise<UserCreateResponse> {
    return this._client.post('/v1/user', { body, ...options });
  }

  /**
   * Get information on a specific user
   */
  retrieve(firebaseID: string, options?: RequestOptions): APIPromise<UserRetrieveResponse> {
    return this._client.get(path`/v1/user/${firebaseID}`, options);
  }

  /**
   * Get the achievement badges of a user by their Firebase ID
   */
  listAchievements(firebaseID: string, options?: RequestOptions): APIPromise<UserListAchievementsResponse> {
    return this._client.get(path`/v1/user/${firebaseID}/achievements`, options);
  }

  /**
   * Get the number of contributions per day made by a user, identified by their
   * Firebase ID
   */
  listContributions(firebaseID: string, options?: RequestOptions): APIPromise<UserListContributionsResponse> {
    return this._client.get(path`/v1/user/${firebaseID}/contributions`, options);
  }

  /**
   * Get all hubs where the user is the owner or an admin
   */
  listOwnerHubs(options?: RequestOptions): APIPromise<UserListOwnerHubsResponse> {
    return this._client.get('/v1/user/owner-hubs', options);
  }

  /**
   * Get the hubs pinned by a user identified by their Firebase ID
   */
  listPinnedHubs(firebaseID: string, options?: RequestOptions): APIPromise<UserListPinnedHubsResponse> {
    return this._client.get(path`/v1/user/${firebaseID}/pinned-hubs`, options);
  }

  /**
   * Get the public contributions made by a user, identified by their Firebase ID
   */
  listPublicContributions(
    firebaseID: string,
    options?: RequestOptions,
  ): APIPromise<UserListPublicContributionsResponse> {
    return this._client.get(path`/v1/user/${firebaseID}/public-contributions`, options);
  }

  /**
   * Get all public hubs where the user is a member
   */
  listPublicHubs(options?: RequestOptions): APIPromise<UserListPublicHubsResponse> {
    return this._client.get('/v1/user/public-hubs', options);
  }

  /**
   * Get all templates the currently logged in user has access to
   */
  listTemplates(options?: RequestOptions): APIPromise<UserListTemplatesResponse> {
    return this._client.get('/v1/user/templates', options);
  }

  /**
   * Get information on a specific user by their public ID
   */
  retrieveByPublicID(publicID: string, options?: RequestOptions): APIPromise<UserRetrieveByPublicIDResponse> {
    return this._client.get(path`/v1/user/public/${publicID}`, options);
  }

  /**
   * Get info on the current user
   */
  retrieveMe(options?: RequestOptions): APIPromise<UserRetrieveMeResponse> {
    return this._client.get('/v1/user/me', options);
  }

  /**
   * Search for users by hub or process
   */
  search(query: UserSearchParams, options?: RequestOptions): APIPromise<UserSearchResponse> {
    return this._client.get('/v1/user/search', { query, ...options });
  }

  /**
   * Update the account details for the currently logged in user
   */
  updateAccount(
    body: UserUpdateAccountParams,
    options?: RequestOptions,
  ): APIPromise<UserUpdateAccountResponse> {
    return this._client.put('/v1/user/account', { body, ...options });
  }

  /**
   * Update the profile of the currently logged in user
   */
  updateProfile(
    body: UserUpdateProfileParams,
    options?: RequestOptions,
  ): APIPromise<UserUpdateProfileResponse> {
    return this._client.put('/v1/user', { body, ...options });
  }
}

export interface Event {
  change?: unknown;

  changeId?: string;

  channel?: string;

  context?: unknown;

  contextProcessId?: number;

  contextProcessResponseId?: number;

  contextProcessSectionId?: number;

  contextTableColumnId?: number;

  contextTableId?: number;

  contextTableViewId?: number;

  createdAt?: string;

  projectId?: number;

  publicId?: string;

  resource?: string;

  resourcePublicId?: string;

  userId?: number;

  verb?: string;
}

export interface SummaryUser {
  email?: string;

  firebaseUserId?: string;

  name?: string;

  profilePicture?: string;

  publicId?: string;
}

export interface User {
  aconexConnected?: boolean;

  allowSupportAccesss?: boolean;

  apiKeys?: Array<ApikeyAPI.APIKey>;

  asiteConnected?: boolean;

  autodeskConnected?: boolean;

  bio?: string;

  constructionSoftware?: Array<string>;

  createdAt?: string;

  email?: string;

  firebaseUserId?: string;

  kind?: string;

  linkedin?: string;

  location?: string;

  managedSubscriptionUsers?: Array<User>;

  name?: string;

  numberOfManagedSubscriptionUsers?: number;

  onScalePlan?: boolean;

  optOutAiEmail?: boolean;

  optOutDuplicationEmail?: boolean;

  optOutHubEmail?: boolean;

  optOutSyncEmail?: boolean;

  optOutWelcomeEmail?: boolean;

  organisation?: string;

  phone?: string;

  procoreConnected?: boolean;

  profilePicture?: string;

  projectsWorkedOn?: Array<string>;

  publicId?: string;

  reviztoConnected?: boolean;

  specialisms?: Array<string>;

  subscriptionManagerUser?: HubAPI.UserHub | unknown;

  subscriptionQuota?: number;

  tags?: unknown;

  twitter?: string;

  university?: string;

  universityDegree?: string;

  viewpointConnected?: boolean;

  website?: string;
}

export interface UserCreateResponse {
  data?: User;

  metadata?: unknown;
}

export interface UserRetrieveResponse {
  data?: User;

  /**
   * Metadata object
   */
  metadata?: unknown;
}

export interface UserListAchievementsResponse {
  data?: UserListAchievementsResponse.Data;

  /**
   * Metadata object
   */
  metadata?: unknown;
}

export namespace UserListAchievementsResponse {
  export interface Data {
    /**
     * Number of processes created by the user
     */
    createdProcesses?: number;

    /**
     * Number of tables created by the user
     */
    createdTables?: number;
  }
}

export interface UserListContributionsResponse {
  /**
   * Contributions per day, keyed by date
   */
  data?: { [key: string]: number };

  /**
   * Metadata object
   */
  metadata?: unknown;
}

export interface UserListOwnerHubsResponse {
  data?: Array<HubsAPI.HomeHub>;

  /**
   * Additional metadata
   */
  metadata?: unknown;
}

export interface UserListPinnedHubsResponse {
  data?: Array<UserListPinnedHubsResponse.Data>;

  /**
   * Metadata object
   */
  metadata?: unknown;
}

export namespace UserListPinnedHubsResponse {
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

export interface UserListPublicContributionsResponse {
  data?: Array<Event>;

  /**
   * Metadata object
   */
  metadata?: unknown;
}

export interface UserListPublicHubsResponse {
  data?: Array<HubsAPI.HomeHub>;

  /**
   * Additional metadata
   */
  metadata?: unknown;
}

export interface UserListTemplatesResponse {
  data?: Array<UserListTemplatesResponse.Data>;

  metadata?: unknown;
}

export namespace UserListTemplatesResponse {
  export interface Data {
    createdBy?: UserAPI.SummaryUser;
  }
}

export interface UserRetrieveByPublicIDResponse {
  data?: User;

  /**
   * Metadata object
   */
  metadata?: unknown;
}

export interface UserRetrieveMeResponse {
  data?: User;

  /**
   * The metadata object
   */
  metadata?: unknown;
}

export interface UserSearchResponse {
  data?: Array<SummaryUser>;

  /**
   * Additional metadata
   */
  metadata?: unknown;
}

export interface UserUpdateAccountResponse {
  data?: UserUpdateAccountResponse.Data;

  metadata?: unknown;
}

export namespace UserUpdateAccountResponse {
  export interface Data {
    id?: number;

    aconexConnected?: boolean;

    allowSupportAccess?: boolean;

    allowSupportAccesss?: boolean;

    apiKeys?: Array<ApikeyAPI.APIKey>;

    asiteConnected?: boolean;

    authToken?: string;

    authTokenExpiresAt?: string;

    autodeskConnected?: boolean;

    bio?: string;

    constructionSoftware?: Array<string>;

    createdAt?: string;

    eligibleForFreeTrial?: boolean;

    email?: string;

    firebaseUserId?: string;

    freeTrialDaysRemaining?: number;

    hasPassword?: unknown;

    is2FaEnabled?: unknown;

    isOnFreeTrial?: boolean;

    isSuperAdmin?: boolean;

    kind?: string;

    lastLoginAt?: string;

    linkedin?: string;

    location?: string;

    managedSubscriptionUsers?: Array<UserAPI.User>;

    name?: string;

    numberOfManagedSubscriptionUsers?: number;

    onScalePlan?: boolean;

    optOutAiEmail?: boolean;

    optOutDuplicationEmail?: boolean;

    optOutHubEmail?: boolean;

    optOutSyncEmail?: boolean;

    optOutWelcomeEmail?: boolean;

    organisation?: string;

    phone?: string;

    procoreConnected?: boolean;

    profilePicture?: string;

    projectsWorkedOn?: Array<string>;

    publicId?: string;

    reviztoConnected?: boolean;

    specialisms?: Array<string>;

    subscriptionLevel?: number;

    subscriptionManagerUser?: HubAPI.UserHub | unknown;

    subscriptionQuota?: number;

    tags?: unknown;

    twitter?: string;

    university?: string;

    universityDegree?: string;

    viewpointConnected?: boolean;

    website?: string;
  }
}

export interface UserUpdateProfileResponse {
  data?: User;

  metadata?: unknown;
}

export interface UserCreateParams {
  email: string;

  name: string;

  password: string;

  optOutAiEmail?: boolean;

  optOutDuplicationEmail?: boolean;

  optOutHubEmail?: boolean;

  optOutSyncEmail?: boolean;

  optOutWelcomeEmail?: boolean;

  projectId?: string;

  template?: string | null;
}

export interface UserSearchParams {
  /**
   * Query string for searching users
   */
  query: string;

  /**
   * Process ID to restrict search
   */
  process_id?: string;

  /**
   * Hub ID to restrict search
   */
  project_id?: string;

  /**
   * Table View ID to restrict search
   */
  table_view_id?: string;
}

export interface UserUpdateAccountParams {
  allowSupportAccess?: boolean | null;

  oldPassword?: string;

  optOutAiEmail?: boolean | null;

  optOutDuplicationEmail?: boolean | null;

  optOutHubEmail?: boolean | null;

  optOutSyncEmail?: boolean | null;

  optOutWelcomeEmail?: boolean | null;

  password?: string;

  passwordConfirm?: string;

  twoFactorCode?: string | null;
}

export interface UserUpdateProfileParams {
  allowSupportAccess?: boolean | null;

  bio?: string | null;

  linkedin?: string | null;

  location?: string | null;

  name?: string;

  organisation?: string | null;

  profilePicture?: string | null;

  twitter?: string | null;

  university?: string | null;

  universityDegree?: string | null;

  website?: string | null;
}

UserResource.Apikey = Apikey;
UserResource.Hubs = Hubs;
UserResource.Tags = Tags;

export declare namespace UserResource {
  export {
    type Event as Event,
    type SummaryUser as SummaryUser,
    type User as User,
    type UserCreateResponse as UserCreateResponse,
    type UserRetrieveResponse as UserRetrieveResponse,
    type UserListAchievementsResponse as UserListAchievementsResponse,
    type UserListContributionsResponse as UserListContributionsResponse,
    type UserListOwnerHubsResponse as UserListOwnerHubsResponse,
    type UserListPinnedHubsResponse as UserListPinnedHubsResponse,
    type UserListPublicContributionsResponse as UserListPublicContributionsResponse,
    type UserListPublicHubsResponse as UserListPublicHubsResponse,
    type UserListTemplatesResponse as UserListTemplatesResponse,
    type UserRetrieveByPublicIDResponse as UserRetrieveByPublicIDResponse,
    type UserRetrieveMeResponse as UserRetrieveMeResponse,
    type UserSearchResponse as UserSearchResponse,
    type UserUpdateAccountResponse as UserUpdateAccountResponse,
    type UserUpdateProfileResponse as UserUpdateProfileResponse,
    type UserCreateParams as UserCreateParams,
    type UserSearchParams as UserSearchParams,
    type UserUpdateAccountParams as UserUpdateAccountParams,
    type UserUpdateProfileParams as UserUpdateProfileParams,
  };

  export {
    Apikey as Apikey,
    type APIKey as APIKey,
    type ApikeyCreateResponse as ApikeyCreateResponse,
    type ApikeyUpdateResponse as ApikeyUpdateResponse,
    type ApikeyDeleteResponse as ApikeyDeleteResponse,
    type ApikeyCreateParams as ApikeyCreateParams,
    type ApikeyUpdateParams as ApikeyUpdateParams,
  };

  export {
    Hubs as Hubs,
    type HomeHub as HomeHub,
    type HubListResponse as HubListResponse,
    type HubListFavouritesResponse as HubListFavouritesResponse,
    type HubListTagsResponse as HubListTagsResponse,
    type HubToggleFavouriteResponse as HubToggleFavouriteResponse,
    type HubTogglePinResponse as HubTogglePinResponse,
  };

  export {
    Tags as Tags,
    type Tag as Tag,
    type TagDeleteResponse as TagDeleteResponse,
    type TagAddResponse as TagAddResponse,
    type TagBulkApplyResponse as TagBulkApplyResponse,
    type TagDeleteParams as TagDeleteParams,
    type TagAddParams as TagAddParams,
    type TagBulkApplyParams as TagBulkApplyParams,
  };
}
