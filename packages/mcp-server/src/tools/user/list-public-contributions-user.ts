// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'morta-mcp/filtering';
import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'user',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/user/{firebase_id}/public-contributions',
  operationId: 'GetUserPublicContributions',
};

export const tool: Tool = {
  name: 'list_public_contributions_user',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the public contributions made by a user, identified by their Firebase ID\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/event'\n      }\n    },\n    metadata: {\n      type: 'object',\n      description: 'Metadata object'\n    }\n  },\n  required: [],\n  $defs: {\n    event: {\n      type: 'object',\n      properties: {\n        change: {\n          type: 'object'\n        },\n        changeId: {\n          type: 'string'\n        },\n        channel: {\n          type: 'string'\n        },\n        context: {\n          type: 'object'\n        },\n        contextProcessId: {\n          type: 'integer'\n        },\n        contextProcessResponseId: {\n          type: 'integer'\n        },\n        contextProcessSectionId: {\n          type: 'integer'\n        },\n        contextTableColumnId: {\n          type: 'integer'\n        },\n        contextTableId: {\n          type: 'integer'\n        },\n        contextTableViewId: {\n          type: 'integer'\n        },\n        createdAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        projectId: {\n          type: 'integer'\n        },\n        publicId: {\n          type: 'string'\n        },\n        resource: {\n          type: 'string'\n        },\n        resourcePublicId: {\n          type: 'string'\n        },\n        userId: {\n          type: 'integer'\n        },\n        verb: {\n          type: 'string'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      firebase_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { firebase_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.user.listPublicContributions(firebase_id)));
};

export default { metadata, tool, handler };
