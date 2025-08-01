// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'morta-mcp/filtering';
import { Metadata, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve all sent notifications for a specified hub\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          publicId: {\n            type: 'string'\n          },\n          createdAt: {\n            type: 'string',\n            format: 'date-time'\n          },\n          description: {\n            type: 'string'\n          },\n          isSuccess: {\n            type: 'boolean'\n          },\n          notification: {\n            type: 'object',\n            properties: {\n              actions: {\n                type: 'array',\n                items: {\n                  $ref: '#/$defs/action'\n                }\n              },\n              publicId: {\n                type: 'string'\n              },\n              triggers: {\n                type: 'array',\n                items: {\n                  $ref: '#/$defs/trigger'\n                }\n              },\n              createdAt: {\n                type: 'string',\n                format: 'date-time'\n              },\n              description: {\n                type: 'string'\n              },\n              processes: {\n                type: 'array',\n                items: {\n                  $ref: '#/$defs/document'\n                }\n              },\n              tables: {\n                type: 'array',\n                items: {\n                  $ref: '#/$defs/table1'\n                }\n              }\n            },\n            required: [              'actions',\n              'publicId',\n              'triggers'\n            ]\n          },\n          updatedAt: {\n            type: 'string',\n            format: 'date-time'\n          }\n        },\n        required: [          'publicId'\n        ]\n      }\n    },\n    metadata: {\n      type: 'object'\n    }\n  },\n  $defs: {\n    action: {\n      type: 'object',\n      properties: {\n        kind: {\n          type: 'string'\n        },\n        publicId: {\n          type: 'string'\n        },\n        customHeaders: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              key: {\n                type: 'string'\n              },\n              value: {\n                type: 'string'\n              }\n            },\n            required: [              'key',\n              'value'\n            ]\n          }\n        },\n        webhookUrl: {\n          type: 'string'\n        }\n      },\n      required: [        'kind',\n        'publicId'\n      ]\n    },\n    trigger: {\n      type: 'object',\n      properties: {\n        publicId: {\n          type: 'string'\n        },\n        resource: {\n          type: 'string'\n        },\n        verb: {\n          type: 'string'\n        }\n      },\n      required: [        'publicId',\n        'resource',\n        'verb'\n      ]\n    },\n    document: {\n      type: 'object',\n      properties: {\n        name: {\n          type: 'string'\n        },\n        publicId: {\n          type: 'string'\n        }\n      }\n    },\n    table1: {\n      type: 'object',\n      properties: {\n        defaultViewId: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        publicId: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['hub_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { hub_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.hub.getSentNotifications(hub_id, body)),
  );
};

export default { metadata, tool, handler };
