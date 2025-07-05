// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'hub.invite',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/hub/{hub_id}/invite',
  operationId: 'InviteUserToHub',
};

export const tool: Tool = {
  name: 'create_hub_invite',
  description:
    'Invite a single user to join a hub by email. If the user already exists, they are added directly; otherwise, an invite is sent. Requires owner or admin permissions.',
  inputSchema: {
    type: 'object',
    properties: {
      hub_id: {
        type: 'string',
      },
      email: {
        type: 'string',
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
  return asTextContentResult(await client.hub.invite.create(hub_id, body));
};

export default { metadata, tool, handler };
