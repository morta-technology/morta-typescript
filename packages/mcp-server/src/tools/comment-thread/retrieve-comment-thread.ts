// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'comment_thread',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/comment_thread/{comment_thread_id}',
  operationId: 'GetCommentThread',
};

export const tool: Tool = {
  name: 'retrieve_comment_thread',
  description: 'Retrieve a specific comment thread by its ID',
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
  return asTextContentResult(await client.commentThread.retrieve(comment_thread_id));
};

export default { metadata, tool, handler };
