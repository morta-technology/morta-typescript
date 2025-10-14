// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'permissions',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/permissions/{id}',
  operationId: 'DeleteResourcePermissions',
};

export const tool: Tool = {
  name: 'delete_permissions',
  description: 'Delete permissions for a specific resource (such as a table, table view, or process).',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
    required: ['id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.permissions.delete(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
