// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'user.tags',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/user/{user_id}/tags/{tag_id}',
  operationId: 'UserDeleteTag',
};

export const tool: Tool = {
  name: 'delete_user_tags',
  description: 'Delete a tag from a specific user',
  inputSchema: {
    type: 'object',
    properties: {
      user_id: {
        type: 'string',
      },
      tag_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { tag_id, ...body } = args as any;
  return asTextContentResult(await client.user.tags.delete(tag_id, body));
};

export default { metadata, tool, handler };
