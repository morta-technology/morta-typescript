// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
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
  description: 'Retrieve the actual data for a specific table view.',
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
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { view_id, ...body } = args as any;
  return asTextContentResult(await client.table.views.rows.list(view_id, body));
};

export default { metadata, tool, handler };
