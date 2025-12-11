// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'morta-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'hub',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/hub/{hub_id}/search-resources',
  operationId: 'SearchHubResources',
};

export const tool: Tool = {
  name: 'search_resources_hub',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPerform a search operation within a specific hub, identified by its UUID\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/hub_search_resources_response',\n  $defs: {\n    hub_search_resources_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/answer'\n        },\n        metadata: {\n          type: 'object',\n          additionalProperties: true\n        }\n      }\n    },\n    answer: {\n      type: 'object',\n      properties: {\n        answer: {\n          type: 'string'\n        },\n        answerComment: {\n          type: 'string'\n        },\n        answerVote: {\n          type: 'boolean'\n        },\n        contextUrls: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        createdAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        question: {\n          type: 'string'\n        },\n        updatedAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        user: {\n          $ref: '#/$defs/user_hub'\n        }\n      }\n    },\n    user_hub: {\n      type: 'object',\n      properties: {\n        email: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      hub_id: {
        type: 'string',
      },
      search: {
        type: 'string',
        description: 'Search query string',
      },
      process_public_id: {
        type: 'string',
        description: 'Optional UUID of a document to restrict the search within a specific document',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['hub_id', 'search'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { hub_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.hub.searchResources(hub_id, body)));
  } catch (error) {
    if (error instanceof Morta.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
