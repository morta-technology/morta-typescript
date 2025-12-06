// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'morta-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'user.apikey',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/user/apikey/{api_key_id}',
  operationId: 'DeleteApiKey',
};

export const tool: Tool = {
  name: 'delete_user_apikey',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete an API key for the currently logged in user\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/apikey_delete_response',\n  $defs: {\n    apikey_delete_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'string'\n        },\n        metadata: {\n          type: 'object',\n          description: 'Additional metadata',\n          additionalProperties: true\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      api_key_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['api_key_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { api_key_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.user.apikey.delete(api_key_id)));
  } catch (error) {
    if (error instanceof Morta.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
