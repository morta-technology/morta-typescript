// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'morta-mcp/filtering';
import { Metadata, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table.views.rows',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/table/views/{view_id}/rows',
  operationId: 'GetTableViewRows',
};

export const tool: Tool = {
  name: 'list_views_table_rows',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve the actual data for a specific table view.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          publicId: {\n            type: 'string'\n          },\n          rowData: {\n            type: 'object'\n          },\n          sortOrder: {\n            type: 'number'\n          }\n        }\n      }\n    },\n    metadata: {\n      type: 'object',\n      properties: {\n        next_page_token: {\n          type: 'string'\n        },\n        size: {\n          type: 'integer'\n        },\n        total: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      view_id: {
        type: 'string',
      },
      alphabeticalColumnSort: {
        type: 'boolean',
        description:
          'If true, columns in row data are sorted alphabetically otherwise columns in row data follows their order in the view.',
      },
      filter: {
        type: 'string',
        description:
          "URL encoded JSON string of filter criteria (e.g. 'filter=%7B%22columnName%22%3A%22Price%22%2C%22value%22%3A%22100%22%2C%22filterType%22%3A%22gt%22%7D')",
      },
      page: {
        type: 'integer',
        description: 'Page number for pagination.',
      },
      size: {
        type: 'integer',
        description: 'Number of items per page for pagination.',
      },
      sort: {
        type: 'string',
        description:
          'Sort the results by a field, this parameter takes the form `ColumnName:SortDirection`, for example to sort by price ascending `sort=Price:asc`. Sort direction can be either `asc` or `desc`. You can pass multiple sort parameters to add secondary and tertiary sorts etc., the sort will be applied in the order of the query string.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['view_id'],
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { view_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.table.views.rows.list(view_id, body)));
};

export default { metadata, tool, handler };
