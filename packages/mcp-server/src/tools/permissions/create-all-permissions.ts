// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'permissions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/permissions/all',
  operationId: 'BulkCreateResourcePermissions',
};

export const tool: Tool = {
  name: 'create_all_permissions',
  description: 'Create permissions for a specific resource (such as a table, table view, or process).',
  inputSchema: {
    type: 'object',
    properties: {
      attributeKind: {
        type: 'string',
        enum: ['user', 'tag', 'project', 'all_table_tags'],
      },
      resourceId: {
        type: 'string',
      },
      resourceKind: {
        type: 'string',
        enum: ['process', 'table', 'table_view'],
      },
      role: {
        type: 'string',
        enum: [0, 1, 2, 3, 4],
      },
      attributeId: {
        type: 'string',
      },
      context: {
        $ref: '#/$defs/base_request_context',
      },
      tagReferenceId: {
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
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.permissions.createAll(body));
};

export default { metadata, tool, handler };
