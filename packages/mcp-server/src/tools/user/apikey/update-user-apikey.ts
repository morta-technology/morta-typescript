// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'user.apikey',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/user/apikey/{api_key_id}',
  operationId: 'UpdateApiKey',
};

export const tool: Tool = {
  name: 'update_user_apikey',
  description: 'Update an API key for the currently logged in user',
  inputSchema: {
    type: 'object',
    properties: {
      api_key_id: {
        type: 'string',
      },
      accessLevel: {
        type: 'string',
        enum: [0, 1],
      },
      documentRestrictions: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      name: {
        type: 'string',
      },
      projectRestrictions: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      tableRestrictions: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { api_key_id, ...body } = args as any;
  return asTextContentResult(await client.user.apikey.update(api_key_id, body));
};

export default { metadata, tool, handler };
