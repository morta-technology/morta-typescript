// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'user',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/user/{firebase_id}/pinned-hubs',
  operationId: 'GetUserPinnedHubs',
};

export const tool: Tool = {
  name: 'list_pinned_hubs_user',
  description: 'Get the hubs pinned by a user identified by their Firebase ID',
  inputSchema: {
    type: 'object',
    properties: {
      firebase_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { firebase_id, ...body } = args as any;
  return asTextContentResult(await client.user.listPinnedHubs(firebase_id));
};

export default { metadata, tool, handler };
