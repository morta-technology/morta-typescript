// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table.views',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/table/{table_id}/views',
  operationId: 'CreateTableView',
};

export const tool: Tool = {
  name: 'create_table_views',
  description: 'Create a new view for a specific table.',
  inputSchema: {
    type: 'object',
    properties: {
      table_id: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      allowContributorDelete: {
        type: 'boolean',
      },
      chartSettings: {
        anyOf: [
          {
            type: 'object',
            additionalProperties: true,
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
          type: 'object',
          properties: {
            columnName: {
              type: 'string',
            },
            columnId: {
              type: 'string',
            },
            description: {
              anyOf: [
                {
                  $ref: '#/$defs/draftjs',
                },
                {
                  type: 'object',
                  additionalProperties: true,
                },
              ],
            },
            displayValidationError: {
              type: 'boolean',
            },
            hardValidation: {
              type: 'boolean',
            },
            locked: {
              type: 'boolean',
            },
            required: {
              type: 'boolean',
            },
            stringValidation: {
              type: 'string',
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
          },
          required: ['columnName'],
        },
      },
      context: {
        $ref: '#/$defs/base_request_context',
      },
      description: {
        anyOf: [
          {
            type: 'object',
            additionalProperties: true,
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
      includeAllColumns: {
        type: 'boolean',
      },
      isDefault: {
        type: 'boolean',
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
    required: ['table_id', 'name'],
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
              additionalProperties: true,
            },
          },
          value: {
            type: 'object',
            additionalProperties: true,
          },
        },
        required: ['backgroundColour', 'columnName', 'filterType', 'fontColour'],
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
                      additionalProperties: true,
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
                additionalProperties: true,
              },
            },
            required: ['blocks', 'entityMap'],
          },
        },
        required: ['content'],
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
              additionalProperties: true,
            },
          },
          orGroup: {
            type: 'string',
          },
          value: {
            type: 'object',
            additionalProperties: true,
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
  annotations: {},
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { table_id, ...body } = args as any;
  return asTextContentResult(await client.table.views.create(table_id, body));
};

export default { metadata, tool, handler };
