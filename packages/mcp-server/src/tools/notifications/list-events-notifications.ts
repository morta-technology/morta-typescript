// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'morta-mcp/filtering';
import { Metadata, asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Morta from 'morta';

export const metadata: Metadata = {
  resource: 'notifications',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/notifications/events/{resource_id}',
  operationId: 'GetEvents',
};

export const tool: Tool = {
  name: 'list_events_notifications',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve all events associated with a specific resource, filtered by various criteria.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/event'\n      }\n    },\n    metadata: {\n      type: 'object'\n    }\n  },\n  $defs: {\n    event: {\n      type: 'object',\n      properties: {\n        change: {\n          type: 'object'\n        },\n        changeId: {\n          type: 'string'\n        },\n        channel: {\n          type: 'string'\n        },\n        context: {\n          type: 'object'\n        },\n        contextProcessId: {\n          type: 'integer'\n        },\n        contextProcessResponseId: {\n          type: 'integer'\n        },\n        contextProcessSectionId: {\n          type: 'integer'\n        },\n        contextTableColumnId: {\n          type: 'integer'\n        },\n        contextTableId: {\n          type: 'integer'\n        },\n        contextTableViewId: {\n          type: 'integer'\n        },\n        createdAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        projectId: {\n          type: 'integer'\n        },\n        publicId: {\n          type: 'string'\n        },\n        resource: {\n          type: 'string'\n        },\n        resourcePublicId: {\n          type: 'string'\n        },\n        userId: {\n          type: 'integer'\n        },\n        verb: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      resource_id: {
        type: 'string',
      },
      type: {
        type: 'string',
        description: 'The type of the resource (e.g., user, process, table, project).',
        enum: ['process', 'process_section', 'process_response', 'table', 'project', 'user'],
      },
      end_date: {
        type: 'string',
        description: 'Optional end date to filter the events.',
        format: 'date-time',
      },
      page: {
        type: 'integer',
        description: 'Page number for pagination.',
      },
      search: {
        type: 'string',
        description: 'Optional search term to filter the events.',
      },
      start_date: {
        type: 'string',
        description: 'Optional start date to filter the events.',
        format: 'date-time',
      },
      users: {
        type: 'array',
        description: 'Optional UUID of a user to filter the events.',
        items: {
          type: 'string',
        },
      },
      verb: {
        type: 'array',
        description: 'Optional list of verbs to filter the events.',
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
    required: ['resource_id', 'type'],
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { resource_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.notifications.listEvents(resource_id, body)),
  );
};

export default { metadata, tool, handler };
