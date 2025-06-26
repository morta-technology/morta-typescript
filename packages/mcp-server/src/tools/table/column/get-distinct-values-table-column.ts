// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table.column',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/table/{table_id}/column/{column_id}/distinct',
  operationId: 'GetDistinctValuesForColumn',
};

export const tool: Tool = {
  name: 'get_distinct_values_table_column',
  description: 'Retrieve a list of distinct (unique) values for a specified column in a table.',
  inputSchema: {
    type: 'object',
    properties: {
      table_id: {
        type: 'string',
      },
      column_id: {
        type: 'string',
      },
      filter: {
        type: 'string',
        description: 'Filter criteria for the distinct values',
      },
      group_columns: {
        type: 'array',
        description: 'Specify columns for grouping values',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { column_id, ...body } = args as any;
  return asTextContentResult(await client.table.column.getDistinctValues(column_id, body));
};

export default { metadata, tool, handler };
