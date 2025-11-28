// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'document',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/document/{document_id}/update-multiple-section',
  operationId: 'UpdateMultipleDocumentSections',
};

export const tool: Tool = {
  name: 'update_multiple_sections_document',
  description: 'Update multiple existing document sections.',
  inputSchema: {
    type: 'object',
    properties: {
      document_id: {
        type: 'string',
      },
      sections: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            publicId: {
              type: 'string',
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
            name: {
              type: 'string',
            },
            pageBreakBefore: {
              type: 'boolean',
            },
            pdfIncludeDescription: {
              type: 'boolean',
            },
            pdfIncludeSection: {
              type: 'boolean',
            },
            plaintextDescription: {
              type: 'string',
            },
          },
          required: ['publicId'],
        },
      },
      context: {
        $ref: '#/$defs/base_request_context',
      },
    },
    required: ['document_id', 'sections'],
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
  const { document_id, ...body } = args as any;
  return asTextContentResult(await client.document.updateMultipleSections(document_id, body));
};

export default { metadata, tool, handler };
