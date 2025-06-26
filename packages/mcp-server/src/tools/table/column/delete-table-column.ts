// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table.column',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/table/{table_id}/column/{column_id}',
  operationId: 'DeleteTableColumn',
};

export const tool: Tool = {
  name: 'delete_table_column',
  description: 'Delete a specific column from a table.',
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
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { column_id, ...body } = args as any;
  return asTextContentResult(await client.table.column.delete(column_id, body));
};

export default { metadata, tool, handler };
