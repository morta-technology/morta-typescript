// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'comment_thread',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/comment_thread',
  operationId: 'CreateCommentThread',
};

export const tool: Tool = {
  name: 'create_comment_thread',
  description: 'Create a new comment thread',
  inputSchema: {
    type: 'object',
    properties: {
      commentText: {
        type: 'string',
      },
      referenceId: {
        type: 'string',
      },
      referenceType: {
        type: 'string',
      },
      context: {
        $ref: '#/$defs/base_request_context',
      },
      mainReferenceId: {
        type: 'string',
      },
    },
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
        required: [],
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.commentThread.create(body));
};

export default { metadata, tool, handler };
