// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asBinaryContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/table/{table_id}/file',
  operationId: 'GetFileForTableCell',
};

export const tool: Tool = {
  name: 'get_file_table',
  description: 'Retrieve a file associated with a specific cell in a table.',
  inputSchema: {
    type: 'object',
    properties: {
      table_id: {
        type: 'string',
      },
      column_id: {
        type: 'string',
        description: 'UUID of the column containing the cell.',
      },
      filename: {
        type: 'string',
        description: 'Name of the file to retrieve.',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { table_id, ...body } = args as any;
  return asBinaryContentResult(await client.table.getFile(table_id, body));
};

export default { metadata, tool, handler };
