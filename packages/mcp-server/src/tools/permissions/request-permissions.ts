// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'permissions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/permissions/request/{hub_id}/{type}/{id}',
  operationId: 'RequestResourcePermissions',
};

export const tool: Tool = {
  name: 'request_permissions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRequest permissions for a specific resource (such as a table, table view, or process).\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      hub_id: {
        type: 'string',
      },
      type: {
        type: 'string',
        enum: ['project', 'process', 'table', 'view'],
      },
      id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['hub_id', 'type', 'id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.permissions.request(id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
