// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/table/{table_id}/duplicate',
  operationId: 'DuplicateTable',
};

export const tool: Tool = {
  name: 'duplicate_table',
  description:
    'Create a duplicate of an existing table along with its data, settings, and optionally linked tables.',
  inputSchema: {
    type: 'object',
    properties: {
      table_id: {
        type: 'string',
      },
      targetProjectId: {
        type: 'string',
      },
      context: {
        $ref: '#/$defs/base_request_context',
      },
      duplicateLinkedTables: {
        type: 'boolean',
      },
      duplicatePermissions: {
        type: 'boolean',
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
  const { table_id, ...body } = args as any;
  return asTextContentResult(await client.table.duplicate(table_id, body));
};

export default { metadata, tool, handler };
