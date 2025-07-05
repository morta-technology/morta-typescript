// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as HubAPI from './hub';
import * as NotificationsAPI from '../notifications';
import * as DocumentAPI from '../document/document';
import * as AIAnswerAPI from './ai-answer';
import { AIAnswer, AIAnswerVoteParams, AIAnswerVoteResponse } from './ai-answer';
import * as InviteAPI from './invite';
import {
  Invite,
  InviteCreateParams,
  InviteCreateResponse,
  InviteDeleteParams,
  InviteDeleteResponse,
  InviteResendParams,
  InviteResendResponse,
  InviteUpdateParams,
  InviteUpdateResponse,
  InvitedMember,
} from './invite';
import * as SecretsAPI from './secrets';
import {
  HubSecret,
  SecretCreateParams,
  SecretCreateResponse,
  SecretDeleteParams,
  SecretDeleteResponse,
  SecretListResponse,
  SecretUpdateParams,
  SecretUpdateResponse,
  Secrets,
} from './secrets';
import * as TableAPI from '../table/table';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Hub extends APIResource {
  aiAnswer: AIAnswerAPI.AIAnswer = new AIAnswerAPI.AIAnswer(this._client);
  invite: InviteAPI.Invite = new InviteAPI.Invite(this._client);
  secrets: SecretsAPI.Secrets = new SecretsAPI.Secrets(this._client);

  /**
   * Create a new hub with the specified name
   */
  create(body: HubCreateParams, options?: RequestOptions): APIPromise<HubCreateResponse> {
    return this._client.post('/v1/hub', { body, ...options });
  }

  /**
   * Retrieve detailed information about a specific hub identified by its UUID
   */
  retrieve(hubID: string, options?: RequestOptions): APIPromise<HubRetrieveResponse> {
    return this._client.get(path`/v1/hub/${hubID}`, options);
  }

  /**
   * Update an existing hub's details by hub ID
   */
  update(hubID: string, body: HubUpdateParams, options?: RequestOptions): APIPromise<HubUpdateResponse> {
    return this._client.put(path`/v1/hub/${hubID}`, { body, ...options });
  }

  /**
   * Delete a specific hub identified by its UUID
   */
  delete(hubID: string, options?: RequestOptions): APIPromise<HubDeleteResponse> {
    return this._client.delete(path`/v1/hub/${hubID}`, options);
  }

  /**
   * Perform an AI search operation within a specific hub, identified by its UUID
   */
  aiSearch(
    hubID: string,
    query: HubAISearchParams,
    options?: RequestOptions,
  ): APIPromise<HubAISearchResponse> {
    return this._client.get(path`/v1/hub/${hubID}/search-ai`, { query, ...options });
  }

  /**
   * Change the role of a user in a specific hub, identified by the hub's UUID and
   * user's Firebase ID
   */
  changeUserRole(
    firebaseID: string,
    params: HubChangeUserRoleParams,
    options?: RequestOptions,
  ): APIPromise<HubChangeUserRoleResponse> {
    const { hub_id, ...body } = params;
    return this._client.put(path`/v1/hub/${hub_id}/change-user-role/${firebaseID}`, { body, ...options });
  }

  /**
   * Create new heading styling for a specific hub
   */
  createHeadingStyling(hubID: string, options?: RequestOptions): APIPromise<HubCreateHeadingStylingResponse> {
    return this._client.post(path`/v1/hub/${hubID}/add_heading_styling`, options);
  }

  /**
   * Create a new knowledge base entry for a hub
   */
  createKnowledgeBase(
    hubID: string,
    body: HubCreateKnowledgeBaseParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/v1/hub/${hubID}/knowledge-base`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete the top heading styling for a specific hub
   */
  deleteTopHeadingStyling(
    hubID: string,
    options?: RequestOptions,
  ): APIPromise<HubDeleteTopHeadingStylingResponse> {
    return this._client.delete(path`/v1/hub/${hubID}/delete_top_style`, options);
  }

  /**
   * Create a duplicate of an existing hub
   */
  duplicate(hubID: string, body: HubDuplicateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v1/hub/${hubID}/duplicate`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve AI answers within a specific hub, identified by its UUID
   */
  getAIAnswers(hubID: string, options?: RequestOptions): APIPromise<HubGetAIAnswersResponse> {
    return this._client.get(path`/v1/hub/${hubID}/ai-answers`, options);
  }

  /**
   * Get all deleted documents associated with a specific hub, identified by its UUID
   */
  getDeletedDocuments(hubID: string, options?: RequestOptions): APIPromise<HubGetDeletedDocumentsResponse> {
    return this._client.get(path`/v1/hub/${hubID}/deleted-documents`, options);
  }

  /**
   * Retrieve all deleted tables from a specific hub, identified by its UUID. Only
   * accessible by hub owners.
   */
  getDeletedTables(hubID: string, options?: RequestOptions): APIPromise<HubGetDeletedTablesResponse> {
    return this._client.get(path`/v1/hub/${hubID}/deleted-tables`, options);
  }

  /**
   * Get all documents associated with a specific hub, identified by its UUID
   */
  getDocuments(hubID: string, options?: RequestOptions): APIPromise<HubGetDocumentsResponse> {
    return this._client.get(path`/v1/hub/${hubID}/documents`, options);
  }

  /**
   * Get duplicated children of a hub
   */
  getDuplicatedChildren(
    hubID: string,
    options?: RequestOptions,
  ): APIPromise<HubGetDuplicatedChildrenResponse> {
    return this._client.get(path`/v1/hub/${hubID}/duplicated-children`, options);
  }

  /**
   * Retrieve all invited members for a specified hub
   */
  getInvitedMembers(hubID: string, options?: RequestOptions): APIPromise<HubGetInvitedMembersResponse> {
    return this._client.get(path`/v1/hub/${hubID}/invited-members`, options);
  }

  /**
   * Retrieve all members associated with a specified hub
   */
  getMembers(hubID: string, options?: RequestOptions): APIPromise<HubGetMembersResponse> {
    return this._client.get(path`/v1/hub/${hubID}/members`, options);
  }

  /**
   * Retrieve all notifications associated with a specific hub. This endpoint is
   * accessible only to users with owner-level permissions for the hub.
   */
  getNotifications(hubID: string, options?: RequestOptions): APIPromise<HubGetNotificationsResponse> {
    return this._client.get(path`/v1/hub/${hubID}/notifications`, options);
  }

  /**
   * Retrieve resources associated with a specific hub identified by its UUID
   */
  getResources(
    hubID: string,
    body: HubGetResourcesParams,
    options?: RequestOptions,
  ): APIPromise<HubGetResourcesResponse> {
    return this._client.post(path`/v1/hub/${hubID}/resources`, { body, ...options });
  }

  /**
   * Retrieve all sent notifications for a specified hub
   */
  getSentNotifications(
    hubID: string,
    query: HubGetSentNotificationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HubGetSentNotificationsResponse> {
    return this._client.get(path`/v1/hub/${hubID}/sent-notifications`, { query, ...options });
  }

  /**
   * Retrieve tables associated with a specific hub, identified by its UUID
   */
  getTables(hubID: string, options?: RequestOptions): APIPromise<HubGetTablesResponse> {
    return this._client.get(path`/v1/hub/${hubID}/tables`, options);
  }

  /**
   * Retrieve all tags associated with a specified hub
   */
  getTags(hubID: string, options?: RequestOptions): APIPromise<HubGetTagsResponse> {
    return this._client.get(path`/v1/hub/${hubID}/tags`, options);
  }

  /**
   * Retrieve all variables associated with a specified hub
   */
  getVariables(hubID: string, options?: RequestOptions): APIPromise<HubGetVariablesResponse> {
    return this._client.get(path`/v1/hub/${hubID}/variables`, options);
  }

  /**
   * Invite multiple users to join a hub, by email. If users already exist, they are
   * added directly, otherwise, an invite is sent. Requires owner or admin
   * permissions.
   */
  inviteMultipleUsers(
    hubID: string,
    body: HubInviteMultipleUsersParams,
    options?: RequestOptions,
  ): APIPromise<HubInviteMultipleUsersResponse> {
    return this._client.post(path`/v1/hub/${hubID}/invite-multiple`, { body, ...options });
  }

  /**
   * Permanently delete a specific hub identified by its UUID
   */
  permanentlyDelete(hubID: string, options?: RequestOptions): APIPromise<HubPermanentlyDeleteResponse> {
    return this._client.delete(path`/v1/hub/${hubID}/permanent`, options);
  }

  /**
   * Remove a user from a specific hub, identified by the hub's UUID and user's
   * Firebase ID
   */
  removeUser(
    firebaseID: string,
    params: HubRemoveUserParams,
    options?: RequestOptions,
  ): APIPromise<HubRemoveUserResponse> {
    const { hub_id } = params;
    return this._client.delete(path`/v1/hub/${hub_id}/remove-user/${firebaseID}`, options);
  }

  /**
   * Request contributor access to a hub
   */
  requestContributorAccess(hubID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v1/hub/${hubID}/request-contributor-access`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Restore a specific hub, identified by its UUID, that has been previously deleted
   */
  restore(hubID: string, options?: RequestOptions): APIPromise<HubRestoreResponse> {
    return this._client.put(path`/v1/hub/${hubID}/restore`, options);
  }

  /**
   * Perform a search operation within a specific hub, identified by its UUID
   */
  searchResources(
    hubID: string,
    query: HubSearchResourcesParams,
    options?: RequestOptions,
  ): APIPromise<HubSearchResourcesResponse> {
    return this._client.get(path`/v1/hub/${hubID}/search-resources`, { query, ...options });
  }

  /**
   * Set column coloring for a hub
   */
  setColumnColoring(hubID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v1/hub/${hubID}/set-column-coloring`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Set column date formatting for a hub
   */
  setColumnFormat(
    kind: string,
    params: HubSetColumnFormatParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { hub_id } = params;
    return this._client.post(path`/v1/hub/${hub_id}/set-column-format/${kind}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Train the knowledge base for a hub
   */
  trainKnowledgeBase(hubID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v1/hub/${hubID}/train-knowledge-base`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Update heading styling for a specific hub
   */
  updateHeadingStyling(
    styleID: string,
    params: HubUpdateHeadingStylingParams,
    options?: RequestOptions,
  ): APIPromise<HubUpdateHeadingStylingResponse> {
    const { hub_id, ...body } = params;
    return this._client.post(path`/v1/hub/${hub_id}/style/${styleID}`, { body, ...options });
  }

  /**
   * Upload a template document for a hub
   */
  uploadTemplate(
    hubID: string,
    body: HubUploadTemplateParams,
    options?: RequestOptions,
  ): APIPromise<HubUploadTemplateResponse> {
    return this._client.post(
      path`/v1/hub/${hubID}/upload-template`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface Answer {
  answer?: string;

  answerComment?: string;

  answerVote?: boolean;

  contextUrls?: Array<string>;

  createdAt?: string;

  question?: string;

  updatedAt?: string;

  user?: UserHub;
}

export interface BaseRequestContext {
  processPublicId?: string | null;

  processResponsePublicId?: string | null;

  processSectionPublicId?: string | null;

  projectId?: string;
}

export interface SimpleHub {
  aiSearchEnabled?: boolean;

  allowDocumentExport?: boolean;

  allowTableExport?: boolean;

  createdAt?: string;

  defaultBanner?: string;

  defaultDateFormat?: string;

  defaultDatetimeFormat?: string;

  defaultHeaderBackgroundColor?: string;

  defaultHeaderTextColor?: string;

  defaultProcessId?: string;

  deletedAt?: string;

  domainsAccess?: Array<string>;

  fontColour?: string;

  headingStyles?: Array<SimpleHub.HeadingStyle>;

  hideProcessCreated?: boolean;

  image?: string;

  isDeleted?: boolean;

  logo?: string;

  mfaRequired?: boolean;

  name?: string;

  primaryColour?: string;

  processTitleAlignment?: string;

  processTitleBold?: boolean;

  processTitleColour?: string;

  processTitleFontSize?: number;

  processTitleItalic?: boolean;

  processTitleUnderline?: boolean;

  projectList?: Array<SimpleHub.ProjectList>;

  public?: boolean;

  publicId?: string;

  updatedAt?: string;

  wordTemplate?: string;
}

export namespace SimpleHub {
  export interface HeadingStyle {
    bold?: boolean;

    colour?: string;

    fontSize?: number;

    italic?: boolean;

    level?: number;

    numberingStyle?: number;

    publicId?: string;

    startAt0?: boolean;

    underline?: boolean;
  }

  export interface ProjectList {
    createdAt?: string;

    favourite?: boolean;

    projectRole?: string;

    updatedAt?: string;

    user?: ProjectList.User;
  }

  export namespace ProjectList {
    export interface User {
      email?: string;

      firebaseUserId?: string;

      kind?: string;

      name?: string;

      publicId?: string;
    }
  }
}

export interface UserHub {
  email?: string;

  name?: string;
}

export interface HubCreateResponse {
  data?: SimpleHub;

  metadata?: unknown;
}

export interface HubRetrieveResponse {
  data?: HubRetrieveResponse.Data;

  metadata?: unknown;
}

export namespace HubRetrieveResponse {
  export interface Data {
    folders?: Array<Data.Folder>;

    projectDetails?: HubAPI.SimpleHub;

    /**
     * User's role in the hub
     */
    role?: string;
  }

  export namespace Data {
    /**
     * List of folders associated with the hub, each with a name and potentially child
     * folders
     */
    export interface Folder {
      childFolders?: Array<Folder.ChildFolder>;

      name?: string;
    }

    export namespace Folder {
      export interface ChildFolder {
        name?: string;
      }
    }
  }
}

export interface HubUpdateResponse {
  data?: SimpleHub;

  metadata?: unknown;
}

export interface HubDeleteResponse {
  data?: string;

  metadata?: unknown;
}

export interface HubAISearchResponse {
  data?: Answer;

  metadata?: unknown;
}

export interface HubChangeUserRoleResponse {
  data?: SimpleHub;

  metadata?: unknown;
}

export interface HubCreateHeadingStylingResponse {
  data?: SimpleHub;

  metadata?: unknown;
}

export interface HubDeleteTopHeadingStylingResponse {
  data?: SimpleHub;

  metadata?: unknown;
}

export interface HubGetAIAnswersResponse {
  data?: Array<HubGetAIAnswersResponse.Data>;

  metadata?: unknown;
}

export namespace HubGetAIAnswersResponse {
  export interface Data {
    answer?: string;

    answerComment?: string;

    answerVote?: boolean;

    contextUrls?: Array<string>;

    createdAt?: string;

    question?: string;

    updatedAt?: string;

    user?: HubAPI.UserHub;
  }
}

export interface HubGetDeletedDocumentsResponse {
  data?: Array<DocumentAPI.SimpleDocument>;

  metadata?: unknown;
}

export interface HubGetDeletedTablesResponse {
  data?: Array<TableAPI.Table>;

  metadata?: unknown;
}

export interface HubGetDocumentsResponse {
  data?: Array<DocumentAPI.SimpleDocument>;

  metadata?: unknown;
}

export interface HubGetDuplicatedChildrenResponse {
  data?: Array<HubGetDuplicatedChildrenResponse.Data>;

  metadata?: unknown;
}

export namespace HubGetDuplicatedChildrenResponse {
  export interface Data {
    createdAt?: string;

    deletedAt?: string | null;

    deletedBy?: string | null;

    link?: string;

    name?: string;

    publicId?: string;

    user?: string;
  }
}

export interface HubGetInvitedMembersResponse {
  data?: Array<InviteAPI.InvitedMember>;

  metadata?: unknown;
}

export interface HubGetMembersResponse {
  data?: Array<HubGetMembersResponse.Data>;

  metadata?: unknown;
}

export namespace HubGetMembersResponse {
  export interface Data {
    createdAt?: string;

    favourite?: boolean;

    projectRole?: string;

    updatedAt?: string;

    user?: Data.User;
  }

  export namespace Data {
    export interface User {
      email?: string;

      firebaseUserId?: string;

      kind?: string;

      name?: string;

      profilePicture?: string;

      publicId?: string;

      tags?: unknown;
    }
  }
}

export interface HubGetNotificationsResponse {
  data?: Array<NotificationsAPI.Notification>;

  metadata?: unknown;
}

export interface HubGetResourcesResponse {
  data?: Array<HubGetResourcesResponse.Data>;

  metadata?: unknown;
}

export namespace HubGetResourcesResponse {
  export interface Data {
    /**
     * Name of the resource
     */
    name?: string;

    /**
     * Details of the document, if the resource type is 'process'
     */
    process?: Data.Process;

    /**
     * Details of the table, if the resource type is 'table'
     */
    table?: Data.Table;

    /**
     * Type of the resource (document or table)
     */
    type?: string;
  }

  export namespace Data {
    /**
     * Details of the document, if the resource type is 'process'
     */
    export interface Process {
      createdAt?: string;

      deletedAt?: string | null;

      logo?: string;

      name?: string;

      publicId?: string;

      type?: string;

      updatedAt?: string;
    }

    /**
     * Details of the table, if the resource type is 'table'
     */
    export interface Table {
      createdAt?: string;

      defaultViewId?: string;

      deletedAt?: string;

      isDeleted?: boolean;

      joins?: Array<TableAPI.TableJoin> | null;

      logo?: string;

      name?: string;

      publicId?: string;

      type?: string;

      updatedAt?: string;
    }
  }
}

export interface HubGetSentNotificationsResponse {
  data?: Array<HubGetSentNotificationsResponse.Data>;

  metadata?: unknown;
}

export namespace HubGetSentNotificationsResponse {
  export interface Data {
    publicId: string;

    createdAt?: string;

    description?: string | null;

    isSuccess?: boolean;

    notification?: Data.Notification;

    updatedAt?: string;
  }

  export namespace Data {
    export interface Notification {
      actions: Array<NotificationsAPI.Action>;

      publicId: string;

      triggers: Array<NotificationsAPI.Trigger>;

      createdAt?: string;

      description?: string | null;

      processes?: Array<DocumentAPI.Document>;

      tables?: Array<NotificationsAPI.Table1>;
    }
  }
}

export interface HubGetTablesResponse {
  data?: Array<TableAPI.Table>;

  metadata?: unknown;
}

export interface HubGetTagsResponse {
  data?: Array<HubGetTagsResponse.Data>;

  metadata?: unknown;
}

export namespace HubGetTagsResponse {
  export interface Data {
    cells?: Array<Data.Cell>;

    name?: string;

    publicId?: string;
  }

  export namespace Data {
    export interface Cell {
      id?: string;

      column?: Cell.Column;

      value?: string;
    }

    export namespace Cell {
      export interface Column {
        name?: string;

        publicId?: string;
      }
    }
  }
}

export interface HubGetVariablesResponse {
  data?: Array<HubGetVariablesResponse.Data>;

  metadata?: unknown;
}

export namespace HubGetVariablesResponse {
  export interface Data {
    cells?: Array<Data.Cell>;

    name?: string;

    publicId?: string;
  }

  export namespace Data {
    export interface Cell {
      id?: string;

      column?: Cell.Column;

      value?: string;
    }

    export namespace Cell {
      export interface Column {
        name?: string;

        publicId?: string;
      }
    }
  }
}

export interface HubInviteMultipleUsersResponse {
  data?: string;

  metadata?: unknown;
}

export interface HubPermanentlyDeleteResponse {
  data?: string;

  metadata?: unknown;
}

export interface HubRemoveUserResponse {
  data?: SimpleHub;

  metadata?: unknown;
}

export interface HubRestoreResponse {
  data?: string;

  metadata?: unknown;
}

export interface HubSearchResourcesResponse {
  data?: Answer;

  metadata?: unknown;
}

export interface HubUpdateHeadingStylingResponse {
  data?: SimpleHub;

  metadata?: unknown;
}

export interface HubUploadTemplateResponse {
  data?: SimpleHub;

  metadata?: unknown;
}

export interface HubCreateParams {
  name: string;
}

export interface HubUpdateParams {
  aiSearchEnabled?: boolean | null;

  allowDocumentExport?: boolean | null;

  allowTableExport?: boolean | null;

  bulkUpdateText?: unknown | HubUpdateParams.BulkUpdateText;

  defaultBanner?: string | null;

  defaultDateFormat?: string | null;

  defaultDatetimeFormat?: string | null;

  defaultHeaderBackgroundColor?: string | null;

  defaultHeaderTextColor?: string | null;

  defaultProcessId?: string | null;

  domainsAccess?: Array<string> | null;

  fontColour?: string | null;

  hideProcessCreated?: boolean | null;

  logo?: string | null;

  mfaRequired?: boolean | null;

  name?: string | null;

  primaryColour?: string | null;

  processTitleAlignment?: 'left' | 'center' | 'right' | null;

  processTitleBold?: boolean | null;

  processTitleColour?: string | null;

  processTitleFontSize?: number | null;

  processTitleItalic?: boolean | null;

  processTitleUnderline?: boolean | null;

  public?: boolean | null;

  wordTemplate?: string | null;
}

export namespace HubUpdateParams {
  export interface BulkUpdateText {
    replaceText: string;

    searchText: string;
  }
}

export interface HubAISearchParams {
  /**
   * Search query string
   */
  search: string;

  /**
   * Optional UUID of a document to restrict the search within a specific document
   */
  process_public_id?: string;
}

export interface HubChangeUserRoleParams {
  /**
   * Path param: UUID of the hub
   */
  hub_id: string;

  /**
   * Body param:
   */
  role: 'owner' | 'admin' | 'member';
}

export interface HubCreateKnowledgeBaseParams {
  source: string;

  text: string;

  context?: BaseRequestContext;

  link?: string | null;
}

export interface HubDuplicateParams {
  context?: BaseRequestContext;

  duplicatePermissions?: boolean;

  lockResource?: boolean;
}

export interface HubGetResourcesParams {
  adminView?: boolean | null;

  excludeProcesses?: boolean | null;

  excludeTables?: boolean | null;

  onlyAdmin?: boolean;

  onlyDeleted?: boolean | null;

  projectPermissions?: boolean | null;

  typeId?: string | null;
}

export interface HubGetSentNotificationsParams {
  /**
   * UUID of a specific notification to filter the executions
   */
  notification_id?: string | null;

  /**
   * Page number of the notification executions
   */
  page?: number;

  /**
   * Number of notification executions per page
   */
  size?: number;
}

export interface HubInviteMultipleUsersParams {
  emails?: Array<string>;

  projectRole?: 'member' | 'admin' | 'owner';

  tags?: Array<string>;
}

export interface HubRemoveUserParams {
  /**
   * UUID of the hub
   */
  hub_id: string;
}

export interface HubSearchResourcesParams {
  /**
   * Search query string
   */
  search: string;

  /**
   * Optional UUID of a document to restrict the search within a specific document
   */
  process_public_id?: string;
}

export interface HubSetColumnFormatParams {
  /**
   * The UUID of the hub for which to set the column date or datetime formatting
   */
  hub_id: string;
}

export interface HubUpdateHeadingStylingParams {
  /**
   * Path param: The UUID of the hub for which to update the heading styling
   */
  hub_id: string;

  /**
   * Body param:
   */
  bold?: boolean;

  /**
   * Body param:
   */
  colour?: string;

  /**
   * Body param:
   */
  context?: BaseRequestContext;

  /**
   * Body param:
   */
  fontSize?: number;

  /**
   * Body param:
   */
  italic?: boolean;

  /**
   * Body param:
   */
  numberingStyle?: number;

  /**
   * Body param:
   */
  startAt0?: boolean;

  /**
   * Body param:
   */
  underline?: boolean;
}

export interface HubUploadTemplateParams {
  file?: Uploadable;
}

Hub.AIAnswer = AIAnswer;
Hub.Invite = Invite;
Hub.Secrets = Secrets;

export declare namespace Hub {
  export {
    type Answer as Answer,
    type BaseRequestContext as BaseRequestContext,
    type SimpleHub as SimpleHub,
    type UserHub as UserHub,
    type HubCreateResponse as HubCreateResponse,
    type HubRetrieveResponse as HubRetrieveResponse,
    type HubUpdateResponse as HubUpdateResponse,
    type HubDeleteResponse as HubDeleteResponse,
    type HubAISearchResponse as HubAISearchResponse,
    type HubChangeUserRoleResponse as HubChangeUserRoleResponse,
    type HubCreateHeadingStylingResponse as HubCreateHeadingStylingResponse,
    type HubDeleteTopHeadingStylingResponse as HubDeleteTopHeadingStylingResponse,
    type HubGetAIAnswersResponse as HubGetAIAnswersResponse,
    type HubGetDeletedDocumentsResponse as HubGetDeletedDocumentsResponse,
    type HubGetDeletedTablesResponse as HubGetDeletedTablesResponse,
    type HubGetDocumentsResponse as HubGetDocumentsResponse,
    type HubGetDuplicatedChildrenResponse as HubGetDuplicatedChildrenResponse,
    type HubGetInvitedMembersResponse as HubGetInvitedMembersResponse,
    type HubGetMembersResponse as HubGetMembersResponse,
    type HubGetNotificationsResponse as HubGetNotificationsResponse,
    type HubGetResourcesResponse as HubGetResourcesResponse,
    type HubGetSentNotificationsResponse as HubGetSentNotificationsResponse,
    type HubGetTablesResponse as HubGetTablesResponse,
    type HubGetTagsResponse as HubGetTagsResponse,
    type HubGetVariablesResponse as HubGetVariablesResponse,
    type HubInviteMultipleUsersResponse as HubInviteMultipleUsersResponse,
    type HubPermanentlyDeleteResponse as HubPermanentlyDeleteResponse,
    type HubRemoveUserResponse as HubRemoveUserResponse,
    type HubRestoreResponse as HubRestoreResponse,
    type HubSearchResourcesResponse as HubSearchResourcesResponse,
    type HubUpdateHeadingStylingResponse as HubUpdateHeadingStylingResponse,
    type HubUploadTemplateResponse as HubUploadTemplateResponse,
    type HubCreateParams as HubCreateParams,
    type HubUpdateParams as HubUpdateParams,
    type HubAISearchParams as HubAISearchParams,
    type HubChangeUserRoleParams as HubChangeUserRoleParams,
    type HubCreateKnowledgeBaseParams as HubCreateKnowledgeBaseParams,
    type HubDuplicateParams as HubDuplicateParams,
    type HubGetResourcesParams as HubGetResourcesParams,
    type HubGetSentNotificationsParams as HubGetSentNotificationsParams,
    type HubInviteMultipleUsersParams as HubInviteMultipleUsersParams,
    type HubRemoveUserParams as HubRemoveUserParams,
    type HubSearchResourcesParams as HubSearchResourcesParams,
    type HubSetColumnFormatParams as HubSetColumnFormatParams,
    type HubUpdateHeadingStylingParams as HubUpdateHeadingStylingParams,
    type HubUploadTemplateParams as HubUploadTemplateParams,
  };

  export {
    AIAnswer as AIAnswer,
    type AIAnswerVoteResponse as AIAnswerVoteResponse,
    type AIAnswerVoteParams as AIAnswerVoteParams,
  };

  export {
    Invite as Invite,
    type InvitedMember as InvitedMember,
    type InviteCreateResponse as InviteCreateResponse,
    type InviteUpdateResponse as InviteUpdateResponse,
    type InviteDeleteResponse as InviteDeleteResponse,
    type InviteResendResponse as InviteResendResponse,
    type InviteCreateParams as InviteCreateParams,
    type InviteUpdateParams as InviteUpdateParams,
    type InviteDeleteParams as InviteDeleteParams,
    type InviteResendParams as InviteResendParams,
  };

  export {
    Secrets as Secrets,
    type HubSecret as HubSecret,
    type SecretCreateResponse as SecretCreateResponse,
    type SecretUpdateResponse as SecretUpdateResponse,
    type SecretListResponse as SecretListResponse,
    type SecretDeleteResponse as SecretDeleteResponse,
    type SecretCreateParams as SecretCreateParams,
    type SecretUpdateParams as SecretUpdateParams,
    type SecretDeleteParams as SecretDeleteParams,
  };
}
