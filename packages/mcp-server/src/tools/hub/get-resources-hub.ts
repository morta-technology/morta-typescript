// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'morta-mcp/filtering';
import { Metadata, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'hub',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/hub/{hub_id}/resources',
  operationId: 'GetHubResources',
};

export const tool: Tool = {
  name: 'get_resources_hub',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve resources associated with a specific hub identified by its UUID\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          name: {\n            type: 'string',\n            description: 'Name of the resource'\n          },\n          process: {\n            type: 'object',\n            description: 'Details of the document, if the resource type is \\'process\\'',\n            properties: {\n              createdAt: {\n                type: 'string',\n                format: 'date-time'\n              },\n              deletedAt: {\n                type: 'string',\n                format: 'date-time'\n              },\n              logo: {\n                type: 'string'\n              },\n              name: {\n                type: 'string'\n              },\n              publicId: {\n                type: 'string'\n              },\n              type: {\n                type: 'string'\n              },\n              updatedAt: {\n                type: 'string',\n                format: 'date-time'\n              }\n            }\n          },\n          table: {\n            type: 'object',\n            description: 'Details of the table, if the resource type is \\'table\\'',\n            properties: {\n              createdAt: {\n                type: 'string',\n                format: 'date-time'\n              },\n              defaultViewId: {\n                type: 'string'\n              },\n              deletedAt: {\n                type: 'string',\n                format: 'date-time'\n              },\n              isDeleted: {\n                type: 'boolean'\n              },\n              joins: {\n                type: 'array',\n                items: {\n                  $ref: '#/$defs/table_join'\n                }\n              },\n              logo: {\n                type: 'string'\n              },\n              name: {\n                type: 'string'\n              },\n              publicId: {\n                type: 'string'\n              },\n              type: {\n                type: 'string'\n              },\n              updatedAt: {\n                type: 'string',\n                format: 'date-time'\n              }\n            }\n          },\n          type: {\n            type: 'string',\n            description: 'Type of the resource (document or table)'\n          }\n        }\n      }\n    },\n    metadata: {\n      type: 'object'\n    }\n  },\n  $defs: {\n    table_join: {\n      type: 'object',\n      properties: {\n        dataColumns: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/table_join_imported_columns'\n          }\n        },\n        isOneToMany: {\n          type: 'boolean'\n        },\n        joinColumns: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/table_column_join'\n          }\n        },\n        joinTableId: {\n          type: 'string'\n        },\n        joinViewId: {\n          type: 'string'\n        },\n        publicId: {\n          type: 'string'\n        }\n      }\n    },\n    table_join_imported_columns: {\n      type: 'object',\n      properties: {\n        sourceColumnId: {\n          type: 'string'\n        },\n        targetColumnId: {\n          type: 'string'\n        }\n      }\n    },\n    table_column_join: {\n      type: 'object',\n      properties: {\n        sourceColumnId: {\n          type: 'string'\n        },\n        targetColumnId: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      hub_id: {
        type: 'string',
      },
      adminView: {
        type: 'boolean',
      },
      excludeProcesses: {
        type: 'boolean',
      },
      excludeTables: {
        type: 'boolean',
      },
      onlyAdmin: {
        type: 'boolean',
      },
      onlyDeleted: {
        type: 'boolean',
      },
      projectPermissions: {
        type: 'boolean',
      },
      typeId: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['hub_id'],
  },
  annotations: {},
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { hub_id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.hub.getResources(hub_id, body)));
};

export default { metadata, tool, handler };
