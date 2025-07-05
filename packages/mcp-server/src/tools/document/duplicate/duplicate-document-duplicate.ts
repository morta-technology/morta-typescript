// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'document.duplicate',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/document/{document_id}/duplicate',
  operationId: 'DuplicateDocumentAsync',
};

export const tool: Tool = {
  name: 'duplicate_document_duplicate',
  description: 'Duplicate an existing document, potentially in a different hub',
  inputSchema: {
    type: 'object',
    properties: {
      document_id: {
        type: 'string',
      },
      targetProjectId: {
        type: 'string',
      },
      context: {
        $ref: '#/$defs/base_request_context',
      },
      duplicateLinkedTables: {
        type: 'boolean',
      },
      duplicatePermissions: {
        type: 'boolean',
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
  const response = await client.document.duplicate.duplicate(document_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
