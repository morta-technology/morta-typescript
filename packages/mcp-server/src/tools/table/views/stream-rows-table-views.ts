// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table.views',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/table/views/{view_id}/rows-stream',
  operationId: 'StreamTableViewRows',
};

export const tool: Tool = {
  name: 'stream_rows_table_views',
  description: 'Stream the data of all rows for a specific table view.',
  inputSchema: {
    type: 'object',
    properties: {
      view_id: {
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
      process_id: {
        type: 'string',
        description: 'Optional UUID of a process to filter the data.',
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
    required: ['view_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { view_id, ...body } = args as any;
  return asBinaryContentResult(await client.table.views.streamRows(view_id, body).asResponse());
};

export default { metadata, tool, handler };
