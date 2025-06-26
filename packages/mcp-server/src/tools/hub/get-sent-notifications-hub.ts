// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'hub',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/hub/{hub_id}/sent-notifications',
  operationId: 'GetHubSentNotifications',
};

export const tool: Tool = {
  name: 'get_sent_notifications_hub',
  description: 'Retrieve all sent notifications for a specified hub',
  inputSchema: {
    type: 'object',
    properties: {
      hub_id: {
        type: 'string',
      },
      notification_id: {
        type: 'string',
        description: 'UUID of a specific notification to filter the executions',
      },
      page: {
        type: 'integer',
        description: 'Page number of the notification executions',
      },
      size: {
        type: 'integer',
        description: 'Number of notification executions per page',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { hub_id, ...body } = args as any;
  return asTextContentResult(await client.hub.getSentNotifications(hub_id, body));
};

export default { metadata, tool, handler };
