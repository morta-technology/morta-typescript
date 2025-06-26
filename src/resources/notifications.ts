// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as DocumentAPI from './document/document';
import * as UserAPI from './user/user';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Notifications extends APIResource {
  /**
   * Create a new notification for a specific hub.
   */
  create(body: NotificationCreateParams, options?: RequestOptions): APIPromise<NotificationCreateResponse> {
    return this._client.post('/v1/notifications', { body, ...options });
  }

  /**
   * Update a specific notification by its ID.
   */
  update(
    id: string,
    body: NotificationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<NotificationUpdateResponse> {
    return this._client.put(path`/v1/notifications/${id}`, { body, ...options });
  }

  /**
   * Delete a specific notification by its ID.
   */
  delete(id: string, options?: RequestOptions): APIPromise<NotificationDeleteResponse> {
    return this._client.delete(path`/v1/notifications/${id}`, options);
  }

  /**
   * Retrieve a list of all supported event types for notifications.
   */
  listEventTypes(options?: RequestOptions): APIPromise<NotificationListEventTypesResponse> {
    return this._client.get('/v1/notifications/event-types', options);
  }

  /**
   * Retrieve all events associated with a specific resource, filtered by various
   * criteria.
   */
  listEvents(
    resourceID: string,
    query: NotificationListEventsParams,
    options?: RequestOptions,
  ): APIPromise<NotificationListEventsResponse> {
    return this._client.get(path`/v1/notifications/events/${resourceID}`, { query, ...options });
  }
}

export interface Action {
  kind: string;

  publicId: string;

  customHeaders?: Array<Action.CustomHeader>;

  webhookUrl?: string;
}

export namespace Action {
  export interface CustomHeader {
    key: string;

    value: string;
  }
}

export interface CreateNotificationSchemaHeader {
  key: string;

  value: string;
}

export interface Notification {
  actions: Array<Action>;

  publicId: string;

  triggers: Array<Trigger>;

  createdAt?: string;

  description?: string | null;

  processes?: Array<DocumentAPI.Document>;

  tables?: Array<Table1>;

  user?: UserAPI.SummaryUser;
}

export interface Table1 {
  defaultViewId?: string;

  name?: string;

  publicId?: string;
}

export interface Trigger {
  publicId: string;

  resource: string;

  verb: string;
}

export interface NotificationCreateResponse {
  data?: Notification;

  metadata?: unknown;
}

export interface NotificationUpdateResponse {
  data?: Notification;

  metadata?: unknown;
}

export interface NotificationDeleteResponse {
  data?: string;

  metadata?: unknown;
}

export interface NotificationListEventTypesResponse {
  data?: Array<string>;

  metadata?: unknown;
}

export interface NotificationListEventsResponse {
  data?: Array<UserAPI.Event>;

  metadata?: { [key: string]: unknown };
}

export interface NotificationCreateParams {
  description: string;

  projectId: string;

  triggers: Array<NotificationCreateParams.Trigger>;

  webhookUrl: string;

  customHeaders?: Array<CreateNotificationSchemaHeader>;

  processes?: Array<string>;

  tables?: Array<string>;
}

export namespace NotificationCreateParams {
  export interface Trigger {
    resource: string;

    verb: string;
  }
}

export interface NotificationUpdateParams {
  webhookUrl: string;

  customHeaders?: Array<CreateNotificationSchemaHeader>;

  description?: string | null;

  processes?: Array<string>;

  tables?: Array<string>;

  triggers?: Array<NotificationUpdateParams.Trigger>;
}

export namespace NotificationUpdateParams {
  export interface Trigger {
    resource: string;

    verb: string;

    publicId?: string | null;
  }
}

export interface NotificationListEventsParams {
  /**
   * The type of the resource (e.g., user, process, table, project).
   */
  type: 'process' | 'process_section' | 'process_response' | 'table' | 'project' | 'user';

  /**
   * Optional end date to filter the events.
   */
  end_date?: string;

  /**
   * Page number for pagination.
   */
  page?: number;

  /**
   * Optional search term to filter the events.
   */
  search?: string;

  /**
   * Optional start date to filter the events.
   */
  start_date?: string;

  /**
   * Optional UUID of a user to filter the events.
   */
  users?: Array<string>;

  /**
   * Optional list of verbs to filter the events.
   */
  verb?: Array<string>;
}

export declare namespace Notifications {
  export {
    type Action as Action,
    type CreateNotificationSchemaHeader as CreateNotificationSchemaHeader,
    type Notification as Notification,
    type Table1 as Table1,
    type Trigger as Trigger,
    type NotificationCreateResponse as NotificationCreateResponse,
    type NotificationUpdateResponse as NotificationUpdateResponse,
    type NotificationDeleteResponse as NotificationDeleteResponse,
    type NotificationListEventTypesResponse as NotificationListEventTypesResponse,
    type NotificationListEventsResponse as NotificationListEventsResponse,
    type NotificationCreateParams as NotificationCreateParams,
    type NotificationUpdateParams as NotificationUpdateParams,
    type NotificationListEventsParams as NotificationListEventsParams,
  };
}
