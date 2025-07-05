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
  httpPath: '/v1/hub/{hub_id}/invite/{invite_id}',
  operationId: 'ResendInviteToUserForHub',
};

export const tool: Tool = {
  name: 'resend_hub_invite',
  description:
    'Resend an invitation to a user for a hub. This is applicable for both new users and existing users who have previously been invited. Requires owner or admin permissions.',
  inputSchema: {
    type: 'object',
    properties: {
      hub_id: {
        type: 'string',
      },
      invite_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { invite_id, ...body } = args as any;
  return asTextContentResult(await client.hub.invite.resend(invite_id, body));
};

export default { metadata, tool, handler };
