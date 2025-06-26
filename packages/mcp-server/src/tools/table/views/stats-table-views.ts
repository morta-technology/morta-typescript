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
  httpPath: '/v1/table/views/{view_id}/stats',
  operationId: 'GetTableViewStats',
};

export const tool: Tool = {
  name: 'stats_table_views',
  description: 'Retrieve statistical data for columns in a specific table view.',
  inputSchema: {
    type: 'object',
    properties: {
      view_id: {
        type: 'string',
      },
      filter: {
        type: 'string',
        description: 'Filters to apply to the statistical data retrieval.',
      },
      process_id: {
        type: 'string',
        description: 'Optional UUID of a process to filter the data.',
      },
      'sum, avg, max, min, count': {
        type: 'array',
        description: 'Specify columns to perform sum, average, max, min, or count operations.',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { view_id, ...body } = args as any;
  return asTextContentResult(await client.table.views.stats(view_id, body));
};

export default { metadata, tool, handler };
