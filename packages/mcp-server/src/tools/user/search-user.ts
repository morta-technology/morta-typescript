// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'user',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/user/search',
  operationId: 'SearchUsers',
};

export const tool: Tool = {
  name: 'search_user',
  description: 'Search for users by hub or process',
  inputSchema: {
    type: 'object',
    properties: {
      query: {
        type: 'string',
        description: 'Query string for searching users',
      },
      process_id: {
        type: 'string',
        description: 'Process ID to restrict search',
      },
      project_id: {
        type: 'string',
        description: 'Hub ID to restrict search',
      },
      table_view_id: {
        type: 'string',
        description: 'Table View ID to restrict search',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.user.search(body));
};

export default { metadata, tool, handler };
