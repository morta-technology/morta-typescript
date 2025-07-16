// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'morta-mcp/filtering';
import { Metadata, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate an existing hub's details by hub ID\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/simple_hub'\n    },\n    metadata: {\n      type: 'object'\n    }\n  },\n  required: [],\n  $defs: {\n    simple_hub: {\n      type: 'object',\n      properties: {\n        aiSearchEnabled: {\n          type: 'boolean'\n        },\n        allowDocumentExport: {\n          type: 'boolean'\n        },\n        allowTableExport: {\n          type: 'boolean'\n        },\n        createdAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        defaultBanner: {\n          type: 'string'\n        },\n        defaultDateFormat: {\n          type: 'string'\n        },\n        defaultDatetimeFormat: {\n          type: 'string'\n        },\n        defaultHeaderBackgroundColor: {\n          type: 'string'\n        },\n        defaultHeaderTextColor: {\n          type: 'string'\n        },\n        defaultProcessId: {\n          type: 'string'\n        },\n        deletedAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        domainsAccess: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        fontColour: {\n          type: 'string'\n        },\n        headingStyles: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              bold: {\n                type: 'boolean'\n              },\n              colour: {\n                type: 'string'\n              },\n              fontSize: {\n                type: 'number'\n              },\n              italic: {\n                type: 'boolean'\n              },\n              level: {\n                type: 'integer'\n              },\n              numberingStyle: {\n                type: 'integer'\n              },\n              publicId: {\n                type: 'string'\n              },\n              startAt0: {\n                type: 'boolean'\n              },\n              underline: {\n                type: 'boolean'\n              }\n            },\n            required: []\n          }\n        },\n        hideProcessCreated: {\n          type: 'boolean'\n        },\n        image: {\n          type: 'string'\n        },\n        isDeleted: {\n          type: 'boolean'\n        },\n        logo: {\n          type: 'string'\n        },\n        mfaRequired: {\n          type: 'boolean'\n        },\n        name: {\n          type: 'string'\n        },\n        primaryColour: {\n          type: 'string'\n        },\n        processTitleAlignment: {\n          type: 'string'\n        },\n        processTitleBold: {\n          type: 'boolean'\n        },\n        processTitleColour: {\n          type: 'string'\n        },\n        processTitleFontSize: {\n          type: 'number'\n        },\n        processTitleItalic: {\n          type: 'boolean'\n        },\n        processTitleUnderline: {\n          type: 'boolean'\n        },\n        projectList: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              createdAt: {\n                type: 'string',\n                format: 'date-time'\n              },\n              favourite: {\n                type: 'boolean'\n              },\n              projectRole: {\n                type: 'string'\n              },\n              updatedAt: {\n                type: 'string',\n                format: 'date-time'\n              },\n              user: {\n                type: 'object',\n                properties: {\n                  email: {\n                    type: 'string'\n                  },\n                  firebaseUserId: {\n                    type: 'string'\n                  },\n                  kind: {\n                    type: 'string'\n                  },\n                  name: {\n                    type: 'string'\n                  },\n                  publicId: {\n                    type: 'string'\n                  }\n                },\n                required: []\n              }\n            },\n            required: []\n          }\n        },\n        public: {\n          type: 'boolean'\n        },\n        publicId: {\n          type: 'string'\n        },\n        updatedAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        wordTemplate: {\n          type: 'string'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
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
  const { hub_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.hub.update(hub_id, body)));
};

export default { metadata, tool, handler };
