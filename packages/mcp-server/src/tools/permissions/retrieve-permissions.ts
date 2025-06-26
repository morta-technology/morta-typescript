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
  httpPath: '/v1/permissions',
  operationId: 'GetResourcePermissions',
};

export const tool: Tool = {
  name: 'retrieve_permissions',
  description: 'Retrieve permissions for a specified resource, such as a table, table view, or process.',
  inputSchema: {
    type: 'object',
    properties: {
      resource: {
        type: 'string',
        description:
          "The kind of resource for which to retrieve permissions. Valid options are 'process', 'table', or 'table_view'.",
        enum: ['process', 'table', 'table_view'],
      },
      resource_id: {
        type: 'string',
        description: 'UUID of the resource for which to retrieve permissions.',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.permissions.retrieve(body));
};

export default { metadata, tool, handler };
