// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'hub.invite',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/hub/{hub_id}/invite/{invite_id}',
  operationId: 'UpdateHubInvite',
};

export const tool: Tool = {
  name: 'update_hub_invite',
  description: 'Update an existing invite in a hub',
  inputSchema: {
    type: 'object',
    properties: {
      hub_id: {
        type: 'string',
      },
      invite_id: {
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
  const { invite_id, ...body } = args as any;
  return asTextContentResult(await client.hub.invite.update(invite_id, body));
};

export default { metadata, tool, handler };
