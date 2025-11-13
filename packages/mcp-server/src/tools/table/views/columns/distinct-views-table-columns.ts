// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'morta-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table.views.columns',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/table/views/{view_id}/column/{column_id}/distinct',
  operationId: 'GetTableViewDistinctValues',
};

export const tool: Tool = {
  name: 'distinct_views_table_columns',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve the unique/distinct values for a specific column in a table view.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/column_distinct_response',\n  $defs: {\n    column_distinct_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        metadata: {\n          type: 'object',\n          additionalProperties: true\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      view_id: {
        type: 'string',
      },
      column_id: {
        type: 'string',
      },
      filter: {
        type: 'string',
        description: 'Filters to apply to the data retrieval.',
      },
      group_columns: {
        type: 'array',
        description: 'Optional columns to group the distinct values.',
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
    required: ['view_id', 'column_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { column_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.table.views.columns.distinct(column_id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
