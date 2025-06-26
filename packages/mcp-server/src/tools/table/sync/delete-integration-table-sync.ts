// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table.sync',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/table/{table_id}/sync/{integration_name}',
  operationId: 'DeleteIntegrationFromTable',
};

export const tool: Tool = {
  name: 'delete_integration_table_sync',
  description: 'Remove a specific integration from a table.',
  inputSchema: {
    type: 'object',
    properties: {
      table_id: {
        type: 'string',
      },
      integration_name: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { integration_name, ...body } = args as any;
  return asTextContentResult(await client.table.sync.deleteIntegration(integration_name, body));
};

export default { metadata, tool, handler };
