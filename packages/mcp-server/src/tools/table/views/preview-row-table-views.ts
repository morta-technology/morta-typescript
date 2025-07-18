// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'morta-mcp/filtering';
import { Metadata, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table.views',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/table/views/{view_id}/preview-row',
  operationId: 'PreviewTableRowInView',
};

export const tool: Tool = {
  name: 'preview_row_table_views',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPreview the resulting row from given inputs in a specific table view.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        publicId: {\n          type: 'string'\n        },\n        rowData: {\n          type: 'object'\n        },\n        sortOrder: {\n          type: 'integer'\n        }\n      }\n    },\n    metadata: {\n      type: 'object'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      view_id: {
        type: 'string',
      },
      rowData: {
        type: 'object',
      },
      context: {
        $ref: '#/$defs/base_request_context',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['view_id', 'rowData'],
    $defs: {
      base_request_context: {
        type: 'object',
        properties: {
          processPublicId: {
            type: 'string',
          },
          processResponsePublicId: {
            type: 'string',
          },
          processSectionPublicId: {
            type: 'string',
          },
          projectId: {
            type: 'string',
          },
        },
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { view_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.table.views.previewRow(view_id, body)));
};

export default { metadata, tool, handler };
