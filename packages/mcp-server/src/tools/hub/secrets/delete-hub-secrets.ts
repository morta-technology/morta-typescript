// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'hub.secrets',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/hub/{hub_id}/secrets/{secret_id}',
  operationId: 'DeleteHubSecret',
};

export const tool: Tool = {
  name: 'delete_hub_secrets',
  description: 'Delete a specific secret from a hub',
  inputSchema: {
    type: 'object',
    properties: {
      hub_id: {
        type: 'string',
      },
      secret_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { secret_id, ...body } = args as any;
  return asTextContentResult(await client.hub.secrets.delete(secret_id, body));
};

export default { metadata, tool, handler };
