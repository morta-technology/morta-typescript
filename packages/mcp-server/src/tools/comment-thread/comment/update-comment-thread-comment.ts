// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'comment_thread.comment',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/comment_thread/{comment_thread_id}/comment/{comment_id}',
  operationId: 'UpdateComment',
};

export const tool: Tool = {
  name: 'update_comment_thread_comment',
  description: 'Update a specific comment within a comment thread',
  inputSchema: {
    type: 'object',
    properties: {
      comment_thread_id: {
        type: 'string',
      },
      comment_id: {
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
  const { comment_id, ...body } = args as any;
  return asTextContentResult(await client.commentThread.comment.update(comment_id, body));
};

export default { metadata, tool, handler };
