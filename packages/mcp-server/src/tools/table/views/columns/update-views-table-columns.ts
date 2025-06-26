// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table.views.columns',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/table/views/{view_id}/columns/{column_id}',
  operationId: 'UpdateColumnOnTableView',
};

export const tool: Tool = {
  name: 'update_views_table_columns',
  description: 'Update a specific column in a table view.',
  inputSchema: {
    type: 'object',
    properties: {
      view_id: {
        type: 'string',
      },
      column_id: {
        type: 'string',
      },
      aconexSynced: {
        type: 'integer',
      },
      aconexWorkflowsSynced: {
        type: 'integer',
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
      asiteDocumentsSynced: {
        type: 'integer',
      },
      asiteFormsSynced: {
        type: 'integer',
      },
      autodeskBim360ChecklistsSynced: {
        type: 'integer',
      },
      autodeskBim360IssuesSynced: {
        type: 'integer',
      },
      autodeskBim360ModelsSynced: {
        type: 'integer',
      },
      autodeskBim360Synced: {
        type: 'integer',
      },
      autodeskBim360UsersSynced: {
        type: 'integer',
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
      displayValidationError: {
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
      hardValidation: {
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
      locked: {
        type: 'boolean',
      },
      mortaSynced: {
        type: 'integer',
      },
      name: {
        type: 'string',
      },
      procoreSynced: {
        type: 'integer',
      },
      publicId: {
        type: 'string',
      },
      required: {
        type: 'boolean',
      },
      reviztoIssuesSynced: {
        type: 'integer',
      },
      script: {
        type: 'string',
      },
      scriptEnabled: {
        type: 'boolean',
      },
      sortOrder: {
        type: 'integer',
      },
      stringValidation: {
        type: 'string',
      },
      thousandSeparator: {
        type: 'boolean',
      },
      validationMessage: {
        type: 'string',
      },
      validationNoBlanks: {
        type: 'boolean',
      },
      validationNoDuplicates: {
        type: 'boolean',
      },
      viewpointRfisSynced: {
        type: 'integer',
      },
      viewpointSynced: {
        type: 'integer',
      },
      width: {
        type: 'integer',
      },
    },
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
        required: [],
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
        required: [],
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
            required: [],
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { column_id, ...body } = args as any;
  return asTextContentResult(await client.table.views.columns.update(column_id, body));
};

export default { metadata, tool, handler };
