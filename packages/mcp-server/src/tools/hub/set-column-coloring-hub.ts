// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'hub',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/hub/{hub_id}/set-column-coloring',
  operationId: 'SetColumnColoring',
};

export const tool: Tool = {
  name: 'set_column_coloring_hub',
  description: 'Set column coloring for a hub',
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
  const response = await client.hub.setColumnColoring(hub_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
