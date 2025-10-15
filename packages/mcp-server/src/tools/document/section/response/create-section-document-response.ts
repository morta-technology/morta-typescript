// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'morta-mcp/filtering';
import { Metadata, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'document.section.response',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/document/{document_id}/section/{document_section_id}/response',
  operationId: 'CreateDocumentResponse',
};

export const tool: Tool = {
  name: 'create_section_document_response',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new response for a document section.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/response_create_response',\n  $defs: {\n    response_create_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/document_response'\n        },\n        metadata: {\n          type: 'object',\n          additionalProperties: true\n        }\n      }\n    },\n    document_response: {\n      type: 'object',\n      properties: {\n        createdAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        deletedAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        enableSubmission: {\n          type: 'boolean'\n        },\n        isDeleted: {\n          type: 'boolean'\n        },\n        pdfIncludeResponse: {\n          type: 'boolean'\n        },\n        position: {\n          type: 'integer'\n        },\n        publicId: {\n          type: 'string'\n        },\n        resetAfterResponse: {\n          type: 'boolean'\n        },\n        response: {\n          type: 'object',\n          additionalProperties: true\n        },\n        responseDate: {\n          type: 'string',\n          format: 'date-time'\n        },\n        type: {\n          type: 'string'\n        },\n        typeOptions: {\n          type: 'object',\n          additionalProperties: true\n        },\n        updatedAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        user: {\n          $ref: '#/$defs/summary_user'\n        }\n      }\n    },\n    summary_user: {\n      type: 'object',\n      properties: {\n        email: {\n          type: 'string'\n        },\n        firebaseUserId: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        profilePicture: {\n          type: 'string'\n        },\n        publicId: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      document_id: {
        type: 'string',
      },
      document_section_id: {
        type: 'string',
      },
      context: {
        $ref: '#/$defs/base_request_context',
      },
      type: {
        type: 'string',
        enum: ['Flexible', 'File Upload', 'Table', 'Signature', 'Selection'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['document_id', 'document_section_id'],
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
    },
  },
  annotations: {},
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { document_section_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.document.section.response.create(document_section_id, body)),
  );
};

export default { metadata, tool, handler };
