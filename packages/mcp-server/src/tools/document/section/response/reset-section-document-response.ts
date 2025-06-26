// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'document.section.response',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/document/{document_id}/section/{document_section_id}/response/{document_response_id}/reset',
  operationId: 'ResetDocumentResponse',
};

export const tool: Tool = {
  name: 'reset_section_document_response',
  description: 'Reset an existing document response to its initial state.',
  inputSchema: {
    type: 'object',
    properties: {
      document_id: {
        type: 'string',
      },
      document_section_id: {
        type: 'string',
      },
      document_response_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { document_response_id, ...body } = args as any;
  return asTextContentResult(await client.document.section.response.reset(document_response_id, body));
};

export default { metadata, tool, handler };
