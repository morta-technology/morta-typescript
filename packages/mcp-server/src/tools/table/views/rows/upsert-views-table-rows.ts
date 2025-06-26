// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table.views.rows',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/table/views/{view_id}/rows/upsert',
  operationId: 'UpsertTableRowsInView',
};

export const tool: Tool = {
  name: 'upsert_views_table_rows',
  description: 'Upsert (add or update) rows in a table view based on a specified column.',
  inputSchema: {
    type: 'object',
    properties: {
      view_id: {
        type: 'string',
      },
      rows: {
        type: 'array',
        items: {
          $ref: '#/$defs/table_row_action',
        },
      },
      upsertColumnName: {
        type: 'string',
      },
      context: {
        $ref: '#/$defs/base_request_context',
      },
    },
    $defs: {
      table_row_action: {
        type: 'object',
        properties: {
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
        required: ['rowData'],
      },
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
  return asTextContentResult(await client.table.views.rows.upsert(view_id, body));
};

export default { metadata, tool, handler };
