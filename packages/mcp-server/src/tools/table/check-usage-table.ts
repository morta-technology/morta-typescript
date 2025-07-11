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
  httpPath: '/v1/table/{table_id}/used',
  operationId: 'GetWhereTableUsed',
};

export const tool: Tool = {
  name: 'check_usage_table',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCheck and return a list of documents, table joins, and selects where the specified table is used.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          link: {\n            type: 'string',\n            description: 'Direct link to the document, join or select'\n          },\n          name: {\n            type: 'string',\n            description: 'Name of the document, join or select where the table is used'\n          },\n          type: {\n            type: 'string',\n            description: 'Type of usage (process, sourceJoin, targetJoin, sourceSelect, etc.)'\n          }\n        },\n        required: []\n      }\n    },\n    metadata: {\n      type: 'object'\n    }\n  },\n  required: []\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      table_id: {
        type: 'string',
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
  return asTextContentResult(await maybeFilter(args, await client.table.checkUsage(table_id)));
};

export default { metadata, tool, handler };
