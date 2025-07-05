// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'document.section.response',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/document/{document_id}/section/{document_section_id}/response',
  operationId: 'CreateDocumentResponse',
};

export const tool: Tool = {
  name: 'create_section_document_response',
  description: 'Create a new response for a document section.',
  inputSchema: {
    type: 'object',
    properties: {
      document_id: {
        type: 'string',
      },
      document_section_id: {
        type: 'string',
      },
      context: {
        $ref: '#/$defs/base_request_context',
      },
      type: {
        type: 'string',
        enum: ['Flexible', 'File Upload', 'Table', 'Signature', 'Selection'],
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
  const { document_section_id, ...body } = args as any;
  return asTextContentResult(await client.document.section.response.create(document_section_id, body));
};

export default { metadata, tool, handler };
