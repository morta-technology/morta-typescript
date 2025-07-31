// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table.column',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/table/{table_id}/column/{column_id}',
  operationId: 'UpdateTableColumn',
};

export const tool: Tool = {
  name: 'update_table_column',
  description: 'Update the properties of a specific column in a table.',
  inputSchema: {
    type: 'object',
    properties: {
      table_id: {
        type: 'string',
      },
      column_id: {
        type: 'string',
      },
      aggregate: {
        type: 'integer',
      },
      alterOptions: {
        anyOf: [
          {
            $ref: '#/$defs/table_column_alter',
          },
          {
            type: 'object',
          },
        ],
      },
      context: {
        $ref: '#/$defs/base_request_context',
      },
      dateFormat: {
        type: 'string',
      },
      decimalPlaces: {
        type: 'integer',
      },
      description: {
        anyOf: [
          {
            type: 'object',
          },
          {
            $ref: '#/$defs/draftjs',
          },
        ],
      },
      displayLink: {
        type: 'boolean',
      },
      exportWidth: {
        type: 'integer',
      },
      formula: {
        type: 'string',
      },
      formulaEnabled: {
        type: 'boolean',
      },
      headerBackgroundColor: {
        type: 'string',
      },
      headerTextColor: {
        type: 'string',
      },
      isIndexed: {
        type: 'boolean',
      },
      isJoined: {
        type: 'boolean',
      },
      isSynced: {
        type: 'boolean',
      },
      kind: {
        type: 'string',
        enum: [
          'text',
          'datetime',
          'date',
          'link',
          'multilink',
          'select',
          'multiselect',
          'integer',
          'float',
          'percentage',
          'tag',
          'variable',
          'attachment',
          'phone',
          'email',
          'vote',
          'checkbox',
          'duration',
        ],
      },
      kindOptions: {
        $ref: '#/$defs/select_options_lookup',
      },
      name: {
        type: 'string',
      },
      publicId: {
        type: 'string',
      },
      script: {
        type: 'string',
      },
      scriptEnabled: {
        type: 'boolean',
      },
      thousandSeparator: {
        type: 'boolean',
      },
      width: {
        type: 'integer',
      },
    },
    required: ['table_id', 'column_id'],
    $defs: {
      table_column_alter: {
        type: 'object',
        properties: {
          dateConversionFormat: {
            type: 'string',
            enum: ['DD/MM/YYYY', 'MM/DD/YYYY', 'ISO8601', 'DD-Mon-YY'],
          },
          runScriptOnAllCells: {
            type: 'boolean',
          },
        },
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
      draftjs: {
        type: 'object',
        properties: {
          content: {
            type: 'object',
            properties: {
              blocks: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    data: {
                      type: 'object',
                    },
                    depth: {
                      type: 'integer',
                    },
                    entityRanges: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          key: {
                            type: 'integer',
                          },
                          length: {
                            type: 'integer',
                          },
                          offset: {
                            type: 'integer',
                          },
                        },
                        required: ['key', 'length', 'offset'],
                      },
                    },
                    inlineStyleRanges: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          length: {
                            type: 'integer',
                          },
                          offset: {
                            type: 'integer',
                          },
                          style: {
                            type: 'string',
                          },
                        },
                        required: ['length', 'offset', 'style'],
                      },
                    },
                    key: {
                      type: 'string',
                    },
                    text: {
                      type: 'string',
                    },
                    type: {
                      type: 'string',
                    },
                  },
                  required: ['data', 'depth', 'entityRanges', 'inlineStyleRanges', 'key', 'text', 'type'],
                },
              },
              entityMap: {
                type: 'object',
              },
            },
            required: ['blocks', 'entityMap'],
          },
        },
        required: ['content'],
      },
      select_options_lookup: {
        type: 'object',
        properties: {
          autopopulate: {
            type: 'boolean',
          },
          manualOptions: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          tableOptions: {
            type: 'object',
            properties: {
              columnId: {
                type: 'string',
              },
              dependencies: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    columnId: {
                      type: 'string',
                    },
                    columnJoinId: {
                      type: 'string',
                    },
                  },
                  required: ['columnId'],
                },
              },
              liveValues: {
                type: 'boolean',
              },
              tableId: {
                type: 'string',
              },
              viewId: {
                type: 'string',
              },
            },
          },
        },
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { column_id, ...body } = args as any;
  return asTextContentResult(await client.table.column.update(column_id, body));
};

export default { metadata, tool, handler };
