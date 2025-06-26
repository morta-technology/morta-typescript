// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'notifications',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/notifications/{id}',
  operationId: 'DeleteNotification',
};

export const tool: Tool = {
  name: 'delete_notifications',
  description: 'Delete a specific notification by its ID.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.notifications.delete(id));
};

export default { metadata, tool, handler };
