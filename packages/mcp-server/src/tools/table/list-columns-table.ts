// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'morta-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/table/{table_id}/columns',
  operationId: 'GetTableColumns',
};

export const tool: Tool = {
  name: 'list_columns_table',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve all active columns of a specific table.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/table_list_columns_response',\n  $defs: {\n    table_list_columns_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/table_column'\n          }\n        },\n        metadata: {\n          type: 'object',\n          additionalProperties: true\n        }\n      }\n    },\n    table_column: {\n      type: 'object',\n      properties: {\n        aggregate: {\n          type: 'integer'\n        },\n        alterOptions: {\n          anyOf: [            {\n              $ref: '#/$defs/table_column_alter'\n            },\n            {\n              type: 'object',\n              additionalProperties: true\n            }\n          ]\n        },\n        dateFormat: {\n          type: 'string'\n        },\n        decimalPlaces: {\n          type: 'integer'\n        },\n        description: {\n          anyOf: [            {\n              type: 'object',\n              additionalProperties: true\n            },\n            {\n              $ref: '#/$defs/draftjs'\n            }\n          ]\n        },\n        displayLink: {\n          type: 'boolean'\n        },\n        exportWidth: {\n          type: 'integer'\n        },\n        formula: {\n          type: 'string'\n        },\n        formulaEnabled: {\n          type: 'boolean'\n        },\n        headerBackgroundColor: {\n          type: 'string'\n        },\n        headerTextColor: {\n          type: 'string'\n        },\n        isIndexed: {\n          type: 'boolean'\n        },\n        isJoined: {\n          type: 'boolean'\n        },\n        isSynced: {\n          type: 'boolean'\n        },\n        kind: {\n          type: 'string',\n          enum: [            'text',\n            'datetime',\n            'date',\n            'link',\n            'multilink',\n            'select',\n            'multiselect',\n            'integer',\n            'float',\n            'percentage',\n            'tag',\n            'variable',\n            'attachment',\n            'phone',\n            'email',\n            'vote',\n            'checkbox',\n            'duration'\n          ]\n        },\n        kindOptions: {\n          $ref: '#/$defs/select_options_lookup'\n        },\n        name: {\n          type: 'string'\n        },\n        publicId: {\n          type: 'string'\n        },\n        script: {\n          type: 'string'\n        },\n        scriptEnabled: {\n          type: 'boolean'\n        },\n        thousandSeparator: {\n          type: 'boolean'\n        },\n        width: {\n          type: 'integer'\n        }\n      }\n    },\n    table_column_alter: {\n      type: 'object',\n      properties: {\n        dateConversionFormat: {\n          type: 'string',\n          enum: [            'DD/MM/YYYY',\n            'MM/DD/YYYY',\n            'ISO8601',\n            'DD-Mon-YY'\n          ]\n        },\n        runScriptOnAllCells: {\n          type: 'boolean'\n        }\n      }\n    },\n    draftjs: {\n      type: 'object',\n      properties: {\n        content: {\n          type: 'object',\n          properties: {\n            blocks: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  data: {\n                    type: 'object',\n                    additionalProperties: true\n                  },\n                  depth: {\n                    type: 'integer'\n                  },\n                  entityRanges: {\n                    type: 'array',\n                    items: {\n                      type: 'object',\n                      properties: {\n                        key: {\n                          type: 'integer'\n                        },\n                        length: {\n                          type: 'integer'\n                        },\n                        offset: {\n                          type: 'integer'\n                        }\n                      },\n                      required: [                        'key',\n                        'length',\n                        'offset'\n                      ]\n                    }\n                  },\n                  inlineStyleRanges: {\n                    type: 'array',\n                    items: {\n                      type: 'object',\n                      properties: {\n                        length: {\n                          type: 'integer'\n                        },\n                        offset: {\n                          type: 'integer'\n                        },\n                        style: {\n                          type: 'string'\n                        }\n                      },\n                      required: [                        'length',\n                        'offset',\n                        'style'\n                      ]\n                    }\n                  },\n                  key: {\n                    type: 'string'\n                  },\n                  text: {\n                    type: 'string'\n                  },\n                  type: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'data',\n                  'depth',\n                  'entityRanges',\n                  'inlineStyleRanges',\n                  'key',\n                  'text',\n                  'type'\n                ]\n              }\n            },\n            entityMap: {\n              type: 'object',\n              additionalProperties: true\n            }\n          },\n          required: [            'blocks',\n            'entityMap'\n          ]\n        }\n      },\n      required: [        'content'\n      ]\n    },\n    select_options_lookup: {\n      type: 'object',\n      properties: {\n        autopopulate: {\n          type: 'boolean'\n        },\n        manualOptions: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        tableOptions: {\n          type: 'object',\n          properties: {\n            columnId: {\n              type: 'string'\n            },\n            dependencies: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  columnId: {\n                    type: 'string'\n                  },\n                  columnJoinId: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'columnId'\n                ]\n              }\n            },\n            liveValues: {\n              type: 'boolean'\n            },\n            tableId: {\n              type: 'string'\n            },\n            viewId: {\n              type: 'string'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
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
    required: ['table_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { table_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.table.listColumns(table_id)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
