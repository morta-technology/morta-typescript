// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'hub',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/hub/{hub_id}',
  operationId: 'DeleteHub',
};

export const tool: Tool = {
  name: 'delete_hub',
  description: 'Delete a specific hub identified by its UUID',
  inputSchema: {
    type: 'object',
    properties: {
      hub_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { hub_id, ...body } = args as any;
  return asTextContentResult(await client.hub.delete(hub_id));
};

export default { metadata, tool, handler };
