// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'morta-mcp/filtering';
import { Metadata, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'integrations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/integrations/passthrough',
  operationId: 'IntegrationsPassthroughApiCall',
};

export const tool: Tool = {
  name: 'create_passthrough_integrations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nMake a passthrough API call to an external source system.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        body: {\n          type: 'object'\n        },\n        contentType: {\n          type: 'string'\n        },\n        headers: {\n          type: 'object'\n        },\n        status: {\n          type: 'string'\n        }\n      }\n    },\n    metadata: {\n      type: 'object'\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['method', 'path', 'sourceSystem'],
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
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.integrations.createPassthrough(body)));
};

export default { metadata, tool, handler };
