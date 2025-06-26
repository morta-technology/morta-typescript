// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table.column',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/table/{table_id}/column/{column_id}/restore',
  operationId: 'RestoreTableColumn',
};

export const tool: Tool = {
  name: 'restore_table_column',
  description: 'Restore a previously deleted column in a table.',
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
  return asTextContentResult(await client.table.column.restore(column_id, body));
};

export default { metadata, tool, handler };
