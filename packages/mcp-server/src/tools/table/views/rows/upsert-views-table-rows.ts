// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'morta-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table.views.rows',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/table/views/{view_id}/rows/upsert',
  operationId: 'UpsertTableRowsInView',
};

export const tool: Tool = {
  name: 'upsert_views_table_rows',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpsert (add or update) rows in a table view based on a specified column.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/row_upsert_response',\n  $defs: {\n    row_upsert_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              publicId: {\n                type: 'string'\n              },\n              rowData: {\n                type: 'object',\n                additionalProperties: true\n              },\n              sortOrder: {\n                type: 'number'\n              }\n            }\n          }\n        },\n        metadata: {\n          type: 'object',\n          additionalProperties: true\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      view_id: {
        type: 'string',
      },
      rows: {
        type: 'array',
        items: {
          $ref: '#/$defs/table_row_action',
        },
      },
      upsertColumnName: {
        type: 'string',
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
    required: ['view_id', 'rows', 'upsertColumnName'],
    $defs: {
      table_row_action: {
        type: 'object',
        properties: {
          rowData: {
            type: 'object',
            additionalProperties: true,
          },
          context: {
            $ref: '#/$defs/base_request_context',
          },
          sortOrder: {
            type: 'number',
          },
        },
        required: ['rowData'],
      },
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
  annotations: {},
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { view_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.table.views.rows.upsert(view_id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
