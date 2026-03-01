// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.user.create',
    fullyQualifiedName: 'user.create',
    httpMethod: 'post',
    httpPath: '/v1/user',
  },
  {
    clientCallName: 'client.user.retrieve',
    fullyQualifiedName: 'user.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/user/{firebase_id}',
  },
  {
    clientCallName: 'client.user.listAchievements',
    fullyQualifiedName: 'user.listAchievements',
    httpMethod: 'get',
    httpPath: '/v1/user/{firebase_id}/achievements',
  },
  {
    clientCallName: 'client.user.listContributions',
    fullyQualifiedName: 'user.listContributions',
    httpMethod: 'get',
    httpPath: '/v1/user/{firebase_id}/contributions',
  },
  {
    clientCallName: 'client.user.listOwnerHubs',
    fullyQualifiedName: 'user.listOwnerHubs',
    httpMethod: 'get',
    httpPath: '/v1/user/owner-hubs',
  },
  {
    clientCallName: 'client.user.listPinnedHubs',
    fullyQualifiedName: 'user.listPinnedHubs',
    httpMethod: 'get',
    httpPath: '/v1/user/{firebase_id}/pinned-hubs',
  },
  {
    clientCallName: 'client.user.listPublicContributions',
    fullyQualifiedName: 'user.listPublicContributions',
    httpMethod: 'get',
    httpPath: '/v1/user/{firebase_id}/public-contributions',
  },
  {
    clientCallName: 'client.user.listPublicHubs',
    fullyQualifiedName: 'user.listPublicHubs',
    httpMethod: 'get',
    httpPath: '/v1/user/public-hubs',
  },
  {
    clientCallName: 'client.user.listTemplates',
    fullyQualifiedName: 'user.listTemplates',
    httpMethod: 'get',
    httpPath: '/v1/user/templates',
  },
  {
    clientCallName: 'client.user.retrieveByPublicID',
    fullyQualifiedName: 'user.retrieveByPublicID',
    httpMethod: 'get',
    httpPath: '/v1/user/public/{public_id}',
  },
  {
    clientCallName: 'client.user.retrieveMe',
    fullyQualifiedName: 'user.retrieveMe',
    httpMethod: 'get',
    httpPath: '/v1/user/me',
  },
  {
    clientCallName: 'client.user.search',
    fullyQualifiedName: 'user.search',
    httpMethod: 'get',
    httpPath: '/v1/user/search',
  },
  {
    clientCallName: 'client.user.updateAccount',
    fullyQualifiedName: 'user.updateAccount',
    httpMethod: 'put',
    httpPath: '/v1/user/account',
  },
  {
    clientCallName: 'client.user.updateProfile',
    fullyQualifiedName: 'user.updateProfile',
    httpMethod: 'put',
    httpPath: '/v1/user',
  },
  {
    clientCallName: 'client.user.apikey.create',
    fullyQualifiedName: 'user.apikey.create',
    httpMethod: 'post',
    httpPath: '/v1/user/apikey',
  },
  {
    clientCallName: 'client.user.apikey.update',
    fullyQualifiedName: 'user.apikey.update',
    httpMethod: 'put',
    httpPath: '/v1/user/apikey/{api_key_id}',
  },
  {
    clientCallName: 'client.user.apikey.delete',
    fullyQualifiedName: 'user.apikey.delete',
    httpMethod: 'delete',
    httpPath: '/v1/user/apikey/{api_key_id}',
  },
  {
    clientCallName: 'client.user.hubs.list',
    fullyQualifiedName: 'user.hubs.list',
    httpMethod: 'get',
    httpPath: '/v1/user/hubs',
  },
  {
    clientCallName: 'client.user.hubs.listFavourites',
    fullyQualifiedName: 'user.hubs.listFavourites',
    httpMethod: 'get',
    httpPath: '/v1/user/hubs/favourites',
  },
  {
    clientCallName: 'client.user.hubs.listTags',
    fullyQualifiedName: 'user.hubs.listTags',
    httpMethod: 'put',
    httpPath: '/v1/user/hubs/{hub_id}/tags',
  },
  {
    clientCallName: 'client.user.hubs.toggleFavourite',
    fullyQualifiedName: 'user.hubs.toggleFavourite',
    httpMethod: 'put',
    httpPath: '/v1/user/hubs/{hub_id}/favourite',
  },
  {
    clientCallName: 'client.user.hubs.togglePin',
    fullyQualifiedName: 'user.hubs.togglePin',
    httpMethod: 'put',
    httpPath: '/v1/user/hubs/{hub_id}/pin',
  },
  {
    clientCallName: 'client.user.tags.delete',
    fullyQualifiedName: 'user.tags.delete',
    httpMethod: 'delete',
    httpPath: '/v1/user/{user_id}/tags/{tag_id}',
  },
  {
    clientCallName: 'client.user.tags.add',
    fullyQualifiedName: 'user.tags.add',
    httpMethod: 'post',
    httpPath: '/v1/user/{user_id}/tags',
  },
  {
    clientCallName: 'client.user.tags.bulkApply',
    fullyQualifiedName: 'user.tags.bulkApply',
    httpMethod: 'put',
    httpPath: '/v1/user/{user_id}/tags',
  },
  {
    clientCallName: 'client.hub.create',
    fullyQualifiedName: 'hub.create',
    httpMethod: 'post',
    httpPath: '/v1/hub',
  },
  {
    clientCallName: 'client.hub.retrieve',
    fullyQualifiedName: 'hub.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/hub/{hub_id}',
  },
  {
    clientCallName: 'client.hub.update',
    fullyQualifiedName: 'hub.update',
    httpMethod: 'put',
    httpPath: '/v1/hub/{hub_id}',
  },
  {
    clientCallName: 'client.hub.delete',
    fullyQualifiedName: 'hub.delete',
    httpMethod: 'delete',
    httpPath: '/v1/hub/{hub_id}',
  },
  {
    clientCallName: 'client.hub.aiSearch',
    fullyQualifiedName: 'hub.aiSearch',
    httpMethod: 'get',
    httpPath: '/v1/hub/{hub_id}/search-ai',
  },
  {
    clientCallName: 'client.hub.changeUserRole',
    fullyQualifiedName: 'hub.changeUserRole',
    httpMethod: 'put',
    httpPath: '/v1/hub/{hub_id}/change-user-role/{firebase_id}',
  },
  {
    clientCallName: 'client.hub.createHeadingStyling',
    fullyQualifiedName: 'hub.createHeadingStyling',
    httpMethod: 'post',
    httpPath: '/v1/hub/{hub_id}/add_heading_styling',
  },
  {
    clientCallName: 'client.hub.createKnowledgeBase',
    fullyQualifiedName: 'hub.createKnowledgeBase',
    httpMethod: 'post',
    httpPath: '/v1/hub/{hub_id}/knowledge-base',
  },
  {
    clientCallName: 'client.hub.deleteTopHeadingStyling',
    fullyQualifiedName: 'hub.deleteTopHeadingStyling',
    httpMethod: 'delete',
    httpPath: '/v1/hub/{hub_id}/delete_top_style',
  },
  {
    clientCallName: 'client.hub.duplicate',
    fullyQualifiedName: 'hub.duplicate',
    httpMethod: 'post',
    httpPath: '/v1/hub/{hub_id}/duplicate',
  },
  {
    clientCallName: 'client.hub.getAIAnswers',
    fullyQualifiedName: 'hub.getAIAnswers',
    httpMethod: 'get',
    httpPath: '/v1/hub/{hub_id}/ai-answers',
  },
  {
    clientCallName: 'client.hub.getDeletedDocuments',
    fullyQualifiedName: 'hub.getDeletedDocuments',
    httpMethod: 'get',
    httpPath: '/v1/hub/{hub_id}/deleted-documents',
  },
  {
    clientCallName: 'client.hub.getDeletedTables',
    fullyQualifiedName: 'hub.getDeletedTables',
    httpMethod: 'get',
    httpPath: '/v1/hub/{hub_id}/deleted-tables',
  },
  {
    clientCallName: 'client.hub.getDocuments',
    fullyQualifiedName: 'hub.getDocuments',
    httpMethod: 'get',
    httpPath: '/v1/hub/{hub_id}/documents',
  },
  {
    clientCallName: 'client.hub.getDuplicatedChildren',
    fullyQualifiedName: 'hub.getDuplicatedChildren',
    httpMethod: 'get',
    httpPath: '/v1/hub/{hub_id}/duplicated-children',
  },
  {
    clientCallName: 'client.hub.getInvitedMembers',
    fullyQualifiedName: 'hub.getInvitedMembers',
    httpMethod: 'get',
    httpPath: '/v1/hub/{hub_id}/invited-members',
  },
  {
    clientCallName: 'client.hub.getMembers',
    fullyQualifiedName: 'hub.getMembers',
    httpMethod: 'get',
    httpPath: '/v1/hub/{hub_id}/members',
  },
  {
    clientCallName: 'client.hub.getNotifications',
    fullyQualifiedName: 'hub.getNotifications',
    httpMethod: 'get',
    httpPath: '/v1/hub/{hub_id}/notifications',
  },
  {
    clientCallName: 'client.hub.getResources',
    fullyQualifiedName: 'hub.getResources',
    httpMethod: 'post',
    httpPath: '/v1/hub/{hub_id}/resources',
  },
  {
    clientCallName: 'client.hub.getSentNotifications',
    fullyQualifiedName: 'hub.getSentNotifications',
    httpMethod: 'get',
    httpPath: '/v1/hub/{hub_id}/sent-notifications',
  },
  {
    clientCallName: 'client.hub.getTables',
    fullyQualifiedName: 'hub.getTables',
    httpMethod: 'get',
    httpPath: '/v1/hub/{hub_id}/tables',
  },
  {
    clientCallName: 'client.hub.getTags',
    fullyQualifiedName: 'hub.getTags',
    httpMethod: 'get',
    httpPath: '/v1/hub/{hub_id}/tags',
  },
  {
    clientCallName: 'client.hub.getVariables',
    fullyQualifiedName: 'hub.getVariables',
    httpMethod: 'get',
    httpPath: '/v1/hub/{hub_id}/variables',
  },
  {
    clientCallName: 'client.hub.inviteMultipleUsers',
    fullyQualifiedName: 'hub.inviteMultipleUsers',
    httpMethod: 'post',
    httpPath: '/v1/hub/{hub_id}/invite-multiple',
  },
  {
    clientCallName: 'client.hub.permanentlyDelete',
    fullyQualifiedName: 'hub.permanentlyDelete',
    httpMethod: 'delete',
    httpPath: '/v1/hub/{hub_id}/permanent',
  },
  {
    clientCallName: 'client.hub.removeUser',
    fullyQualifiedName: 'hub.removeUser',
    httpMethod: 'delete',
    httpPath: '/v1/hub/{hub_id}/remove-user/{firebase_id}',
  },
  {
    clientCallName: 'client.hub.requestContributorAccess',
    fullyQualifiedName: 'hub.requestContributorAccess',
    httpMethod: 'post',
    httpPath: '/v1/hub/{hub_id}/request-contributor-access',
  },
  {
    clientCallName: 'client.hub.restore',
    fullyQualifiedName: 'hub.restore',
    httpMethod: 'put',
    httpPath: '/v1/hub/{hub_id}/restore',
  },
  {
    clientCallName: 'client.hub.searchResources',
    fullyQualifiedName: 'hub.searchResources',
    httpMethod: 'get',
    httpPath: '/v1/hub/{hub_id}/search-resources',
  },
  {
    clientCallName: 'client.hub.setColumnColoring',
    fullyQualifiedName: 'hub.setColumnColoring',
    httpMethod: 'post',
    httpPath: '/v1/hub/{hub_id}/set-column-coloring',
  },
  {
    clientCallName: 'client.hub.setColumnFormat',
    fullyQualifiedName: 'hub.setColumnFormat',
    httpMethod: 'post',
    httpPath: '/v1/hub/{hub_id}/set-column-format/{kind}',
  },
  {
    clientCallName: 'client.hub.trainKnowledgeBase',
    fullyQualifiedName: 'hub.trainKnowledgeBase',
    httpMethod: 'post',
    httpPath: '/v1/hub/{hub_id}/train-knowledge-base',
  },
  {
    clientCallName: 'client.hub.updateHeadingStyling',
    fullyQualifiedName: 'hub.updateHeadingStyling',
    httpMethod: 'post',
    httpPath: '/v1/hub/{hub_id}/style/{style_id}',
  },
  {
    clientCallName: 'client.hub.uploadTemplate',
    fullyQualifiedName: 'hub.uploadTemplate',
    httpMethod: 'post',
    httpPath: '/v1/hub/{hub_id}/upload-template',
  },
  {
    clientCallName: 'client.hub.aiAnswer.vote',
    fullyQualifiedName: 'hub.aiAnswer.vote',
    httpMethod: 'post',
    httpPath: '/v1/hub/{hub_id}/ai-answer/{answer_id}/vote',
  },
  {
    clientCallName: 'client.hub.invite.create',
    fullyQualifiedName: 'hub.invite.create',
    httpMethod: 'post',
    httpPath: '/v1/hub/{hub_id}/invite',
  },
  {
    clientCallName: 'client.hub.invite.update',
    fullyQualifiedName: 'hub.invite.update',
    httpMethod: 'put',
    httpPath: '/v1/hub/{hub_id}/invite/{invite_id}',
  },
  {
    clientCallName: 'client.hub.invite.delete',
    fullyQualifiedName: 'hub.invite.delete',
    httpMethod: 'delete',
    httpPath: '/v1/hub/{hub_id}/invite/{invite_id}',
  },
  {
    clientCallName: 'client.hub.invite.resend',
    fullyQualifiedName: 'hub.invite.resend',
    httpMethod: 'post',
    httpPath: '/v1/hub/{hub_id}/invite/{invite_id}',
  },
  {
    clientCallName: 'client.hub.secrets.create',
    fullyQualifiedName: 'hub.secrets.create',
    httpMethod: 'post',
    httpPath: '/v1/hub/{hub_id}/secrets',
  },
  {
    clientCallName: 'client.hub.secrets.update',
    fullyQualifiedName: 'hub.secrets.update',
    httpMethod: 'put',
    httpPath: '/v1/hub/{hub_id}/secrets/{secret_id}',
  },
  {
    clientCallName: 'client.hub.secrets.list',
    fullyQualifiedName: 'hub.secrets.list',
    httpMethod: 'get',
    httpPath: '/v1/hub/{hub_id}/secrets',
  },
  {
    clientCallName: 'client.hub.secrets.delete',
    fullyQualifiedName: 'hub.secrets.delete',
    httpMethod: 'delete',
    httpPath: '/v1/hub/{hub_id}/secrets/{secret_id}',
  },
  {
    clientCallName: 'client.table.create',
    fullyQualifiedName: 'table.create',
    httpMethod: 'post',
    httpPath: '/v1/table',
  },
  {
    clientCallName: 'client.table.retrieve',
    fullyQualifiedName: 'table.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/table/{table_id}',
  },
  {
    clientCallName: 'client.table.update',
    fullyQualifiedName: 'table.update',
    httpMethod: 'put',
    httpPath: '/v1/table/{table_id}',
  },
  {
    clientCallName: 'client.table.delete',
    fullyQualifiedName: 'table.delete',
    httpMethod: 'delete',
    httpPath: '/v1/table/{table_id}',
  },
  {
    clientCallName: 'client.table.checkUsage',
    fullyQualifiedName: 'table.checkUsage',
    httpMethod: 'get',
    httpPath: '/v1/table/{table_id}/used',
  },
  {
    clientCallName: 'client.table.createIndex',
    fullyQualifiedName: 'table.createIndex',
    httpMethod: 'post',
    httpPath: '/v1/table/{table_id}/indexes',
  },
  {
    clientCallName: 'client.table.deleteRows',
    fullyQualifiedName: 'table.deleteRows',
    httpMethod: 'delete',
    httpPath: '/v1/table/{table_id}/rows',
  },
  {
    clientCallName: 'client.table.downloadCsv',
    fullyQualifiedName: 'table.downloadCsv',
    httpMethod: 'get',
    httpPath: '/v1/table/{table_id}/csv',
  },
  {
    clientCallName: 'client.table.duplicate',
    fullyQualifiedName: 'table.duplicate',
    httpMethod: 'post',
    httpPath: '/v1/table/{table_id}/duplicate',
  },
  {
    clientCallName: 'client.table.getCsvBackup',
    fullyQualifiedName: 'table.getCsvBackup',
    httpMethod: 'get',
    httpPath: '/v1/table/{table_id}/csv-backup',
  },
  {
    clientCallName: 'client.table.getDuplicatedChildren',
    fullyQualifiedName: 'table.getDuplicatedChildren',
    httpMethod: 'get',
    httpPath: '/v1/table/{table_id}/duplicated-children',
  },
  {
    clientCallName: 'client.table.getFile',
    fullyQualifiedName: 'table.getFile',
    httpMethod: 'get',
    httpPath: '/v1/table/{table_id}/file',
  },
  {
    clientCallName: 'client.table.getStatistics',
    fullyQualifiedName: 'table.getStatistics',
    httpMethod: 'get',
    httpPath: '/v1/table/{table_id}/stats',
  },
  {
    clientCallName: 'client.table.listColumns',
    fullyQualifiedName: 'table.listColumns',
    httpMethod: 'get',
    httpPath: '/v1/table/{table_id}/columns',
  },
  {
    clientCallName: 'client.table.listJoins',
    fullyQualifiedName: 'table.listJoins',
    httpMethod: 'get',
    httpPath: '/v1/table/{table_id}/joins',
  },
  {
    clientCallName: 'client.table.restore',
    fullyQualifiedName: 'table.restore',
    httpMethod: 'put',
    httpPath: '/v1/table/{table_id}/restore',
  },
  {
    clientCallName: 'client.table.streamRows',
    fullyQualifiedName: 'table.streamRows',
    httpMethod: 'get',
    httpPath: '/v1/table/{table_id}/rows-stream',
  },
  {
    clientCallName: 'client.table.truncate',
    fullyQualifiedName: 'table.truncate',
    httpMethod: 'delete',
    httpPath: '/v1/table/{table_id}/truncate',
  },
  {
    clientCallName: 'client.table.updateCells',
    fullyQualifiedName: 'table.updateCells',
    httpMethod: 'put',
    httpPath: '/v1/table/{table_id}/cells',
  },
  {
    clientCallName: 'client.table.column.create',
    fullyQualifiedName: 'table.column.create',
    httpMethod: 'post',
    httpPath: '/v1/table/{table_id}/column',
  },
  {
    clientCallName: 'client.table.column.update',
    fullyQualifiedName: 'table.column.update',
    httpMethod: 'put',
    httpPath: '/v1/table/{table_id}/column/{column_id}',
  },
  {
    clientCallName: 'client.table.column.delete',
    fullyQualifiedName: 'table.column.delete',
    httpMethod: 'delete',
    httpPath: '/v1/table/{table_id}/column/{column_id}',
  },
  {
    clientCallName: 'client.table.column.checkViews',
    fullyQualifiedName: 'table.column.checkViews',
    httpMethod: 'get',
    httpPath: '/v1/table/{table_id}/column/{column_id}/views',
  },
  {
    clientCallName: 'client.table.column.getDistinctValues',
    fullyQualifiedName: 'table.column.getDistinctValues',
    httpMethod: 'get',
    httpPath: '/v1/table/{table_id}/column/{column_id}/distinct',
  },
  {
    clientCallName: 'client.table.column.restore',
    fullyQualifiedName: 'table.column.restore',
    httpMethod: 'put',
    httpPath: '/v1/table/{table_id}/column/{column_id}/restore',
  },
  {
    clientCallName: 'client.table.row.update',
    fullyQualifiedName: 'table.row.update',
    httpMethod: 'put',
    httpPath: '/v1/table/{table_id}/row',
  },
  {
    clientCallName: 'client.table.row.add',
    fullyQualifiedName: 'table.row.add',
    httpMethod: 'post',
    httpPath: '/v1/table/{table_id}/row',
  },
  {
    clientCallName: 'client.table.row.getRows',
    fullyQualifiedName: 'table.row.getRows',
    httpMethod: 'get',
    httpPath: '/v1/table/{table_id}/row',
  },
  {
    clientCallName: 'client.table.row.upsert',
    fullyQualifiedName: 'table.row.upsert',
    httpMethod: 'post',
    httpPath: '/v1/table/{table_id}/row/upsert',
  },
  {
    clientCallName: 'client.table.join.create',
    fullyQualifiedName: 'table.join.create',
    httpMethod: 'post',
    httpPath: '/v1/table/{table_id}/join',
  },
  {
    clientCallName: 'client.table.join.update',
    fullyQualifiedName: 'table.join.update',
    httpMethod: 'put',
    httpPath: '/v1/table/{table_id}/join/{join_id}',
  },
  {
    clientCallName: 'client.table.join.delete',
    fullyQualifiedName: 'table.join.delete',
    httpMethod: 'delete',
    httpPath: '/v1/table/{table_id}/join/{join_id}',
  },
  {
    clientCallName: 'client.table.sync.update',
    fullyQualifiedName: 'table.sync.update',
    httpMethod: 'post',
    httpPath: '/v1/table/{table_id}/sync/{integration_name}/update',
  },
  {
    clientCallName: 'client.table.sync.deleteIntegration',
    fullyQualifiedName: 'table.sync.deleteIntegration',
    httpMethod: 'delete',
    httpPath: '/v1/table/{table_id}/sync/{integration_name}',
  },
  {
    clientCallName: 'client.table.sync.getSyncInfo',
    fullyQualifiedName: 'table.sync.getSyncInfo',
    httpMethod: 'get',
    httpPath: '/v1/table/{table_id}/sync/info',
  },
  {
    clientCallName: 'client.table.sync.retryIntegrationSync',
    fullyQualifiedName: 'table.sync.retryIntegrationSync',
    httpMethod: 'get',
    httpPath: '/v1/table/{table_id}/sync/manual',
  },
  {
    clientCallName: 'client.table.sync.syncWithIntegration',
    fullyQualifiedName: 'table.sync.syncWithIntegration',
    httpMethod: 'post',
    httpPath: '/v1/table/{table_id}/sync/{integration_name}',
  },
  {
    clientCallName: 'client.table.views.create',
    fullyQualifiedName: 'table.views.create',
    httpMethod: 'post',
    httpPath: '/v1/table/{table_id}/views',
  },
  {
    clientCallName: 'client.table.views.retrieve',
    fullyQualifiedName: 'table.views.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/table/views/{view_id}',
  },
  {
    clientCallName: 'client.table.views.update',
    fullyQualifiedName: 'table.views.update',
    httpMethod: 'put',
    httpPath: '/v1/table/views/{view_id}',
  },
  {
    clientCallName: 'client.table.views.list',
    fullyQualifiedName: 'table.views.list',
    httpMethod: 'get',
    httpPath: '/v1/table/{table_id}/views',
  },
  {
    clientCallName: 'client.table.views.delete',
    fullyQualifiedName: 'table.views.delete',
    httpMethod: 'delete',
    httpPath: '/v1/table/views/{view_id}',
  },
  {
    clientCallName: 'client.table.views.downloadCsv',
    fullyQualifiedName: 'table.views.downloadCsv',
    httpMethod: 'get',
    httpPath: '/v1/table/views/{view_id}/csv',
  },
  {
    clientCallName: 'client.table.views.duplicate',
    fullyQualifiedName: 'table.views.duplicate',
    httpMethod: 'post',
    httpPath: '/v1/table/{table_id}/views/{view_id}/duplicate',
  },
  {
    clientCallName: 'client.table.views.duplicateDefault',
    fullyQualifiedName: 'table.views.duplicateDefault',
    httpMethod: 'post',
    httpPath: '/v1/table/{table_id}/views/duplicate-default',
  },
  {
    clientCallName: 'client.table.views.previewRow',
    fullyQualifiedName: 'table.views.previewRow',
    httpMethod: 'post',
    httpPath: '/v1/table/views/{view_id}/preview-row',
  },
  {
    clientCallName: 'client.table.views.setDefault',
    fullyQualifiedName: 'table.views.setDefault',
    httpMethod: 'post',
    httpPath: '/v1/table/views/{view_id}/default',
  },
  {
    clientCallName: 'client.table.views.stats',
    fullyQualifiedName: 'table.views.stats',
    httpMethod: 'get',
    httpPath: '/v1/table/views/{view_id}/stats',
  },
  {
    clientCallName: 'client.table.views.streamRows',
    fullyQualifiedName: 'table.views.streamRows',
    httpMethod: 'get',
    httpPath: '/v1/table/views/{view_id}/rows-stream',
  },
  {
    clientCallName: 'client.table.views.updateCells',
    fullyQualifiedName: 'table.views.updateCells',
    httpMethod: 'put',
    httpPath: '/v1/table/views/{view_id}/cells',
  },
  {
    clientCallName: 'client.table.views.rows.update',
    fullyQualifiedName: 'table.views.rows.update',
    httpMethod: 'put',
    httpPath: '/v1/table/views/{view_id}/rows',
  },
  {
    clientCallName: 'client.table.views.rows.list',
    fullyQualifiedName: 'table.views.rows.list',
    httpMethod: 'get',
    httpPath: '/v1/table/views/{view_id}/rows',
  },
  {
    clientCallName: 'client.table.views.rows.delete',
    fullyQualifiedName: 'table.views.rows.delete',
    httpMethod: 'delete',
    httpPath: '/v1/table/views/{view_id}/rows',
  },
  {
    clientCallName: 'client.table.views.rows.add',
    fullyQualifiedName: 'table.views.rows.add',
    httpMethod: 'post',
    httpPath: '/v1/table/views/{view_id}/rows',
  },
  {
    clientCallName: 'client.table.views.rows.upsert',
    fullyQualifiedName: 'table.views.rows.upsert',
    httpMethod: 'post',
    httpPath: '/v1/table/views/{view_id}/rows/upsert',
  },
  {
    clientCallName: 'client.table.views.columns.update',
    fullyQualifiedName: 'table.views.columns.update',
    httpMethod: 'put',
    httpPath: '/v1/table/views/{view_id}/columns/{column_id}',
  },
  {
    clientCallName: 'client.table.views.columns.add',
    fullyQualifiedName: 'table.views.columns.add',
    httpMethod: 'post',
    httpPath: '/v1/table/views/{view_id}/columns',
  },
  {
    clientCallName: 'client.table.views.columns.aiFormulaHelper',
    fullyQualifiedName: 'table.views.columns.aiFormulaHelper',
    httpMethod: 'post',
    httpPath: '/v1/table/views/{view_id}/column/{column_id}/ai-formula-helper',
  },
  {
    clientCallName: 'client.table.views.columns.distinct',
    fullyQualifiedName: 'table.views.columns.distinct',
    httpMethod: 'get',
    httpPath: '/v1/table/views/{view_id}/column/{column_id}/distinct',
  },
  {
    clientCallName: 'client.table.views.columns.formulaInfo',
    fullyQualifiedName: 'table.views.columns.formulaInfo',
    httpMethod: 'get',
    httpPath: '/v1/table/views/{view_id}/column/{column_id}/formula-info',
  },
  {
    clientCallName: 'client.document.create',
    fullyQualifiedName: 'document.create',
    httpMethod: 'post',
    httpPath: '/v1/document',
  },
  {
    clientCallName: 'client.document.retrieve',
    fullyQualifiedName: 'document.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/document/{document_id}',
  },
  {
    clientCallName: 'client.document.update',
    fullyQualifiedName: 'document.update',
    httpMethod: 'put',
    httpPath: '/v1/document/{document_id}',
  },
  {
    clientCallName: 'client.document.delete',
    fullyQualifiedName: 'document.delete',
    httpMethod: 'delete',
    httpPath: '/v1/document/{document_id}',
  },
  {
    clientCallName: 'client.document.createMultipleSections',
    fullyQualifiedName: 'document.createMultipleSections',
    httpMethod: 'post',
    httpPath: '/v1/document/{document_id}/multiple-section',
  },
  {
    clientCallName: 'client.document.createSections',
    fullyQualifiedName: 'document.createSections',
    httpMethod: 'post',
    httpPath: '/v1/document/{document_id}/sections',
  },
  {
    clientCallName: 'client.document.export',
    fullyQualifiedName: 'document.export',
    httpMethod: 'get',
    httpPath: '/v1/document/{document_id}/export',
  },
  {
    clientCallName: 'client.document.getDeletedSections',
    fullyQualifiedName: 'document.getDeletedSections',
    httpMethod: 'get',
    httpPath: '/v1/document/{document_id}/deletedsections',
  },
  {
    clientCallName: 'client.document.getDuplicatedChildren',
    fullyQualifiedName: 'document.getDuplicatedChildren',
    httpMethod: 'get',
    httpPath: '/v1/document/{document_id}/duplicated-children',
  },
  {
    clientCallName: 'client.document.restore',
    fullyQualifiedName: 'document.restore',
    httpMethod: 'put',
    httpPath: '/v1/document/{document_id}/restore',
  },
  {
    clientCallName: 'client.document.syncTemplate',
    fullyQualifiedName: 'document.syncTemplate',
    httpMethod: 'get',
    httpPath: '/v1/document/{document_id}/sync-template',
  },
  {
    clientCallName: 'client.document.updateMultipleSections',
    fullyQualifiedName: 'document.updateMultipleSections',
    httpMethod: 'put',
    httpPath: '/v1/document/{document_id}/update-multiple-section',
  },
  {
    clientCallName: 'client.document.updateSectionOrder',
    fullyQualifiedName: 'document.updateSectionOrder',
    httpMethod: 'put',
    httpPath: '/v1/document/{document_id}/changesectionorder',
  },
  {
    clientCallName: 'client.document.updateViewsPermissions',
    fullyQualifiedName: 'document.updateViewsPermissions',
    httpMethod: 'put',
    httpPath: '/v1/document/sync-views-permissions',
  },
  {
    clientCallName: 'client.document.duplicate.duplicate',
    fullyQualifiedName: 'document.duplicate.duplicate',
    httpMethod: 'post',
    httpPath: '/v1/document/{document_id}/duplicate',
  },
  {
    clientCallName: 'client.document.duplicate.global',
    fullyQualifiedName: 'document.duplicate.global',
    httpMethod: 'post',
    httpPath: '/v1/document/duplicate',
  },
  {
    clientCallName: 'client.document.section.create',
    fullyQualifiedName: 'document.section.create',
    httpMethod: 'post',
    httpPath: '/v1/document/{document_id}/section',
  },
  {
    clientCallName: 'client.document.section.retrieve',
    fullyQualifiedName: 'document.section.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/document/{document_id}/section/{document_section_id}',
  },
  {
    clientCallName: 'client.document.section.update',
    fullyQualifiedName: 'document.section.update',
    httpMethod: 'put',
    httpPath: '/v1/document/{document_id}/section/{document_section_id}',
  },
  {
    clientCallName: 'client.document.section.delete',
    fullyQualifiedName: 'document.section.delete',
    httpMethod: 'delete',
    httpPath: '/v1/document/{document_id}/section/{document_section_id}',
  },
  {
    clientCallName: 'client.document.section.duplicate',
    fullyQualifiedName: 'document.section.duplicate',
    httpMethod: 'post',
    httpPath: '/v1/document/{document_id}/section/{document_section_id}/duplicate',
  },
  {
    clientCallName: 'client.document.section.duplicateAsync',
    fullyQualifiedName: 'document.section.duplicateAsync',
    httpMethod: 'post',
    httpPath: '/v1/document/{document_id}/section/{document_section_id}/duplicate-async',
  },
  {
    clientCallName: 'client.document.section.restore',
    fullyQualifiedName: 'document.section.restore',
    httpMethod: 'put',
    httpPath: '/v1/document/{document_id}/section/{document_section_id}/restore',
  },
  {
    clientCallName: 'client.document.section.response.create',
    fullyQualifiedName: 'document.section.response.create',
    httpMethod: 'post',
    httpPath: '/v1/document/{document_id}/section/{document_section_id}/response',
  },
  {
    clientCallName: 'client.document.section.response.update',
    fullyQualifiedName: 'document.section.response.update',
    httpMethod: 'put',
    httpPath: '/v1/document/{document_id}/section/{document_section_id}/response/{document_response_id}',
  },
  {
    clientCallName: 'client.document.section.response.delete',
    fullyQualifiedName: 'document.section.response.delete',
    httpMethod: 'delete',
    httpPath: '/v1/document/{document_id}/section/{document_section_id}/response/{document_response_id}',
  },
  {
    clientCallName: 'client.document.section.response.reset',
    fullyQualifiedName: 'document.section.response.reset',
    httpMethod: 'put',
    httpPath:
      '/v1/document/{document_id}/section/{document_section_id}/response/{document_response_id}/reset',
  },
  {
    clientCallName: 'client.document.section.response.restore',
    fullyQualifiedName: 'document.section.response.restore',
    httpMethod: 'put',
    httpPath:
      '/v1/document/{document_id}/section/{document_section_id}/response/{document_response_id}/restore',
  },
  {
    clientCallName: 'client.document.section.response.submit',
    fullyQualifiedName: 'document.section.response.submit',
    httpMethod: 'put',
    httpPath:
      '/v1/document/{document_id}/section/{document_section_id}/response/{document_response_id}/submit',
  },
  {
    clientCallName: 'client.notifications.create',
    fullyQualifiedName: 'notifications.create',
    httpMethod: 'post',
    httpPath: '/v1/notifications',
  },
  {
    clientCallName: 'client.notifications.update',
    fullyQualifiedName: 'notifications.update',
    httpMethod: 'put',
    httpPath: '/v1/notifications/{id}',
  },
  {
    clientCallName: 'client.notifications.delete',
    fullyQualifiedName: 'notifications.delete',
    httpMethod: 'delete',
    httpPath: '/v1/notifications/{id}',
  },
  {
    clientCallName: 'client.notifications.listEventTypes',
    fullyQualifiedName: 'notifications.listEventTypes',
    httpMethod: 'get',
    httpPath: '/v1/notifications/event-types',
  },
  {
    clientCallName: 'client.notifications.listEvents',
    fullyQualifiedName: 'notifications.listEvents',
    httpMethod: 'get',
    httpPath: '/v1/notifications/events/{resource_id}',
  },
  {
    clientCallName: 'client.commentThread.create',
    fullyQualifiedName: 'commentThread.create',
    httpMethod: 'post',
    httpPath: '/v1/comment_thread',
  },
  {
    clientCallName: 'client.commentThread.retrieve',
    fullyQualifiedName: 'commentThread.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/comment_thread/{comment_thread_id}',
  },
  {
    clientCallName: 'client.commentThread.list',
    fullyQualifiedName: 'commentThread.list',
    httpMethod: 'get',
    httpPath: '/v1/comment_thread',
  },
  {
    clientCallName: 'client.commentThread.delete',
    fullyQualifiedName: 'commentThread.delete',
    httpMethod: 'delete',
    httpPath: '/v1/comment_thread/{comment_thread_id}',
  },
  {
    clientCallName: 'client.commentThread.getStats',
    fullyQualifiedName: 'commentThread.getStats',
    httpMethod: 'get',
    httpPath: '/v1/comment_thread/stats',
  },
  {
    clientCallName: 'client.commentThread.reopen',
    fullyQualifiedName: 'commentThread.reopen',
    httpMethod: 'put',
    httpPath: '/v1/comment_thread/{comment_thread_id}/reopen',
  },
  {
    clientCallName: 'client.commentThread.resolve',
    fullyQualifiedName: 'commentThread.resolve',
    httpMethod: 'put',
    httpPath: '/v1/comment_thread/{comment_thread_id}/resolve',
  },
  {
    clientCallName: 'client.commentThread.comment.create',
    fullyQualifiedName: 'commentThread.comment.create',
    httpMethod: 'post',
    httpPath: '/v1/comment_thread/{comment_thread_id}/comment',
  },
  {
    clientCallName: 'client.commentThread.comment.update',
    fullyQualifiedName: 'commentThread.comment.update',
    httpMethod: 'put',
    httpPath: '/v1/comment_thread/{comment_thread_id}/comment/{comment_id}',
  },
  {
    clientCallName: 'client.commentThread.comment.delete',
    fullyQualifiedName: 'commentThread.comment.delete',
    httpMethod: 'delete',
    httpPath: '/v1/comment_thread/{comment_thread_id}/comment/{comment_id}',
  },
  {
    clientCallName: 'client.permissions.create',
    fullyQualifiedName: 'permissions.create',
    httpMethod: 'post',
    httpPath: '/v1/permissions',
  },
  {
    clientCallName: 'client.permissions.retrieve',
    fullyQualifiedName: 'permissions.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/permissions',
  },
  {
    clientCallName: 'client.permissions.update',
    fullyQualifiedName: 'permissions.update',
    httpMethod: 'put',
    httpPath: '/v1/permissions/{id}',
  },
  {
    clientCallName: 'client.permissions.delete',
    fullyQualifiedName: 'permissions.delete',
    httpMethod: 'delete',
    httpPath: '/v1/permissions/{id}',
  },
  {
    clientCallName: 'client.permissions.createAll',
    fullyQualifiedName: 'permissions.createAll',
    httpMethod: 'post',
    httpPath: '/v1/permissions/all',
  },
  {
    clientCallName: 'client.permissions.request',
    fullyQualifiedName: 'permissions.request',
    httpMethod: 'get',
    httpPath: '/v1/permissions/request/{hub_id}/{type}/{id}',
  },
  {
    clientCallName: 'client.permissions.retrieveTag',
    fullyQualifiedName: 'permissions.retrieveTag',
    httpMethod: 'get',
    httpPath: '/v1/permissions/tag',
  },
  {
    clientCallName: 'client.integrations.createPassthrough',
    fullyQualifiedName: 'integrations.createPassthrough',
    httpMethod: 'post',
    httpPath: '/v1/integrations/passthrough',
  },
  {
    clientCallName: 'client.integrations.createPassthroughDownload',
    fullyQualifiedName: 'integrations.createPassthroughDownload',
    httpMethod: 'post',
    httpPath: '/v1/integrations/passthrough-download',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
