// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table.views',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/table/views/{view_id}/default',
  operationId: 'SetTableViewAsDefault',
};

export const tool: Tool = {
  name: 'set_default_table_views',
  description: 'Designate a specific table view as the default view for the table.',
  inputSchema: {
    type: 'object',
    properties: {
      view_id: {
        type: 'string',
      },
    },
    required: ['view_id'],
  },
  annotations: {},
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { view_id, ...body } = args as any;
  return asTextContentResult(await client.table.views.setDefault(view_id));
};

export default { metadata, tool, handler };
