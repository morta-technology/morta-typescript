// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'morta-mcp/filtering';
import { Metadata, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'user',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/user/owner-hubs',
  operationId: 'GetUserOwnerHubs',
};

export const tool: Tool = {
  name: 'list_owner_hubs_user',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet all hubs where the user is the owner or an admin\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/home_hub'\n      }\n    },\n    metadata: {\n      type: 'object',\n      description: 'Additional metadata'\n    }\n  },\n  $defs: {\n    home_hub: {\n      type: 'object',\n      properties: {\n        aiSearchEnabled: {\n          type: 'boolean'\n        },\n        allowDocumentExport: {\n          type: 'boolean'\n        },\n        allowTableExport: {\n          type: 'boolean'\n        },\n        deletedAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        domainsAccess: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        fontColour: {\n          type: 'string'\n        },\n        hideProcessCreated: {\n          type: 'boolean'\n        },\n        isDeleted: {\n          type: 'boolean'\n        },\n        mfaRequired: {\n          type: 'boolean'\n        },\n        name: {\n          type: 'string'\n        },\n        primaryColour: {\n          type: 'string'\n        },\n        publicId: {\n          type: 'string'\n        },\n        wordTemplate: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.user.listOwnerHubs()));
};

export default { metadata, tool, handler };
