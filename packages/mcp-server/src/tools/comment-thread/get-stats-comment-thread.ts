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
  httpPath: '/v1/comment_thread/stats',
  operationId: 'GetCommentThreadStatsByReference',
};

export const tool: Tool = {
  name: 'get_stats_comment_thread',
  description: 'Retrieve statistics for comment threads based on reference type and main reference ID',
  inputSchema: {
    type: 'object',
    properties: {
      reference_type: {
        type: 'string',
        description:
          'Type of the reference (process_section, table, or table_view) for which to gather statistics',
        enum: ['process_section', 'table', 'table_view'],
      },
      main_reference_id: {
        type: 'string',
        description: 'UUID of the main reference for which to gather statistics',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.commentThread.getStats(body));
};

export default { metadata, tool, handler };
