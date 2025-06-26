// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'document.section',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/document/{document_id}/section/{document_section_id}',
  operationId: 'GetDocumentSection',
};

export const tool: Tool = {
  name: 'retrieve_document_section',
  description: 'Retrieve a specific Document section.',
  inputSchema: {
    type: 'object',
    properties: {
      document_id: {
        type: 'string',
      },
      document_section_id: {
        type: 'string',
      },
      main_parent_section: {
        type: 'boolean',
        description: 'Flag to retrieve the main parent section of the document section',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { document_section_id, ...body } = args as any;
  return asTextContentResult(await client.document.section.retrieve(document_section_id, body));
};

export default { metadata, tool, handler };
