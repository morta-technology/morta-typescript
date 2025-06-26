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
  httpPath: '/v1/document/{document_id}/restore',
  operationId: 'RestoreDocument',
};

export const tool: Tool = {
  name: 'restore_document',
  description: 'Restore a deleted document identified by its UUID',
  inputSchema: {
    type: 'object',
    properties: {
      document_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { document_id, ...body } = args as any;
  return asTextContentResult(await client.document.restore(document_id));
};

export default { metadata, tool, handler };
