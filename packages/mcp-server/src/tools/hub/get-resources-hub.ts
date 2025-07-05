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
  httpPath: '/v1/hub/{hub_id}/resources',
  operationId: 'GetHubResources',
};

export const tool: Tool = {
  name: 'get_resources_hub',
  description: 'Retrieve resources associated with a specific hub identified by its UUID',
  inputSchema: {
    type: 'object',
    properties: {
      hub_id: {
        type: 'string',
      },
      adminView: {
        type: 'boolean',
      },
      excludeProcesses: {
        type: 'boolean',
      },
      excludeTables: {
        type: 'boolean',
      },
      onlyAdmin: {
        type: 'boolean',
      },
      onlyDeleted: {
        type: 'boolean',
      },
      projectPermissions: {
        type: 'boolean',
      },
      typeId: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { hub_id, ...body } = args as any;
  return asTextContentResult(await client.hub.getResources(hub_id, body));
};

export default { metadata, tool, handler };
