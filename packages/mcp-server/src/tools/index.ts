// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import create_user from './user/create-user';
import retrieve_user from './user/retrieve-user';
import list_achievements_user from './user/list-achievements-user';
import list_contributions_user from './user/list-contributions-user';
import list_owner_hubs_user from './user/list-owner-hubs-user';
import list_pinned_hubs_user from './user/list-pinned-hubs-user';
import list_public_contributions_user from './user/list-public-contributions-user';
import list_public_hubs_user from './user/list-public-hubs-user';
import list_templates_user from './user/list-templates-user';
import retrieve_by_public_id_user from './user/retrieve-by-public-id-user';
import retrieve_me_user from './user/retrieve-me-user';
import search_user from './user/search-user';
import update_account_user from './user/update-account-user';
import update_profile_user from './user/update-profile-user';
import create_user_apikey from './user/apikey/create-user-apikey';
import update_user_apikey from './user/apikey/update-user-apikey';
import delete_user_apikey from './user/apikey/delete-user-apikey';
import list_user_hubs from './user/hubs/list-user-hubs';
import list_favourites_user_hubs from './user/hubs/list-favourites-user-hubs';
import list_tags_user_hubs from './user/hubs/list-tags-user-hubs';
import toggle_favourite_user_hubs from './user/hubs/toggle-favourite-user-hubs';
import toggle_pin_user_hubs from './user/hubs/toggle-pin-user-hubs';
import delete_user_tags from './user/tags/delete-user-tags';
import add_user_tags from './user/tags/add-user-tags';
import bulk_apply_user_tags from './user/tags/bulk-apply-user-tags';
import create_hub from './hub/create-hub';
import retrieve_hub from './hub/retrieve-hub';
import update_hub from './hub/update-hub';
import delete_hub from './hub/delete-hub';
import ai_search_hub from './hub/ai-search-hub';
import change_user_role_hub from './hub/change-user-role-hub';
import create_heading_styling_hub from './hub/create-heading-styling-hub';
import create_knowledge_base_hub from './hub/create-knowledge-base-hub';
import delete_top_heading_styling_hub from './hub/delete-top-heading-styling-hub';
import duplicate_hub from './hub/duplicate-hub';
import get_ai_answers_hub from './hub/get-ai-answers-hub';
import get_deleted_documents_hub from './hub/get-deleted-documents-hub';
import get_deleted_tables_hub from './hub/get-deleted-tables-hub';
import get_documents_hub from './hub/get-documents-hub';
import get_duplicated_children_hub from './hub/get-duplicated-children-hub';
import get_invited_members_hub from './hub/get-invited-members-hub';
import get_members_hub from './hub/get-members-hub';
import get_notifications_hub from './hub/get-notifications-hub';
import get_resources_hub from './hub/get-resources-hub';
import get_sent_notifications_hub from './hub/get-sent-notifications-hub';
import get_tables_hub from './hub/get-tables-hub';
import get_tags_hub from './hub/get-tags-hub';
import get_variables_hub from './hub/get-variables-hub';
import invite_multiple_users_hub from './hub/invite-multiple-users-hub';
import permanently_delete_hub from './hub/permanently-delete-hub';
import remove_user_hub from './hub/remove-user-hub';
import request_contributor_access_hub from './hub/request-contributor-access-hub';
import restore_hub from './hub/restore-hub';
import search_resources_hub from './hub/search-resources-hub';
import set_column_coloring_hub from './hub/set-column-coloring-hub';
import set_column_format_hub from './hub/set-column-format-hub';
import train_knowledge_base_hub from './hub/train-knowledge-base-hub';
import update_heading_styling_hub from './hub/update-heading-styling-hub';
import upload_template_hub from './hub/upload-template-hub';
import vote_hub_ai_answer from './hub/ai-answer/vote-hub-ai-answer';
import create_hub_invite from './hub/invite/create-hub-invite';
import update_hub_invite from './hub/invite/update-hub-invite';
import delete_hub_invite from './hub/invite/delete-hub-invite';
import resend_hub_invite from './hub/invite/resend-hub-invite';
import create_hub_secrets from './hub/secrets/create-hub-secrets';
import update_hub_secrets from './hub/secrets/update-hub-secrets';
import list_hub_secrets from './hub/secrets/list-hub-secrets';
import delete_hub_secrets from './hub/secrets/delete-hub-secrets';
import create_table from './table/create-table';
import retrieve_table from './table/retrieve-table';
import update_table from './table/update-table';
import delete_table from './table/delete-table';
import check_usage_table from './table/check-usage-table';
import create_index_table from './table/create-index-table';
import delete_rows_table from './table/delete-rows-table';
import download_csv_table from './table/download-csv-table';
import duplicate_table from './table/duplicate-table';
import get_csv_backup_table from './table/get-csv-backup-table';
import get_duplicated_children_table from './table/get-duplicated-children-table';
import get_file_table from './table/get-file-table';
import get_statistics_table from './table/get-statistics-table';
import list_columns_table from './table/list-columns-table';
import list_joins_table from './table/list-joins-table';
import restore_table from './table/restore-table';
import stream_rows_table from './table/stream-rows-table';
import truncate_table from './table/truncate-table';
import update_cells_table from './table/update-cells-table';
import create_table_column from './table/column/create-table-column';
import update_table_column from './table/column/update-table-column';
import delete_table_column from './table/column/delete-table-column';
import check_views_table_column from './table/column/check-views-table-column';
import get_distinct_values_table_column from './table/column/get-distinct-values-table-column';
import restore_table_column from './table/column/restore-table-column';
import update_table_row from './table/row/update-table-row';
import add_table_row from './table/row/add-table-row';
import get_rows_table_row from './table/row/get-rows-table-row';
import upsert_table_row from './table/row/upsert-table-row';
import create_table_join from './table/join/create-table-join';
import update_table_join from './table/join/update-table-join';
import delete_table_join from './table/join/delete-table-join';
import update_table_sync from './table/sync/update-table-sync';
import delete_integration_table_sync from './table/sync/delete-integration-table-sync';
import get_sync_info_table_sync from './table/sync/get-sync-info-table-sync';
import retry_integration_sync_table_sync from './table/sync/retry-integration-sync-table-sync';
import sync_with_integration_table_sync from './table/sync/sync-with-integration-table-sync';
import create_table_views from './table/views/create-table-views';
import retrieve_table_views from './table/views/retrieve-table-views';
import update_table_views from './table/views/update-table-views';
import list_table_views from './table/views/list-table-views';
import delete_table_views from './table/views/delete-table-views';
import download_csv_table_views from './table/views/download-csv-table-views';
import duplicate_table_views from './table/views/duplicate-table-views';
import duplicate_default_table_views from './table/views/duplicate-default-table-views';
import preview_row_table_views from './table/views/preview-row-table-views';
import set_default_table_views from './table/views/set-default-table-views';
import stats_table_views from './table/views/stats-table-views';
import stream_rows_table_views from './table/views/stream-rows-table-views';
import update_cells_table_views from './table/views/update-cells-table-views';
import update_views_table_rows from './table/views/rows/update-views-table-rows';
import list_views_table_rows from './table/views/rows/list-views-table-rows';
import delete_views_table_rows from './table/views/rows/delete-views-table-rows';
import add_views_table_rows from './table/views/rows/add-views-table-rows';
import upsert_views_table_rows from './table/views/rows/upsert-views-table-rows';
import update_views_table_columns from './table/views/columns/update-views-table-columns';
import add_views_table_columns from './table/views/columns/add-views-table-columns';
import ai_formula_helper_views_table_columns from './table/views/columns/ai-formula-helper-views-table-columns';
import distinct_views_table_columns from './table/views/columns/distinct-views-table-columns';
import formula_info_views_table_columns from './table/views/columns/formula-info-views-table-columns';
import create_document from './document/create-document';
import retrieve_document from './document/retrieve-document';
import update_document from './document/update-document';
import delete_document from './document/delete-document';
import create_multiple_sections_document from './document/create-multiple-sections-document';
import create_sections_document from './document/create-sections-document';
import export_document from './document/export-document';
import get_deleted_sections_document from './document/get-deleted-sections-document';
import get_duplicated_children_document from './document/get-duplicated-children-document';
import restore_document from './document/restore-document';
import sync_template_document from './document/sync-template-document';
import update_multiple_sections_document from './document/update-multiple-sections-document';
import update_section_order_document from './document/update-section-order-document';
import update_views_permissions_document from './document/update-views-permissions-document';
import duplicate_document_duplicate from './document/duplicate/duplicate-document-duplicate';
import global_document_duplicate from './document/duplicate/global-document-duplicate';
import create_document_section from './document/section/create-document-section';
import retrieve_document_section from './document/section/retrieve-document-section';
import update_document_section from './document/section/update-document-section';
import delete_document_section from './document/section/delete-document-section';
import duplicate_document_section from './document/section/duplicate-document-section';
import duplicate_async_document_section from './document/section/duplicate-async-document-section';
import restore_document_section from './document/section/restore-document-section';
import create_section_document_response from './document/section/response/create-section-document-response';
import update_section_document_response from './document/section/response/update-section-document-response';
import delete_section_document_response from './document/section/response/delete-section-document-response';
import reset_section_document_response from './document/section/response/reset-section-document-response';
import restore_section_document_response from './document/section/response/restore-section-document-response';
import submit_section_document_response from './document/section/response/submit-section-document-response';
import create_notifications from './notifications/create-notifications';
import update_notifications from './notifications/update-notifications';
import delete_notifications from './notifications/delete-notifications';
import list_event_types_notifications from './notifications/list-event-types-notifications';
import list_events_notifications from './notifications/list-events-notifications';
import create_comment_thread from './comment-thread/create-comment-thread';
import retrieve_comment_thread from './comment-thread/retrieve-comment-thread';
import list_comment_thread from './comment-thread/list-comment-thread';
import delete_comment_thread from './comment-thread/delete-comment-thread';
import get_stats_comment_thread from './comment-thread/get-stats-comment-thread';
import reopen_comment_thread from './comment-thread/reopen-comment-thread';
import resolve_comment_thread from './comment-thread/resolve-comment-thread';
import create_comment_thread_comment from './comment-thread/comment/create-comment-thread-comment';
import update_comment_thread_comment from './comment-thread/comment/update-comment-thread-comment';
import delete_comment_thread_comment from './comment-thread/comment/delete-comment-thread-comment';
import create_permissions from './permissions/create-permissions';
import retrieve_permissions from './permissions/retrieve-permissions';
import update_permissions from './permissions/update-permissions';
import delete_permissions from './permissions/delete-permissions';
import create_all_permissions from './permissions/create-all-permissions';
import request_permissions from './permissions/request-permissions';
import retrieve_tag_permissions from './permissions/retrieve-tag-permissions';
import create_passthrough_integrations from './integrations/create-passthrough-integrations';
import create_passthrough_download_integrations from './integrations/create-passthrough-download-integrations';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(create_user);
addEndpoint(retrieve_user);
addEndpoint(list_achievements_user);
addEndpoint(list_contributions_user);
addEndpoint(list_owner_hubs_user);
addEndpoint(list_pinned_hubs_user);
addEndpoint(list_public_contributions_user);
addEndpoint(list_public_hubs_user);
addEndpoint(list_templates_user);
addEndpoint(retrieve_by_public_id_user);
addEndpoint(retrieve_me_user);
addEndpoint(search_user);
addEndpoint(update_account_user);
addEndpoint(update_profile_user);
addEndpoint(create_user_apikey);
addEndpoint(update_user_apikey);
addEndpoint(delete_user_apikey);
addEndpoint(list_user_hubs);
addEndpoint(list_favourites_user_hubs);
addEndpoint(list_tags_user_hubs);
addEndpoint(toggle_favourite_user_hubs);
addEndpoint(toggle_pin_user_hubs);
addEndpoint(delete_user_tags);
addEndpoint(add_user_tags);
addEndpoint(bulk_apply_user_tags);
addEndpoint(create_hub);
addEndpoint(retrieve_hub);
addEndpoint(update_hub);
addEndpoint(delete_hub);
addEndpoint(ai_search_hub);
addEndpoint(change_user_role_hub);
addEndpoint(create_heading_styling_hub);
addEndpoint(create_knowledge_base_hub);
addEndpoint(delete_top_heading_styling_hub);
addEndpoint(duplicate_hub);
addEndpoint(get_ai_answers_hub);
addEndpoint(get_deleted_documents_hub);
addEndpoint(get_deleted_tables_hub);
addEndpoint(get_documents_hub);
addEndpoint(get_duplicated_children_hub);
addEndpoint(get_invited_members_hub);
addEndpoint(get_members_hub);
addEndpoint(get_notifications_hub);
addEndpoint(get_resources_hub);
addEndpoint(get_sent_notifications_hub);
addEndpoint(get_tables_hub);
addEndpoint(get_tags_hub);
addEndpoint(get_variables_hub);
addEndpoint(invite_multiple_users_hub);
addEndpoint(permanently_delete_hub);
addEndpoint(remove_user_hub);
addEndpoint(request_contributor_access_hub);
addEndpoint(restore_hub);
addEndpoint(search_resources_hub);
addEndpoint(set_column_coloring_hub);
addEndpoint(set_column_format_hub);
addEndpoint(train_knowledge_base_hub);
addEndpoint(update_heading_styling_hub);
addEndpoint(upload_template_hub);
addEndpoint(vote_hub_ai_answer);
addEndpoint(create_hub_invite);
addEndpoint(update_hub_invite);
addEndpoint(delete_hub_invite);
addEndpoint(resend_hub_invite);
addEndpoint(create_hub_secrets);
addEndpoint(update_hub_secrets);
addEndpoint(list_hub_secrets);
addEndpoint(delete_hub_secrets);
addEndpoint(create_table);
addEndpoint(retrieve_table);
addEndpoint(update_table);
addEndpoint(delete_table);
addEndpoint(check_usage_table);
addEndpoint(create_index_table);
addEndpoint(delete_rows_table);
addEndpoint(download_csv_table);
addEndpoint(duplicate_table);
addEndpoint(get_csv_backup_table);
addEndpoint(get_duplicated_children_table);
addEndpoint(get_file_table);
addEndpoint(get_statistics_table);
addEndpoint(list_columns_table);
addEndpoint(list_joins_table);
addEndpoint(restore_table);
addEndpoint(stream_rows_table);
addEndpoint(truncate_table);
addEndpoint(update_cells_table);
addEndpoint(create_table_column);
addEndpoint(update_table_column);
addEndpoint(delete_table_column);
addEndpoint(check_views_table_column);
addEndpoint(get_distinct_values_table_column);
addEndpoint(restore_table_column);
addEndpoint(update_table_row);
addEndpoint(add_table_row);
addEndpoint(get_rows_table_row);
addEndpoint(upsert_table_row);
addEndpoint(create_table_join);
addEndpoint(update_table_join);
addEndpoint(delete_table_join);
addEndpoint(update_table_sync);
addEndpoint(delete_integration_table_sync);
addEndpoint(get_sync_info_table_sync);
addEndpoint(retry_integration_sync_table_sync);
addEndpoint(sync_with_integration_table_sync);
addEndpoint(create_table_views);
addEndpoint(retrieve_table_views);
addEndpoint(update_table_views);
addEndpoint(list_table_views);
addEndpoint(delete_table_views);
addEndpoint(download_csv_table_views);
addEndpoint(duplicate_table_views);
addEndpoint(duplicate_default_table_views);
addEndpoint(preview_row_table_views);
addEndpoint(set_default_table_views);
addEndpoint(stats_table_views);
addEndpoint(stream_rows_table_views);
addEndpoint(update_cells_table_views);
addEndpoint(update_views_table_rows);
addEndpoint(list_views_table_rows);
addEndpoint(delete_views_table_rows);
addEndpoint(add_views_table_rows);
addEndpoint(upsert_views_table_rows);
addEndpoint(update_views_table_columns);
addEndpoint(add_views_table_columns);
addEndpoint(ai_formula_helper_views_table_columns);
addEndpoint(distinct_views_table_columns);
addEndpoint(formula_info_views_table_columns);
addEndpoint(create_document);
addEndpoint(retrieve_document);
addEndpoint(update_document);
addEndpoint(delete_document);
addEndpoint(create_multiple_sections_document);
addEndpoint(create_sections_document);
addEndpoint(export_document);
addEndpoint(get_deleted_sections_document);
addEndpoint(get_duplicated_children_document);
addEndpoint(restore_document);
addEndpoint(sync_template_document);
addEndpoint(update_multiple_sections_document);
addEndpoint(update_section_order_document);
addEndpoint(update_views_permissions_document);
addEndpoint(duplicate_document_duplicate);
addEndpoint(global_document_duplicate);
addEndpoint(create_document_section);
addEndpoint(retrieve_document_section);
addEndpoint(update_document_section);
addEndpoint(delete_document_section);
addEndpoint(duplicate_document_section);
addEndpoint(duplicate_async_document_section);
addEndpoint(restore_document_section);
addEndpoint(create_section_document_response);
addEndpoint(update_section_document_response);
addEndpoint(delete_section_document_response);
addEndpoint(reset_section_document_response);
addEndpoint(restore_section_document_response);
addEndpoint(submit_section_document_response);
addEndpoint(create_notifications);
addEndpoint(update_notifications);
addEndpoint(delete_notifications);
addEndpoint(list_event_types_notifications);
addEndpoint(list_events_notifications);
addEndpoint(create_comment_thread);
addEndpoint(retrieve_comment_thread);
addEndpoint(list_comment_thread);
addEndpoint(delete_comment_thread);
addEndpoint(get_stats_comment_thread);
addEndpoint(reopen_comment_thread);
addEndpoint(resolve_comment_thread);
addEndpoint(create_comment_thread_comment);
addEndpoint(update_comment_thread_comment);
addEndpoint(delete_comment_thread_comment);
addEndpoint(create_permissions);
addEndpoint(retrieve_permissions);
addEndpoint(update_permissions);
addEndpoint(delete_permissions);
addEndpoint(create_all_permissions);
addEndpoint(request_permissions);
addEndpoint(retrieve_tag_permissions);
addEndpoint(create_passthrough_integrations);
addEndpoint(create_passthrough_download_integrations);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
