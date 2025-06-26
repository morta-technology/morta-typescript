// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table.views.rows',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/table/views/{view_id}/rows',
  operationId: 'DeleteTableRowsInView',
};

export const tool: Tool = {
  name: 'delete_views_table_rows',
  description: 'Delete specific rows from a table view based on row IDs.',
  inputSchema: {
    type: 'object',
    properties: {
      view_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { view_id, ...body } = args as any;
  return asTextContentResult(await client.table.views.rows.delete(view_id));
};

export default { metadata, tool, handler };
