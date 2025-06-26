// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'comment_thread.comment',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/comment_thread/{comment_thread_id}/comment/{comment_id}',
  operationId: 'DeleteComment',
};

export const tool: Tool = {
  name: 'delete_comment_thread_comment',
  description: 'Delete a specific comment within a comment thread',
  inputSchema: {
    type: 'object',
    properties: {
      comment_thread_id: {
        type: 'string',
      },
      comment_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { comment_id, ...body } = args as any;
  return asTextContentResult(await client.commentThread.comment.delete(comment_id, body));
};

export default { metadata, tool, handler };
