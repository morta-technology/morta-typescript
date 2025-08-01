// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'hub',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/hub/{hub_id}/duplicate',
  operationId: 'DuplicateHub',
};

export const tool: Tool = {
  name: 'duplicate_hub',
  description: 'Create a duplicate of an existing hub',
  inputSchema: {
    type: 'object',
    properties: {
      hub_id: {
        type: 'string',
      },
      context: {
        $ref: '#/$defs/base_request_context',
      },
      duplicatePermissions: {
        type: 'boolean',
      },
      lockResource: {
        type: 'boolean',
      },
    },
    required: ['hub_id'],
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
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { hub_id, ...body } = args as any;
  const response = await client.hub.duplicate(hub_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
