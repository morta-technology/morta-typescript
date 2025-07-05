# Morta TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export MORTA_API_KEY="My API Key"
npx -y morta-mcp@latest
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "morta_api": {
      "command": "npx",
      "args": ["-y", "morta-mcp", "--client=claude", "--tools=dynamic"],
      "env": {
        "MORTA_API_KEY": "My API Key"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "morta-mcp/server";

// import a specific tool
import createUser from "morta-mcp/tools/user/create-user";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [createUser, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `user`:

- `create_user` (`write`): Create a new user
- `retrieve_user` (`read`): Get information on a specific user
- `list_achievements_user` (`read`): Get the achievement badges of a user by their Firebase ID
- `list_contributions_user` (`read`): Get the number of contributions per day made by a user, identified by their Firebase ID
- `list_owner_hubs_user` (`read`): Get all hubs where the user is the owner or an admin
- `list_pinned_hubs_user` (`read`): Get the hubs pinned by a user identified by their Firebase ID
- `list_public_contributions_user` (`read`): Get the public contributions made by a user, identified by their Firebase ID
- `list_public_hubs_user` (`read`): Get all public hubs where the user is a member
- `list_templates_user` (`read`): Get all templates the currently logged in user has access to
- `retrieve_by_public_id_user` (`read`): Get information on a specific user by their public ID
- `retrieve_me_user` (`read`): Get info on the current user
- `search_user` (`read`): Search for users by hub or process
- `update_account_user` (`write`): Update the account details for the currently logged in user
- `update_profile_user` (`write`): Update the profile of the currently logged in user

### Resource `user.apikey`:

- `create_user_apikey` (`write`): Create an API key for the currently logged in user
- `update_user_apikey` (`write`): Update an API key for the currently logged in user
- `delete_user_apikey` (`write`): Delete an API key for the currently logged in user

### Resource `user.hubs`:

- `list_user_hubs` (`read`): Get all hubs the currently logged in user is part of
- `list_favourites_user_hubs` (`read`): Get all favourite hubs the currently logged in user is part of
- `list_tags_user_hubs` (`write`): Get all tags for current user in a hub
- `toggle_favourite_user_hubs` (`write`): Change whether the hub is a favourite for the currently logged in user
- `toggle_pin_user_hubs` (`write`): Change whether the hub is pinned for the currently logged in user

### Resource `user.tags`:

- `delete_user_tags` (`write`): Delete a tag from a specific user
- `add_user_tags` (`write`): Add a tag to a specific user
- `bulk_apply_user_tags` (`write`): Apply multiple tags to a specific user

### Resource `table`:

- `create_table` (`write`): Create a new document table within a hub.
- `retrieve_table` (`read`): Retrieve a table and its rows based on provided parameters
- `update_table` (`write`): Update the properties of an existing table.
- `delete_table` (`write`): Delete a specified table by its UUID.
- `check_usage_table` (`read`): Check and return a list of documents, table joins, and selects where the specified table is used.
- `create_index_table` (`write`): Create an index on one or more columns of a table to improve query performance.
- `delete_rows_table` (`write`): Delete all rows or specific rows from a table.
- `download_csv_table` (`read`): Download the data of a specified table as a CSV file.
- `duplicate_table` (`write`): Create a duplicate of an existing table along with its data, settings, and optionally linked tables.
- `get_csv_backup_table` (`read`): Get a CSV backup of a table at a specific date
- `get_duplicated_children_table` (`read`): Get duplicated children of a table
- `get_file_table` (`read`): Retrieve a file associated with a specific cell in a table.
- `get_statistics_table` (`read`): Retrieve statistics for table columns based on specified parameters.
- `list_columns_table` (`read`): Retrieve all active columns of a specific table.
- `list_joins_table` (`read`): Retrieve all joins associated with a table.
- `restore_table` (`write`): Restore a previously deleted table using its UUID.
- `stream_rows_table` (`read`): Stream the data of all rows for a specific table.
- `truncate_table` (`write`): Deletes all rows from the specified table.
- `update_cells_table` (`write`): Update specific cells in a table.

### Resource `table.column`:

- `create_table_column` (`write`): Add a new column to an existing table.
- `update_table_column` (`write`): Update the properties of a specific column in a table.
- `delete_table_column` (`write`): Delete a specific column from a table.
- `check_views_table_column` (`read`): Retrieve all views in which a specific table column is used.
- `get_distinct_values_table_column` (`read`): Retrieve a list of distinct (unique) values for a specified column in a table.
- `restore_table_column` (`write`): Restore a previously deleted column in a table.

### Resource `table.row`:

- `update_table_row` (`write`): Update existing rows in the specified table.
- `add_table_row` (`write`): Add a new row to the specified table.
- `get_rows_table_row` (`read`): Retrieve rows from a table based on provided query parameters.
- `upsert_table_row` (`write`): Add or update a row in the specified table based on a unique column value.

### Resource `table.join`:

- `create_table_join` (`write`): Create a join between two tables.
- `update_table_join` (`write`): Update an existing join on a table.
- `delete_table_join` (`write`): Delete a join from a table.

### Resource `table.sync`:

- `update_table_sync` (`write`): Update a synced table with a specified integration.
- `delete_integration_table_sync` (`write`): Remove a specific integration from a table.
- `get_sync_info_table_sync` (`read`): Retrieve the integration sync info of a given table.
- `retry_integration_sync_table_sync` (`read`): Retry a failed integration sync.
- `sync_with_integration_table_sync` (`write`): Sync a table with a specified integration.

### Resource `table.views`:

- `create_table_views` (`write`): Create a new view for a specific table.
- `retrieve_table_views` (`read`): Retrieve a specific view by its ID for a table.
- `update_table_views` (`write`): Update an existing view for a specific table.
- `list_table_views` (`read`): Retrieve all views associated with a specific table.
- `delete_table_views` (`write`): Delete a specific view of a table.
- `download_csv_table_views` (`read`): Download the data of a specific table view in CSV format.
- `duplicate_table_views` (`write`): Create a duplicate of an existing view for a specific table.
- `duplicate_default_table_views` (`write`): Create a duplicate of the default view for a specific table.
- `preview_row_table_views` (`write`): Preview the resulting row from given inputs in a specific table view.
- `set_default_table_views` (`write`): Designate a specific table view as the default view for the table.
- `stats_table_views` (`read`): Retrieve statistical data for columns in a specific table view.
- `stream_rows_table_views` (`read`): Stream the data of all rows for a specific table view.
- `update_cells_table_views` (`write`): Update specific cells in a table view.

### Resource `table.views.rows`:

- `update_views_table_rows` (`write`): Update existing rows in a specified table view.
- `list_views_table_rows` (`read`): Retrieve the actual data for a specific table view.
- `delete_views_table_rows` (`write`): Delete specific rows from a table view based on row IDs.
- `add_views_table_rows` (`write`): Insert new rows at the end of the specified table view.
- `upsert_views_table_rows` (`write`): Upsert (add or update) rows in a table view based on a specified column.

### Resource `table.views.columns`:

- `update_views_table_columns` (`write`): Update a specific column in a table view.
- `add_views_table_columns` (`write`): Add a new column to a specific table view.
- `ai_formula_helper_views_table_columns` (`write`): Get AI formula helper for a specific column in a table view.
- `distinct_views_table_columns` (`read`): Retrieve the unique/distinct values for a specific column in a table view.
- `formula_info_views_table_columns` (`read`): Retrieve formula information for a specific column in a table view.

### Resource `notifications`:

- `create_notifications` (`write`): Create a new notification for a specific hub.
- `update_notifications` (`write`): Update a specific notification by its ID.
- `delete_notifications` (`write`): Delete a specific notification by its ID.
- `list_event_types_notifications` (`read`): Retrieve a list of all supported event types for notifications.
- `list_events_notifications` (`read`): Retrieve all events associated with a specific resource, filtered by various criteria.

### Resource `comment_thread`:

- `create_comment_thread` (`write`): Create a new comment thread
- `retrieve_comment_thread` (`read`): Retrieve a specific comment thread by its ID
- `list_comment_thread` (`read`): Retrieve all comment threads associated with a specific reference
- `delete_comment_thread` (`write`): Delete a comment thread
- `get_stats_comment_thread` (`read`): Retrieve statistics for comment threads based on reference type and main reference ID
- `reopen_comment_thread` (`write`): Reopen a previously resolved comment thread
- `resolve_comment_thread` (`write`): Resolve a comment thread

### Resource `comment_thread.comment`:

- `create_comment_thread_comment` (`write`): Create a new comment within a specific comment thread
- `update_comment_thread_comment` (`write`): Update a specific comment within a comment thread
- `delete_comment_thread_comment` (`write`): Delete a specific comment within a comment thread

### Resource `permissions`:

- `create_permissions` (`write`): Create permissions for a specific resource (such as a table, table view, or process).
- `retrieve_permissions` (`read`): Retrieve permissions for a specified resource, such as a table, table view, or process.
- `update_permissions` (`write`): Update permissions for a specific resource (such as a table, table view, or process).
- `delete_permissions` (`write`): Delete permissions for a specific resource (such as a table, table view, or process).
- `create_all_permissions` (`write`): Create permissions for a specific resource (such as a table, table view, or process).
- `request_permissions` (`read`): Request permissions for a specific resource (such as a table, table view, or process).
- `retrieve_tag_permissions` (`read`): Retrieve a tag by its public ID.

### Resource `integrations`:

- `create_passthrough_integrations` (`write`): Make a passthrough API call to an external source system.
- `create_passthrough_download_integrations` (`write`): Make a passthrough API call to an external source system for downloading files.
