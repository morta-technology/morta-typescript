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
  httpPath: '/v1/hub/{hub_id}/variables',
  operationId: 'GetHubVariables',
};

export const tool: Tool = {
  name: 'get_variables_hub',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve all variables associated with a specified hub\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          cells: {\n            type: 'array',\n            items: {\n              type: 'object',\n              properties: {\n                id: {\n                  type: 'string'\n                },\n                column: {\n                  type: 'object',\n                  properties: {\n                    name: {\n                      type: 'string'\n                    },\n                    publicId: {\n                      type: 'string'\n                    }\n                  }\n                },\n                value: {\n                  type: 'string'\n                }\n              }\n            }\n          },\n          name: {\n            type: 'string'\n          },\n          publicId: {\n            type: 'string'\n          }\n        }\n      }\n    },\n    metadata: {\n      type: 'object'\n    }\n  }\n}\n```",
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
  const { hub_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.hub.getVariables(hub_id)));
};

export default { metadata, tool, handler };
