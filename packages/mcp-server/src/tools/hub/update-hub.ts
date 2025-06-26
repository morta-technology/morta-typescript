// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'hub',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/hub/{hub_id}',
  operationId: 'UpdateHub',
};

export const tool: Tool = {
  name: 'update_hub',
  description: "Update an existing hub's details by hub ID",
  inputSchema: {
    type: 'object',
    properties: {
      hub_id: {
        type: 'string',
      },
      aiSearchEnabled: {
        type: 'boolean',
      },
      allowDocumentExport: {
        type: 'boolean',
      },
      allowTableExport: {
        type: 'boolean',
      },
      bulkUpdateText: {
        anyOf: [
          {
            type: 'object',
          },
          {
            type: 'object',
            properties: {
              replaceText: {
                type: 'string',
              },
              searchText: {
                type: 'string',
              },
            },
            required: ['replaceText', 'searchText'],
          },
        ],
      },
      defaultBanner: {
        type: 'string',
      },
      defaultDateFormat: {
        type: 'string',
      },
      defaultDatetimeFormat: {
        type: 'string',
      },
      defaultHeaderBackgroundColor: {
        type: 'string',
      },
      defaultHeaderTextColor: {
        type: 'string',
      },
      defaultProcessId: {
        type: 'string',
      },
      domainsAccess: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      fontColour: {
        type: 'string',
      },
      hideProcessCreated: {
        type: 'boolean',
      },
      logo: {
        type: 'string',
      },
      mfaRequired: {
        type: 'boolean',
      },
      name: {
        type: 'string',
      },
      primaryColour: {
        type: 'string',
      },
      processTitleAlignment: {
        type: 'string',
        enum: ['left', 'center', 'right'],
      },
      processTitleBold: {
        type: 'boolean',
      },
      processTitleColour: {
        type: 'string',
      },
      processTitleFontSize: {
        type: 'number',
      },
      processTitleItalic: {
        type: 'boolean',
      },
      processTitleUnderline: {
        type: 'boolean',
      },
      public: {
        type: 'boolean',
      },
      wordTemplate: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { hub_id, ...body } = args as any;
  return asTextContentResult(await client.hub.update(hub_id, body));
};

export default { metadata, tool, handler };
