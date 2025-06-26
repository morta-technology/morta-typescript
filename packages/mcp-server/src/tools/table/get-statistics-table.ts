// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/table/{table_id}/stats',
  operationId: 'GetTableColumnStats',
};

export const tool: Tool = {
  name: 'get_statistics_table',
  description: 'Retrieve statistics for table columns based on specified parameters.',
  inputSchema: {
    type: 'object',
    properties: {
      table_id: {
        type: 'string',
      },
      aggregation: {
        type: 'object',
        description: 'Aggregation functions to apply on columns',
      },
      filter: {
        type: 'string',
        description: 'Filter criteria for the columns',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { table_id, ...body } = args as any;
  return asTextContentResult(await client.table.getStatistics(table_id, body));
};

export default { metadata, tool, handler };
