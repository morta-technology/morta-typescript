// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'morta-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table.sync',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/table/{table_id}/sync/{integration_name}/update',
  operationId: 'SyncTable',
};

export const tool: Tool = {
  name: 'update_table_sync',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate a synced table with a specified integration.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/sync_update_response',\n  $defs: {\n    sync_update_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'string'\n        },\n        metadata: {\n          type: 'object',\n          additionalProperties: true\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      table_id: {
        type: 'string',
      },
      integration_name: {
        type: 'string',
      },
      companyId: {
        type: 'string',
      },
      context: {
        $ref: '#/$defs/base_request_context',
      },
      docTypes: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      enterpriseId: {
        type: 'string',
      },
      folderId: {
        type: 'string',
      },
      hubId: {
        type: 'string',
      },
      licenseId: {
        type: 'string',
      },
      modelId: {
        type: 'string',
      },
      projectId: {
        type: 'string',
      },
      projectIds: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      properties: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      region: {
        type: 'string',
      },
      topFolderId: {
        type: 'string',
      },
      type: {
        type: 'string',
        enum: [
          'Projects',
          'Resources',
          'Users',
          'Documents',
          'Workflows',
          'Comments',
          'RFIs',
          'Checklists',
          'Columns',
          'Issues',
          'AEC Data Model',
          'Forms',
        ],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['table_id', 'integration_name'],
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
  annotations: {},
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { integration_name, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.table.sync.update(integration_name, body)),
    );
  } catch (error) {
    if (error instanceof Morta.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
