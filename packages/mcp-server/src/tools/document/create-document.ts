// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'document',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/document',
  operationId: 'CreateDocument',
};

export const tool: Tool = {
  name: 'create_document',
  description: 'Create a new document in a specified hub',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      projectId: {
        type: 'string',
      },
      type: {
        type: 'string',
      },
      context: {
        $ref: '#/$defs/base_request_context',
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
  return asTextContentResult(await client.document.create(body));
};

export default { metadata, tool, handler };
