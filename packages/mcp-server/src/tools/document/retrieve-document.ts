// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'document',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/document/{document_id}',
  operationId: 'GetDocument',
};

export const tool: Tool = {
  name: 'retrieve_document',
  description: 'Retrieve detailed information of a specific document by its UUID',
  inputSchema: {
    type: 'object',
    properties: {
      document_id: {
        type: 'string',
      },
      exclude_children: {
        type: 'boolean',
        description: 'Flag to exclude child elements from the document response',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { document_id, ...body } = args as any;
  return asTextContentResult(await client.document.retrieve(document_id, body));
};

export default { metadata, tool, handler };
