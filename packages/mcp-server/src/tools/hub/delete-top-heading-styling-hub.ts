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
  httpPath: '/v1/hub/{hub_id}/delete_top_style',
  operationId: 'DeleteTopHubHeadingStyling',
};

export const tool: Tool = {
  name: 'delete_top_heading_styling_hub',
  description: 'Delete the top heading styling for a specific hub',
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
  return asTextContentResult(await client.hub.deleteTopHeadingStyling(hub_id));
};

export default { metadata, tool, handler };
