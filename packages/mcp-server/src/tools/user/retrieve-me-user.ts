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
  httpPath: '/v1/user/me',
  operationId: 'GetMe',
};

export const tool: Tool = {
  name: 'retrieve_me_user',
  description: 'Get info on the current user',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.user.retrieveMe());
};

export default { metadata, tool, handler };
