// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'morta-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'hub',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/hub/{hub_id}/invite-multiple',
  operationId: 'InviteMultipleUsersToHub',
};

export const tool: Tool = {
  name: 'invite_multiple_users_hub',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nInvite multiple users to join a hub, by email. If users already exist, they are added directly, otherwise, an invite is sent. Requires owner or admin permissions.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/hub_invite_multiple_users_response',\n  $defs: {\n    hub_invite_multiple_users_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'string'\n        },\n        metadata: {\n          type: 'object',\n          additionalProperties: true\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      hub_id: {
        type: 'string',
      },
      emails: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      projectRole: {
        type: 'string',
        enum: ['member', 'admin', 'owner'],
      },
      tags: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['hub_id'],
  },
  annotations: {},
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { hub_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.hub.inviteMultipleUsers(hub_id, body)),
    );
  } catch (error) {
    if (error instanceof Morta.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
