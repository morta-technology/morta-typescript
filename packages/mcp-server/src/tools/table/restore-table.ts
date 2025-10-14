// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/table/{table_id}/restore',
  operationId: 'RestoreTable',
};

export const tool: Tool = {
  name: 'restore_table',
  description: 'Restore a previously deleted table using its UUID.',
  inputSchema: {
    type: 'object',
    properties: {
      table_id: {
        type: 'string',
      },
    },
    required: ['table_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { table_id, ...body } = args as any;
  return asTextContentResult(await client.table.restore(table_id));
};

export default { metadata, tool, handler };
