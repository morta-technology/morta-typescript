// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/table/{table_id}',
  operationId: 'DeleteTable',
};

export const tool: Tool = {
  name: 'delete_table',
  description: 'Delete a specified table by its UUID.',
  inputSchema: {
    type: 'object',
    properties: {
      table_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { table_id, ...body } = args as any;
  return asTextContentResult(await client.table.delete(table_id));
};

export default { metadata, tool, handler };
