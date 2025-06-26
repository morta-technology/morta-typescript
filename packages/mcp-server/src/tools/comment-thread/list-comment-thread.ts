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
  httpPath: '/v1/comment_thread',
  operationId: 'GetCommentThreadsByReference',
};

export const tool: Tool = {
  name: 'list_comment_thread',
  description: 'Retrieve all comment threads associated with a specific reference',
  inputSchema: {
    type: 'object',
    properties: {
      reference_id: {
        type: 'string',
        description: 'UUID of the reference associated with the comment threads',
      },
      reference_type: {
        type: 'string',
        description:
          'Type of the reference (process_section, table, or table_view) associated with the comment threads',
        enum: ['process_section', 'table', 'table_view'],
      },
      main_reference: {
        type: 'string',
        description: 'Optional main reference for additional filtering',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.commentThread.list(body));
};

export default { metadata, tool, handler };
