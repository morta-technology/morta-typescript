// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'comment_thread.comment',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/comment_thread/{comment_thread_id}/comment',
  operationId: 'CreateComment',
};

export const tool: Tool = {
  name: 'create_comment_thread_comment',
  description: 'Create a new comment within a specific comment thread',
  inputSchema: {
    type: 'object',
    properties: {
      comment_thread_id: {
        type: 'string',
      },
      commentText: {
        type: 'string',
      },
      context: {
        $ref: '#/$defs/base_request_context',
      },
    },
    $defs: {
      base_request_context: {
        type: 'object',
        properties: {
          processPublicId: {
            type: 'string',
          },
          processResponsePublicId: {
            type: 'string',
          },
          processSectionPublicId: {
            type: 'string',
          },
          projectId: {
            type: 'string',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { comment_thread_id, ...body } = args as any;
  return asTextContentResult(await client.commentThread.comment.create(comment_thread_id, body));
};

export default { metadata, tool, handler };
