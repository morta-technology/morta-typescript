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
  httpPath: '/v1/hub/{hub_id}/add_heading_styling',
  operationId: 'CreateHubHeadingStyling',
};

export const tool: Tool = {
  name: 'create_heading_styling_hub',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate new heading styling for a specific hub\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/hub_create_heading_styling_response',\n  $defs: {\n    hub_create_heading_styling_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/simple_hub'\n        },\n        metadata: {\n          type: 'object',\n          additionalProperties: true\n        }\n      }\n    },\n    simple_hub: {\n      type: 'object',\n      properties: {\n        aiSearchEnabled: {\n          type: 'boolean'\n        },\n        allowDocumentExport: {\n          type: 'boolean'\n        },\n        allowTableExport: {\n          type: 'boolean'\n        },\n        createdAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        defaultBanner: {\n          type: 'string'\n        },\n        defaultDateFormat: {\n          type: 'string'\n        },\n        defaultDatetimeFormat: {\n          type: 'string'\n        },\n        defaultHeaderBackgroundColor: {\n          type: 'string'\n        },\n        defaultHeaderTextColor: {\n          type: 'string'\n        },\n        defaultProcessId: {\n          type: 'string'\n        },\n        deletedAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        domainsAccess: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        fontColour: {\n          type: 'string'\n        },\n        headingStyles: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              bold: {\n                type: 'boolean'\n              },\n              colour: {\n                type: 'string'\n              },\n              fontSize: {\n                type: 'number'\n              },\n              italic: {\n                type: 'boolean'\n              },\n              level: {\n                type: 'integer'\n              },\n              numberingStyle: {\n                type: 'integer'\n              },\n              publicId: {\n                type: 'string'\n              },\n              startAt0: {\n                type: 'boolean'\n              },\n              underline: {\n                type: 'boolean'\n              }\n            }\n          }\n        },\n        hideProcessCreated: {\n          type: 'boolean'\n        },\n        image: {\n          type: 'string'\n        },\n        isDeleted: {\n          type: 'boolean'\n        },\n        logo: {\n          type: 'string'\n        },\n        mfaRequired: {\n          type: 'boolean'\n        },\n        name: {\n          type: 'string'\n        },\n        primaryColour: {\n          type: 'string'\n        },\n        processTitleAlignment: {\n          type: 'string'\n        },\n        processTitleBold: {\n          type: 'boolean'\n        },\n        processTitleColour: {\n          type: 'string'\n        },\n        processTitleFontSize: {\n          type: 'number'\n        },\n        processTitleItalic: {\n          type: 'boolean'\n        },\n        processTitleUnderline: {\n          type: 'boolean'\n        },\n        projectList: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              createdAt: {\n                type: 'string',\n                format: 'date-time'\n              },\n              favourite: {\n                type: 'boolean'\n              },\n              projectRole: {\n                type: 'string'\n              },\n              updatedAt: {\n                type: 'string',\n                format: 'date-time'\n              },\n              user: {\n                type: 'object',\n                properties: {\n                  email: {\n                    type: 'string'\n                  },\n                  firebaseUserId: {\n                    type: 'string'\n                  },\n                  kind: {\n                    type: 'string'\n                  },\n                  name: {\n                    type: 'string'\n                  },\n                  publicId: {\n                    type: 'string'\n                  }\n                }\n              }\n            }\n          }\n        },\n        public: {\n          type: 'boolean'\n        },\n        publicId: {\n          type: 'string'\n        },\n        updatedAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        wordTemplate: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      hub_id: {
        type: 'string',
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.hub.createHeadingStyling(hub_id)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
