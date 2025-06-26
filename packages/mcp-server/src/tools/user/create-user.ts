// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'user',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/user',
  operationId: 'CreateUser',
};

export const tool: Tool = {
  name: 'create_user',
  description: 'Create a new user',
  inputSchema: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      password: {
        type: 'string',
      },
      optOutAiEmail: {
        type: 'boolean',
      },
      optOutDuplicationEmail: {
        type: 'boolean',
      },
      optOutHubEmail: {
        type: 'boolean',
      },
      optOutSyncEmail: {
        type: 'boolean',
      },
      optOutWelcomeEmail: {
        type: 'boolean',
      },
      projectId: {
        type: 'string',
      },
      template: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.user.create(body));
};

export default { metadata, tool, handler };
