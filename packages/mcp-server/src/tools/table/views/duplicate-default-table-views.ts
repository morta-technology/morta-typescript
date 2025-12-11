// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table.views',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/table/{table_id}/views/duplicate-default',
  operationId: 'DuplicateDefaultTableView',
};

export const tool: Tool = {
  name: 'duplicate_default_table_views',
  description: 'Create a duplicate of the default view for a specific table.',
  inputSchema: {
    type: 'object',
    properties: {
      table_id: {
        type: 'string',
      },
      context: {
        $ref: '#/$defs/base_request_context',
      },
      name: {
        type: 'string',
      },
      type: {
        type: 'integer',
      },
    },
    required: ['table_id'],
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
    },
  },
  annotations: {},
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { table_id, ...body } = args as any;
  try {
    return asTextContentResult(await client.table.views.duplicateDefault(table_id, body));
  } catch (error) {
    if (error instanceof Morta.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
