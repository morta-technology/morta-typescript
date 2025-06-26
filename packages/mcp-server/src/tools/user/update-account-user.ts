// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'user',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/user/account',
  operationId: 'UpdateUserAccount',
};

export const tool: Tool = {
  name: 'update_account_user',
  description: 'Update the account details for the currently logged in user',
  inputSchema: {
    type: 'object',
    properties: {
      allowSupportAccess: {
        type: 'boolean',
      },
      oldPassword: {
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
      password: {
        type: 'string',
      },
      passwordConfirm: {
        type: 'string',
      },
      twoFactorCode: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.user.updateAccount(body));
};

export default { metadata, tool, handler };
