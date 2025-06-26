// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AIAnswer extends APIResource {
  /**
   * Vote on an AI answer within a specific hub, identified by the hub's UUID and the
   * answer's UUID
   */
  vote(
    answerID: string,
    params: AIAnswerVoteParams,
    options?: RequestOptions,
  ): APIPromise<AIAnswerVoteResponse> {
    const { hub_id, ...body } = params;
    return this._client.post(path`/v1/hub/${hub_id}/ai-answer/${answerID}/vote`, { body, ...options });
  }
}

export interface AIAnswerVoteResponse {
  data?: string;

  metadata?: unknown;
}

export interface AIAnswerVoteParams {
  /**
   * Path param: UUID of the hub
   */
  hub_id: string;

  /**
   * Body param:
   */
  comment?: string;

  /**
   * Body param:
   */
  vote?: boolean;
}

export declare namespace AIAnswer {
  export { type AIAnswerVoteResponse as AIAnswerVoteResponse, type AIAnswerVoteParams as AIAnswerVoteParams };
}
