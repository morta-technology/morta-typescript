// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table.views',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/table/views/{view_id}/csv',
  operationId: 'DownloadTableViewCSV',
};

export const tool: Tool = {
  name: 'download_csv_table_views',
  description: 'Download the data of a specific table view in CSV format.',
  inputSchema: {
    type: 'object',
    properties: {
      view_id: {
        type: 'string',
      },
      filter: {
        type: 'string',
        description: 'Filters to apply to the CSV data.',
      },
      process_id: {
        type: 'string',
        description: 'Optional UUID of a process to filter the data.',
      },
      sort: {
        type: 'string',
        description: 'Sorting parameters for the CSV data.',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { view_id, ...body } = args as any;
  return asTextContentResult(await client.table.views.downloadCsv(view_id, body));
};

export default { metadata, tool, handler };
