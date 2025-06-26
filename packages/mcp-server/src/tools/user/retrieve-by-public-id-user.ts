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
  httpPath: '/v1/user/public/{public_id}',
  operationId: 'GetUserByPublicId',
};

export const tool: Tool = {
  name: 'retrieve_by_public_id_user',
  description: 'Get information on a specific user by their public ID',
  inputSchema: {
    type: 'object',
    properties: {
      public_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { public_id, ...body } = args as any;
  return asTextContentResult(await client.user.retrieveByPublicID(public_id));
};

export default { metadata, tool, handler };
