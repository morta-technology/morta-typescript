// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'user.hubs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/user/hubs',
  operationId: 'GetUserHubs',
};

export const tool: Tool = {
  name: 'list_user_hubs',
  description: 'Get all hubs the currently logged in user is part of',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.user.hubs.list());
};

export default { metadata, tool, handler };
