// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'hub',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/hub/{hub_id}/invite-multiple',
  operationId: 'InviteMultipleUsersToHub',
};

export const tool: Tool = {
  name: 'invite_multiple_users_hub',
  description:
    'Invite multiple users to join a hub, by email. If users already exist, they are added directly, otherwise, an invite is sent. Requires owner or admin permissions.',
  inputSchema: {
    type: 'object',
    properties: {
      hub_id: {
        type: 'string',
      },
      emails: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      projectRole: {
        type: 'string',
        enum: ['member', 'admin', 'owner'],
      },
      tags: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { hub_id, ...body } = args as any;
  return asTextContentResult(await client.hub.inviteMultipleUsers(hub_id, body));
};

export default { metadata, tool, handler };
