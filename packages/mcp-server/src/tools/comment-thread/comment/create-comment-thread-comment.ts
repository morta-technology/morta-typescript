// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'morta-mcp/filtering';
import { Metadata, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'comment_thread.comment',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/comment_thread/{comment_thread_id}/comment',
  operationId: 'CreateComment',
};

export const tool: Tool = {
  name: 'create_comment_thread_comment',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new comment within a specific comment thread\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/comment_model'\n    },\n    metadata: {\n      type: 'object',\n      properties: {\n        change: {\n          type: 'object',\n          description: 'Changes made in this operation'\n        },\n        event: {\n          type: 'string',\n          description: 'Event type for the operation'\n        },\n        resourceId: {\n          type: 'string',\n          description: 'UUID of the newly created comment'\n        }\n      }\n    }\n  },\n  $defs: {\n    comment_model: {\n      type: 'object',\n      properties: {\n        commentText: {\n          type: 'string'\n        },\n        createdAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        deletedAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        isOwner: {\n          type: 'object'\n        },\n        publicId: {\n          type: 'string'\n        },\n        updatedAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        user: {\n          $ref: '#/$defs/summary_user'\n        }\n      }\n    },\n    summary_user: {\n      type: 'object',\n      properties: {\n        email: {\n          type: 'string'\n        },\n        firebaseUserId: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        profilePicture: {\n          type: 'string'\n        },\n        publicId: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      comment_thread_id: {
        type: 'string',
      },
      commentText: {
        type: 'string',
      },
      context: {
        $ref: '#/$defs/base_request_context',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['comment_thread_id', 'commentText'],
    $defs: {
      base_request_context: {
        type: 'object',
        properties: {
          processPublicId: {
            type: 'string',
          },
          processResponsePublicId: {
            type: 'string',
          },
          processSectionPublicId: {
            type: 'string',
          },
          projectId: {
            type: 'string',
          },
        },
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { comment_thread_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.commentThread.comment.create(comment_thread_id, body)),
  );
};

export default { metadata, tool, handler };
