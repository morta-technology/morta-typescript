// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'user.apikey',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/user/apikey/{api_key_id}',
  operationId: 'DeleteApiKey',
};

export const tool: Tool = {
  name: 'delete_user_apikey',
  description: 'Delete an API key for the currently logged in user',
  inputSchema: {
    type: 'object',
    properties: {
      api_key_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { api_key_id, ...body } = args as any;
  return asTextContentResult(await client.user.apikey.delete(api_key_id));
};

export default { metadata, tool, handler };
