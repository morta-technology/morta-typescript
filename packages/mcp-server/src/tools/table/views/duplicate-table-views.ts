// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table.views',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/table/{table_id}/views/{view_id}/duplicate',
  operationId: 'DuplicateTableView',
};

export const tool: Tool = {
  name: 'duplicate_table_views',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a duplicate of an existing view for a specific table.",
  inputSchema: {
    type: 'object',
    properties: {
      table_id: {
        type: 'string',
      },
      view_id: {
        type: 'string',
      },
    },
    required: ['table_id', 'view_id'],
  },
  annotations: {},
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { view_id, ...body } = args as any;
  return asTextContentResult(await client.table.views.duplicate(view_id, body));
};

export default { metadata, tool, handler };
