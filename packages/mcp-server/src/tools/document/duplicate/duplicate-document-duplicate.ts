// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'document.duplicate',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/document/{document_id}/duplicate',
  operationId: 'DuplicateDocumentAsync',
};

export const tool: Tool = {
  name: 'duplicate_document_duplicate',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDuplicate an existing document, potentially in a different hub\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      document_id: {
        type: 'string',
      },
      targetProjectId: {
        type: 'string',
      },
      context: {
        $ref: '#/$defs/base_request_context',
      },
      duplicateLinkedTables: {
        type: 'boolean',
      },
      duplicatePermissions: {
        type: 'boolean',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['document_id', 'targetProjectId'],
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
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { document_id, ...body } = args as any;
  const response = await client.document.duplicate.duplicate(document_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
