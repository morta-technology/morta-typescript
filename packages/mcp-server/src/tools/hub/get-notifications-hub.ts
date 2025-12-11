// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'morta-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'hub',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/hub/{hub_id}/notifications',
  operationId: 'GetHubNotifications',
};

export const tool: Tool = {
  name: 'get_notifications_hub',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve all notifications associated with a specific hub. This endpoint is accessible only to users with owner-level permissions for the hub.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/hub_get_notifications_response',\n  $defs: {\n    hub_get_notifications_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/notification'\n          }\n        },\n        metadata: {\n          type: 'object',\n          additionalProperties: true\n        }\n      }\n    },\n    notification: {\n      type: 'object',\n      properties: {\n        actions: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/action'\n          }\n        },\n        publicId: {\n          type: 'string'\n        },\n        triggers: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/trigger'\n          }\n        },\n        createdAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string'\n        },\n        processes: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/document'\n          }\n        },\n        tables: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/table1'\n          }\n        },\n        user: {\n          $ref: '#/$defs/summary_user'\n        }\n      },\n      required: [        'actions',\n        'publicId',\n        'triggers'\n      ]\n    },\n    action: {\n      type: 'object',\n      properties: {\n        kind: {\n          type: 'string'\n        },\n        publicId: {\n          type: 'string'\n        },\n        customHeaders: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              key: {\n                type: 'string'\n              },\n              value: {\n                type: 'string'\n              }\n            },\n            required: [              'key',\n              'value'\n            ]\n          }\n        },\n        webhookUrl: {\n          type: 'string'\n        }\n      },\n      required: [        'kind',\n        'publicId'\n      ]\n    },\n    trigger: {\n      type: 'object',\n      properties: {\n        publicId: {\n          type: 'string'\n        },\n        resource: {\n          type: 'string'\n        },\n        verb: {\n          type: 'string'\n        }\n      },\n      required: [        'publicId',\n        'resource',\n        'verb'\n      ]\n    },\n    document: {\n      type: 'object',\n      properties: {\n        name: {\n          type: 'string'\n        },\n        publicId: {\n          type: 'string'\n        }\n      }\n    },\n    table1: {\n      type: 'object',\n      properties: {\n        defaultViewId: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        publicId: {\n          type: 'string'\n        }\n      }\n    },\n    summary_user: {\n      type: 'object',\n      properties: {\n        email: {\n          type: 'string'\n        },\n        firebaseUserId: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        profilePicture: {\n          type: 'string'\n        },\n        publicId: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      hub_id: {
        type: 'string',
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
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.hub.getNotifications(hub_id)));
  } catch (error) {
    if (error instanceof Morta.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
