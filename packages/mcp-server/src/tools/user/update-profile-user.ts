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
  httpPath: '/v1/user',
  operationId: 'UpdateCurrentUser',
};

export const tool: Tool = {
  name: 'update_profile_user',
  description: 'Update the profile of the currently logged in user',
  inputSchema: {
    type: 'object',
    properties: {
      allowSupportAccess: {
        type: 'boolean',
      },
      bio: {
        type: 'string',
      },
      linkedin: {
        type: 'string',
      },
      location: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      organisation: {
        type: 'string',
      },
      profilePicture: {
        type: 'string',
      },
      twitter: {
        type: 'string',
      },
      university: {
        type: 'string',
      },
      universityDegree: {
        type: 'string',
      },
      website: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.user.updateProfile(body));
};

export default { metadata, tool, handler };
