// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table.views.columns',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/table/views/{view_id}/column/{column_id}/ai-formula-helper',
  operationId: 'GetTableViewColumnAiFormulaHelper',
};

export const tool: Tool = {
  name: 'ai_formula_helper_views_table_columns',
  description: 'Get AI formula helper for a specific column in a table view.',
  inputSchema: {
    type: 'object',
    properties: {
      view_id: {
        type: 'string',
      },
      column_id: {
        type: 'string',
      },
      text: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { column_id, ...body } = args as any;
  return asTextContentResult(await client.table.views.columns.aiFormulaHelper(column_id, body));
};

export default { metadata, tool, handler };
