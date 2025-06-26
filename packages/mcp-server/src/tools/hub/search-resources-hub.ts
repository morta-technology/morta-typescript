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
  httpPath: '/v1/hub/{hub_id}/search-resources',
  operationId: 'SearchHub',
};

export const tool: Tool = {
  name: 'search_resources_hub',
  description: 'Perform a search operation within a specific hub, identified by its UUID',
  inputSchema: {
    type: 'object',
    properties: {
      hub_id: {
        type: 'string',
      },
      search: {
        type: 'string',
        description: 'Search query string',
      },
      process_public_id: {
        type: 'string',
        description: 'Optional UUID of a document to restrict the search within a specific document',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { hub_id, ...body } = args as any;
  return asTextContentResult(await client.hub.searchResources(hub_id, body));
};

export default { metadata, tool, handler };
