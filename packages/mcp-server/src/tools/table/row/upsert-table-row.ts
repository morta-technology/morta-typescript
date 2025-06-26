// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table.row',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/table/{table_id}/row/upsert',
  operationId: 'UpsertTableRows',
};

export const tool: Tool = {
  name: 'upsert_table_row',
  description: 'Add or update a row in the specified table based on a unique column value.',
  inputSchema: {
    type: 'object',
    properties: {
      table_id: {
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
  const { table_id, ...body } = args as any;
  return asTextContentResult(await client.table.row.upsert(table_id, body));
};

export default { metadata, tool, handler };
