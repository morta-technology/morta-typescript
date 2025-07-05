// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'hub',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/hub/{hub_id}',
  operationId: 'GetHub',
};

export const tool: Tool = {
  name: 'retrieve_hub',
  description: 'Retrieve detailed information about a specific hub identified by its UUID',
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
  return asTextContentResult(await client.hub.retrieve(hub_id));
};

export default { metadata, tool, handler };
