// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'hub.ai_answer',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/hub/{hub_id}/ai-answer/{answer_id}/vote',
  operationId: 'VoteAiAnswer',
};

export const tool: Tool = {
  name: 'vote_hub_ai_answer',
  description:
    "Vote on an AI answer within a specific hub, identified by the hub's UUID and the answer's UUID",
  inputSchema: {
    type: 'object',
    properties: {
      hub_id: {
        type: 'string',
      },
      answer_id: {
        type: 'string',
      },
      comment: {
        type: 'string',
      },
      vote: {
        type: 'boolean',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { answer_id, ...body } = args as any;
  return asTextContentResult(await client.hub.aiAnswer.vote(answer_id, body));
};

export default { metadata, tool, handler };
