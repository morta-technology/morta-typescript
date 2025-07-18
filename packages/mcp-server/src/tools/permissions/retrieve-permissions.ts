// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'morta-mcp/filtering';
import { Metadata, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve permissions for a specified resource, such as a table, table view, or process.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/access_policy'\n      }\n    },\n    metadata: {\n      type: 'object'\n    }\n  },\n  $defs: {\n    access_policy: {\n      type: 'object',\n      properties: {\n        accessAttribute: {\n          type: 'object',\n          properties: {\n            documentTable: {\n              $ref: '#/$defs/table3'\n            },\n            kind: {\n              type: 'string'\n            },\n            project: {\n              $ref: '#/$defs/project'\n            },\n            publicId: {\n              type: 'string'\n            },\n            tag: {\n              $ref: '#/$defs/tag'\n            },\n            user: {\n              type: 'object',\n              properties: {\n                firebaseUserId: {\n                  type: 'string'\n                },\n                name: {\n                  type: 'string'\n                },\n                publicId: {\n                  type: 'string'\n                }\n              }\n            }\n          }\n        },\n        accessResource: {\n          type: 'object',\n          properties: {\n            documentTable: {\n              $ref: '#/$defs/table3'\n            },\n            kind: {\n              type: 'string'\n            },\n            process: {\n              $ref: '#/$defs/document'\n            },\n            publicId: {\n              type: 'string'\n            }\n          }\n        },\n        publicId: {\n          type: 'string'\n        },\n        role: {\n          type: 'integer'\n        },\n        roleLabel: {\n          type: 'string'\n        }\n      }\n    },\n    table3: {\n      type: 'object',\n      properties: {\n        name: {\n          type: 'string'\n        },\n        publicId: {\n          type: 'string'\n        }\n      }\n    },\n    project: {\n      type: 'object',\n      properties: {\n        name: {\n          type: 'string'\n        },\n        publicId: {\n          type: 'string'\n        }\n      }\n    },\n    tag: {\n      type: 'object',\n      properties: {\n        documentTableId: {\n          type: 'string'\n        },\n        projectPublicId: {\n          type: 'string'\n        },\n        publicId: {\n          type: 'string'\n        },\n        referencePublicId: {\n          type: 'string'\n        },\n        value: {\n          type: 'object'\n        }\n      }\n    },\n    document: {\n      type: 'object',\n      properties: {\n        name: {\n          type: 'string'\n        },\n        publicId: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['resource', 'resource_id'],
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.permissions.retrieve(body)));
};

export default { metadata, tool, handler };
