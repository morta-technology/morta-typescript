// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asBinaryContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'integrations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/integrations/passthrough-download',
  operationId: 'IntegrationsPassthroughDownloadApiCall',
};

export const tool: Tool = {
  name: 'create_passthrough_download_integrations',
  description: 'Make a passthrough API call to an external source system for downloading files.',
  inputSchema: {
    type: 'object',
    properties: {
      method: {
        type: 'string',
        enum: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH'],
      },
      path: {
        type: 'string',
      },
      sourceSystem: {
        type: 'string',
        enum: ['viewpoint', 'aconex', 'autodesk-bim360', 'procore', 'revizto', 'morta', 'asite'],
      },
      context: {
        $ref: '#/$defs/base_request_context',
      },
      data: {
        type: 'object',
      },
      headers: {
        type: 'object',
      },
      onBehalfUserId: {
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
  return asBinaryContentResult(await client.integrations.createPassthroughDownload(body));
};

export default { metadata, tool, handler };
