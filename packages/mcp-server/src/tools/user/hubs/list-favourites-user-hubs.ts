// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'morta-mcp/filtering';
import { Metadata, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'user.hubs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/user/hubs/favourites',
  operationId: 'GetFavouriteHubs',
};

export const tool: Tool = {
  name: 'list_favourites_user_hubs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet all favourite hubs the currently logged in user is part of\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          isDeleted: {\n            type: 'boolean',\n            description: 'Indicates if the hub is deleted'\n          },\n          name: {\n            type: 'string',\n            description: 'Name of the hub'\n          },\n          projectRole: {\n            type: 'string',\n            description: 'User\\'s role in the hub'\n          },\n          publicId: {\n            type: 'string',\n            description: 'Public ID of the hub'\n          }\n        }\n      }\n    },\n    metadata: {\n      type: 'object',\n      description: 'Additional metadata',\n      additionalProperties: true\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.user.hubs.listFavourites()));
};

export default { metadata, tool, handler };
