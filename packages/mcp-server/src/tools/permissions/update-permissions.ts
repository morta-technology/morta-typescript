// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'morta-mcp/filtering';
import { Metadata, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'permissions',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/permissions/{id}',
  operationId: 'UpdateResourcePermissions',
};

export const tool: Tool = {
  name: 'update_permissions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate permissions for a specific resource (such as a table, table view, or process).\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/access_policy'\n    },\n    metadata: {\n      type: 'object',\n      additionalProperties: true\n    }\n  },\n  $defs: {\n    access_policy: {\n      type: 'object',\n      properties: {\n        accessAttribute: {\n          type: 'object',\n          properties: {\n            documentTable: {\n              $ref: '#/$defs/table3'\n            },\n            kind: {\n              type: 'string'\n            },\n            project: {\n              $ref: '#/$defs/project'\n            },\n            publicId: {\n              type: 'string'\n            },\n            tag: {\n              $ref: '#/$defs/tag'\n            },\n            user: {\n              type: 'object',\n              properties: {\n                firebaseUserId: {\n                  type: 'string'\n                },\n                name: {\n                  type: 'string'\n                },\n                publicId: {\n                  type: 'string'\n                }\n              }\n            }\n          }\n        },\n        accessResource: {\n          type: 'object',\n          properties: {\n            documentTable: {\n              $ref: '#/$defs/table3'\n            },\n            kind: {\n              type: 'string'\n            },\n            process: {\n              $ref: '#/$defs/document'\n            },\n            publicId: {\n              type: 'string'\n            }\n          }\n        },\n        publicId: {\n          type: 'string'\n        },\n        role: {\n          type: 'integer'\n        },\n        roleLabel: {\n          type: 'string'\n        }\n      }\n    },\n    table3: {\n      type: 'object',\n      properties: {\n        name: {\n          type: 'string'\n        },\n        publicId: {\n          type: 'string'\n        }\n      }\n    },\n    project: {\n      type: 'object',\n      properties: {\n        name: {\n          type: 'string'\n        },\n        publicId: {\n          type: 'string'\n        }\n      }\n    },\n    tag: {\n      type: 'object',\n      properties: {\n        documentTableId: {\n          type: 'string'\n        },\n        projectPublicId: {\n          type: 'string'\n        },\n        publicId: {\n          type: 'string'\n        },\n        referencePublicId: {\n          type: 'string'\n        },\n        value: {\n          type: 'object',\n          additionalProperties: true\n        }\n      }\n    },\n    document: {\n      type: 'object',\n      properties: {\n        name: {\n          type: 'string'\n        },\n        publicId: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      role: {
        type: 'string',
        enum: [0, 1, 2, 3, 4],
      },
      context: {
        $ref: '#/$defs/base_request_context',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'role'],
    $defs: {
      base_request_context: {
        type: 'object',
        properties: {
          processPublicId: {
            type: 'string',
          },
          processResponsePublicId: {
            type: 'string',
          },
          processSectionPublicId: {
            type: 'string',
          },
          projectId: {
            type: 'string',
          },
        },
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.permissions.update(id, body)));
};

export default { metadata, tool, handler };
