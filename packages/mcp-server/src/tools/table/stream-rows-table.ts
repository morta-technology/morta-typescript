// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/table/{table_id}/rows-stream',
  operationId: 'StreamTableRows',
};

export const tool: Tool = {
  name: 'stream_rows_table',
  description: 'Stream the data of all rows for a specific table.',
  inputSchema: {
    type: 'object',
    properties: {
      table_id: {
        type: 'string',
      },
      filter: {
        type: 'string',
        description: 'Filters to apply to the streaming data.',
      },
      page: {
        type: 'integer',
        description: 'Page number for pagination',
      },
      size: {
        type: 'integer',
        description: 'Number of items per page for pagination',
      },
      sort: {
        type: 'string',
        description: 'Sorting parameters for the streaming data.',
      },
    },
    required: ['table_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { table_id, ...body } = args as any;
  return asBinaryContentResult(await client.table.streamRows(table_id, body));
};

export default { metadata, tool, handler };
