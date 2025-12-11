// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table.column',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/table/{table_id}/column/{column_id}/views',
  operationId: 'CheckColumnInViews',
};

export const tool: Tool = {
  name: 'check_views_table_column',
  description: 'Retrieve all views in which a specific table column is used.',
  inputSchema: {
    type: 'object',
    properties: {
      table_id: {
        type: 'string',
      },
      column_id: {
        type: 'string',
      },
    },
    required: ['table_id', 'column_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { column_id, ...body } = args as any;
  try {
    return asTextContentResult(await client.table.column.checkViews(column_id, body));
  } catch (error) {
    if (error instanceof Morta.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
