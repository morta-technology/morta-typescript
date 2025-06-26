// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/table/{table_id}/csv',
  operationId: 'DownloadTableAsCSV',
};

export const tool: Tool = {
  name: 'download_csv_table',
  description: 'Download the data of a specified table as a CSV file.',
  inputSchema: {
    type: 'object',
    properties: {
      table_id: {
        type: 'string',
      },
      filter: {
        type: 'string',
        description: 'Filter criteria for the table rows',
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
  return asTextContentResult(await client.table.downloadCsv(table_id, body));
};

export default { metadata, tool, handler };
