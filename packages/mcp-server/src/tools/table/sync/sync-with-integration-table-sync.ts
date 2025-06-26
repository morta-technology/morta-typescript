// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'table.sync',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/table/{table_id}/sync/{integration_name}',
  operationId: 'SyncTableWithIntegration',
};

export const tool: Tool = {
  name: 'sync_with_integration_table_sync',
  description: 'Sync a table with a specified integration.',
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
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { integration_name, ...body } = args as any;
  return asTextContentResult(await client.table.sync.syncWithIntegration(integration_name, body));
};

export default { metadata, tool, handler };
