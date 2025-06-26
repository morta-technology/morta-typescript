// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table.join',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/table/{table_id}/join/{join_id}',
  operationId: 'DeleteTableJoin',
};

export const tool: Tool = {
  name: 'delete_table_join',
  description: 'Delete a join from a table.',
  inputSchema: {
    type: 'object',
    properties: {
      table_id: {
        type: 'string',
      },
      join_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { join_id, ...body } = args as any;
  return asTextContentResult(await client.table.join.delete(join_id, body));
};

export default { metadata, tool, handler };
