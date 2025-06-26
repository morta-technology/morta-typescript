// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'user.tags',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/user/{user_id}/tags',
  operationId: 'UserBulkAddTag',
};

export const tool: Tool = {
  name: 'bulk_apply_user_tags',
  description: 'Apply multiple tags to a specific user',
  inputSchema: {
    type: 'object',
    properties: {
      user_id: {
        type: 'string',
      },
      projectId: {
        type: 'string',
      },
      tableId: {
        type: 'string',
      },
      tagReferenceIds: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { user_id, ...body } = args as any;
  return asTextContentResult(await client.user.tags.bulkApply(user_id, body));
};

export default { metadata, tool, handler };
