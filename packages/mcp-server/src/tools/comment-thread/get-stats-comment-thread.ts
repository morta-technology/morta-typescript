// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'morta-mcp/filtering';
import { Metadata, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'comment_thread',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/comment_thread/stats',
  operationId: 'GetCommentThreadStatsByReference',
};

export const tool: Tool = {
  name: 'get_stats_comment_thread',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve statistics for comment threads based on reference type and main reference ID\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          openCommentThreads: {\n            type: 'integer'\n          },\n          resolvedCommentThreads: {\n            type: 'integer'\n          },\n          referenceId: {\n            type: 'string'\n          }\n        },\n        required: [          'openCommentThreads',\n          'resolvedCommentThreads'\n        ]\n      }\n    },\n    metadata: {\n      type: 'object'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      reference_type: {
        type: 'string',
        description:
          'Type of the reference (process_section, table, or table_view) for which to gather statistics',
        enum: ['process_section', 'table', 'table_view'],
      },
      main_reference_id: {
        type: 'string',
        description: 'UUID of the main reference for which to gather statistics',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['reference_type'],
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.commentThread.getStats(body)));
};

export default { metadata, tool, handler };
