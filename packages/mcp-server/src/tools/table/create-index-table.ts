// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/table/{table_id}/indexes',
  operationId: 'CreateTableIndexes',
};

export const tool: Tool = {
  name: 'create_index_table',
  description: 'Create an index on one or more columns of a table to improve query performance.',
  inputSchema: {
    type: 'object',
    properties: {
      table_id: {
        type: 'string',
      },
      columns: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            publicId: {
              type: 'string',
            },
          },
          required: ['publicId'],
        },
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { table_id, ...body } = args as any;
  return asTextContentResult(await client.table.createIndex(table_id, body));
};

export default { metadata, tool, handler };
