// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'permissions',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/permissions/{id}',
  operationId: 'UpdateResourcePermissions',
};

export const tool: Tool = {
  name: 'update_permissions',
  description: 'Update permissions for a specific resource (such as a table, table view, or process).',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      role: {
        type: 'string',
        enum: [0, 1, 2, 3, 4],
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
  const { id, ...body } = args as any;
  return asTextContentResult(await client.permissions.update(id, body));
};

export default { metadata, tool, handler };
