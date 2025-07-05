// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'hub.invite',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/hub/{hub_id}/invite/{invite_id}',
  operationId: 'DeleteHubInvite',
};

export const tool: Tool = {
  name: 'delete_hub_invite',
  description: 'Delete an invite to a hub',
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
  return asTextContentResult(await client.hub.invite.delete(invite_id, body));
};

export default { metadata, tool, handler };
