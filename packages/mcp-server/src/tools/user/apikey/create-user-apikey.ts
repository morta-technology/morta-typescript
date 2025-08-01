// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'morta-mcp/filtering';
import { Metadata, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'user.apikey',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/user/apikey',
  operationId: 'CreateApiKey',
};

export const tool: Tool = {
  name: 'create_user_apikey',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate an API key for the currently logged in user\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/api_key'\n    },\n    metadata: {\n      type: 'object'\n    }\n  },\n  $defs: {\n    api_key: {\n      type: 'object',\n      properties: {\n        accessLevel: {\n          type: 'integer'\n        },\n        documentRestrictions: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        hash: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        prefix: {\n          type: 'string'\n        },\n        projectRestrictions: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        publicId: {\n          type: 'string'\n        },\n        tableRestrictions: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      accessLevel: {
        type: 'string',
        enum: [0, 1],
      },
      documentRestrictions: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      name: {
        type: 'string',
      },
      projectRestrictions: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      tableRestrictions: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['accessLevel'],
  },
  annotations: {},
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.user.apikey.create(body)));
};

export default { metadata, tool, handler };
