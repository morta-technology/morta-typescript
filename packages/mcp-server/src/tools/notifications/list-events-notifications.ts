// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'morta-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
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
  description: 'Retrieve all events associated with a specific resource, filtered by various criteria.',
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
    },
  },
};

export const handler = async (client: Morta, args: Record<string, unknown> | undefined) => {
  const { resource_id, ...body } = args as any;
  return asTextContentResult(await client.notifications.listEvents(resource_id, body));
};

export default { metadata, tool, handler };
