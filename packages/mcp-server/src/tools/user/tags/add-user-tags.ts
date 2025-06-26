// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
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
  description: 'Add a tag to a specific user',
  inputSchema: {
    type: 'object',
    properties: {
      user_id: {
        type: 'string',
      },
      tagReferenceId: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { user_id, ...body } = args as any;
  return asTextContentResult(await client.user.tags.add(user_id, body));
};

export default { metadata, tool, handler };
