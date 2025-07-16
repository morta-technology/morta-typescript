// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'morta-mcp/filtering';
import { Metadata, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'user.apikey',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/user/apikey/{api_key_id}',
  operationId: 'UpdateApiKey',
};

export const tool: Tool = {
  name: 'update_user_apikey',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate an API key for the currently logged in user\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    apiKey: {\n      type: 'string',\n      description: 'Updated API key details'\n    }\n  },\n  required: []\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      api_key_id: {
        type: 'string',
      },
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
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { api_key_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.user.apikey.update(api_key_id, body)));
};

export default { metadata, tool, handler };
