// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
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
  description: 'Retrieve rows from a table based on provided query parameters.',
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
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { table_id, ...body } = args as any;
  return asTextContentResult(await client.table.row.getRows(table_id, body));
};

export default { metadata, tool, handler };
