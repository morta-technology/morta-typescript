// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'morta-mcp/filtering';
import { Metadata, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'document',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/document/{document_id}',
  operationId: 'UpdateDocument',
};

export const tool: Tool = {
  name: 'update_document',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate an existing documents's details by document ID\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/document_update_response',\n  $defs: {\n    document_update_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/simple_document'\n        },\n        metadata: {\n          type: 'object',\n          additionalProperties: true\n        }\n      }\n    },\n    simple_document: {\n      type: 'object',\n      properties: {\n        allowComments: {\n          type: 'boolean'\n        },\n        children: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              name: {\n                type: 'string'\n              },\n              publicId: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        createdAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        deletedAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        description: {\n          type: 'object',\n          additionalProperties: true\n        },\n        expandByDefault: {\n          type: 'boolean'\n        },\n        isDeleted: {\n          type: 'boolean'\n        },\n        isTemplate: {\n          type: 'boolean'\n        },\n        lockedTemplate: {\n          type: 'boolean'\n        },\n        logo: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        projectName: {\n          type: 'string'\n        },\n        projectPublicId: {\n          type: 'string'\n        },\n        publicId: {\n          type: 'string'\n        },\n        type: {\n          type: 'string'\n        },\n        updatedAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        variables: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        variableValues: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      document_id: {
        type: 'string',
      },
      allowComments: {
        type: 'boolean',
      },
      context: {
        $ref: '#/$defs/base_request_context',
      },
      description: {
        anyOf: [
          {
            type: 'object',
            additionalProperties: true,
          },
          {
            $ref: '#/$defs/draftjs',
          },
        ],
      },
      expandByDefault: {
        type: 'boolean',
      },
      isTemplate: {
        type: 'boolean',
      },
      lockedTemplate: {
        type: 'boolean',
      },
      logo: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      plaintextDescription: {
        type: 'string',
      },
      type: {
        type: 'string',
      },
      variables: {
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
    required: ['document_id'],
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
      draftjs: {
        type: 'object',
        properties: {
          content: {
            type: 'object',
            properties: {
              blocks: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    data: {
                      type: 'object',
                      additionalProperties: true,
                    },
                    depth: {
                      type: 'integer',
                    },
                    entityRanges: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          key: {
                            type: 'integer',
                          },
                          length: {
                            type: 'integer',
                          },
                          offset: {
                            type: 'integer',
                          },
                        },
                        required: ['key', 'length', 'offset'],
                      },
                    },
                    inlineStyleRanges: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          length: {
                            type: 'integer',
                          },
                          offset: {
                            type: 'integer',
                          },
                          style: {
                            type: 'string',
                          },
                        },
                        required: ['length', 'offset', 'style'],
                      },
                    },
                    key: {
                      type: 'string',
                    },
                    text: {
                      type: 'string',
                    },
                    type: {
                      type: 'string',
                    },
                  },
                  required: ['data', 'depth', 'entityRanges', 'inlineStyleRanges', 'key', 'text', 'type'],
                },
              },
              entityMap: {
                type: 'object',
                additionalProperties: true,
              },
            },
            required: ['blocks', 'entityMap'],
          },
        },
        required: ['content'],
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { document_id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.document.update(document_id, body)));
};

export default { metadata, tool, handler };
