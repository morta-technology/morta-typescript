// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'comment_thread',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/comment_thread/{comment_thread_id}',
  operationId: 'DeleteCommentThread',
};

export const tool: Tool = {
  name: 'delete_comment_thread',
  description: 'Delete a comment thread',
  inputSchema: {
    type: 'object',
    properties: {
      comment_thread_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { comment_thread_id, ...body } = args as any;
  return asTextContentResult(await client.commentThread.delete(comment_thread_id));
};

export default { metadata, tool, handler };
