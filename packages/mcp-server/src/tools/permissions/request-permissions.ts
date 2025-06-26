// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'permissions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/permissions/request/{hub_id}/{type}/{id}',
  operationId: 'RequestResourcePermissions',
};

export const tool: Tool = {
  name: 'request_permissions',
  description: 'Request permissions for a specific resource (such as a table, table view, or process).',
  inputSchema: {
    type: 'object',
    properties: {
      hub_id: {
        type: 'string',
      },
      type: {
        type: 'string',
        enum: ['project', 'process', 'table', 'view'],
      },
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  await client.permissions.request(id, body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
