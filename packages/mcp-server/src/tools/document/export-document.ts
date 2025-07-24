// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'document',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/document/{document_id}/export',
  operationId: 'ExportDocument',
};

export const tool: Tool = {
  name: 'export_document',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nExport a specific document by its UUID\n\n# Response Schema\n```json\n{\n  type: 'string'\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      document_id: {
        type: 'string',
      },
      page_format: {
        type: 'string',
        description: 'Page format for the export',
        enum: ['A1', 'A2', 'A3', 'A4', 'letter', 'legal'],
      },
      page_orientation: {
        type: 'string',
        description: 'Page orientation for the export',
        enum: ['portrait', 'landscape'],
      },
      table_links: {
        type: 'boolean',
        description: 'Include table links in the export',
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
  const { document_id, ...body } = args as any;
  return asBinaryContentResult(await client.document.export(document_id, body));
};

export default { metadata, tool, handler };
