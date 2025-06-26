// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/table/{table_id}',
  operationId: 'UpdateTable',
};

export const tool: Tool = {
  name: 'update_table',
  description: 'Update the properties of an existing table.',
  inputSchema: {
    type: 'object',
    properties: {
      table_id: {
        type: 'string',
      },
      allowComments: {
        type: 'boolean',
      },
      context: {
        $ref: '#/$defs/base_request_context',
      },
      isReferenceTable: {
        type: 'boolean',
      },
      joins: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            dataColumns: {
              type: 'array',
              items: {
                $ref: '#/$defs/table_join_imported_columns',
              },
            },
            isOneToMany: {
              type: 'boolean',
            },
            joinColumns: {
              type: 'array',
              items: {
                $ref: '#/$defs/table_column_join',
              },
            },
            joinTableName: {
              type: 'string',
            },
            joinViewId: {
              type: 'string',
            },
            joinViewName: {
              type: 'string',
            },
            publicId: {
              type: 'string',
            },
          },
          required: [],
        },
      },
      keepColoursInSync: {
        type: 'boolean',
      },
      keepValidationsInSync: {
        type: 'boolean',
      },
      logo: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      syncHourlyFrequency: {
        type: 'string',
        enum: [0, 24],
      },
      type: {
        type: 'string',
      },
    },
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
        required: [],
      },
      table_join_imported_columns: {
        type: 'object',
        properties: {
          sourceColumnId: {
            type: 'string',
          },
          targetColumnId: {
            type: 'string',
          },
        },
        required: [],
      },
      table_column_join: {
        type: 'object',
        properties: {
          sourceColumnId: {
            type: 'string',
          },
          targetColumnId: {
            type: 'string',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { table_id, ...body } = args as any;
  return asTextContentResult(await client.table.update(table_id, body));
};

export default { metadata, tool, handler };
