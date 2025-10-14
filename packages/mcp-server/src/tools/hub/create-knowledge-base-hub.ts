// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
    required: ['hub_id', 'source', 'text'],
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
  const response = await client.hub.createKnowledgeBase(hub_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
