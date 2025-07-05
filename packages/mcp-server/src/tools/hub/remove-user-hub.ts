// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'hub',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/hub/{hub_id}/remove-user/{firebase_id}',
  operationId: 'RemoveUserFromHub',
};

export const tool: Tool = {
  name: 'remove_user_hub',
  description: "Remove a user from a specific hub, identified by the hub's UUID and user's Firebase ID",
  inputSchema: {
    type: 'object',
    properties: {
      hub_id: {
        type: 'string',
      },
      firebase_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { firebase_id, ...body } = args as any;
  return asTextContentResult(await client.hub.removeUser(firebase_id, body));
};

export default { metadata, tool, handler };
