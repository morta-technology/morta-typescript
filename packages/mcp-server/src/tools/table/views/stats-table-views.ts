// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'morta-mcp/filtering';
import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table.views',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/table/views/{view_id}/stats',
  operationId: 'GetTableViewStats',
};

export const tool: Tool = {
  name: 'stats_table_views',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve statistical data for columns in a specific table view.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/table_column_with_aggregation'\n      }\n    },\n    metadata: {\n      type: 'object'\n    }\n  },\n  required: [],\n  $defs: {\n    table_column_with_aggregation: {\n      type: 'object',\n      properties: {\n        aggregation: {\n          type: 'object',\n          properties: {\n            name: {\n              type: 'string'\n            },\n            value: {\n              type: 'number'\n            }\n          },\n          required: []\n        },\n        name: {\n          type: 'string'\n        },\n        publicId: {\n          type: 'string'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      view_id: {
        type: 'string',
      },
      filter: {
        type: 'string',
        description: 'Filters to apply to the statistical data retrieval.',
      },
      process_id: {
        type: 'string',
        description: 'Optional UUID of a process to filter the data.',
      },
      'sum, avg, max, min, count': {
        type: 'array',
        description: 'Specify columns to perform sum, average, max, min, or count operations.',
        items: {
          type: 'string',
        },
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
  const { view_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.table.views.stats(view_id, body)));
};

export default { metadata, tool, handler };
