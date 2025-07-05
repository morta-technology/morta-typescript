// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AIAnswerAPI from './ai-answer';
import { AIAnswer } from './ai-answer';
import * as InviteAPI from './invite';
import { Invite, InvitedMember } from './invite';
import * as SecretsAPI from './secrets';
import { HubSecret, Secrets } from './secrets';

export class Hub extends APIResource {
  aiAnswer: AIAnswerAPI.AIAnswer = new AIAnswerAPI.AIAnswer(this._client);
  invite: InviteAPI.Invite = new InviteAPI.Invite(this._client);
  secrets: SecretsAPI.Secrets = new SecretsAPI.Secrets(this._client);
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

Hub.AIAnswer = AIAnswer;
Hub.Invite = Invite;
Hub.Secrets = Secrets;

export declare namespace Hub {
  export {
    type Answer as Answer,
    type BaseRequestContext as BaseRequestContext,
    type SimpleHub as SimpleHub,
    type UserHub as UserHub,
  };

  export { AIAnswer as AIAnswer };

  export { Invite as Invite, type InvitedMember as InvitedMember };

  export { Secrets as Secrets, type HubSecret as HubSecret };
}
