// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'document',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/document/{document_id}/multiple-section',
  operationId: 'CreateMultipleDocumentSections',
};

export const tool: Tool = {
  name: 'create_multiple_sections_document',
  description:
    'Create multiple new sections within a specified document, each with an optional parent section',
  inputSchema: {
    type: 'object',
    properties: {
      document_id: {
        type: 'string',
      },
      sections: {
        type: 'array',
        items: {
          $ref: '#/$defs/create_document_section',
        },
      },
      context: {
        $ref: '#/$defs/base_request_context',
      },
    },
    $defs: {
      create_document_section: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
          },
          context: {
            $ref: '#/$defs/base_request_context',
          },
          description: {
            anyOf: [
              {
                $ref: '#/$defs/draftjs',
              },
              {
                type: 'object',
              },
            ],
          },
          parentId: {
            type: 'string',
          },
          plaintextDescription: {
            type: 'string',
          },
        },
        required: ['name'],
      },
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
        required: [],
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
              },
            },
            required: ['blocks', 'entityMap'],
          },
        },
        required: ['content'],
      },
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { document_id, ...body } = args as any;
  return asTextContentResult(await client.document.createMultipleSections(document_id, body));
};

export default { metadata, tool, handler };
