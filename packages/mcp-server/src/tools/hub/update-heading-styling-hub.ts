// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'hub',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/hub/{hub_id}/style/{style_id}',
  operationId: 'UpdateHubHeadingStyling',
};

export const tool: Tool = {
  name: 'update_heading_styling_hub',
  description: 'Update heading styling for a specific hub',
  inputSchema: {
    type: 'object',
    properties: {
      hub_id: {
        type: 'string',
      },
      style_id: {
        type: 'string',
      },
      bold: {
        type: 'boolean',
      },
      colour: {
        type: 'string',
      },
      context: {
        $ref: '#/$defs/base_request_context',
      },
      fontSize: {
        type: 'number',
      },
      italic: {
        type: 'boolean',
      },
      numberingStyle: {
        type: 'integer',
      },
      startAt0: {
        type: 'boolean',
      },
      underline: {
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
  const { style_id, ...body } = args as any;
  return asTextContentResult(await client.hub.updateHeadingStyling(style_id, body));
};

export default { metadata, tool, handler };
