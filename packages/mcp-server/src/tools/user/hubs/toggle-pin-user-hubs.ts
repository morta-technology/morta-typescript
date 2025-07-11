// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'morta-mcp/filtering';
import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'user.hubs',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/user/hubs/{hub_id}/pin',
  operationId: 'ChangeUserPin',
};

export const tool: Tool = {
  name: 'toggle_pin_user_hubs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nChange whether the hub is pinned for the currently logged in user\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          contributors: {\n            type: 'integer',\n            description: 'Number of contributors to the hub'\n          },\n          name: {\n            type: 'string',\n            description: 'Name of the hub'\n          },\n          primaryColour: {\n            type: 'string',\n            description: 'Primary colour of the hub'\n          },\n          publicId: {\n            type: 'string',\n            description: 'Public ID of the hub'\n          },\n          views: {\n            type: 'integer',\n            description: 'Number of views of the hub'\n          }\n        },\n        required: []\n      }\n    },\n    metadata: {\n      type: 'object',\n      description: 'Additional metadata'\n    }\n  },\n  required: []\n}\n```",
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
  return asTextContentResult(await maybeFilter(args, await client.user.hubs.togglePin(hub_id)));
};

export default { metadata, tool, handler };
