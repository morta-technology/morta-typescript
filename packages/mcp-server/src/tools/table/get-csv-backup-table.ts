// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/table/{table_id}/csv-backup',
  operationId: 'GetTableCSVBackup',
};

export const tool: Tool = {
  name: 'get_csv_backup_table',
  description: 'Get a CSV backup of a table at a specific date',
  inputSchema: {
    type: 'object',
    properties: {
      table_id: {
        type: 'string',
      },
      date: {
        type: 'string',
        description: 'The date of the backup to retrieve',
      },
    },
    required: ['table_id', 'date'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { table_id, ...body } = args as any;
  return asBinaryContentResult(await client.table.getCsvBackup(table_id, body));
};

export default { metadata, tool, handler };
