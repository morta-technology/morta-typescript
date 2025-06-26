// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'document.section',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/document/{document_id}/section/{document_section_id}',
  operationId: 'DeleteDocumentSection',
};

export const tool: Tool = {
  name: 'delete_document_section',
  description: 'Delete a specific document section.',
  inputSchema: {
    type: 'object',
    properties: {
      document_id: {
        type: 'string',
      },
      document_section_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { document_section_id, ...body } = args as any;
  return asTextContentResult(await client.document.section.delete(document_section_id, body));
};

export default { metadata, tool, handler };
