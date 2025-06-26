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
  httpPath: '/v1/hub/{hub_id}/knowledge-base',
  operationId: 'CreateKnowledgeBase',
};

export const tool: Tool = {
  name: 'create_knowledge_base_hub',
  description: 'Create a new knowledge base entry for a hub',
  inputSchema: {
    type: 'object',
    properties: {
      hub_id: {
        type: 'string',
      },
      source: {
        type: 'string',
      },
      text: {
        type: 'string',
      },
      context: {
        $ref: '#/$defs/base_request_context',
      },
      link: {
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
  const { hub_id, ...body } = args as any;
  await client.hub.createKnowledgeBase(hub_id, body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
