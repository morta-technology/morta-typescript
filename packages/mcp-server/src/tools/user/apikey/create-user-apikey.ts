// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'user.apikey',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/user/apikey',
  operationId: 'CreateApiKey',
};

export const tool: Tool = {
  name: 'create_user_apikey',
  description: 'Create an API key for the currently logged in user',
  inputSchema: {
    type: 'object',
    properties: {
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
  const body = args as any;
  return asTextContentResult(await client.user.apikey.create(body));
};

export default { metadata, tool, handler };
