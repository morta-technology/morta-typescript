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
  httpPath: '/v1/document/{document_id}/section/{document_section_id}/response/{document_response_id}/submit',
  operationId: 'SubmitDocumentResponse',
};

export const tool: Tool = {
  name: 'submit_section_document_response',
  description: 'Submit a document response, marking it as completed.',
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
      context: {
        $ref: '#/$defs/base_request_context',
      },
      response: {
        type: 'object',
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
  const { document_response_id, ...body } = args as any;
  return asTextContentResult(await client.document.section.response.submit(document_response_id, body));
};

export default { metadata, tool, handler };
