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
  httpPath: '/v1/document/duplicate',
  operationId: 'DuplicateDocument',
};

export const tool: Tool = {
  name: 'global_document_duplicate',
  description: 'Duplicate an existing document, optionally into a different hub',
  inputSchema: {
    type: 'object',
    properties: {
      processId: {
        type: 'string',
      },
      context: {
        $ref: '#/$defs/base_request_context',
      },
      projectId: {
        type: 'string',
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
  const body = args as any;
  return asTextContentResult(await client.document.duplicate.global(body));
};

export default { metadata, tool, handler };
