// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'hub.secrets',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/hub/{hub_id}/secrets/{secret_id}',
  operationId: 'UpdateHubSecret',
};

export const tool: Tool = {
  name: 'update_hub_secrets',
  description: 'Update a specific secret in a hub',
  inputSchema: {
    type: 'object',
    properties: {
      hub_id: {
        type: 'string',
      },
      secret_id: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      value: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { secret_id, ...body } = args as any;
  return asTextContentResult(await client.hub.secrets.update(secret_id, body));
};

export default { metadata, tool, handler };
