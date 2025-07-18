// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'morta-mcp/filtering';
import { Metadata, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table.sync',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/table/{table_id}/sync/info',
  operationId: 'GetTableSyncInfo',
};

export const tool: Tool = {
  name: 'get_sync_info_table_sync',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve the integration sync info of a given table.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        createdAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        deletedAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        failedSyncAttempts: {\n          type: 'integer'\n        },\n        isAconexSynced: {\n          type: 'boolean'\n        },\n        isAconexWorkflowsSynced: {\n          type: 'boolean'\n        },\n        isAsiteDocumentsSynced: {\n          type: 'boolean'\n        },\n        isAsiteFormsSynced: {\n          type: 'boolean'\n        },\n        isAutodeskBim360ChecklistsSynced: {\n          type: 'boolean'\n        },\n        isAutodeskBim360IssuesSynced: {\n          type: 'boolean'\n        },\n        isAutodeskBim360ModelsSynced: {\n          type: 'boolean'\n        },\n        isAutodeskBim360Synced: {\n          type: 'boolean'\n        },\n        isAutodeskBim360UsersSynced: {\n          type: 'boolean'\n        },\n        isDeleted: {\n          type: 'boolean'\n        },\n        isMortaColumnsSynced: {\n          type: 'boolean'\n        },\n        isMortaCommentsSynced: {\n          type: 'boolean'\n        },\n        isMortaProjectsSynced: {\n          type: 'boolean'\n        },\n        isMortaResourcesSynced: {\n          type: 'boolean'\n        },\n        isMortaSynced: {\n          type: 'boolean'\n        },\n        isMortaUsersSynced: {\n          type: 'boolean'\n        },\n        isProcoreSynced: {\n          type: 'boolean'\n        },\n        isReviztoIssuesSynced: {\n          type: 'boolean'\n        },\n        isSynced: {\n          type: 'boolean'\n        },\n        isSyncing: {\n          type: 'boolean'\n        },\n        isViewpointRfisSynced: {\n          type: 'boolean'\n        },\n        isViewpointSynced: {\n          type: 'boolean'\n        },\n        lastSync: {\n          type: 'string',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string'\n        },\n        publicId: {\n          type: 'string'\n        },\n        syncHourlyFrequency: {\n          type: 'integer'\n        },\n        type: {\n          type: 'string'\n        },\n        updatedAt: {\n          type: 'string',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
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
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { table_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.table.sync.getSyncInfo(table_id)));
};

export default { metadata, tool, handler };
