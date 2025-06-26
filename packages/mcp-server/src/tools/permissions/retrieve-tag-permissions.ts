// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'permissions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/permissions/tag',
  operationId: 'GetTagByPublicId',
};

export const tool: Tool = {
  name: 'retrieve_tag_permissions',
  description: 'Retrieve a tag by its public ID.',
  inputSchema: {
    type: 'object',
    properties: {
      tag_id: {
        type: 'string',
        description: 'Public ID of the tag to retrieve.',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.permissions.retrieveTag(body));
};

export default { metadata, tool, handler };
