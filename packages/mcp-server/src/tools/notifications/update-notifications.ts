// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'notifications',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/notifications/{id}',
  operationId: 'UpdateNotification',
};

export const tool: Tool = {
  name: 'update_notifications',
  description: 'Update a specific notification by its ID.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
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
      description: {
        type: 'string',
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
            publicId: {
              type: 'string',
            },
          },
          required: ['resource', 'verb'],
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
  const { id, ...body } = args as any;
  return asTextContentResult(await client.notifications.update(id, body));
};

export default { metadata, tool, handler };
