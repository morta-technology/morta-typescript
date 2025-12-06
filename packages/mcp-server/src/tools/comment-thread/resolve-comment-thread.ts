// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'morta-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'comment_thread',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/comment_thread/{comment_thread_id}/resolve',
  operationId: 'ResolveCommentThread',
};

export const tool: Tool = {
  name: 'resolve_comment_thread',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nResolve a comment thread\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/comment_thread_resolve_response',\n  $defs: {\n    comment_thread_resolve_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/comment_thread'\n        },\n        metadata: {\n          type: 'object',\n          properties: {\n            change: {\n              type: 'object',\n              description: 'Changes made to the comment thread',\n              additionalProperties: true\n            },\n            event: {\n              type: 'string',\n              description: 'Event type for the operation'\n            },\n            resourceId: {\n              type: 'string',\n              description: 'UUID of the resolved comment thread'\n            }\n          }\n        }\n      }\n    },\n    comment_thread: {\n      type: 'object',\n      properties: {\n        comments: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/comment_model'\n          }\n        },\n        createdAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        deletedAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        isCommentInitiator: {\n          type: 'object',\n          additionalProperties: true\n        },\n        publicId: {\n          type: 'string'\n        },\n        resolvedAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        resolver: {\n          type: 'object',\n          properties: {\n            name: {\n              type: 'string'\n            }\n          }\n        },\n        updatedAt: {\n          type: 'string',\n          format: 'date-time'\n        }\n      }\n    },\n    comment_model: {\n      type: 'object',\n      properties: {\n        commentText: {\n          type: 'string'\n        },\n        createdAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        deletedAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        isOwner: {\n          type: 'object',\n          additionalProperties: true\n        },\n        publicId: {\n          type: 'string'\n        },\n        updatedAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        user: {\n          $ref: '#/$defs/summary_user'\n        }\n      }\n    },\n    summary_user: {\n      type: 'object',\n      properties: {\n        email: {\n          type: 'string'\n        },\n        firebaseUserId: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        profilePicture: {\n          type: 'string'\n        },\n        publicId: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      comment_thread_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['comment_thread_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { comment_thread_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.commentThread.resolve(comment_thread_id)),
    );
  } catch (error) {
    if (error instanceof Morta.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
