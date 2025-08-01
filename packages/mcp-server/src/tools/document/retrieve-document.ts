// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'morta-mcp/filtering';
import { Metadata, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'document',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/document/{document_id}',
  operationId: 'GetDocument',
};

export const tool: Tool = {
  name: 'retrieve_document',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve detailed information of a specific document by its UUID\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/morta_document'\n    },\n    metadata: {\n      type: 'object'\n    }\n  },\n  $defs: {\n    morta_document: {\n      type: 'object',\n      properties: {\n        allowComments: {\n          type: 'boolean'\n        },\n        children: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/document_section_1'\n          }\n        },\n        createdAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        deletedAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        description: {\n          type: 'object'\n        },\n        expandByDefault: {\n          type: 'boolean'\n        },\n        isDeleted: {\n          type: 'boolean'\n        },\n        isTemplate: {\n          type: 'boolean'\n        },\n        lockedTemplate: {\n          type: 'boolean'\n        },\n        logo: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        projectName: {\n          type: 'string'\n        },\n        projectPublicId: {\n          type: 'string'\n        },\n        publicId: {\n          type: 'string'\n        },\n        type: {\n          type: 'string'\n        },\n        updatedAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        variables: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        variableValues: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        }\n      }\n    },\n    document_section_1: {\n      type: 'object',\n      properties: {\n        children: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/document_section_1'\n          }\n        },\n        createdAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        deletedAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        description: {\n          $ref: '#/$defs/draftjs'\n        },\n        isDeleted: {\n          type: 'boolean'\n        },\n        name: {\n          type: 'string'\n        },\n        openCommentThreads: {\n          type: 'integer'\n        },\n        pageBreakBefore: {\n          type: 'boolean'\n        },\n        parentId: {\n          type: 'string'\n        },\n        pdfIncludeDescription: {\n          type: 'boolean'\n        },\n        pdfIncludeSection: {\n          type: 'boolean'\n        },\n        position: {\n          type: 'integer'\n        },\n        publicId: {\n          type: 'string'\n        },\n        responses: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/document_response'\n          }\n        }\n      }\n    },\n    draftjs: {\n      type: 'object',\n      properties: {\n        content: {\n          type: 'object',\n          properties: {\n            blocks: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  data: {\n                    type: 'object'\n                  },\n                  depth: {\n                    type: 'integer'\n                  },\n                  entityRanges: {\n                    type: 'array',\n                    items: {\n                      type: 'object',\n                      properties: {\n                        key: {\n                          type: 'integer'\n                        },\n                        length: {\n                          type: 'integer'\n                        },\n                        offset: {\n                          type: 'integer'\n                        }\n                      },\n                      required: [                        'key',\n                        'length',\n                        'offset'\n                      ]\n                    }\n                  },\n                  inlineStyleRanges: {\n                    type: 'array',\n                    items: {\n                      type: 'object',\n                      properties: {\n                        length: {\n                          type: 'integer'\n                        },\n                        offset: {\n                          type: 'integer'\n                        },\n                        style: {\n                          type: 'string'\n                        }\n                      },\n                      required: [                        'length',\n                        'offset',\n                        'style'\n                      ]\n                    }\n                  },\n                  key: {\n                    type: 'string'\n                  },\n                  text: {\n                    type: 'string'\n                  },\n                  type: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'data',\n                  'depth',\n                  'entityRanges',\n                  'inlineStyleRanges',\n                  'key',\n                  'text',\n                  'type'\n                ]\n              }\n            },\n            entityMap: {\n              type: 'object'\n            }\n          },\n          required: [            'blocks',\n            'entityMap'\n          ]\n        }\n      },\n      required: [        'content'\n      ]\n    },\n    document_response: {\n      type: 'object',\n      properties: {\n        createdAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        deletedAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        enableSubmission: {\n          type: 'boolean'\n        },\n        isDeleted: {\n          type: 'boolean'\n        },\n        pdfIncludeResponse: {\n          type: 'boolean'\n        },\n        position: {\n          type: 'integer'\n        },\n        publicId: {\n          type: 'string'\n        },\n        resetAfterResponse: {\n          type: 'boolean'\n        },\n        response: {\n          type: 'object'\n        },\n        responseDate: {\n          type: 'string',\n          format: 'date-time'\n        },\n        type: {\n          type: 'string'\n        },\n        typeOptions: {\n          type: 'object'\n        },\n        updatedAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        user: {\n          $ref: '#/$defs/summary_user'\n        }\n      }\n    },\n    summary_user: {\n      type: 'object',\n      properties: {\n        email: {\n          type: 'string'\n        },\n        firebaseUserId: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        profilePicture: {\n          type: 'string'\n        },\n        publicId: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      document_id: {
        type: 'string',
      },
      exclude_children: {
        type: 'boolean',
        description: 'Flag to exclude child elements from the document response',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['document_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { document_id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.document.retrieve(document_id, body)));
};

export default { metadata, tool, handler };
