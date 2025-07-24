// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table.join',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/table/{table_id}/join/{join_id}',
  operationId: 'UpdateTableJoin',
};

export const tool: Tool = {
  name: 'update_table_join',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate an existing join on a table.",
  inputSchema: {
    type: 'object',
    properties: {
      table_id: {
        type: 'string',
      },
      join_id: {
        type: 'string',
      },
      context: {
        $ref: '#/$defs/base_request_context',
      },
      dataColumns: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      isOneToMany: {
        type: 'boolean',
      },
      joinColumns: {
        type: 'array',
        items: {
          $ref: '#/$defs/table_column_join',
        },
      },
      joinViewId: {
        type: 'string',
      },
    },
    required: ['table_id', 'join_id'],
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
      },
      table_column_join: {
        type: 'object',
        properties: {
          sourceColumnId: {
            type: 'string',
          },
          targetColumnId: {
            type: 'string',
          },
        },
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { join_id, ...body } = args as any;
  return asTextContentResult(await client.table.join.update(join_id, body));
};

export default { metadata, tool, handler };
