// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'hub',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/hub/{hub_id}/change-user-role/{firebase_id}',
  operationId: 'ChangeUserRoleOnHub',
};

export const tool: Tool = {
  name: 'change_user_role_hub',
  description:
    "Change the role of a user in a specific hub, identified by the hub's UUID and user's Firebase ID",
  inputSchema: {
    type: 'object',
    properties: {
      hub_id: {
        type: 'string',
      },
      firebase_id: {
        type: 'string',
      },
      role: {
        type: 'string',
        enum: ['owner', 'admin', 'member'],
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { firebase_id, ...body } = args as any;
  return asTextContentResult(await client.hub.changeUserRole(firebase_id, body));
};

export default { metadata, tool, handler };
