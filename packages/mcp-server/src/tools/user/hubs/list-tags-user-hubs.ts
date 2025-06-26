// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'user.hubs',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/user/hubs/{hub_id}/tags',
  operationId: 'GetUserHubTags',
};

export const tool: Tool = {
  name: 'list_tags_user_hubs',
  description: 'Get all tags for current user in a hub',
  inputSchema: {
    type: 'object',
    properties: {
      hub_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { hub_id, ...body } = args as any;
  return asTextContentResult(await client.user.hubs.listTags(hub_id));
};

export default { metadata, tool, handler };
