// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'document',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/document/{document_id}',
  operationId: 'DeleteDocument',
};

export const tool: Tool = {
  name: 'delete_document',
  description: 'Delete a document identified by its UUID',
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
  return asTextContentResult(await client.document.delete(document_id));
};

export default { metadata, tool, handler };
