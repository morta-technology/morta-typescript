// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'notifications',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/notifications',
  operationId: 'CreateNotification',
};

export const tool: Tool = {
  name: 'create_notifications',
  description: 'Create a new notification for a specific hub.',
  inputSchema: {
    type: 'object',
    properties: {
      description: {
        type: 'string',
      },
      projectId: {
        type: 'string',
      },
      triggers: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            resource: {
              type: 'string',
            },
            verb: {
              type: 'string',
            },
          },
          required: ['resource', 'verb'],
        },
      },
      webhookUrl: {
        type: 'string',
      },
      customHeaders: {
        type: 'array',
        items: {
          $ref: '#/$defs/create_notification_schema_header',
        },
      },
      processes: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      tables: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
    $defs: {
      create_notification_schema_header: {
        type: 'object',
        properties: {
          key: {
            type: 'string',
          },
          value: {
            type: 'string',
          },
        },
        required: ['key', 'value'],
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.notifications.create(body));
};

export default { metadata, tool, handler };
