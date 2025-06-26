// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table.views',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/table/views/{view_id}',
  operationId: 'GetTableView',
};

export const tool: Tool = {
  name: 'retrieve_table_views',
  description: 'Retrieve a specific view by its ID for a table.',
  inputSchema: {
    type: 'object',
    properties: {
      view_id: {
        type: 'string',
      },
      ignore_cached_options: {
        type: 'boolean',
        description: 'Flag to indicate whether to ignore cached options in the response.',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { view_id, ...body } = args as any;
  return asTextContentResult(await client.table.views.retrieve(view_id, body));
};

export default { metadata, tool, handler };
