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
  httpPath: '/v1/document/{document_id}/deletedsections',
  operationId: 'GetDeletedDocumentSections',
};

export const tool: Tool = {
  name: 'get_deleted_sections_document',
  description:
    'Retrieve all deleted sections of a specific document, with an optional filter for a specific document section',
  inputSchema: {
    type: 'object',
    properties: {
      document_id: {
        type: 'string',
      },
      process_section_id: {
        type: 'string',
        description: 'Optional UUID of a specific document section to filter deleted sections',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { document_id, ...body } = args as any;
  return asTextContentResult(await client.document.getDeletedSections(document_id, body));
};

export default { metadata, tool, handler };
