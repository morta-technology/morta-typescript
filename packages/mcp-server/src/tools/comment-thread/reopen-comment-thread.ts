// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'comment_thread',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/comment_thread/{comment_thread_id}/reopen',
  operationId: 'ReopenCommentThread',
};

export const tool: Tool = {
  name: 'reopen_comment_thread',
  description: 'Reopen a previously resolved comment thread',
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
  return asTextContentResult(await client.commentThread.reopen(comment_thread_id));
};

export default { metadata, tool, handler };
