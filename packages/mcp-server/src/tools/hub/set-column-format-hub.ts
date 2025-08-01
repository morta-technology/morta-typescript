// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'hub',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/hub/{hub_id}/set-column-format/{kind}',
  operationId: 'SetColumnDateFormat',
};

export const tool: Tool = {
  name: 'set_column_format_hub',
  description: 'Set column date formatting for a hub',
  inputSchema: {
    type: 'object',
    properties: {
      hub_id: {
        type: 'string',
      },
      kind: {
        type: 'string',
      },
    },
    required: ['hub_id', 'kind'],
  },
  annotations: {},
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { kind, ...body } = args as any;
  const response = await client.hub.setColumnFormat(kind, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
