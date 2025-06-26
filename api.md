# User

Types:

- <code><a href="./src/resources/user/user.ts">Event</a></code>
- <code><a href="./src/resources/user/user.ts">SummaryUser</a></code>
- <code><a href="./src/resources/user/user.ts">User</a></code>
- <code><a href="./src/resources/user/user.ts">UserCreateResponse</a></code>
- <code><a href="./src/resources/user/user.ts">UserRetrieveResponse</a></code>
- <code><a href="./src/resources/user/user.ts">UserListAchievementsResponse</a></code>
- <code><a href="./src/resources/user/user.ts">UserListContributionsResponse</a></code>
- <code><a href="./src/resources/user/user.ts">UserListOwnerHubsResponse</a></code>
- <code><a href="./src/resources/user/user.ts">UserListPinnedHubsResponse</a></code>
- <code><a href="./src/resources/user/user.ts">UserListPublicContributionsResponse</a></code>
- <code><a href="./src/resources/user/user.ts">UserListPublicHubsResponse</a></code>
- <code><a href="./src/resources/user/user.ts">UserListTemplatesResponse</a></code>
- <code><a href="./src/resources/user/user.ts">UserRetrieveByPublicIDResponse</a></code>
- <code><a href="./src/resources/user/user.ts">UserRetrieveMeResponse</a></code>
- <code><a href="./src/resources/user/user.ts">UserSearchResponse</a></code>
- <code><a href="./src/resources/user/user.ts">UserUpdateAccountResponse</a></code>
- <code><a href="./src/resources/user/user.ts">UserUpdateProfileResponse</a></code>

Methods:

- <code title="post /v1/user">client.user.<a href="./src/resources/user/user.ts">create</a>({ ...params }) -> UserCreateResponse</code>
- <code title="get /v1/user/{firebase_id}">client.user.<a href="./src/resources/user/user.ts">retrieve</a>(firebaseID) -> UserRetrieveResponse</code>
- <code title="get /v1/user/{firebase_id}/achievements">client.user.<a href="./src/resources/user/user.ts">listAchievements</a>(firebaseID) -> UserListAchievementsResponse</code>
- <code title="get /v1/user/{firebase_id}/contributions">client.user.<a href="./src/resources/user/user.ts">listContributions</a>(firebaseID) -> UserListContributionsResponse</code>
- <code title="get /v1/user/owner-hubs">client.user.<a href="./src/resources/user/user.ts">listOwnerHubs</a>() -> UserListOwnerHubsResponse</code>
- <code title="get /v1/user/{firebase_id}/pinned-hubs">client.user.<a href="./src/resources/user/user.ts">listPinnedHubs</a>(firebaseID) -> UserListPinnedHubsResponse</code>
- <code title="get /v1/user/{firebase_id}/public-contributions">client.user.<a href="./src/resources/user/user.ts">listPublicContributions</a>(firebaseID) -> UserListPublicContributionsResponse</code>
- <code title="get /v1/user/public-hubs">client.user.<a href="./src/resources/user/user.ts">listPublicHubs</a>() -> UserListPublicHubsResponse</code>
- <code title="get /v1/user/templates">client.user.<a href="./src/resources/user/user.ts">listTemplates</a>() -> UserListTemplatesResponse</code>
- <code title="get /v1/user/public/{public_id}">client.user.<a href="./src/resources/user/user.ts">retrieveByPublicID</a>(publicID) -> UserRetrieveByPublicIDResponse</code>
- <code title="get /v1/user/me">client.user.<a href="./src/resources/user/user.ts">retrieveMe</a>() -> UserRetrieveMeResponse</code>
- <code title="get /v1/user/search">client.user.<a href="./src/resources/user/user.ts">search</a>({ ...params }) -> UserSearchResponse</code>
- <code title="put /v1/user/account">client.user.<a href="./src/resources/user/user.ts">updateAccount</a>({ ...params }) -> UserUpdateAccountResponse</code>
- <code title="put /v1/user">client.user.<a href="./src/resources/user/user.ts">updateProfile</a>({ ...params }) -> UserUpdateProfileResponse</code>

## Apikey

Types:

- <code><a href="./src/resources/user/apikey.ts">APIKey</a></code>
- <code><a href="./src/resources/user/apikey.ts">ApikeyCreateResponse</a></code>
- <code><a href="./src/resources/user/apikey.ts">ApikeyUpdateResponse</a></code>
- <code><a href="./src/resources/user/apikey.ts">ApikeyDeleteResponse</a></code>

Methods:

- <code title="post /v1/user/apikey">client.user.apikey.<a href="./src/resources/user/apikey.ts">create</a>({ ...params }) -> ApikeyCreateResponse</code>
- <code title="put /v1/user/apikey/{api_key_id}">client.user.apikey.<a href="./src/resources/user/apikey.ts">update</a>(apiKeyID, { ...params }) -> ApikeyUpdateResponse</code>
- <code title="delete /v1/user/apikey/{api_key_id}">client.user.apikey.<a href="./src/resources/user/apikey.ts">delete</a>(apiKeyID) -> ApikeyDeleteResponse</code>

## Hubs

Types:

- <code><a href="./src/resources/user/hubs.ts">HomeHub</a></code>
- <code><a href="./src/resources/user/hubs.ts">HubListResponse</a></code>
- <code><a href="./src/resources/user/hubs.ts">HubListFavouritesResponse</a></code>
- <code><a href="./src/resources/user/hubs.ts">HubListTagsResponse</a></code>
- <code><a href="./src/resources/user/hubs.ts">HubToggleFavouriteResponse</a></code>
- <code><a href="./src/resources/user/hubs.ts">HubTogglePinResponse</a></code>

Methods:

- <code title="get /v1/user/hubs">client.user.hubs.<a href="./src/resources/user/hubs.ts">list</a>() -> HubListResponse</code>
- <code title="get /v1/user/hubs/favourites">client.user.hubs.<a href="./src/resources/user/hubs.ts">listFavourites</a>() -> HubListFavouritesResponse</code>
- <code title="put /v1/user/hubs/{hub_id}/tags">client.user.hubs.<a href="./src/resources/user/hubs.ts">listTags</a>(hubID) -> HubListTagsResponse</code>
- <code title="put /v1/user/hubs/{hub_id}/favourite">client.user.hubs.<a href="./src/resources/user/hubs.ts">toggleFavourite</a>(hubID) -> HubToggleFavouriteResponse</code>
- <code title="put /v1/user/hubs/{hub_id}/pin">client.user.hubs.<a href="./src/resources/user/hubs.ts">togglePin</a>(hubID) -> HubTogglePinResponse</code>

## Tags

Types:

- <code><a href="./src/resources/user/tags.ts">Tag</a></code>
- <code><a href="./src/resources/user/tags.ts">TagDeleteResponse</a></code>
- <code><a href="./src/resources/user/tags.ts">TagAddResponse</a></code>
- <code><a href="./src/resources/user/tags.ts">TagBulkApplyResponse</a></code>

Methods:

- <code title="delete /v1/user/{user_id}/tags/{tag_id}">client.user.tags.<a href="./src/resources/user/tags.ts">delete</a>(tagID, { ...params }) -> TagDeleteResponse</code>
- <code title="post /v1/user/{user_id}/tags">client.user.tags.<a href="./src/resources/user/tags.ts">add</a>(userID, { ...params }) -> TagAddResponse</code>
- <code title="put /v1/user/{user_id}/tags">client.user.tags.<a href="./src/resources/user/tags.ts">bulkApply</a>(userID, { ...params }) -> TagBulkApplyResponse</code>

# Hub

Types:

- <code><a href="./src/resources/hub/hub.ts">Answer</a></code>
- <code><a href="./src/resources/hub/hub.ts">BaseRequestContext</a></code>
- <code><a href="./src/resources/hub/hub.ts">SimpleHub</a></code>
- <code><a href="./src/resources/hub/hub.ts">UserHub</a></code>
- <code><a href="./src/resources/hub/hub.ts">HubCreateResponse</a></code>
- <code><a href="./src/resources/hub/hub.ts">HubRetrieveResponse</a></code>
- <code><a href="./src/resources/hub/hub.ts">HubUpdateResponse</a></code>
- <code><a href="./src/resources/hub/hub.ts">HubDeleteResponse</a></code>
- <code><a href="./src/resources/hub/hub.ts">HubAISearchResponse</a></code>
- <code><a href="./src/resources/hub/hub.ts">HubChangeUserRoleResponse</a></code>
- <code><a href="./src/resources/hub/hub.ts">HubCreateHeadingStylingResponse</a></code>
- <code><a href="./src/resources/hub/hub.ts">HubDeleteTopHeadingStylingResponse</a></code>
- <code><a href="./src/resources/hub/hub.ts">HubGetAIAnswersResponse</a></code>
- <code><a href="./src/resources/hub/hub.ts">HubGetDeletedDocumentsResponse</a></code>
- <code><a href="./src/resources/hub/hub.ts">HubGetDeletedTablesResponse</a></code>
- <code><a href="./src/resources/hub/hub.ts">HubGetDocumentsResponse</a></code>
- <code><a href="./src/resources/hub/hub.ts">HubGetDuplicatedChildrenResponse</a></code>
- <code><a href="./src/resources/hub/hub.ts">HubGetInvitedMembersResponse</a></code>
- <code><a href="./src/resources/hub/hub.ts">HubGetMembersResponse</a></code>
- <code><a href="./src/resources/hub/hub.ts">HubGetNotificationsResponse</a></code>
- <code><a href="./src/resources/hub/hub.ts">HubGetResourcesResponse</a></code>
- <code><a href="./src/resources/hub/hub.ts">HubGetSentNotificationsResponse</a></code>
- <code><a href="./src/resources/hub/hub.ts">HubGetTablesResponse</a></code>
- <code><a href="./src/resources/hub/hub.ts">HubGetTagsResponse</a></code>
- <code><a href="./src/resources/hub/hub.ts">HubGetVariablesResponse</a></code>
- <code><a href="./src/resources/hub/hub.ts">HubInviteMultipleUsersResponse</a></code>
- <code><a href="./src/resources/hub/hub.ts">HubPermanentlyDeleteResponse</a></code>
- <code><a href="./src/resources/hub/hub.ts">HubRemoveUserResponse</a></code>
- <code><a href="./src/resources/hub/hub.ts">HubRestoreResponse</a></code>
- <code><a href="./src/resources/hub/hub.ts">HubSearchResourcesResponse</a></code>
- <code><a href="./src/resources/hub/hub.ts">HubUpdateHeadingStylingResponse</a></code>
- <code><a href="./src/resources/hub/hub.ts">HubUploadTemplateResponse</a></code>

Methods:

- <code title="post /v1/hub">client.hub.<a href="./src/resources/hub/hub.ts">create</a>({ ...params }) -> HubCreateResponse</code>
- <code title="get /v1/hub/{hub_id}">client.hub.<a href="./src/resources/hub/hub.ts">retrieve</a>(hubID) -> HubRetrieveResponse</code>
- <code title="put /v1/hub/{hub_id}">client.hub.<a href="./src/resources/hub/hub.ts">update</a>(hubID, { ...params }) -> HubUpdateResponse</code>
- <code title="delete /v1/hub/{hub_id}">client.hub.<a href="./src/resources/hub/hub.ts">delete</a>(hubID) -> HubDeleteResponse</code>
- <code title="get /v1/hub/{hub_id}/search-ai">client.hub.<a href="./src/resources/hub/hub.ts">aiSearch</a>(hubID, { ...params }) -> HubAISearchResponse</code>
- <code title="put /v1/hub/{hub_id}/change-user-role/{firebase_id}">client.hub.<a href="./src/resources/hub/hub.ts">changeUserRole</a>(firebaseID, { ...params }) -> HubChangeUserRoleResponse</code>
- <code title="post /v1/hub/{hub_id}/add_heading_styling">client.hub.<a href="./src/resources/hub/hub.ts">createHeadingStyling</a>(hubID) -> HubCreateHeadingStylingResponse</code>
- <code title="post /v1/hub/{hub_id}/knowledge-base">client.hub.<a href="./src/resources/hub/hub.ts">createKnowledgeBase</a>(hubID, { ...params }) -> void</code>
- <code title="delete /v1/hub/{hub_id}/delete_top_style">client.hub.<a href="./src/resources/hub/hub.ts">deleteTopHeadingStyling</a>(hubID) -> HubDeleteTopHeadingStylingResponse</code>
- <code title="post /v1/hub/{hub_id}/duplicate">client.hub.<a href="./src/resources/hub/hub.ts">duplicate</a>(hubID, { ...params }) -> void</code>
- <code title="get /v1/hub/{hub_id}/ai-answers">client.hub.<a href="./src/resources/hub/hub.ts">getAIAnswers</a>(hubID) -> HubGetAIAnswersResponse</code>
- <code title="get /v1/hub/{hub_id}/deleted-documents">client.hub.<a href="./src/resources/hub/hub.ts">getDeletedDocuments</a>(hubID) -> HubGetDeletedDocumentsResponse</code>
- <code title="get /v1/hub/{hub_id}/deleted-tables">client.hub.<a href="./src/resources/hub/hub.ts">getDeletedTables</a>(hubID) -> HubGetDeletedTablesResponse</code>
- <code title="get /v1/hub/{hub_id}/documents">client.hub.<a href="./src/resources/hub/hub.ts">getDocuments</a>(hubID) -> HubGetDocumentsResponse</code>
- <code title="get /v1/hub/{hub_id}/duplicated-children">client.hub.<a href="./src/resources/hub/hub.ts">getDuplicatedChildren</a>(hubID) -> HubGetDuplicatedChildrenResponse</code>
- <code title="get /v1/hub/{hub_id}/invited-members">client.hub.<a href="./src/resources/hub/hub.ts">getInvitedMembers</a>(hubID) -> HubGetInvitedMembersResponse</code>
- <code title="get /v1/hub/{hub_id}/members">client.hub.<a href="./src/resources/hub/hub.ts">getMembers</a>(hubID) -> HubGetMembersResponse</code>
- <code title="get /v1/hub/{hub_id}/notifications">client.hub.<a href="./src/resources/hub/hub.ts">getNotifications</a>(hubID) -> HubGetNotificationsResponse</code>
- <code title="post /v1/hub/{hub_id}/resources">client.hub.<a href="./src/resources/hub/hub.ts">getResources</a>(hubID, { ...params }) -> HubGetResourcesResponse</code>
- <code title="get /v1/hub/{hub_id}/sent-notifications">client.hub.<a href="./src/resources/hub/hub.ts">getSentNotifications</a>(hubID, { ...params }) -> HubGetSentNotificationsResponse</code>
- <code title="get /v1/hub/{hub_id}/tables">client.hub.<a href="./src/resources/hub/hub.ts">getTables</a>(hubID) -> HubGetTablesResponse</code>
- <code title="get /v1/hub/{hub_id}/tags">client.hub.<a href="./src/resources/hub/hub.ts">getTags</a>(hubID) -> HubGetTagsResponse</code>
- <code title="get /v1/hub/{hub_id}/variables">client.hub.<a href="./src/resources/hub/hub.ts">getVariables</a>(hubID) -> HubGetVariablesResponse</code>
- <code title="post /v1/hub/{hub_id}/invite-multiple">client.hub.<a href="./src/resources/hub/hub.ts">inviteMultipleUsers</a>(hubID, { ...params }) -> HubInviteMultipleUsersResponse</code>
- <code title="delete /v1/hub/{hub_id}/permanent">client.hub.<a href="./src/resources/hub/hub.ts">permanentlyDelete</a>(hubID) -> HubPermanentlyDeleteResponse</code>
- <code title="delete /v1/hub/{hub_id}/remove-user/{firebase_id}">client.hub.<a href="./src/resources/hub/hub.ts">removeUser</a>(firebaseID, { ...params }) -> HubRemoveUserResponse</code>
- <code title="post /v1/hub/{hub_id}/request-contributor-access">client.hub.<a href="./src/resources/hub/hub.ts">requestContributorAccess</a>(hubID) -> void</code>
- <code title="put /v1/hub/{hub_id}/restore">client.hub.<a href="./src/resources/hub/hub.ts">restore</a>(hubID) -> HubRestoreResponse</code>
- <code title="get /v1/hub/{hub_id}/search-resources">client.hub.<a href="./src/resources/hub/hub.ts">searchResources</a>(hubID, { ...params }) -> HubSearchResourcesResponse</code>
- <code title="post /v1/hub/{hub_id}/set-column-coloring">client.hub.<a href="./src/resources/hub/hub.ts">setColumnColoring</a>(hubID) -> void</code>
- <code title="post /v1/hub/{hub_id}/set-column-format/{kind}">client.hub.<a href="./src/resources/hub/hub.ts">setColumnFormat</a>(kind, { ...params }) -> void</code>
- <code title="post /v1/hub/{hub_id}/train-knowledge-base">client.hub.<a href="./src/resources/hub/hub.ts">trainKnowledgeBase</a>(hubID) -> void</code>
- <code title="post /v1/hub/{hub_id}/style/{style_id}">client.hub.<a href="./src/resources/hub/hub.ts">updateHeadingStyling</a>(styleID, { ...params }) -> HubUpdateHeadingStylingResponse</code>
- <code title="post /v1/hub/{hub_id}/upload-template">client.hub.<a href="./src/resources/hub/hub.ts">uploadTemplate</a>(hubID, { ...params }) -> HubUploadTemplateResponse</code>

## AIAnswer

Types:

- <code><a href="./src/resources/hub/ai-answer.ts">AIAnswerVoteResponse</a></code>

Methods:

- <code title="post /v1/hub/{hub_id}/ai-answer/{answer_id}/vote">client.hub.aiAnswer.<a href="./src/resources/hub/ai-answer.ts">vote</a>(answerID, { ...params }) -> AIAnswerVoteResponse</code>

## Invite

Types:

- <code><a href="./src/resources/hub/invite.ts">InvitedMember</a></code>
- <code><a href="./src/resources/hub/invite.ts">InviteCreateResponse</a></code>
- <code><a href="./src/resources/hub/invite.ts">InviteUpdateResponse</a></code>
- <code><a href="./src/resources/hub/invite.ts">InviteDeleteResponse</a></code>
- <code><a href="./src/resources/hub/invite.ts">InviteResendResponse</a></code>

Methods:

- <code title="post /v1/hub/{hub_id}/invite">client.hub.invite.<a href="./src/resources/hub/invite.ts">create</a>(hubID, { ...params }) -> InviteCreateResponse</code>
- <code title="put /v1/hub/{hub_id}/invite/{invite_id}">client.hub.invite.<a href="./src/resources/hub/invite.ts">update</a>(inviteID, { ...params }) -> InviteUpdateResponse</code>
- <code title="delete /v1/hub/{hub_id}/invite/{invite_id}">client.hub.invite.<a href="./src/resources/hub/invite.ts">delete</a>(inviteID, { ...params }) -> InviteDeleteResponse</code>
- <code title="post /v1/hub/{hub_id}/invite/{invite_id}">client.hub.invite.<a href="./src/resources/hub/invite.ts">resend</a>(inviteID, { ...params }) -> InviteResendResponse</code>

## Secrets

Types:

- <code><a href="./src/resources/hub/secrets.ts">HubSecret</a></code>
- <code><a href="./src/resources/hub/secrets.ts">SecretCreateResponse</a></code>
- <code><a href="./src/resources/hub/secrets.ts">SecretUpdateResponse</a></code>
- <code><a href="./src/resources/hub/secrets.ts">SecretListResponse</a></code>
- <code><a href="./src/resources/hub/secrets.ts">SecretDeleteResponse</a></code>

Methods:

- <code title="post /v1/hub/{hub_id}/secrets">client.hub.secrets.<a href="./src/resources/hub/secrets.ts">create</a>(hubID, { ...params }) -> SecretCreateResponse</code>
- <code title="put /v1/hub/{hub_id}/secrets/{secret_id}">client.hub.secrets.<a href="./src/resources/hub/secrets.ts">update</a>(secretID, { ...params }) -> SecretUpdateResponse</code>
- <code title="get /v1/hub/{hub_id}/secrets">client.hub.secrets.<a href="./src/resources/hub/secrets.ts">list</a>(hubID) -> SecretListResponse</code>
- <code title="delete /v1/hub/{hub_id}/secrets/{secret_id}">client.hub.secrets.<a href="./src/resources/hub/secrets.ts">delete</a>(secretID, { ...params }) -> SecretDeleteResponse</code>

# Table

Types:

- <code><a href="./src/resources/table/table.ts">Project</a></code>
- <code><a href="./src/resources/table/table.ts">Table</a></code>
- <code><a href="./src/resources/table/table.ts">TableColumnWithAggregation</a></code>
- <code><a href="./src/resources/table/table.ts">TableJoin</a></code>
- <code><a href="./src/resources/table/table.ts">TableJoinImportedColumns</a></code>
- <code><a href="./src/resources/table/table.ts">UpdateDocumentTableCells</a></code>
- <code><a href="./src/resources/table/table.ts">TableCreateResponse</a></code>
- <code><a href="./src/resources/table/table.ts">TableRetrieveResponse</a></code>
- <code><a href="./src/resources/table/table.ts">TableUpdateResponse</a></code>
- <code><a href="./src/resources/table/table.ts">TableDeleteResponse</a></code>
- <code><a href="./src/resources/table/table.ts">TableCheckUsageResponse</a></code>
- <code><a href="./src/resources/table/table.ts">TableCreateIndexResponse</a></code>
- <code><a href="./src/resources/table/table.ts">TableDeleteRowsResponse</a></code>
- <code><a href="./src/resources/table/table.ts">TableDownloadCsvResponse</a></code>
- <code><a href="./src/resources/table/table.ts">TableDuplicateResponse</a></code>
- <code><a href="./src/resources/table/table.ts">TableGetDuplicatedChildrenResponse</a></code>
- <code><a href="./src/resources/table/table.ts">TableGetStatisticsResponse</a></code>
- <code><a href="./src/resources/table/table.ts">TableListColumnsResponse</a></code>
- <code><a href="./src/resources/table/table.ts">TableListJoinsResponse</a></code>
- <code><a href="./src/resources/table/table.ts">TableRestoreResponse</a></code>
- <code><a href="./src/resources/table/table.ts">TableTruncateResponse</a></code>
- <code><a href="./src/resources/table/table.ts">TableUpdateCellsResponse</a></code>

Methods:

- <code title="post /v1/table">client.table.<a href="./src/resources/table/table.ts">create</a>({ ...params }) -> TableCreateResponse</code>
- <code title="get /v1/table/{table_id}">client.table.<a href="./src/resources/table/table.ts">retrieve</a>(tableID, { ...params }) -> TableRetrieveResponse</code>
- <code title="put /v1/table/{table_id}">client.table.<a href="./src/resources/table/table.ts">update</a>(tableID, { ...params }) -> TableUpdateResponse</code>
- <code title="delete /v1/table/{table_id}">client.table.<a href="./src/resources/table/table.ts">delete</a>(tableID) -> TableDeleteResponse</code>
- <code title="get /v1/table/{table_id}/used">client.table.<a href="./src/resources/table/table.ts">checkUsage</a>(tableID) -> TableCheckUsageResponse</code>
- <code title="post /v1/table/{table_id}/indexes">client.table.<a href="./src/resources/table/table.ts">createIndex</a>(tableID, { ...params }) -> TableCreateIndexResponse</code>
- <code title="delete /v1/table/{table_id}/rows">client.table.<a href="./src/resources/table/table.ts">deleteRows</a>(tableID) -> TableDeleteRowsResponse</code>
- <code title="get /v1/table/{table_id}/csv">client.table.<a href="./src/resources/table/table.ts">downloadCsv</a>(tableID, { ...params }) -> string</code>
- <code title="post /v1/table/{table_id}/duplicate">client.table.<a href="./src/resources/table/table.ts">duplicate</a>(tableID, { ...params }) -> TableDuplicateResponse</code>
- <code title="get /v1/table/{table_id}/csv-backup">client.table.<a href="./src/resources/table/table.ts">getCsvBackup</a>(tableID) -> Response</code>
- <code title="get /v1/table/{table_id}/duplicated-children">client.table.<a href="./src/resources/table/table.ts">getDuplicatedChildren</a>(tableID) -> TableGetDuplicatedChildrenResponse</code>
- <code title="get /v1/table/{table_id}/file">client.table.<a href="./src/resources/table/table.ts">getFile</a>(tableID, { ...params }) -> Response</code>
- <code title="get /v1/table/{table_id}/stats">client.table.<a href="./src/resources/table/table.ts">getStatistics</a>(tableID, { ...params }) -> TableGetStatisticsResponse</code>
- <code title="get /v1/table/{table_id}/columns">client.table.<a href="./src/resources/table/table.ts">listColumns</a>(tableID) -> TableListColumnsResponse</code>
- <code title="get /v1/table/{table_id}/joins">client.table.<a href="./src/resources/table/table.ts">listJoins</a>(tableID) -> TableListJoinsResponse</code>
- <code title="put /v1/table/{table_id}/restore">client.table.<a href="./src/resources/table/table.ts">restore</a>(tableID) -> TableRestoreResponse</code>
- <code title="get /v1/table/{table_id}/rows-stream">client.table.<a href="./src/resources/table/table.ts">streamRows</a>(tableID, { ...params }) -> Response</code>
- <code title="delete /v1/table/{table_id}/truncate">client.table.<a href="./src/resources/table/table.ts">truncate</a>(tableID) -> TableTruncateResponse</code>
- <code title="put /v1/table/{table_id}/cells">client.table.<a href="./src/resources/table/table.ts">updateCells</a>(tableID, { ...params }) -> TableUpdateCellsResponse</code>

## Column

Types:

- <code><a href="./src/resources/table/column.ts">SelectOptionsLookup</a></code>
- <code><a href="./src/resources/table/column.ts">TableColumn</a></code>
- <code><a href="./src/resources/table/column.ts">TableColumnAlter</a></code>
- <code><a href="./src/resources/table/column.ts">ColumnCreateResponse</a></code>
- <code><a href="./src/resources/table/column.ts">ColumnUpdateResponse</a></code>
- <code><a href="./src/resources/table/column.ts">ColumnDeleteResponse</a></code>
- <code><a href="./src/resources/table/column.ts">ColumnCheckViewsResponse</a></code>
- <code><a href="./src/resources/table/column.ts">ColumnGetDistinctValuesResponse</a></code>
- <code><a href="./src/resources/table/column.ts">ColumnRestoreResponse</a></code>

Methods:

- <code title="post /v1/table/{table_id}/column">client.table.column.<a href="./src/resources/table/column.ts">create</a>(tableID, { ...params }) -> ColumnCreateResponse</code>
- <code title="put /v1/table/{table_id}/column/{column_id}">client.table.column.<a href="./src/resources/table/column.ts">update</a>(columnID, { ...params }) -> ColumnUpdateResponse</code>
- <code title="delete /v1/table/{table_id}/column/{column_id}">client.table.column.<a href="./src/resources/table/column.ts">delete</a>(columnID, { ...params }) -> ColumnDeleteResponse</code>
- <code title="get /v1/table/{table_id}/column/{column_id}/views">client.table.column.<a href="./src/resources/table/column.ts">checkViews</a>(columnID, { ...params }) -> ColumnCheckViewsResponse</code>
- <code title="get /v1/table/{table_id}/column/{column_id}/distinct">client.table.column.<a href="./src/resources/table/column.ts">getDistinctValues</a>(columnID, { ...params }) -> ColumnGetDistinctValuesResponse</code>
- <code title="put /v1/table/{table_id}/column/{column_id}/restore">client.table.column.<a href="./src/resources/table/column.ts">restore</a>(columnID, { ...params }) -> ColumnRestoreResponse</code>

## Row

Types:

- <code><a href="./src/resources/table/row.ts">CreateTableRows</a></code>
- <code><a href="./src/resources/table/row.ts">TableRowAction</a></code>
- <code><a href="./src/resources/table/row.ts">UpdateTableRows</a></code>
- <code><a href="./src/resources/table/row.ts">UpsertTableRows</a></code>
- <code><a href="./src/resources/table/row.ts">RowUpdateResponse</a></code>
- <code><a href="./src/resources/table/row.ts">RowAddResponse</a></code>
- <code><a href="./src/resources/table/row.ts">RowGetRowsResponse</a></code>
- <code><a href="./src/resources/table/row.ts">RowUpsertResponse</a></code>

Methods:

- <code title="put /v1/table/{table_id}/row">client.table.row.<a href="./src/resources/table/row.ts">update</a>(tableID, { ...params }) -> RowUpdateResponse</code>
- <code title="post /v1/table/{table_id}/row">client.table.row.<a href="./src/resources/table/row.ts">add</a>(tableID, { ...params }) -> RowAddResponse</code>
- <code title="get /v1/table/{table_id}/row">client.table.row.<a href="./src/resources/table/row.ts">getRows</a>(tableID, { ...params }) -> RowGetRowsResponse</code>
- <code title="post /v1/table/{table_id}/row/upsert">client.table.row.<a href="./src/resources/table/row.ts">upsert</a>(tableID, { ...params }) -> RowUpsertResponse</code>

## Join

Types:

- <code><a href="./src/resources/table/join.ts">TableColumnJoin</a></code>
- <code><a href="./src/resources/table/join.ts">JoinCreateResponse</a></code>
- <code><a href="./src/resources/table/join.ts">JoinUpdateResponse</a></code>
- <code><a href="./src/resources/table/join.ts">JoinDeleteResponse</a></code>

Methods:

- <code title="post /v1/table/{table_id}/join">client.table.join.<a href="./src/resources/table/join.ts">create</a>(tableID, { ...params }) -> JoinCreateResponse</code>
- <code title="put /v1/table/{table_id}/join/{join_id}">client.table.join.<a href="./src/resources/table/join.ts">update</a>(joinID, { ...params }) -> JoinUpdateResponse</code>
- <code title="delete /v1/table/{table_id}/join/{join_id}">client.table.join.<a href="./src/resources/table/join.ts">delete</a>(joinID, { ...params }) -> JoinDeleteResponse</code>

## Sync

Types:

- <code><a href="./src/resources/table/sync.ts">SyncUpdateResponse</a></code>
- <code><a href="./src/resources/table/sync.ts">SyncDeleteIntegrationResponse</a></code>
- <code><a href="./src/resources/table/sync.ts">SyncGetSyncInfoResponse</a></code>
- <code><a href="./src/resources/table/sync.ts">SyncRetryIntegrationSyncResponse</a></code>
- <code><a href="./src/resources/table/sync.ts">SyncSyncWithIntegrationResponse</a></code>

Methods:

- <code title="post /v1/table/{table_id}/sync/{integration_name}/update">client.table.sync.<a href="./src/resources/table/sync.ts">update</a>(integrationName, { ...params }) -> SyncUpdateResponse</code>
- <code title="delete /v1/table/{table_id}/sync/{integration_name}">client.table.sync.<a href="./src/resources/table/sync.ts">deleteIntegration</a>(integrationName, { ...params }) -> SyncDeleteIntegrationResponse</code>
- <code title="get /v1/table/{table_id}/sync/info">client.table.sync.<a href="./src/resources/table/sync.ts">getSyncInfo</a>(tableID) -> SyncGetSyncInfoResponse</code>
- <code title="get /v1/table/{table_id}/sync/manual">client.table.sync.<a href="./src/resources/table/sync.ts">retryIntegrationSync</a>(tableID) -> SyncRetryIntegrationSyncResponse</code>
- <code title="post /v1/table/{table_id}/sync/{integration_name}">client.table.sync.<a href="./src/resources/table/sync.ts">syncWithIntegration</a>(integrationName, { ...params }) -> SyncSyncWithIntegrationResponse</code>

## Views

Types:

- <code><a href="./src/resources/table/views/views.ts">Chart</a></code>
- <code><a href="./src/resources/table/views/views.ts">Colour</a></code>
- <code><a href="./src/resources/table/views/views.ts">Filter</a></code>
- <code><a href="./src/resources/table/views/views.ts">Group</a></code>
- <code><a href="./src/resources/table/views/views.ts">Sort</a></code>
- <code><a href="./src/resources/table/views/views.ts">TableView</a></code>
- <code><a href="./src/resources/table/views/views.ts">ViewCreateResponse</a></code>
- <code><a href="./src/resources/table/views/views.ts">ViewRetrieveResponse</a></code>
- <code><a href="./src/resources/table/views/views.ts">ViewUpdateResponse</a></code>
- <code><a href="./src/resources/table/views/views.ts">ViewListResponse</a></code>
- <code><a href="./src/resources/table/views/views.ts">ViewDeleteResponse</a></code>
- <code><a href="./src/resources/table/views/views.ts">ViewDownloadCsvResponse</a></code>
- <code><a href="./src/resources/table/views/views.ts">ViewDuplicateResponse</a></code>
- <code><a href="./src/resources/table/views/views.ts">ViewDuplicateDefaultResponse</a></code>
- <code><a href="./src/resources/table/views/views.ts">ViewPreviewRowResponse</a></code>
- <code><a href="./src/resources/table/views/views.ts">ViewSetDefaultResponse</a></code>
- <code><a href="./src/resources/table/views/views.ts">ViewStatsResponse</a></code>
- <code><a href="./src/resources/table/views/views.ts">ViewUpdateCellsResponse</a></code>

Methods:

- <code title="post /v1/table/{table_id}/views">client.table.views.<a href="./src/resources/table/views/views.ts">create</a>(tableID, { ...params }) -> ViewCreateResponse</code>
- <code title="get /v1/table/views/{view_id}">client.table.views.<a href="./src/resources/table/views/views.ts">retrieve</a>(viewID, { ...params }) -> ViewRetrieveResponse</code>
- <code title="put /v1/table/views/{view_id}">client.table.views.<a href="./src/resources/table/views/views.ts">update</a>(viewID, { ...params }) -> ViewUpdateResponse</code>
- <code title="get /v1/table/{table_id}/views">client.table.views.<a href="./src/resources/table/views/views.ts">list</a>(tableID, { ...params }) -> ViewListResponse</code>
- <code title="delete /v1/table/views/{view_id}">client.table.views.<a href="./src/resources/table/views/views.ts">delete</a>(viewID) -> ViewDeleteResponse</code>
- <code title="get /v1/table/views/{view_id}/csv">client.table.views.<a href="./src/resources/table/views/views.ts">downloadCsv</a>(viewID, { ...params }) -> string</code>
- <code title="post /v1/table/{table_id}/views/{view_id}/duplicate">client.table.views.<a href="./src/resources/table/views/views.ts">duplicate</a>(viewID, { ...params }) -> ViewDuplicateResponse</code>
- <code title="post /v1/table/{table_id}/views/duplicate-default">client.table.views.<a href="./src/resources/table/views/views.ts">duplicateDefault</a>(tableID, { ...params }) -> ViewDuplicateDefaultResponse</code>
- <code title="post /v1/table/views/{view_id}/preview-row">client.table.views.<a href="./src/resources/table/views/views.ts">previewRow</a>(viewID, { ...params }) -> ViewPreviewRowResponse</code>
- <code title="post /v1/table/views/{view_id}/default">client.table.views.<a href="./src/resources/table/views/views.ts">setDefault</a>(viewID) -> ViewSetDefaultResponse</code>
- <code title="get /v1/table/views/{view_id}/stats">client.table.views.<a href="./src/resources/table/views/views.ts">stats</a>(viewID, { ...params }) -> ViewStatsResponse</code>
- <code title="get /v1/table/views/{view_id}/rows-stream">client.table.views.<a href="./src/resources/table/views/views.ts">streamRows</a>(viewID, { ...params }) -> Response</code>
- <code title="put /v1/table/views/{view_id}/cells">client.table.views.<a href="./src/resources/table/views/views.ts">updateCells</a>(viewID, { ...params }) -> ViewUpdateCellsResponse</code>

### Rows

Types:

- <code><a href="./src/resources/table/views/rows.ts">RowUpdateResponse</a></code>
- <code><a href="./src/resources/table/views/rows.ts">RowListResponse</a></code>
- <code><a href="./src/resources/table/views/rows.ts">RowDeleteResponse</a></code>
- <code><a href="./src/resources/table/views/rows.ts">RowAddResponse</a></code>
- <code><a href="./src/resources/table/views/rows.ts">RowUpsertResponse</a></code>

Methods:

- <code title="put /v1/table/views/{view_id}/rows">client.table.views.rows.<a href="./src/resources/table/views/rows.ts">update</a>(viewID, { ...params }) -> RowUpdateResponse</code>
- <code title="get /v1/table/views/{view_id}/rows">client.table.views.rows.<a href="./src/resources/table/views/rows.ts">list</a>(viewID, { ...params }) -> RowListResponse</code>
- <code title="delete /v1/table/views/{view_id}/rows">client.table.views.rows.<a href="./src/resources/table/views/rows.ts">delete</a>(viewID) -> RowDeleteResponse</code>
- <code title="post /v1/table/views/{view_id}/rows">client.table.views.rows.<a href="./src/resources/table/views/rows.ts">add</a>(viewID, { ...params }) -> RowAddResponse</code>
- <code title="post /v1/table/views/{view_id}/rows/upsert">client.table.views.rows.<a href="./src/resources/table/views/rows.ts">upsert</a>(viewID, { ...params }) -> RowUpsertResponse</code>

### Columns

Types:

- <code><a href="./src/resources/table/views/columns.ts">TableViewColumn</a></code>
- <code><a href="./src/resources/table/views/columns.ts">UpdateTableViewColumn</a></code>
- <code><a href="./src/resources/table/views/columns.ts">ColumnUpdateResponse</a></code>
- <code><a href="./src/resources/table/views/columns.ts">ColumnAddResponse</a></code>
- <code><a href="./src/resources/table/views/columns.ts">ColumnAIFormulaHelperResponse</a></code>
- <code><a href="./src/resources/table/views/columns.ts">ColumnDistinctResponse</a></code>
- <code><a href="./src/resources/table/views/columns.ts">ColumnFormulaInfoResponse</a></code>

Methods:

- <code title="put /v1/table/views/{view_id}/columns/{column_id}">client.table.views.columns.<a href="./src/resources/table/views/columns.ts">update</a>(columnID, { ...params }) -> ColumnUpdateResponse</code>
- <code title="post /v1/table/views/{view_id}/columns">client.table.views.columns.<a href="./src/resources/table/views/columns.ts">add</a>(viewID, { ...params }) -> ColumnAddResponse</code>
- <code title="post /v1/table/views/{view_id}/column/{column_id}/ai-formula-helper">client.table.views.columns.<a href="./src/resources/table/views/columns.ts">aiFormulaHelper</a>(columnID, { ...params }) -> ColumnAIFormulaHelperResponse</code>
- <code title="get /v1/table/views/{view_id}/column/{column_id}/distinct">client.table.views.columns.<a href="./src/resources/table/views/columns.ts">distinct</a>(columnID, { ...params }) -> ColumnDistinctResponse</code>
- <code title="get /v1/table/views/{view_id}/column/{column_id}/formula-info">client.table.views.columns.<a href="./src/resources/table/views/columns.ts">formulaInfo</a>(columnID, { ...params }) -> ColumnFormulaInfoResponse</code>

# Document

Types:

- <code><a href="./src/resources/document/document.ts">Document</a></code>
- <code><a href="./src/resources/document/document.ts">DocumentSection1</a></code>
- <code><a href="./src/resources/document/document.ts">Draftjs</a></code>
- <code><a href="./src/resources/document/document.ts">MortaDocument</a></code>
- <code><a href="./src/resources/document/document.ts">MortaDocumentSection</a></code>
- <code><a href="./src/resources/document/document.ts">SimpleDocument</a></code>
- <code><a href="./src/resources/document/document.ts">DocumentCreateResponse</a></code>
- <code><a href="./src/resources/document/document.ts">DocumentRetrieveResponse</a></code>
- <code><a href="./src/resources/document/document.ts">DocumentUpdateResponse</a></code>
- <code><a href="./src/resources/document/document.ts">DocumentDeleteResponse</a></code>
- <code><a href="./src/resources/document/document.ts">DocumentCreateMultipleSectionsResponse</a></code>
- <code><a href="./src/resources/document/document.ts">DocumentCreateSectionsResponse</a></code>
- <code><a href="./src/resources/document/document.ts">DocumentGetDeletedSectionsResponse</a></code>
- <code><a href="./src/resources/document/document.ts">DocumentGetDuplicatedChildrenResponse</a></code>
- <code><a href="./src/resources/document/document.ts">DocumentRestoreResponse</a></code>
- <code><a href="./src/resources/document/document.ts">DocumentSyncTemplateResponse</a></code>
- <code><a href="./src/resources/document/document.ts">DocumentUpdateMultipleSectionsResponse</a></code>
- <code><a href="./src/resources/document/document.ts">DocumentUpdateSectionOrderResponse</a></code>
- <code><a href="./src/resources/document/document.ts">DocumentUpdateViewsPermissionsResponse</a></code>

Methods:

- <code title="post /v1/document">client.document.<a href="./src/resources/document/document.ts">create</a>({ ...params }) -> DocumentCreateResponse</code>
- <code title="get /v1/document/{document_id}">client.document.<a href="./src/resources/document/document.ts">retrieve</a>(documentID, { ...params }) -> DocumentRetrieveResponse</code>
- <code title="put /v1/document/{document_id}">client.document.<a href="./src/resources/document/document.ts">update</a>(documentID, { ...params }) -> DocumentUpdateResponse</code>
- <code title="delete /v1/document/{document_id}">client.document.<a href="./src/resources/document/document.ts">delete</a>(documentID) -> DocumentDeleteResponse</code>
- <code title="post /v1/document/{document_id}/multiple-section">client.document.<a href="./src/resources/document/document.ts">createMultipleSections</a>(documentID, { ...params }) -> DocumentCreateMultipleSectionsResponse</code>
- <code title="post /v1/document/{document_id}/sections">client.document.<a href="./src/resources/document/document.ts">createSections</a>(documentID, { ...params }) -> DocumentCreateSectionsResponse</code>
- <code title="get /v1/document/{document_id}/export">client.document.<a href="./src/resources/document/document.ts">export</a>(documentID, { ...params }) -> Response</code>
- <code title="get /v1/document/{document_id}/deletedsections">client.document.<a href="./src/resources/document/document.ts">getDeletedSections</a>(documentID, { ...params }) -> DocumentGetDeletedSectionsResponse</code>
- <code title="get /v1/document/{document_id}/duplicated-children">client.document.<a href="./src/resources/document/document.ts">getDuplicatedChildren</a>(documentID) -> DocumentGetDuplicatedChildrenResponse</code>
- <code title="put /v1/document/{document_id}/restore">client.document.<a href="./src/resources/document/document.ts">restore</a>(documentID) -> DocumentRestoreResponse</code>
- <code title="get /v1/document/{document_id}/sync-template">client.document.<a href="./src/resources/document/document.ts">syncTemplate</a>(documentID) -> DocumentSyncTemplateResponse</code>
- <code title="put /v1/document/{document_id}/update-multiple-section">client.document.<a href="./src/resources/document/document.ts">updateMultipleSections</a>(documentID, { ...params }) -> DocumentUpdateMultipleSectionsResponse</code>
- <code title="put /v1/document/{document_id}/changesectionorder">client.document.<a href="./src/resources/document/document.ts">updateSectionOrder</a>(documentID, { ...params }) -> DocumentUpdateSectionOrderResponse</code>
- <code title="put /v1/document/sync-views-permissions">client.document.<a href="./src/resources/document/document.ts">updateViewsPermissions</a>({ ...params }) -> DocumentUpdateViewsPermissionsResponse</code>

## Duplicate

Types:

- <code><a href="./src/resources/document/duplicate.ts">DuplicateGlobalResponse</a></code>

Methods:

- <code title="post /v1/document/{document_id}/duplicate">client.document.duplicate.<a href="./src/resources/document/duplicate.ts">duplicate</a>(documentID, { ...params }) -> void</code>
- <code title="post /v1/document/duplicate">client.document.duplicate.<a href="./src/resources/document/duplicate.ts">global</a>({ ...params }) -> DuplicateGlobalResponse</code>

## Section

Types:

- <code><a href="./src/resources/document/section/section.ts">CreateDocumentSection</a></code>
- <code><a href="./src/resources/document/section/section.ts">SectionCreateResponse</a></code>
- <code><a href="./src/resources/document/section/section.ts">SectionRetrieveResponse</a></code>
- <code><a href="./src/resources/document/section/section.ts">SectionUpdateResponse</a></code>
- <code><a href="./src/resources/document/section/section.ts">SectionDeleteResponse</a></code>
- <code><a href="./src/resources/document/section/section.ts">SectionDuplicateResponse</a></code>
- <code><a href="./src/resources/document/section/section.ts">SectionDuplicateAsyncResponse</a></code>
- <code><a href="./src/resources/document/section/section.ts">SectionRestoreResponse</a></code>

Methods:

- <code title="post /v1/document/{document_id}/section">client.document.section.<a href="./src/resources/document/section/section.ts">create</a>(documentID, { ...params }) -> SectionCreateResponse</code>
- <code title="get /v1/document/{document_id}/section/{document_section_id}">client.document.section.<a href="./src/resources/document/section/section.ts">retrieve</a>(documentSectionID, { ...params }) -> SectionRetrieveResponse</code>
- <code title="put /v1/document/{document_id}/section/{document_section_id}">client.document.section.<a href="./src/resources/document/section/section.ts">update</a>(documentSectionID, { ...params }) -> SectionUpdateResponse</code>
- <code title="delete /v1/document/{document_id}/section/{document_section_id}">client.document.section.<a href="./src/resources/document/section/section.ts">delete</a>(documentSectionID, { ...params }) -> SectionDeleteResponse</code>
- <code title="post /v1/document/{document_id}/section/{document_section_id}/duplicate">client.document.section.<a href="./src/resources/document/section/section.ts">duplicate</a>(documentSectionID, { ...params }) -> SectionDuplicateResponse</code>
- <code title="post /v1/document/{document_id}/section/{document_section_id}/duplicate-async">client.document.section.<a href="./src/resources/document/section/section.ts">duplicateAsync</a>(documentSectionID, { ...params }) -> SectionDuplicateAsyncResponse</code>
- <code title="put /v1/document/{document_id}/section/{document_section_id}/restore">client.document.section.<a href="./src/resources/document/section/section.ts">restore</a>(documentSectionID, { ...params }) -> SectionRestoreResponse</code>

### Response

Types:

- <code><a href="./src/resources/document/section/response.ts">DocumentResponse</a></code>
- <code><a href="./src/resources/document/section/response.ts">ResponseCreateResponse</a></code>
- <code><a href="./src/resources/document/section/response.ts">ResponseUpdateResponse</a></code>
- <code><a href="./src/resources/document/section/response.ts">ResponseDeleteResponse</a></code>
- <code><a href="./src/resources/document/section/response.ts">ResponseResetResponse</a></code>
- <code><a href="./src/resources/document/section/response.ts">ResponseRestoreResponse</a></code>
- <code><a href="./src/resources/document/section/response.ts">ResponseSubmitResponse</a></code>

Methods:

- <code title="post /v1/document/{document_id}/section/{document_section_id}/response">client.document.section.response.<a href="./src/resources/document/section/response.ts">create</a>(documentSectionID, { ...params }) -> ResponseCreateResponse</code>
- <code title="put /v1/document/{document_id}/section/{document_section_id}/response/{document_response_id}">client.document.section.response.<a href="./src/resources/document/section/response.ts">update</a>(documentResponseID, { ...params }) -> ResponseUpdateResponse</code>
- <code title="delete /v1/document/{document_id}/section/{document_section_id}/response/{document_response_id}">client.document.section.response.<a href="./src/resources/document/section/response.ts">delete</a>(documentResponseID, { ...params }) -> ResponseDeleteResponse</code>
- <code title="put /v1/document/{document_id}/section/{document_section_id}/response/{document_response_id}/reset">client.document.section.response.<a href="./src/resources/document/section/response.ts">reset</a>(documentResponseID, { ...params }) -> ResponseResetResponse</code>
- <code title="put /v1/document/{document_id}/section/{document_section_id}/response/{document_response_id}/restore">client.document.section.response.<a href="./src/resources/document/section/response.ts">restore</a>(documentResponseID, { ...params }) -> ResponseRestoreResponse</code>
- <code title="put /v1/document/{document_id}/section/{document_section_id}/response/{document_response_id}/submit">client.document.section.response.<a href="./src/resources/document/section/response.ts">submit</a>(documentResponseID, { ...params }) -> ResponseSubmitResponse</code>

# Notifications

Types:

- <code><a href="./src/resources/notifications.ts">Action</a></code>
- <code><a href="./src/resources/notifications.ts">CreateNotificationSchemaHeader</a></code>
- <code><a href="./src/resources/notifications.ts">Notification</a></code>
- <code><a href="./src/resources/notifications.ts">Table1</a></code>
- <code><a href="./src/resources/notifications.ts">Trigger</a></code>
- <code><a href="./src/resources/notifications.ts">NotificationCreateResponse</a></code>
- <code><a href="./src/resources/notifications.ts">NotificationUpdateResponse</a></code>
- <code><a href="./src/resources/notifications.ts">NotificationDeleteResponse</a></code>
- <code><a href="./src/resources/notifications.ts">NotificationListEventTypesResponse</a></code>
- <code><a href="./src/resources/notifications.ts">NotificationListEventsResponse</a></code>

Methods:

- <code title="post /v1/notifications">client.notifications.<a href="./src/resources/notifications.ts">create</a>({ ...params }) -> NotificationCreateResponse</code>
- <code title="put /v1/notifications/{id}">client.notifications.<a href="./src/resources/notifications.ts">update</a>(id, { ...params }) -> NotificationUpdateResponse</code>
- <code title="delete /v1/notifications/{id}">client.notifications.<a href="./src/resources/notifications.ts">delete</a>(id) -> NotificationDeleteResponse</code>
- <code title="get /v1/notifications/event-types">client.notifications.<a href="./src/resources/notifications.ts">listEventTypes</a>() -> NotificationListEventTypesResponse</code>
- <code title="get /v1/notifications/events/{resource_id}">client.notifications.<a href="./src/resources/notifications.ts">listEvents</a>(resourceID, { ...params }) -> NotificationListEventsResponse</code>

# CommentThread

Types:

- <code><a href="./src/resources/comment-thread/comment-thread.ts">CommentThread</a></code>
- <code><a href="./src/resources/comment-thread/comment-thread.ts">CommentThreadCreateResponse</a></code>
- <code><a href="./src/resources/comment-thread/comment-thread.ts">CommentThreadRetrieveResponse</a></code>
- <code><a href="./src/resources/comment-thread/comment-thread.ts">CommentThreadListResponse</a></code>
- <code><a href="./src/resources/comment-thread/comment-thread.ts">CommentThreadDeleteResponse</a></code>
- <code><a href="./src/resources/comment-thread/comment-thread.ts">CommentThreadGetStatsResponse</a></code>
- <code><a href="./src/resources/comment-thread/comment-thread.ts">CommentThreadReopenResponse</a></code>
- <code><a href="./src/resources/comment-thread/comment-thread.ts">CommentThreadResolveResponse</a></code>

Methods:

- <code title="post /v1/comment_thread">client.commentThread.<a href="./src/resources/comment-thread/comment-thread.ts">create</a>({ ...params }) -> CommentThreadCreateResponse</code>
- <code title="get /v1/comment_thread/{comment_thread_id}">client.commentThread.<a href="./src/resources/comment-thread/comment-thread.ts">retrieve</a>(commentThreadID) -> CommentThreadRetrieveResponse</code>
- <code title="get /v1/comment_thread">client.commentThread.<a href="./src/resources/comment-thread/comment-thread.ts">list</a>({ ...params }) -> CommentThreadListResponse</code>
- <code title="delete /v1/comment_thread/{comment_thread_id}">client.commentThread.<a href="./src/resources/comment-thread/comment-thread.ts">delete</a>(commentThreadID) -> CommentThreadDeleteResponse</code>
- <code title="get /v1/comment_thread/stats">client.commentThread.<a href="./src/resources/comment-thread/comment-thread.ts">getStats</a>({ ...params }) -> CommentThreadGetStatsResponse</code>
- <code title="put /v1/comment_thread/{comment_thread_id}/reopen">client.commentThread.<a href="./src/resources/comment-thread/comment-thread.ts">reopen</a>(commentThreadID) -> CommentThreadReopenResponse</code>
- <code title="put /v1/comment_thread/{comment_thread_id}/resolve">client.commentThread.<a href="./src/resources/comment-thread/comment-thread.ts">resolve</a>(commentThreadID) -> CommentThreadResolveResponse</code>

## Comment

Types:

- <code><a href="./src/resources/comment-thread/comment.ts">CommentModel</a></code>
- <code><a href="./src/resources/comment-thread/comment.ts">CommentCreateResponse</a></code>
- <code><a href="./src/resources/comment-thread/comment.ts">CommentUpdateResponse</a></code>
- <code><a href="./src/resources/comment-thread/comment.ts">CommentDeleteResponse</a></code>

Methods:

- <code title="post /v1/comment_thread/{comment_thread_id}/comment">client.commentThread.comment.<a href="./src/resources/comment-thread/comment.ts">create</a>(commentThreadID, { ...params }) -> CommentCreateResponse</code>
- <code title="put /v1/comment_thread/{comment_thread_id}/comment/{comment_id}">client.commentThread.comment.<a href="./src/resources/comment-thread/comment.ts">update</a>(commentID, { ...params }) -> CommentUpdateResponse</code>
- <code title="delete /v1/comment_thread/{comment_thread_id}/comment/{comment_id}">client.commentThread.comment.<a href="./src/resources/comment-thread/comment.ts">delete</a>(commentID, { ...params }) -> CommentDeleteResponse</code>

# Permissions

Types:

- <code><a href="./src/resources/permissions.ts">AccessPolicy</a></code>
- <code><a href="./src/resources/permissions.ts">CreatePermissions</a></code>
- <code><a href="./src/resources/permissions.ts">Table3</a></code>
- <code><a href="./src/resources/permissions.ts">PermissionCreateResponse</a></code>
- <code><a href="./src/resources/permissions.ts">PermissionRetrieveResponse</a></code>
- <code><a href="./src/resources/permissions.ts">PermissionUpdateResponse</a></code>
- <code><a href="./src/resources/permissions.ts">PermissionCreateAllResponse</a></code>
- <code><a href="./src/resources/permissions.ts">PermissionRetrieveTagResponse</a></code>

Methods:

- <code title="post /v1/permissions">client.permissions.<a href="./src/resources/permissions.ts">create</a>({ ...params }) -> PermissionCreateResponse</code>
- <code title="get /v1/permissions">client.permissions.<a href="./src/resources/permissions.ts">retrieve</a>({ ...params }) -> PermissionRetrieveResponse</code>
- <code title="put /v1/permissions/{id}">client.permissions.<a href="./src/resources/permissions.ts">update</a>(id, { ...params }) -> PermissionUpdateResponse</code>
- <code title="delete /v1/permissions/{id}">client.permissions.<a href="./src/resources/permissions.ts">delete</a>(id) -> void</code>
- <code title="post /v1/permissions/all">client.permissions.<a href="./src/resources/permissions.ts">createAll</a>({ ...params }) -> PermissionCreateAllResponse</code>
- <code title="get /v1/permissions/request/{hub_id}/{type}/{id}">client.permissions.<a href="./src/resources/permissions.ts">request</a>(id, { ...params }) -> void</code>
- <code title="get /v1/permissions/tag">client.permissions.<a href="./src/resources/permissions.ts">retrieveTag</a>({ ...params }) -> PermissionRetrieveTagResponse</code>

# Integrations

Types:

- <code><a href="./src/resources/integrations.ts">PassthroughAPICall</a></code>
- <code><a href="./src/resources/integrations.ts">IntegrationCreatePassthroughResponse</a></code>

Methods:

- <code title="post /v1/integrations/passthrough">client.integrations.<a href="./src/resources/integrations.ts">createPassthrough</a>({ ...params }) -> IntegrationCreatePassthroughResponse</code>
- <code title="post /v1/integrations/passthrough-download">client.integrations.<a href="./src/resources/integrations.ts">createPassthroughDownload</a>({ ...params }) -> Response</code>
