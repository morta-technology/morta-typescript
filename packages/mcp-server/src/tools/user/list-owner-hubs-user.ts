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
  httpPath: '/v1/user/owner-hubs',
  operationId: 'GetUserOwnerHubs',
};

export const tool: Tool = {
  name: 'list_owner_hubs_user',
  description: 'Get all hubs where the user is the owner or an admin',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.user.listOwnerHubs());
};

export default { metadata, tool, handler };
