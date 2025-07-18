// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table.views',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/table/views/{view_id}',
  operationId: 'UpdateTableView',
};

export const tool: Tool = {
  name: 'update_table_views',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate an existing view for a specific table.",
  inputSchema: {
    type: 'object',
    properties: {
      view_id: {
        type: 'string',
      },
      allowContributorDelete: {
        type: 'boolean',
      },
      chartSettings: {
        anyOf: [
          {
            type: 'object',
          },
          {
            $ref: '#/$defs/chart',
          },
        ],
      },
      collapsedGroupView: {
        type: 'boolean',
      },
      colourSettings: {
        type: 'array',
        items: {
          $ref: '#/$defs/colour',
        },
      },
      columns: {
        type: 'array',
        items: {
          $ref: '#/$defs/update_table_view_column',
        },
      },
      context: {
        $ref: '#/$defs/base_request_context',
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
      disableNewRow: {
        type: 'boolean',
      },
      disableSyncCsv: {
        type: 'boolean',
      },
      displayCommentRows: {
        type: 'integer',
      },
      displayValidationErrorRows: {
        type: 'string',
        enum: [0, 1, 2],
      },
      filterSettings: {
        type: 'array',
        items: {
          $ref: '#/$defs/filter',
        },
      },
      frozenIndex: {
        type: 'integer',
      },
      groupSettings: {
        type: 'array',
        items: {
          $ref: '#/$defs/group',
        },
      },
      name: {
        type: 'string',
      },
      rowHeight: {
        type: 'integer',
      },
      sortSettings: {
        type: 'array',
        items: {
          $ref: '#/$defs/sort',
        },
      },
      type: {
        type: 'integer',
      },
      unpackMultiselectGroupView: {
        type: 'boolean',
      },
    },
    required: ['view_id'],
    $defs: {
      chart: {
        type: 'object',
        properties: {
          aggregate: {
            type: 'string',
            enum: ['sum', 'count', 'avg'],
          },
          chartType: {
            type: 'string',
            enum: [
              'bar',
              'horizontal-bar',
              'stacked-bar',
              'stacked-horizontal-bar',
              'clustered-bar',
              'clustered-horizontal-bar',
              'grouped-bar',
              'area',
              'line',
              'multiaxis-line',
              'pie',
              'doughnut',
              'polar-area',
              'radar',
              'scatter',
              'bubble',
              'gantt',
            ],
          },
          columnGanttEndDateId: {
            type: 'string',
          },
          columnGanttStartDateId: {
            type: 'string',
          },
          columnLabelId: {
            type: 'string',
          },
          columnStackId: {
            type: 'string',
          },
          columnValueId: {
            type: 'string',
          },
          showLegend: {
            type: 'boolean',
          },
          showTitle: {
            type: 'boolean',
          },
          showValues: {
            type: 'boolean',
          },
          sortAggregate: {
            type: 'string',
            enum: ['asc', 'desc'],
          },
        },
      },
      colour: {
        type: 'object',
        properties: {
          backgroundColour: {
            type: 'string',
          },
          columnName: {
            type: 'string',
          },
          filterType: {
            type: 'string',
            enum: [
              'eq',
              'lt',
              'gt',
              'lte',
              'gte',
              'neq',
              'contains',
              'in',
              'row_id',
              'is',
              'is_not',
              'one_of',
              'not_one_of',
              'is_null',
              'is_not_null',
              'not_contains',
              'starts_with',
              'ends_with',
              'is_valid',
              'is_not_valid',
            ],
          },
          fontColour: {
            type: 'string',
          },
          columnId: {
            type: 'string',
          },
          multipleValues: {
            type: 'array',
            items: {
              type: 'object',
            },
          },
          value: {
            type: 'object',
          },
        },
        required: ['backgroundColour', 'columnName', 'filterType', 'fontColour'],
      },
      update_table_view_column: {
        type: 'object',
        properties: {
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
          locked: {
            type: 'boolean',
          },
          name: {
            type: 'string',
          },
          publicId: {
            type: 'string',
          },
          required: {
            type: 'boolean',
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
          width: {
            type: 'integer',
          },
        },
      },
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
      filter: {
        type: 'object',
        properties: {
          columnName: {
            type: 'string',
          },
          filterType: {
            type: 'string',
            enum: [
              'eq',
              'lt',
              'gt',
              'lte',
              'gte',
              'neq',
              'contains',
              'in',
              'row_id',
              'is',
              'is_not',
              'one_of',
              'not_one_of',
              'is_null',
              'is_not_null',
              'not_contains',
              'starts_with',
              'ends_with',
              'is_valid',
              'is_not_valid',
            ],
          },
          columnId: {
            type: 'string',
          },
          multipleValues: {
            type: 'array',
            items: {
              type: 'object',
            },
          },
          orGroup: {
            type: 'string',
          },
          value: {
            type: 'object',
          },
        },
        required: ['columnName', 'filterType'],
      },
      group: {
        type: 'object',
        properties: {
          columnName: {
            type: 'string',
          },
          direction: {
            type: 'string',
          },
          columnId: {
            type: 'string',
          },
        },
        required: ['columnName', 'direction'],
      },
      sort: {
        type: 'object',
        properties: {
          columnName: {
            type: 'string',
          },
          direction: {
            type: 'string',
          },
          columnId: {
            type: 'string',
          },
        },
        required: ['columnName', 'direction'],
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { view_id, ...body } = args as any;
  return asTextContentResult(await client.table.views.update(view_id, body));
};

export default { metadata, tool, handler };
