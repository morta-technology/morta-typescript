// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'notifications',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/notifications/event-types',
  operationId: 'GetNotificationEventTypes',
};

export const tool: Tool = {
  name: 'list_event_types_notifications',
  description: 'Retrieve a list of all supported event types for notifications.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.notifications.listEventTypes());
};

export default { metadata, tool, handler };
