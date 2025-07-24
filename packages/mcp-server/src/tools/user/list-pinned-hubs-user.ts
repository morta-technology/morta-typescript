// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'morta-mcp/filtering';
import { Metadata, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'user',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/user/{firebase_id}/pinned-hubs',
  operationId: 'GetUserPinnedHubs',
};

export const tool: Tool = {
  name: 'list_pinned_hubs_user',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the hubs pinned by a user identified by their Firebase ID\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          contributors: {\n            type: 'integer',\n            description: 'Number of contributors to the hub'\n          },\n          name: {\n            type: 'string',\n            description: 'Name of the hub'\n          },\n          primaryColour: {\n            type: 'string',\n            description: 'Primary colour of the hub'\n          },\n          publicId: {\n            type: 'string',\n            description: 'Public ID of the hub'\n          },\n          views: {\n            type: 'integer',\n            description: 'Number of views of the hub'\n          }\n        }\n      }\n    },\n    metadata: {\n      type: 'object',\n      description: 'Metadata object'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      firebase_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['firebase_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { firebase_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.user.listPinnedHubs(firebase_id)));
};

export default { metadata, tool, handler };
