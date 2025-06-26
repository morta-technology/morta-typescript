// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'document',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/document/sync-views-permissions',
  operationId: 'UpdatePermissionsInDocumentViews',
};

export const tool: Tool = {
  name: 'update_views_permissions_document',
  description: 'Update permissions for all views using as reference the permissions in a document.',
  inputSchema: {
    type: 'object',
    properties: {
      resource_id: {
        type: 'string',
        description: 'UUID of the document for which to retrieve permissions.',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.document.updateViewsPermissions(body));
};

export default { metadata, tool, handler };
