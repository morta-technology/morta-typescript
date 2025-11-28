// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'morta-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table.row',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/table/{table_id}/row',
  operationId: 'GetTableRows',
};

export const tool: Tool = {
  name: 'get_rows_table_row',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve rows from a table based on provided query parameters.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/row_get_rows_response',\n  $defs: {\n    row_get_rows_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              publicId: {\n                type: 'string'\n              },\n              rowData: {\n                type: 'object',\n                additionalProperties: true\n              },\n              sortOrder: {\n                type: 'number'\n              }\n            }\n          }\n        },\n        metadata: {\n          type: 'object',\n          properties: {\n            next_page_token: {\n              type: 'string'\n            },\n            page: {\n              type: 'integer'\n            },\n            size: {\n              type: 'integer'\n            },\n            total: {\n              type: 'integer'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      table_id: {
        type: 'string',
      },
      columns: {
        type: 'array',
        description: 'Specific columns to include in the response',
        items: {
          type: 'string',
        },
      },
      distinct_columns: {
        type: 'array',
        description: 'Columns to apply distinct filtering',
        items: {
          type: 'string',
        },
      },
      filter: {
        type: 'string',
        description: 'Filter criteria for the table rows',
      },
      last_created_at: {
        type: 'string',
        description: 'Filter for rows created after this date',
        format: 'date-time',
      },
      last_updated_at: {
        type: 'string',
        description: 'Filter for rows updated after this date',
        format: 'date-time',
      },
      next_page_token: {
        type: 'string',
        description: 'Token for fetching the next page of results',
      },
      page: {
        type: 'integer',
        description: 'Page number for pagination',
      },
      size: {
        type: 'integer',
        description: 'Number of items per page for pagination',
      },
      sort: {
        type: 'string',
        description: 'Sorting criteria for the table rows',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['table_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { table_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.table.row.getRows(table_id, body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
