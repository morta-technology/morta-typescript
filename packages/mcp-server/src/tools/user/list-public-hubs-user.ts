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
  httpPath: '/v1/user/public-hubs',
  operationId: 'GetUserPublicHubs',
};

export const tool: Tool = {
  name: 'list_public_hubs_user',
  description: 'Get all public hubs where the user is a member',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.user.listPublicHubs());
};

export default { metadata, tool, handler };
