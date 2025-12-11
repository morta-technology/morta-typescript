// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'morta-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'user.tags',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/user/{user_id}/tags',
  operationId: 'UserAddTag',
};

export const tool: Tool = {
  name: 'add_user_tags',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAdd a tag to a specific user\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/tag_add_response',\n  $defs: {\n    tag_add_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/tag'\n        },\n        metadata: {\n          type: 'object',\n          description: 'Additional metadata',\n          additionalProperties: true\n        }\n      }\n    },\n    tag: {\n      type: 'object',\n      properties: {\n        documentTableId: {\n          type: 'string'\n        },\n        projectPublicId: {\n          type: 'string'\n        },\n        publicId: {\n          type: 'string'\n        },\n        referencePublicId: {\n          type: 'string'\n        },\n        value: {\n          type: 'object',\n          additionalProperties: true\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      user_id: {
        type: 'string',
      },
      tagReferenceId: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['user_id', 'tagReferenceId'],
  },
  annotations: {},
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { user_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.user.tags.add(user_id, body)));
  } catch (error) {
    if (error instanceof Morta.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
