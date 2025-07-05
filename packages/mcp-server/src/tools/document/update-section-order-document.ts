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
  httpPath: '/v1/document/{document_id}/changesectionorder',
  operationId: 'UpdateDocumentSectionOrder',
};

export const tool: Tool = {
  name: 'update_section_order_document',
  description: 'Update the order of document sections within a document.',
  inputSchema: {
    type: 'object',
    properties: {
      document_id: {
        type: 'string',
      },
      context: {
        $ref: '#/$defs/base_request_context',
      },
      processSections: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            parentId: {
              type: 'string',
            },
            position: {
              type: 'integer',
            },
            sectionId: {
              type: 'string',
            },
          },
          required: [],
        },
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
  const { document_id, ...body } = args as any;
  return asTextContentResult(await client.document.updateSectionOrder(document_id, body));
};

export default { metadata, tool, handler };
