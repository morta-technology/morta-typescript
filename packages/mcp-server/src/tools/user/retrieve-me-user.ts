// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'morta-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'user',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/user/me',
  operationId: 'GetMe',
};

export const tool: Tool = {
  name: 'retrieve_me_user',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet info on the current user\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/user_retrieve_me_response',\n  $defs: {\n    user_retrieve_me_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/user'\n        },\n        metadata: {\n          type: 'object',\n          description: 'The metadata object',\n          additionalProperties: true\n        }\n      }\n    },\n    user: {\n      type: 'object',\n      properties: {\n        aconexConnected: {\n          type: 'boolean'\n        },\n        allowSupportAccesss: {\n          type: 'boolean'\n        },\n        apiKeys: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/api_key'\n          }\n        },\n        asiteConnected: {\n          type: 'boolean'\n        },\n        autodeskConnected: {\n          type: 'boolean'\n        },\n        bio: {\n          type: 'string'\n        },\n        constructionSoftware: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        createdAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        email: {\n          type: 'string'\n        },\n        firebaseUserId: {\n          type: 'string'\n        },\n        kind: {\n          type: 'string'\n        },\n        linkedin: {\n          type: 'string'\n        },\n        location: {\n          type: 'string'\n        },\n        managedSubscriptionUsers: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/user'\n          }\n        },\n        name: {\n          type: 'string'\n        },\n        numberOfManagedSubscriptionUsers: {\n          type: 'integer'\n        },\n        onScalePlan: {\n          type: 'boolean'\n        },\n        optOutAiEmail: {\n          type: 'boolean'\n        },\n        optOutDuplicationEmail: {\n          type: 'boolean'\n        },\n        optOutHubEmail: {\n          type: 'boolean'\n        },\n        optOutSyncEmail: {\n          type: 'boolean'\n        },\n        optOutWelcomeEmail: {\n          type: 'boolean'\n        },\n        organisation: {\n          type: 'string'\n        },\n        phone: {\n          type: 'string'\n        },\n        procoreConnected: {\n          type: 'boolean'\n        },\n        profilePicture: {\n          type: 'string'\n        },\n        projectsWorkedOn: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        publicId: {\n          type: 'string'\n        },\n        reviztoConnected: {\n          type: 'boolean'\n        },\n        specialisms: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        subscriptionManagerUser: {\n          anyOf: [            {\n              $ref: '#/$defs/user_hub'\n            },\n            {\n              type: 'object',\n              additionalProperties: true\n            }\n          ]\n        },\n        subscriptionQuota: {\n          type: 'integer'\n        },\n        tags: {\n          type: 'object',\n          additionalProperties: true\n        },\n        twitter: {\n          type: 'string'\n        },\n        university: {\n          type: 'string'\n        },\n        universityDegree: {\n          type: 'string'\n        },\n        viewpointConnected: {\n          type: 'boolean'\n        },\n        website: {\n          type: 'string'\n        }\n      }\n    },\n    api_key: {\n      type: 'object',\n      properties: {\n        accessLevel: {\n          type: 'integer'\n        },\n        documentRestrictions: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        hash: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        prefix: {\n          type: 'string'\n        },\n        projectRestrictions: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        publicId: {\n          type: 'string'\n        },\n        tableRestrictions: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        }\n      }\n    },\n    user_hub: {\n      type: 'object',\n      properties: {\n        email: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
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
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.user.retrieveMe()));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
