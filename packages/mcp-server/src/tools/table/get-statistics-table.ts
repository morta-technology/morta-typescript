// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'morta-mcp/filtering';
import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/table/{table_id}/stats',
  operationId: 'GetTableColumnStats',
};

export const tool: Tool = {
  name: 'get_statistics_table',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve statistics for table columns based on specified parameters.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/table_column_with_aggregation'\n      }\n    },\n    metadata: {\n      type: 'object'\n    }\n  },\n  required: [],\n  $defs: {\n    table_column_with_aggregation: {\n      type: 'object',\n      properties: {\n        aggregation: {\n          type: 'object',\n          properties: {\n            name: {\n              type: 'string'\n            },\n            value: {\n              type: 'number'\n            }\n          },\n          required: []\n        },\n        name: {\n          type: 'string'\n        },\n        publicId: {\n          type: 'string'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      table_id: {
        type: 'string',
      },
      aggregation: {
        type: 'object',
        description: 'Aggregation functions to apply on columns',
      },
      filter: {
        type: 'string',
        description: 'Filter criteria for the columns',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { table_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.table.getStatistics(table_id, body)));
};

export default { metadata, tool, handler };
