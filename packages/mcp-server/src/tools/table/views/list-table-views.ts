// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table.views',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/table/{table_id}/views',
  operationId: 'GetTableViews',
};

export const tool: Tool = {
  name: 'list_table_views',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve all views associated with a specific table.",
  inputSchema: {
    type: 'object',
    properties: {
      table_id: {
        type: 'string',
      },
      ignore_columns: {
        type: 'boolean',
        description: 'Flag to indicate whether to ignore column data in the response.',
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
  return asTextContentResult(await client.table.views.list(table_id, body));
};

export default { metadata, tool, handler };
