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
  httpPath: '/v1/hub/{hub_id}/deleted-documents',
  operationId: 'GetHubDeletedDocuments',
};

export const tool: Tool = {
  name: 'get_deleted_documents_hub',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet all deleted documents associated with a specific hub, identified by its UUID\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/simple_document'\n      }\n    },\n    metadata: {\n      type: 'object'\n    }\n  },\n  required: [],\n  $defs: {\n    simple_document: {\n      type: 'object',\n      properties: {\n        allowComments: {\n          type: 'boolean'\n        },\n        children: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              name: {\n                type: 'string'\n              },\n              publicId: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        createdAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        deletedAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        description: {\n          type: 'object'\n        },\n        expandByDefault: {\n          type: 'boolean'\n        },\n        isDeleted: {\n          type: 'boolean'\n        },\n        isTemplate: {\n          type: 'boolean'\n        },\n        lockedTemplate: {\n          type: 'boolean'\n        },\n        logo: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        projectName: {\n          type: 'string'\n        },\n        projectPublicId: {\n          type: 'string'\n        },\n        publicId: {\n          type: 'string'\n        },\n        type: {\n          type: 'string'\n        },\n        updatedAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        variables: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        variableValues: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
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
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { hub_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.hub.getDeletedDocuments(hub_id)));
};

export default { metadata, tool, handler };
