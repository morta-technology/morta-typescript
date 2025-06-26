// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table.views.rows',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/table/views/{view_id}/rows',
  operationId: 'UpdateTableRowsInView',
};

export const tool: Tool = {
  name: 'update_views_table_rows',
  description: 'Update existing rows in a specified table view.',
  inputSchema: {
    type: 'object',
    properties: {
      view_id: {
        type: 'string',
      },
      rows: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            publicId: {
              type: 'string',
            },
            rowData: {
              type: 'object',
            },
            context: {
              $ref: '#/$defs/base_request_context',
            },
            sortOrder: {
              type: 'number',
            },
          },
          required: ['publicId', 'rowData'],
        },
      },
      context: {
        $ref: '#/$defs/base_request_context',
      },
    },
    $defs: {
      base_request_context: {
        type: 'object',
        properties: {
          processPublicId: {
            type: 'string',
          },
          processResponsePublicId: {
            type: 'string',
          },
          processSectionPublicId: {
            type: 'string',
          },
          projectId: {
            type: 'string',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { view_id, ...body } = args as any;
  return asTextContentResult(await client.table.views.rows.update(view_id, body));
};

export default { metadata, tool, handler };
