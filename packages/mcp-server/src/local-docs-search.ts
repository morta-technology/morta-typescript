// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'retrieve_me',
    endpoint: '/v1/user/me',
    httpMethod: 'get',
    summary: 'Get my details',
    description: 'Get info on the current user',
    stainlessPath: '(resource) user > (method) retrieve_me',
    qualified: 'client.user.retrieveMe',
    response:
      '{ data?: { aconexConnected?: boolean; allowSupportAccesss?: boolean; apiKeys?: api_key[]; asiteConnected?: boolean; autodeskConnected?: boolean; bio?: string; constructionSoftware?: string[]; createdAt?: string; email?: string; firebaseUserId?: string; kind?: string; linkedin?: string; location?: string; managedSubscriptionUsers?: user[]; name?: string; numberOfManagedSubscriptionUsers?: number; onScalePlan?: boolean; optOutAiEmail?: boolean; optOutDuplicationEmail?: boolean; optOutHubEmail?: boolean; optOutSyncEmail?: boolean; optOutWelcomeEmail?: boolean; organisation?: string; phone?: string; procoreConnected?: boolean; profilePicture?: string; projectsWorkedOn?: string[]; publicId?: string; reviztoConnected?: boolean; specialisms?: string[]; subscriptionManagerUser?: user_hub | object; subscriptionQuota?: number; tags?: object; twitter?: string; university?: string; universityDegree?: string; viewpointConnected?: boolean; website?: string; }; metadata?: object; }',
    markdown:
      "## retrieve_me\n\n`client.user.retrieveMe(): { data?: user; metadata?: object; }`\n\n**get** `/v1/user/me`\n\nGet info on the current user\n\n### Returns\n\n- `{ data?: { aconexConnected?: boolean; allowSupportAccesss?: boolean; apiKeys?: api_key[]; asiteConnected?: boolean; autodeskConnected?: boolean; bio?: string; constructionSoftware?: string[]; createdAt?: string; email?: string; firebaseUserId?: string; kind?: string; linkedin?: string; location?: string; managedSubscriptionUsers?: user[]; name?: string; numberOfManagedSubscriptionUsers?: number; onScalePlan?: boolean; optOutAiEmail?: boolean; optOutDuplicationEmail?: boolean; optOutHubEmail?: boolean; optOutSyncEmail?: boolean; optOutWelcomeEmail?: boolean; organisation?: string; phone?: string; procoreConnected?: boolean; profilePicture?: string; projectsWorkedOn?: string[]; publicId?: string; reviztoConnected?: boolean; specialisms?: string[]; subscriptionManagerUser?: user_hub | object; subscriptionQuota?: number; tags?: object; twitter?: string; university?: string; universityDegree?: string; viewpointConnected?: boolean; website?: string; }; metadata?: object; }`\n\n  - `data?: { aconexConnected?: boolean; allowSupportAccesss?: boolean; apiKeys?: { accessLevel?: number; documentRestrictions?: string[]; hash?: string; name?: string; prefix?: string; projectRestrictions?: string[]; publicId?: string; tableRestrictions?: string[]; }[]; asiteConnected?: boolean; autodeskConnected?: boolean; bio?: string; constructionSoftware?: string[]; createdAt?: string; email?: string; firebaseUserId?: string; kind?: string; linkedin?: string; location?: string; managedSubscriptionUsers?: { aconexConnected?: boolean; allowSupportAccesss?: boolean; apiKeys?: api_key[]; asiteConnected?: boolean; autodeskConnected?: boolean; bio?: string; constructionSoftware?: string[]; createdAt?: string; email?: string; firebaseUserId?: string; kind?: string; linkedin?: string; location?: string; managedSubscriptionUsers?: user[]; name?: string; numberOfManagedSubscriptionUsers?: number; onScalePlan?: boolean; optOutAiEmail?: boolean; optOutDuplicationEmail?: boolean; optOutHubEmail?: boolean; optOutSyncEmail?: boolean; optOutWelcomeEmail?: boolean; organisation?: string; phone?: string; procoreConnected?: boolean; profilePicture?: string; projectsWorkedOn?: string[]; publicId?: string; reviztoConnected?: boolean; specialisms?: string[]; subscriptionManagerUser?: user_hub | object; subscriptionQuota?: number; tags?: object; twitter?: string; university?: string; universityDegree?: string; viewpointConnected?: boolean; website?: string; }[]; name?: string; numberOfManagedSubscriptionUsers?: number; onScalePlan?: boolean; optOutAiEmail?: boolean; optOutDuplicationEmail?: boolean; optOutHubEmail?: boolean; optOutSyncEmail?: boolean; optOutWelcomeEmail?: boolean; organisation?: string; phone?: string; procoreConnected?: boolean; profilePicture?: string; projectsWorkedOn?: string[]; publicId?: string; reviztoConnected?: boolean; specialisms?: string[]; subscriptionManagerUser?: { email?: string; name?: string; } | object; subscriptionQuota?: number; tags?: object; twitter?: string; university?: string; universityDegree?: string; viewpointConnected?: boolean; website?: string; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.user.retrieveMe();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.retrieveMe',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.user.retrieveMe();\n\nconsole.log(response.data);",
      },
      python: {
        method: 'user.retrieve_me',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.user.retrieve_me()\nprint(response.data)',
      },
      http: {
        example: 'curl https://api.morta.io/v1/user/me \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/user/{firebase_id}',
    httpMethod: 'get',
    summary: 'Get Specific User Details',
    description: 'Get information on a specific user',
    stainlessPath: '(resource) user > (method) retrieve',
    qualified: 'client.user.retrieve',
    params: ['firebase_id: string;'],
    response:
      '{ data?: { aconexConnected?: boolean; allowSupportAccesss?: boolean; apiKeys?: api_key[]; asiteConnected?: boolean; autodeskConnected?: boolean; bio?: string; constructionSoftware?: string[]; createdAt?: string; email?: string; firebaseUserId?: string; kind?: string; linkedin?: string; location?: string; managedSubscriptionUsers?: user[]; name?: string; numberOfManagedSubscriptionUsers?: number; onScalePlan?: boolean; optOutAiEmail?: boolean; optOutDuplicationEmail?: boolean; optOutHubEmail?: boolean; optOutSyncEmail?: boolean; optOutWelcomeEmail?: boolean; organisation?: string; phone?: string; procoreConnected?: boolean; profilePicture?: string; projectsWorkedOn?: string[]; publicId?: string; reviztoConnected?: boolean; specialisms?: string[]; subscriptionManagerUser?: user_hub | object; subscriptionQuota?: number; tags?: object; twitter?: string; university?: string; universityDegree?: string; viewpointConnected?: boolean; website?: string; }; metadata?: object; }',
    markdown:
      "## retrieve\n\n`client.user.retrieve(firebase_id: string): { data?: user; metadata?: object; }`\n\n**get** `/v1/user/{firebase_id}`\n\nGet information on a specific user\n\n### Parameters\n\n- `firebase_id: string`\n\n### Returns\n\n- `{ data?: { aconexConnected?: boolean; allowSupportAccesss?: boolean; apiKeys?: api_key[]; asiteConnected?: boolean; autodeskConnected?: boolean; bio?: string; constructionSoftware?: string[]; createdAt?: string; email?: string; firebaseUserId?: string; kind?: string; linkedin?: string; location?: string; managedSubscriptionUsers?: user[]; name?: string; numberOfManagedSubscriptionUsers?: number; onScalePlan?: boolean; optOutAiEmail?: boolean; optOutDuplicationEmail?: boolean; optOutHubEmail?: boolean; optOutSyncEmail?: boolean; optOutWelcomeEmail?: boolean; organisation?: string; phone?: string; procoreConnected?: boolean; profilePicture?: string; projectsWorkedOn?: string[]; publicId?: string; reviztoConnected?: boolean; specialisms?: string[]; subscriptionManagerUser?: user_hub | object; subscriptionQuota?: number; tags?: object; twitter?: string; university?: string; universityDegree?: string; viewpointConnected?: boolean; website?: string; }; metadata?: object; }`\n\n  - `data?: { aconexConnected?: boolean; allowSupportAccesss?: boolean; apiKeys?: { accessLevel?: number; documentRestrictions?: string[]; hash?: string; name?: string; prefix?: string; projectRestrictions?: string[]; publicId?: string; tableRestrictions?: string[]; }[]; asiteConnected?: boolean; autodeskConnected?: boolean; bio?: string; constructionSoftware?: string[]; createdAt?: string; email?: string; firebaseUserId?: string; kind?: string; linkedin?: string; location?: string; managedSubscriptionUsers?: { aconexConnected?: boolean; allowSupportAccesss?: boolean; apiKeys?: api_key[]; asiteConnected?: boolean; autodeskConnected?: boolean; bio?: string; constructionSoftware?: string[]; createdAt?: string; email?: string; firebaseUserId?: string; kind?: string; linkedin?: string; location?: string; managedSubscriptionUsers?: user[]; name?: string; numberOfManagedSubscriptionUsers?: number; onScalePlan?: boolean; optOutAiEmail?: boolean; optOutDuplicationEmail?: boolean; optOutHubEmail?: boolean; optOutSyncEmail?: boolean; optOutWelcomeEmail?: boolean; organisation?: string; phone?: string; procoreConnected?: boolean; profilePicture?: string; projectsWorkedOn?: string[]; publicId?: string; reviztoConnected?: boolean; specialisms?: string[]; subscriptionManagerUser?: user_hub | object; subscriptionQuota?: number; tags?: object; twitter?: string; university?: string; universityDegree?: string; viewpointConnected?: boolean; website?: string; }[]; name?: string; numberOfManagedSubscriptionUsers?: number; onScalePlan?: boolean; optOutAiEmail?: boolean; optOutDuplicationEmail?: boolean; optOutHubEmail?: boolean; optOutSyncEmail?: boolean; optOutWelcomeEmail?: boolean; organisation?: string; phone?: string; procoreConnected?: boolean; profilePicture?: string; projectsWorkedOn?: string[]; publicId?: string; reviztoConnected?: boolean; specialisms?: string[]; subscriptionManagerUser?: { email?: string; name?: string; } | object; subscriptionQuota?: number; tags?: object; twitter?: string; university?: string; universityDegree?: string; viewpointConnected?: boolean; website?: string; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst user = await client.user.retrieve('firebase_id');\n\nconsole.log(user);\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.retrieve',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst user = await client.user.retrieve('firebase_id');\n\nconsole.log(user.data);",
      },
      python: {
        method: 'user.retrieve',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nuser = client.user.retrieve(\n    "firebase_id",\n)\nprint(user.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/user/$FIREBASE_ID \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve_by_public_id',
    endpoint: '/v1/user/public/{public_id}',
    httpMethod: 'get',
    summary: 'Get User Details by Public ID',
    description: 'Get information on a specific user by their public ID',
    stainlessPath: '(resource) user > (method) retrieve_by_public_id',
    qualified: 'client.user.retrieveByPublicID',
    params: ['public_id: string;'],
    response:
      '{ data?: { aconexConnected?: boolean; allowSupportAccesss?: boolean; apiKeys?: api_key[]; asiteConnected?: boolean; autodeskConnected?: boolean; bio?: string; constructionSoftware?: string[]; createdAt?: string; email?: string; firebaseUserId?: string; kind?: string; linkedin?: string; location?: string; managedSubscriptionUsers?: user[]; name?: string; numberOfManagedSubscriptionUsers?: number; onScalePlan?: boolean; optOutAiEmail?: boolean; optOutDuplicationEmail?: boolean; optOutHubEmail?: boolean; optOutSyncEmail?: boolean; optOutWelcomeEmail?: boolean; organisation?: string; phone?: string; procoreConnected?: boolean; profilePicture?: string; projectsWorkedOn?: string[]; publicId?: string; reviztoConnected?: boolean; specialisms?: string[]; subscriptionManagerUser?: user_hub | object; subscriptionQuota?: number; tags?: object; twitter?: string; university?: string; universityDegree?: string; viewpointConnected?: boolean; website?: string; }; metadata?: object; }',
    markdown:
      "## retrieve_by_public_id\n\n`client.user.retrieveByPublicID(public_id: string): { data?: user; metadata?: object; }`\n\n**get** `/v1/user/public/{public_id}`\n\nGet information on a specific user by their public ID\n\n### Parameters\n\n- `public_id: string`\n\n### Returns\n\n- `{ data?: { aconexConnected?: boolean; allowSupportAccesss?: boolean; apiKeys?: api_key[]; asiteConnected?: boolean; autodeskConnected?: boolean; bio?: string; constructionSoftware?: string[]; createdAt?: string; email?: string; firebaseUserId?: string; kind?: string; linkedin?: string; location?: string; managedSubscriptionUsers?: user[]; name?: string; numberOfManagedSubscriptionUsers?: number; onScalePlan?: boolean; optOutAiEmail?: boolean; optOutDuplicationEmail?: boolean; optOutHubEmail?: boolean; optOutSyncEmail?: boolean; optOutWelcomeEmail?: boolean; organisation?: string; phone?: string; procoreConnected?: boolean; profilePicture?: string; projectsWorkedOn?: string[]; publicId?: string; reviztoConnected?: boolean; specialisms?: string[]; subscriptionManagerUser?: user_hub | object; subscriptionQuota?: number; tags?: object; twitter?: string; university?: string; universityDegree?: string; viewpointConnected?: boolean; website?: string; }; metadata?: object; }`\n\n  - `data?: { aconexConnected?: boolean; allowSupportAccesss?: boolean; apiKeys?: { accessLevel?: number; documentRestrictions?: string[]; hash?: string; name?: string; prefix?: string; projectRestrictions?: string[]; publicId?: string; tableRestrictions?: string[]; }[]; asiteConnected?: boolean; autodeskConnected?: boolean; bio?: string; constructionSoftware?: string[]; createdAt?: string; email?: string; firebaseUserId?: string; kind?: string; linkedin?: string; location?: string; managedSubscriptionUsers?: { aconexConnected?: boolean; allowSupportAccesss?: boolean; apiKeys?: api_key[]; asiteConnected?: boolean; autodeskConnected?: boolean; bio?: string; constructionSoftware?: string[]; createdAt?: string; email?: string; firebaseUserId?: string; kind?: string; linkedin?: string; location?: string; managedSubscriptionUsers?: user[]; name?: string; numberOfManagedSubscriptionUsers?: number; onScalePlan?: boolean; optOutAiEmail?: boolean; optOutDuplicationEmail?: boolean; optOutHubEmail?: boolean; optOutSyncEmail?: boolean; optOutWelcomeEmail?: boolean; organisation?: string; phone?: string; procoreConnected?: boolean; profilePicture?: string; projectsWorkedOn?: string[]; publicId?: string; reviztoConnected?: boolean; specialisms?: string[]; subscriptionManagerUser?: user_hub | object; subscriptionQuota?: number; tags?: object; twitter?: string; university?: string; universityDegree?: string; viewpointConnected?: boolean; website?: string; }[]; name?: string; numberOfManagedSubscriptionUsers?: number; onScalePlan?: boolean; optOutAiEmail?: boolean; optOutDuplicationEmail?: boolean; optOutHubEmail?: boolean; optOutSyncEmail?: boolean; optOutWelcomeEmail?: boolean; organisation?: string; phone?: string; procoreConnected?: boolean; profilePicture?: string; projectsWorkedOn?: string[]; publicId?: string; reviztoConnected?: boolean; specialisms?: string[]; subscriptionManagerUser?: { email?: string; name?: string; } | object; subscriptionQuota?: number; tags?: object; twitter?: string; university?: string; universityDegree?: string; viewpointConnected?: boolean; website?: string; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.user.retrieveByPublicID('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.retrieveByPublicID',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.user.retrieveByPublicID('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'user.retrieve_by_public_id',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.user.retrieve_by_public_id(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/user/public/$PUBLIC_ID \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'list_achievements',
    endpoint: '/v1/user/{firebase_id}/achievements',
    httpMethod: 'get',
    summary: 'Get User Achievements',
    description: 'Get the achievement badges of a user by their Firebase ID',
    stainlessPath: '(resource) user > (method) list_achievements',
    qualified: 'client.user.listAchievements',
    params: ['firebase_id: string;'],
    response: '{ data?: { createdProcesses?: number; createdTables?: number; }; metadata?: object; }',
    markdown:
      "## list_achievements\n\n`client.user.listAchievements(firebase_id: string): { data?: object; metadata?: object; }`\n\n**get** `/v1/user/{firebase_id}/achievements`\n\nGet the achievement badges of a user by their Firebase ID\n\n### Parameters\n\n- `firebase_id: string`\n\n### Returns\n\n- `{ data?: { createdProcesses?: number; createdTables?: number; }; metadata?: object; }`\n\n  - `data?: { createdProcesses?: number; createdTables?: number; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.user.listAchievements('firebase_id');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.listAchievements',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.user.listAchievements('firebase_id');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'user.list_achievements',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.user.list_achievements(\n    "firebase_id",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/user/$FIREBASE_ID/achievements \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'list_pinned_hubs',
    endpoint: '/v1/user/{firebase_id}/pinned-hubs',
    httpMethod: 'get',
    summary: "Get User's Pinned Hubs",
    description: 'Get the hubs pinned by a user identified by their Firebase ID',
    stainlessPath: '(resource) user > (method) list_pinned_hubs',
    qualified: 'client.user.listPinnedHubs',
    params: ['firebase_id: string;'],
    response:
      '{ data?: { contributors?: number; name?: string; primaryColour?: string; publicId?: string; views?: number; }[]; metadata?: object; }',
    markdown:
      "## list_pinned_hubs\n\n`client.user.listPinnedHubs(firebase_id: string): { data?: object[]; metadata?: object; }`\n\n**get** `/v1/user/{firebase_id}/pinned-hubs`\n\nGet the hubs pinned by a user identified by their Firebase ID\n\n### Parameters\n\n- `firebase_id: string`\n\n### Returns\n\n- `{ data?: { contributors?: number; name?: string; primaryColour?: string; publicId?: string; views?: number; }[]; metadata?: object; }`\n\n  - `data?: { contributors?: number; name?: string; primaryColour?: string; publicId?: string; views?: number; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.user.listPinnedHubs('firebase_id');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.listPinnedHubs',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.user.listPinnedHubs('firebase_id');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'user.list_pinned_hubs',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.user.list_pinned_hubs(\n    "firebase_id",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/user/$FIREBASE_ID/pinned-hubs \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'list_contributions',
    endpoint: '/v1/user/{firebase_id}/contributions',
    httpMethod: 'get',
    summary: 'Get User Contributions',
    description: 'Get the number of contributions per day made by a user, identified by their Firebase ID',
    stainlessPath: '(resource) user > (method) list_contributions',
    qualified: 'client.user.listContributions',
    params: ['firebase_id: string;'],
    response: '{ data?: object; metadata?: object; }',
    markdown:
      "## list_contributions\n\n`client.user.listContributions(firebase_id: string): { data?: object; metadata?: object; }`\n\n**get** `/v1/user/{firebase_id}/contributions`\n\nGet the number of contributions per day made by a user, identified by their Firebase ID\n\n### Parameters\n\n- `firebase_id: string`\n\n### Returns\n\n- `{ data?: object; metadata?: object; }`\n\n  - `data?: object`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.user.listContributions('firebase_id');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.listContributions',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.user.listContributions('firebase_id');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'user.list_contributions',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.user.list_contributions(\n    "firebase_id",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/user/$FIREBASE_ID/contributions \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'list_public_contributions',
    endpoint: '/v1/user/{firebase_id}/public-contributions',
    httpMethod: 'get',
    summary: "Get User's Public Contributions",
    description: 'Get the public contributions made by a user, identified by their Firebase ID',
    stainlessPath: '(resource) user > (method) list_public_contributions',
    qualified: 'client.user.listPublicContributions',
    params: ['firebase_id: string;'],
    response:
      '{ data?: { change?: object; changeId?: string; channel?: string; context?: object; contextProcessId?: number; contextProcessResponseId?: number; contextProcessSectionId?: number; contextTableColumnId?: number; contextTableId?: number; contextTableViewId?: number; createdAt?: string; projectId?: number; publicId?: string; resource?: string; resourcePublicId?: string; userId?: number; verb?: string; }[]; metadata?: object; }',
    markdown:
      "## list_public_contributions\n\n`client.user.listPublicContributions(firebase_id: string): { data?: event[]; metadata?: object; }`\n\n**get** `/v1/user/{firebase_id}/public-contributions`\n\nGet the public contributions made by a user, identified by their Firebase ID\n\n### Parameters\n\n- `firebase_id: string`\n\n### Returns\n\n- `{ data?: { change?: object; changeId?: string; channel?: string; context?: object; contextProcessId?: number; contextProcessResponseId?: number; contextProcessSectionId?: number; contextTableColumnId?: number; contextTableId?: number; contextTableViewId?: number; createdAt?: string; projectId?: number; publicId?: string; resource?: string; resourcePublicId?: string; userId?: number; verb?: string; }[]; metadata?: object; }`\n\n  - `data?: { change?: object; changeId?: string; channel?: string; context?: object; contextProcessId?: number; contextProcessResponseId?: number; contextProcessSectionId?: number; contextTableColumnId?: number; contextTableId?: number; contextTableViewId?: number; createdAt?: string; projectId?: number; publicId?: string; resource?: string; resourcePublicId?: string; userId?: number; verb?: string; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.user.listPublicContributions('firebase_id');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.listPublicContributions',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.user.listPublicContributions('firebase_id');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'user.list_public_contributions',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.user.list_public_contributions(\n    "firebase_id",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/user/$FIREBASE_ID/public-contributions \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/user',
    httpMethod: 'post',
    summary: 'Create New User',
    description: 'Create a new user',
    stainlessPath: '(resource) user > (method) create',
    qualified: 'client.user.create',
    params: [
      'email: string;',
      'name: string;',
      'password: string;',
      'optOutAiEmail?: boolean;',
      'optOutDuplicationEmail?: boolean;',
      'optOutHubEmail?: boolean;',
      'optOutSyncEmail?: boolean;',
      'optOutWelcomeEmail?: boolean;',
      'projectId?: string;',
      'template?: string;',
    ],
    response:
      '{ data?: { aconexConnected?: boolean; allowSupportAccesss?: boolean; apiKeys?: api_key[]; asiteConnected?: boolean; autodeskConnected?: boolean; bio?: string; constructionSoftware?: string[]; createdAt?: string; email?: string; firebaseUserId?: string; kind?: string; linkedin?: string; location?: string; managedSubscriptionUsers?: user[]; name?: string; numberOfManagedSubscriptionUsers?: number; onScalePlan?: boolean; optOutAiEmail?: boolean; optOutDuplicationEmail?: boolean; optOutHubEmail?: boolean; optOutSyncEmail?: boolean; optOutWelcomeEmail?: boolean; organisation?: string; phone?: string; procoreConnected?: boolean; profilePicture?: string; projectsWorkedOn?: string[]; publicId?: string; reviztoConnected?: boolean; specialisms?: string[]; subscriptionManagerUser?: user_hub | object; subscriptionQuota?: number; tags?: object; twitter?: string; university?: string; universityDegree?: string; viewpointConnected?: boolean; website?: string; }; metadata?: object; }',
    markdown:
      "## create\n\n`client.user.create(email: string, name: string, password: string, optOutAiEmail?: boolean, optOutDuplicationEmail?: boolean, optOutHubEmail?: boolean, optOutSyncEmail?: boolean, optOutWelcomeEmail?: boolean, projectId?: string, template?: string): { data?: user; metadata?: object; }`\n\n**post** `/v1/user`\n\nCreate a new user\n\n### Parameters\n\n- `email: string`\n\n- `name: string`\n\n- `password: string`\n\n- `optOutAiEmail?: boolean`\n\n- `optOutDuplicationEmail?: boolean`\n\n- `optOutHubEmail?: boolean`\n\n- `optOutSyncEmail?: boolean`\n\n- `optOutWelcomeEmail?: boolean`\n\n- `projectId?: string`\n\n- `template?: string`\n\n### Returns\n\n- `{ data?: { aconexConnected?: boolean; allowSupportAccesss?: boolean; apiKeys?: api_key[]; asiteConnected?: boolean; autodeskConnected?: boolean; bio?: string; constructionSoftware?: string[]; createdAt?: string; email?: string; firebaseUserId?: string; kind?: string; linkedin?: string; location?: string; managedSubscriptionUsers?: user[]; name?: string; numberOfManagedSubscriptionUsers?: number; onScalePlan?: boolean; optOutAiEmail?: boolean; optOutDuplicationEmail?: boolean; optOutHubEmail?: boolean; optOutSyncEmail?: boolean; optOutWelcomeEmail?: boolean; organisation?: string; phone?: string; procoreConnected?: boolean; profilePicture?: string; projectsWorkedOn?: string[]; publicId?: string; reviztoConnected?: boolean; specialisms?: string[]; subscriptionManagerUser?: user_hub | object; subscriptionQuota?: number; tags?: object; twitter?: string; university?: string; universityDegree?: string; viewpointConnected?: boolean; website?: string; }; metadata?: object; }`\n\n  - `data?: { aconexConnected?: boolean; allowSupportAccesss?: boolean; apiKeys?: { accessLevel?: number; documentRestrictions?: string[]; hash?: string; name?: string; prefix?: string; projectRestrictions?: string[]; publicId?: string; tableRestrictions?: string[]; }[]; asiteConnected?: boolean; autodeskConnected?: boolean; bio?: string; constructionSoftware?: string[]; createdAt?: string; email?: string; firebaseUserId?: string; kind?: string; linkedin?: string; location?: string; managedSubscriptionUsers?: { aconexConnected?: boolean; allowSupportAccesss?: boolean; apiKeys?: api_key[]; asiteConnected?: boolean; autodeskConnected?: boolean; bio?: string; constructionSoftware?: string[]; createdAt?: string; email?: string; firebaseUserId?: string; kind?: string; linkedin?: string; location?: string; managedSubscriptionUsers?: user[]; name?: string; numberOfManagedSubscriptionUsers?: number; onScalePlan?: boolean; optOutAiEmail?: boolean; optOutDuplicationEmail?: boolean; optOutHubEmail?: boolean; optOutSyncEmail?: boolean; optOutWelcomeEmail?: boolean; organisation?: string; phone?: string; procoreConnected?: boolean; profilePicture?: string; projectsWorkedOn?: string[]; publicId?: string; reviztoConnected?: boolean; specialisms?: string[]; subscriptionManagerUser?: user_hub | object; subscriptionQuota?: number; tags?: object; twitter?: string; university?: string; universityDegree?: string; viewpointConnected?: boolean; website?: string; }[]; name?: string; numberOfManagedSubscriptionUsers?: number; onScalePlan?: boolean; optOutAiEmail?: boolean; optOutDuplicationEmail?: boolean; optOutHubEmail?: boolean; optOutSyncEmail?: boolean; optOutWelcomeEmail?: boolean; organisation?: string; phone?: string; procoreConnected?: boolean; profilePicture?: string; projectsWorkedOn?: string[]; publicId?: string; reviztoConnected?: boolean; specialisms?: string[]; subscriptionManagerUser?: { email?: string; name?: string; } | object; subscriptionQuota?: number; tags?: object; twitter?: string; university?: string; universityDegree?: string; viewpointConnected?: boolean; website?: string; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst user = await client.user.create({\n  email: 'dev@stainless.com',\n  name: 'name',\n  password: 'password',\n});\n\nconsole.log(user);\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.create',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst user = await client.user.create({\n  email: 'dev@stainless.com',\n  name: 'name',\n  password: 'password',\n});\n\nconsole.log(user.data);",
      },
      python: {
        method: 'user.create',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nuser = client.user.create(\n    email="dev@stainless.com",\n    name="name",\n    password="password",\n)\nprint(user.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/user \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "email": "dev@stainless.com",\n          "name": "name",\n          "password": "password"\n        }\'',
      },
    },
  },
  {
    name: 'update_profile',
    endpoint: '/v1/user',
    httpMethod: 'put',
    summary: 'Update Current User Profile',
    description: 'Update the profile of the currently logged in user',
    stainlessPath: '(resource) user > (method) update_profile',
    qualified: 'client.user.updateProfile',
    params: [
      'allowSupportAccess?: boolean;',
      'bio?: string;',
      'linkedin?: string;',
      'location?: string;',
      'name?: string;',
      'organisation?: string;',
      'profilePicture?: string;',
      'twitter?: string;',
      'university?: string;',
      'universityDegree?: string;',
      'website?: string;',
    ],
    response:
      '{ data?: { aconexConnected?: boolean; allowSupportAccesss?: boolean; apiKeys?: api_key[]; asiteConnected?: boolean; autodeskConnected?: boolean; bio?: string; constructionSoftware?: string[]; createdAt?: string; email?: string; firebaseUserId?: string; kind?: string; linkedin?: string; location?: string; managedSubscriptionUsers?: user[]; name?: string; numberOfManagedSubscriptionUsers?: number; onScalePlan?: boolean; optOutAiEmail?: boolean; optOutDuplicationEmail?: boolean; optOutHubEmail?: boolean; optOutSyncEmail?: boolean; optOutWelcomeEmail?: boolean; organisation?: string; phone?: string; procoreConnected?: boolean; profilePicture?: string; projectsWorkedOn?: string[]; publicId?: string; reviztoConnected?: boolean; specialisms?: string[]; subscriptionManagerUser?: user_hub | object; subscriptionQuota?: number; tags?: object; twitter?: string; university?: string; universityDegree?: string; viewpointConnected?: boolean; website?: string; }; metadata?: object; }',
    markdown:
      "## update_profile\n\n`client.user.updateProfile(allowSupportAccess?: boolean, bio?: string, linkedin?: string, location?: string, name?: string, organisation?: string, profilePicture?: string, twitter?: string, university?: string, universityDegree?: string, website?: string): { data?: user; metadata?: object; }`\n\n**put** `/v1/user`\n\nUpdate the profile of the currently logged in user\n\n### Parameters\n\n- `allowSupportAccess?: boolean`\n\n- `bio?: string`\n\n- `linkedin?: string`\n\n- `location?: string`\n\n- `name?: string`\n\n- `organisation?: string`\n\n- `profilePicture?: string`\n\n- `twitter?: string`\n\n- `university?: string`\n\n- `universityDegree?: string`\n\n- `website?: string`\n\n### Returns\n\n- `{ data?: { aconexConnected?: boolean; allowSupportAccesss?: boolean; apiKeys?: api_key[]; asiteConnected?: boolean; autodeskConnected?: boolean; bio?: string; constructionSoftware?: string[]; createdAt?: string; email?: string; firebaseUserId?: string; kind?: string; linkedin?: string; location?: string; managedSubscriptionUsers?: user[]; name?: string; numberOfManagedSubscriptionUsers?: number; onScalePlan?: boolean; optOutAiEmail?: boolean; optOutDuplicationEmail?: boolean; optOutHubEmail?: boolean; optOutSyncEmail?: boolean; optOutWelcomeEmail?: boolean; organisation?: string; phone?: string; procoreConnected?: boolean; profilePicture?: string; projectsWorkedOn?: string[]; publicId?: string; reviztoConnected?: boolean; specialisms?: string[]; subscriptionManagerUser?: user_hub | object; subscriptionQuota?: number; tags?: object; twitter?: string; university?: string; universityDegree?: string; viewpointConnected?: boolean; website?: string; }; metadata?: object; }`\n\n  - `data?: { aconexConnected?: boolean; allowSupportAccesss?: boolean; apiKeys?: { accessLevel?: number; documentRestrictions?: string[]; hash?: string; name?: string; prefix?: string; projectRestrictions?: string[]; publicId?: string; tableRestrictions?: string[]; }[]; asiteConnected?: boolean; autodeskConnected?: boolean; bio?: string; constructionSoftware?: string[]; createdAt?: string; email?: string; firebaseUserId?: string; kind?: string; linkedin?: string; location?: string; managedSubscriptionUsers?: { aconexConnected?: boolean; allowSupportAccesss?: boolean; apiKeys?: api_key[]; asiteConnected?: boolean; autodeskConnected?: boolean; bio?: string; constructionSoftware?: string[]; createdAt?: string; email?: string; firebaseUserId?: string; kind?: string; linkedin?: string; location?: string; managedSubscriptionUsers?: user[]; name?: string; numberOfManagedSubscriptionUsers?: number; onScalePlan?: boolean; optOutAiEmail?: boolean; optOutDuplicationEmail?: boolean; optOutHubEmail?: boolean; optOutSyncEmail?: boolean; optOutWelcomeEmail?: boolean; organisation?: string; phone?: string; procoreConnected?: boolean; profilePicture?: string; projectsWorkedOn?: string[]; publicId?: string; reviztoConnected?: boolean; specialisms?: string[]; subscriptionManagerUser?: user_hub | object; subscriptionQuota?: number; tags?: object; twitter?: string; university?: string; universityDegree?: string; viewpointConnected?: boolean; website?: string; }[]; name?: string; numberOfManagedSubscriptionUsers?: number; onScalePlan?: boolean; optOutAiEmail?: boolean; optOutDuplicationEmail?: boolean; optOutHubEmail?: boolean; optOutSyncEmail?: boolean; optOutWelcomeEmail?: boolean; organisation?: string; phone?: string; procoreConnected?: boolean; profilePicture?: string; projectsWorkedOn?: string[]; publicId?: string; reviztoConnected?: boolean; specialisms?: string[]; subscriptionManagerUser?: { email?: string; name?: string; } | object; subscriptionQuota?: number; tags?: object; twitter?: string; university?: string; universityDegree?: string; viewpointConnected?: boolean; website?: string; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.user.updateProfile();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.updateProfile',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.user.updateProfile();\n\nconsole.log(response.data);",
      },
      python: {
        method: 'user.update_profile',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.user.update_profile()\nprint(response.data)',
      },
      http: {
        example:
          "curl https://api.morta.io/v1/user \\\n    -X PUT \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $MORTA_API_KEY\" \\\n    -d '{}'",
      },
    },
  },
  {
    name: 'list_owner_hubs',
    endpoint: '/v1/user/owner-hubs',
    httpMethod: 'get',
    summary: "Get User's Owned and Administered Hubs",
    description: 'Get all hubs where the user is the owner or an admin',
    stainlessPath: '(resource) user > (method) list_owner_hubs',
    qualified: 'client.user.listOwnerHubs',
    response:
      '{ data?: { aiSearchEnabled?: boolean; allowDocumentExport?: boolean; allowTableExport?: boolean; deletedAt?: string; domainsAccess?: string[]; fontColour?: string; hideProcessCreated?: boolean; isDeleted?: boolean; mfaRequired?: boolean; name?: string; primaryColour?: string; publicId?: string; wordTemplate?: string; }[]; metadata?: object; }',
    markdown:
      "## list_owner_hubs\n\n`client.user.listOwnerHubs(): { data?: home_hub[]; metadata?: object; }`\n\n**get** `/v1/user/owner-hubs`\n\nGet all hubs where the user is the owner or an admin\n\n### Returns\n\n- `{ data?: { aiSearchEnabled?: boolean; allowDocumentExport?: boolean; allowTableExport?: boolean; deletedAt?: string; domainsAccess?: string[]; fontColour?: string; hideProcessCreated?: boolean; isDeleted?: boolean; mfaRequired?: boolean; name?: string; primaryColour?: string; publicId?: string; wordTemplate?: string; }[]; metadata?: object; }`\n\n  - `data?: { aiSearchEnabled?: boolean; allowDocumentExport?: boolean; allowTableExport?: boolean; deletedAt?: string; domainsAccess?: string[]; fontColour?: string; hideProcessCreated?: boolean; isDeleted?: boolean; mfaRequired?: boolean; name?: string; primaryColour?: string; publicId?: string; wordTemplate?: string; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.user.listOwnerHubs();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.listOwnerHubs',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.user.listOwnerHubs();\n\nconsole.log(response.data);",
      },
      python: {
        method: 'user.list_owner_hubs',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.user.list_owner_hubs()\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/user/owner-hubs \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'list_public_hubs',
    endpoint: '/v1/user/public-hubs',
    httpMethod: 'get',
    summary: "Get User's Public Hubs",
    description: 'Get all public hubs where the user is a member',
    stainlessPath: '(resource) user > (method) list_public_hubs',
    qualified: 'client.user.listPublicHubs',
    response:
      '{ data?: { aiSearchEnabled?: boolean; allowDocumentExport?: boolean; allowTableExport?: boolean; deletedAt?: string; domainsAccess?: string[]; fontColour?: string; hideProcessCreated?: boolean; isDeleted?: boolean; mfaRequired?: boolean; name?: string; primaryColour?: string; publicId?: string; wordTemplate?: string; }[]; metadata?: object; }',
    markdown:
      "## list_public_hubs\n\n`client.user.listPublicHubs(): { data?: home_hub[]; metadata?: object; }`\n\n**get** `/v1/user/public-hubs`\n\nGet all public hubs where the user is a member\n\n### Returns\n\n- `{ data?: { aiSearchEnabled?: boolean; allowDocumentExport?: boolean; allowTableExport?: boolean; deletedAt?: string; domainsAccess?: string[]; fontColour?: string; hideProcessCreated?: boolean; isDeleted?: boolean; mfaRequired?: boolean; name?: string; primaryColour?: string; publicId?: string; wordTemplate?: string; }[]; metadata?: object; }`\n\n  - `data?: { aiSearchEnabled?: boolean; allowDocumentExport?: boolean; allowTableExport?: boolean; deletedAt?: string; domainsAccess?: string[]; fontColour?: string; hideProcessCreated?: boolean; isDeleted?: boolean; mfaRequired?: boolean; name?: string; primaryColour?: string; publicId?: string; wordTemplate?: string; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.user.listPublicHubs();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.listPublicHubs',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.user.listPublicHubs();\n\nconsole.log(response.data);",
      },
      python: {
        method: 'user.list_public_hubs',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.user.list_public_hubs()\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/user/public-hubs \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'search',
    endpoint: '/v1/user/search',
    httpMethod: 'get',
    summary: 'Search for Users',
    description: 'Search for users by hub or process',
    stainlessPath: '(resource) user > (method) search',
    qualified: 'client.user.search',
    params: ['query: string;', 'process_id?: string;', 'project_id?: string;', 'table_view_id?: string;'],
    response:
      '{ data?: { email?: string; firebaseUserId?: string; name?: string; profilePicture?: string; publicId?: string; }[]; metadata?: object; }',
    markdown:
      "## search\n\n`client.user.search(query: string, process_id?: string, project_id?: string, table_view_id?: string): { data?: summary_user[]; metadata?: object; }`\n\n**get** `/v1/user/search`\n\nSearch for users by hub or process\n\n### Parameters\n\n- `query: string`\n  Query string for searching users\n\n- `process_id?: string`\n  Process ID to restrict search\n\n- `project_id?: string`\n  Hub ID to restrict search\n\n- `table_view_id?: string`\n  Table View ID to restrict search\n\n### Returns\n\n- `{ data?: { email?: string; firebaseUserId?: string; name?: string; profilePicture?: string; publicId?: string; }[]; metadata?: object; }`\n\n  - `data?: { email?: string; firebaseUserId?: string; name?: string; profilePicture?: string; publicId?: string; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.user.search({ query: 'query' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.search',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.user.search({ query: 'query' });\n\nconsole.log(response.data);",
      },
      python: {
        method: 'user.search',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.user.search(\n    query="query",\n)\nprint(response.data)',
      },
      http: {
        example: 'curl https://api.morta.io/v1/user/search \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'update_account',
    endpoint: '/v1/user/account',
    httpMethod: 'put',
    summary: 'Update User Account',
    description: 'Update the account details for the currently logged in user',
    stainlessPath: '(resource) user > (method) update_account',
    qualified: 'client.user.updateAccount',
    params: [
      'allowSupportAccess?: boolean;',
      'oldPassword?: string;',
      'optOutAiEmail?: boolean;',
      'optOutDuplicationEmail?: boolean;',
      'optOutHubEmail?: boolean;',
      'optOutSyncEmail?: boolean;',
      'optOutWelcomeEmail?: boolean;',
      'password?: string;',
      'passwordConfirm?: string;',
      'twoFactorCode?: string;',
    ],
    response: '{ data?: object; metadata?: object; }',
    markdown:
      "## update_account\n\n`client.user.updateAccount(allowSupportAccess?: boolean, oldPassword?: string, optOutAiEmail?: boolean, optOutDuplicationEmail?: boolean, optOutHubEmail?: boolean, optOutSyncEmail?: boolean, optOutWelcomeEmail?: boolean, password?: string, passwordConfirm?: string, twoFactorCode?: string): { data?: object; metadata?: object; }`\n\n**put** `/v1/user/account`\n\nUpdate the account details for the currently logged in user\n\n### Parameters\n\n- `allowSupportAccess?: boolean`\n\n- `oldPassword?: string`\n\n- `optOutAiEmail?: boolean`\n\n- `optOutDuplicationEmail?: boolean`\n\n- `optOutHubEmail?: boolean`\n\n- `optOutSyncEmail?: boolean`\n\n- `optOutWelcomeEmail?: boolean`\n\n- `password?: string`\n\n- `passwordConfirm?: string`\n\n- `twoFactorCode?: string`\n\n### Returns\n\n- `{ data?: { id?: number; aconexConnected?: boolean; allowSupportAccess?: boolean; allowSupportAccesss?: boolean; apiKeys?: object[]; asiteConnected?: boolean; authToken?: string; authTokenExpiresAt?: string; autodeskConnected?: boolean; bio?: string; constructionSoftware?: string[]; createdAt?: string; eligibleForFreeTrial?: boolean; email?: string; firebaseUserId?: string; freeTrialDaysRemaining?: number; hasPassword?: object; is2FaEnabled?: object; isOnFreeTrial?: boolean; isSuperAdmin?: boolean; kind?: string; lastLoginAt?: string; linkedin?: string; location?: string; managedSubscriptionUsers?: object[]; name?: string; numberOfManagedSubscriptionUsers?: number; onScalePlan?: boolean; optOutAiEmail?: boolean; optOutDuplicationEmail?: boolean; optOutHubEmail?: boolean; optOutSyncEmail?: boolean; optOutWelcomeEmail?: boolean; organisation?: string; phone?: string; procoreConnected?: boolean; profilePicture?: string; projectsWorkedOn?: string[]; publicId?: string; reviztoConnected?: boolean; specialisms?: string[]; subscriptionLevel?: number; subscriptionManagerUser?: object | object; subscriptionQuota?: number; tags?: object; twitter?: string; university?: string; universityDegree?: string; viewpointConnected?: boolean; website?: string; }; metadata?: object; }`\n\n  - `data?: { id?: number; aconexConnected?: boolean; allowSupportAccess?: boolean; allowSupportAccesss?: boolean; apiKeys?: { accessLevel?: number; documentRestrictions?: string[]; hash?: string; name?: string; prefix?: string; projectRestrictions?: string[]; publicId?: string; tableRestrictions?: string[]; }[]; asiteConnected?: boolean; authToken?: string; authTokenExpiresAt?: string; autodeskConnected?: boolean; bio?: string; constructionSoftware?: string[]; createdAt?: string; eligibleForFreeTrial?: boolean; email?: string; firebaseUserId?: string; freeTrialDaysRemaining?: number; hasPassword?: object; is2FaEnabled?: object; isOnFreeTrial?: boolean; isSuperAdmin?: boolean; kind?: string; lastLoginAt?: string; linkedin?: string; location?: string; managedSubscriptionUsers?: { aconexConnected?: boolean; allowSupportAccesss?: boolean; apiKeys?: object[]; asiteConnected?: boolean; autodeskConnected?: boolean; bio?: string; constructionSoftware?: string[]; createdAt?: string; email?: string; firebaseUserId?: string; kind?: string; linkedin?: string; location?: string; managedSubscriptionUsers?: object[]; name?: string; numberOfManagedSubscriptionUsers?: number; onScalePlan?: boolean; optOutAiEmail?: boolean; optOutDuplicationEmail?: boolean; optOutHubEmail?: boolean; optOutSyncEmail?: boolean; optOutWelcomeEmail?: boolean; organisation?: string; phone?: string; procoreConnected?: boolean; profilePicture?: string; projectsWorkedOn?: string[]; publicId?: string; reviztoConnected?: boolean; specialisms?: string[]; subscriptionManagerUser?: object | object; subscriptionQuota?: number; tags?: object; twitter?: string; university?: string; universityDegree?: string; viewpointConnected?: boolean; website?: string; }[]; name?: string; numberOfManagedSubscriptionUsers?: number; onScalePlan?: boolean; optOutAiEmail?: boolean; optOutDuplicationEmail?: boolean; optOutHubEmail?: boolean; optOutSyncEmail?: boolean; optOutWelcomeEmail?: boolean; organisation?: string; phone?: string; procoreConnected?: boolean; profilePicture?: string; projectsWorkedOn?: string[]; publicId?: string; reviztoConnected?: boolean; specialisms?: string[]; subscriptionLevel?: number; subscriptionManagerUser?: { email?: string; name?: string; } | object; subscriptionQuota?: number; tags?: object; twitter?: string; university?: string; universityDegree?: string; viewpointConnected?: boolean; website?: string; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.user.updateAccount();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.updateAccount',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.user.updateAccount();\n\nconsole.log(response.data);",
      },
      python: {
        method: 'user.update_account',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.user.update_account()\nprint(response.data)',
      },
      http: {
        example:
          "curl https://api.morta.io/v1/user/account \\\n    -X PUT \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $MORTA_API_KEY\" \\\n    -d '{}'",
      },
    },
  },
  {
    name: 'list_templates',
    endpoint: '/v1/user/templates',
    httpMethod: 'get',
    summary: 'Get User Templates',
    description: 'Get all templates the currently logged in user has access to',
    stainlessPath: '(resource) user > (method) list_templates',
    qualified: 'client.user.listTemplates',
    response: '{ data?: { createdBy?: object; }[]; metadata?: object; }',
    markdown:
      "## list_templates\n\n`client.user.listTemplates(): { data?: object[]; metadata?: object; }`\n\n**get** `/v1/user/templates`\n\nGet all templates the currently logged in user has access to\n\n### Returns\n\n- `{ data?: { createdBy?: object; }[]; metadata?: object; }`\n\n  - `data?: { createdBy?: { email?: string; firebaseUserId?: string; name?: string; profilePicture?: string; publicId?: string; }; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.user.listTemplates();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.listTemplates',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.user.listTemplates();\n\nconsole.log(response.data);",
      },
      python: {
        method: 'user.list_templates',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.user.list_templates()\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/user/templates \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/user/apikey',
    httpMethod: 'post',
    summary: 'Create API Key for User',
    description: 'Create an API key for the currently logged in user',
    stainlessPath: '(resource) user.apikey > (method) create',
    qualified: 'client.user.apikey.create',
    params: [
      'accessLevel: 0 | 1;',
      'documentRestrictions?: string[];',
      'name?: string;',
      'projectRestrictions?: string[];',
      'tableRestrictions?: string[];',
    ],
    response:
      '{ data?: { accessLevel?: number; documentRestrictions?: string[]; hash?: string; name?: string; prefix?: string; projectRestrictions?: string[]; publicId?: string; tableRestrictions?: string[]; }; metadata?: object; }',
    markdown:
      "## create\n\n`client.user.apikey.create(accessLevel: 0 | 1, documentRestrictions?: string[], name?: string, projectRestrictions?: string[], tableRestrictions?: string[]): { data?: api_key; metadata?: object; }`\n\n**post** `/v1/user/apikey`\n\nCreate an API key for the currently logged in user\n\n### Parameters\n\n- `accessLevel: 0 | 1`\n\n- `documentRestrictions?: string[]`\n\n- `name?: string`\n\n- `projectRestrictions?: string[]`\n\n- `tableRestrictions?: string[]`\n\n### Returns\n\n- `{ data?: { accessLevel?: number; documentRestrictions?: string[]; hash?: string; name?: string; prefix?: string; projectRestrictions?: string[]; publicId?: string; tableRestrictions?: string[]; }; metadata?: object; }`\n\n  - `data?: { accessLevel?: number; documentRestrictions?: string[]; hash?: string; name?: string; prefix?: string; projectRestrictions?: string[]; publicId?: string; tableRestrictions?: string[]; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst apikey = await client.user.apikey.create({ accessLevel: 0 });\n\nconsole.log(apikey);\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.apikey.create',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst apikey = await client.user.apikey.create({ accessLevel: 0 });\n\nconsole.log(apikey.data);",
      },
      python: {
        method: 'user.apikey.create',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\napikey = client.user.apikey.create(\n    access_level=0,\n)\nprint(apikey.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/user/apikey \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "accessLevel": 0\n        }\'',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/user/apikey/{api_key_id}',
    httpMethod: 'put',
    summary: 'Update API Key',
    description: 'Update an API key for the currently logged in user',
    stainlessPath: '(resource) user.apikey > (method) update',
    qualified: 'client.user.apikey.update',
    params: [
      'api_key_id: string;',
      'accessLevel: 0 | 1;',
      'documentRestrictions?: string[];',
      'name?: string;',
      'projectRestrictions?: string[];',
      'tableRestrictions?: string[];',
    ],
    response: '{ apiKey?: string; }',
    markdown:
      "## update\n\n`client.user.apikey.update(api_key_id: string, accessLevel: 0 | 1, documentRestrictions?: string[], name?: string, projectRestrictions?: string[], tableRestrictions?: string[]): { apiKey?: string; }`\n\n**put** `/v1/user/apikey/{api_key_id}`\n\nUpdate an API key for the currently logged in user\n\n### Parameters\n\n- `api_key_id: string`\n\n- `accessLevel: 0 | 1`\n\n- `documentRestrictions?: string[]`\n\n- `name?: string`\n\n- `projectRestrictions?: string[]`\n\n- `tableRestrictions?: string[]`\n\n### Returns\n\n- `{ apiKey?: string; }`\n\n  - `apiKey?: string`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst apikey = await client.user.apikey.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { accessLevel: 0 });\n\nconsole.log(apikey);\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.apikey.update',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst apikey = await client.user.apikey.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  accessLevel: 0,\n});\n\nconsole.log(apikey.apiKey);",
      },
      python: {
        method: 'user.apikey.update',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\napikey = client.user.apikey.update(\n    api_key_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    access_level=0,\n)\nprint(apikey.api_key)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/user/apikey/$API_KEY_ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "accessLevel": 0\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/user/apikey/{api_key_id}',
    httpMethod: 'delete',
    summary: 'Delete API Key',
    description: 'Delete an API key for the currently logged in user',
    stainlessPath: '(resource) user.apikey > (method) delete',
    qualified: 'client.user.apikey.delete',
    params: ['api_key_id: string;'],
    response: '{ data?: string; metadata?: object; }',
    markdown:
      "## delete\n\n`client.user.apikey.delete(api_key_id: string): { data?: string; metadata?: object; }`\n\n**delete** `/v1/user/apikey/{api_key_id}`\n\nDelete an API key for the currently logged in user\n\n### Parameters\n\n- `api_key_id: string`\n\n### Returns\n\n- `{ data?: string; metadata?: object; }`\n\n  - `data?: string`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst apikey = await client.user.apikey.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(apikey);\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.apikey.delete',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst apikey = await client.user.apikey.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(apikey.data);",
      },
      python: {
        method: 'user.apikey.delete',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\napikey = client.user.apikey.delete(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(apikey.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/user/apikey/$API_KEY_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/user/hubs',
    httpMethod: 'get',
    summary: 'Get User Hubs',
    description: 'Get all hubs the currently logged in user is part of',
    stainlessPath: '(resource) user.hubs > (method) list',
    qualified: 'client.user.hubs.list',
    response:
      '{ data?: { aiSearchEnabled?: boolean; allowDocumentExport?: boolean; allowTableExport?: boolean; deletedAt?: string; domainsAccess?: string[]; fontColour?: string; hideProcessCreated?: boolean; isDeleted?: boolean; mfaRequired?: boolean; name?: string; primaryColour?: string; publicId?: string; wordTemplate?: string; }[]; metadata?: object; }',
    markdown:
      "## list\n\n`client.user.hubs.list(): { data?: home_hub[]; metadata?: object; }`\n\n**get** `/v1/user/hubs`\n\nGet all hubs the currently logged in user is part of\n\n### Returns\n\n- `{ data?: { aiSearchEnabled?: boolean; allowDocumentExport?: boolean; allowTableExport?: boolean; deletedAt?: string; domainsAccess?: string[]; fontColour?: string; hideProcessCreated?: boolean; isDeleted?: boolean; mfaRequired?: boolean; name?: string; primaryColour?: string; publicId?: string; wordTemplate?: string; }[]; metadata?: object; }`\n\n  - `data?: { aiSearchEnabled?: boolean; allowDocumentExport?: boolean; allowTableExport?: boolean; deletedAt?: string; domainsAccess?: string[]; fontColour?: string; hideProcessCreated?: boolean; isDeleted?: boolean; mfaRequired?: boolean; name?: string; primaryColour?: string; publicId?: string; wordTemplate?: string; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst hubs = await client.user.hubs.list();\n\nconsole.log(hubs);\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.hubs.list',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst hubs = await client.user.hubs.list();\n\nconsole.log(hubs.data);",
      },
      python: {
        method: 'user.hubs.list',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nhubs = client.user.hubs.list()\nprint(hubs.data)',
      },
      http: {
        example: 'curl https://api.morta.io/v1/user/hubs \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'list_favourites',
    endpoint: '/v1/user/hubs/favourites',
    httpMethod: 'get',
    summary: "Get User's Favourite hubs",
    description: 'Get all favourite hubs the currently logged in user is part of',
    stainlessPath: '(resource) user.hubs > (method) list_favourites',
    qualified: 'client.user.hubs.listFavourites',
    response:
      '{ data?: { isDeleted?: boolean; name?: string; projectRole?: string; publicId?: string; }[]; metadata?: object; }',
    markdown:
      "## list_favourites\n\n`client.user.hubs.listFavourites(): { data?: object[]; metadata?: object; }`\n\n**get** `/v1/user/hubs/favourites`\n\nGet all favourite hubs the currently logged in user is part of\n\n### Returns\n\n- `{ data?: { isDeleted?: boolean; name?: string; projectRole?: string; publicId?: string; }[]; metadata?: object; }`\n\n  - `data?: { isDeleted?: boolean; name?: string; projectRole?: string; publicId?: string; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.user.hubs.listFavourites();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.hubs.listFavourites',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.user.hubs.listFavourites();\n\nconsole.log(response.data);",
      },
      python: {
        method: 'user.hubs.list_favourites',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.user.hubs.list_favourites()\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/user/hubs/favourites \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'toggle_favourite',
    endpoint: '/v1/user/hubs/{hub_id}/favourite',
    httpMethod: 'put',
    summary: 'Toggle Favourite Status of a Hub',
    description: 'Change whether the hub is a favourite for the currently logged in user',
    stainlessPath: '(resource) user.hubs > (method) toggle_favourite',
    qualified: 'client.user.hubs.toggleFavourite',
    params: ['hub_id: string;'],
    response:
      '{ data?: { isDeleted?: boolean; name?: string; projectRole?: string; publicId?: string; }[]; metadata?: object; }',
    markdown:
      "## toggle_favourite\n\n`client.user.hubs.toggleFavourite(hub_id: string): { data?: object[]; metadata?: object; }`\n\n**put** `/v1/user/hubs/{hub_id}/favourite`\n\nChange whether the hub is a favourite for the currently logged in user\n\n### Parameters\n\n- `hub_id: string`\n\n### Returns\n\n- `{ data?: { isDeleted?: boolean; name?: string; projectRole?: string; publicId?: string; }[]; metadata?: object; }`\n\n  - `data?: { isDeleted?: boolean; name?: string; projectRole?: string; publicId?: string; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.user.hubs.toggleFavourite('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.hubs.toggleFavourite',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.user.hubs.toggleFavourite('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'user.hubs.toggle_favourite',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.user.hubs.toggle_favourite(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/user/hubs/$HUB_ID/favourite \\\n    -X PUT \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'toggle_pin',
    endpoint: '/v1/user/hubs/{hub_id}/pin',
    httpMethod: 'put',
    summary: 'Toggle Pin Status of a Hub',
    description: 'Change whether the hub is pinned for the currently logged in user',
    stainlessPath: '(resource) user.hubs > (method) toggle_pin',
    qualified: 'client.user.hubs.togglePin',
    params: ['hub_id: string;'],
    response:
      '{ data?: { contributors?: number; name?: string; primaryColour?: string; publicId?: string; views?: number; }[]; metadata?: object; }',
    markdown:
      "## toggle_pin\n\n`client.user.hubs.togglePin(hub_id: string): { data?: object[]; metadata?: object; }`\n\n**put** `/v1/user/hubs/{hub_id}/pin`\n\nChange whether the hub is pinned for the currently logged in user\n\n### Parameters\n\n- `hub_id: string`\n\n### Returns\n\n- `{ data?: { contributors?: number; name?: string; primaryColour?: string; publicId?: string; views?: number; }[]; metadata?: object; }`\n\n  - `data?: { contributors?: number; name?: string; primaryColour?: string; publicId?: string; views?: number; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.user.hubs.togglePin('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.hubs.togglePin',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.user.hubs.togglePin('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'user.hubs.toggle_pin',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.user.hubs.toggle_pin(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/user/hubs/$HUB_ID/pin \\\n    -X PUT \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'list_tags',
    endpoint: '/v1/user/hubs/{hub_id}/tags',
    httpMethod: 'put',
    summary: 'Get all tags for current user in a hub',
    description: 'Get all tags for current user in a hub',
    stainlessPath: '(resource) user.hubs > (method) list_tags',
    qualified: 'client.user.hubs.listTags',
    params: ['hub_id: string;'],
    response:
      '{ data?: { documentTableId?: string; projectPublicId?: string; publicId?: string; referencePublicId?: string; value?: object; }[]; metadata?: object; }',
    markdown:
      "## list_tags\n\n`client.user.hubs.listTags(hub_id: string): { data?: tag[]; metadata?: object; }`\n\n**put** `/v1/user/hubs/{hub_id}/tags`\n\nGet all tags for current user in a hub\n\n### Parameters\n\n- `hub_id: string`\n\n### Returns\n\n- `{ data?: { documentTableId?: string; projectPublicId?: string; publicId?: string; referencePublicId?: string; value?: object; }[]; metadata?: object; }`\n\n  - `data?: { documentTableId?: string; projectPublicId?: string; publicId?: string; referencePublicId?: string; value?: object; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.user.hubs.listTags('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.hubs.listTags',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.user.hubs.listTags('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'user.hubs.list_tags',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.user.hubs.list_tags(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/user/hubs/$HUB_ID/tags \\\n    -X PUT \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'add',
    endpoint: '/v1/user/{user_id}/tags',
    httpMethod: 'post',
    summary: 'Add Tag to User',
    description: 'Add a tag to a specific user',
    stainlessPath: '(resource) user.tags > (method) add',
    qualified: 'client.user.tags.add',
    params: ['user_id: string;', 'tagReferenceId: string;'],
    response:
      '{ data?: { documentTableId?: string; projectPublicId?: string; publicId?: string; referencePublicId?: string; value?: object; }; metadata?: object; }',
    markdown:
      "## add\n\n`client.user.tags.add(user_id: string, tagReferenceId: string): { data?: tag; metadata?: object; }`\n\n**post** `/v1/user/{user_id}/tags`\n\nAdd a tag to a specific user\n\n### Parameters\n\n- `user_id: string`\n\n- `tagReferenceId: string`\n\n### Returns\n\n- `{ data?: { documentTableId?: string; projectPublicId?: string; publicId?: string; referencePublicId?: string; value?: object; }; metadata?: object; }`\n\n  - `data?: { documentTableId?: string; projectPublicId?: string; publicId?: string; referencePublicId?: string; value?: object; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.user.tags.add('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { tagReferenceId: 'tagReferenceId' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.tags.add',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.user.tags.add('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  tagReferenceId: 'tagReferenceId',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'user.tags.add',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.user.tags.add(\n    user_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    tag_reference_id="tagReferenceId",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/user/$USER_ID/tags \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "tagReferenceId": "tagReferenceId"\n        }\'',
      },
    },
  },
  {
    name: 'bulk_apply',
    endpoint: '/v1/user/{user_id}/tags',
    httpMethod: 'put',
    summary: 'Bulk Apply Tags to User',
    description: 'Apply multiple tags to a specific user',
    stainlessPath: '(resource) user.tags > (method) bulk_apply',
    qualified: 'client.user.tags.bulkApply',
    params: ['user_id: string;', 'projectId: string;', 'tableId: string;', 'tagReferenceIds: string[];'],
    response:
      '{ data?: { documentTableId?: string; projectPublicId?: string; publicId?: string; referencePublicId?: string; value?: object; }[]; metadata?: object; }',
    markdown:
      "## bulk_apply\n\n`client.user.tags.bulkApply(user_id: string, projectId: string, tableId: string, tagReferenceIds: string[]): { data?: tag[]; metadata?: object; }`\n\n**put** `/v1/user/{user_id}/tags`\n\nApply multiple tags to a specific user\n\n### Parameters\n\n- `user_id: string`\n\n- `projectId: string`\n\n- `tableId: string`\n\n- `tagReferenceIds: string[]`\n\n### Returns\n\n- `{ data?: { documentTableId?: string; projectPublicId?: string; publicId?: string; referencePublicId?: string; value?: object; }[]; metadata?: object; }`\n\n  - `data?: { documentTableId?: string; projectPublicId?: string; publicId?: string; referencePublicId?: string; value?: object; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.user.tags.bulkApply('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  tableId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  tagReferenceIds: ['string'],\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.tags.bulkApply',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.user.tags.bulkApply('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  tableId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  tagReferenceIds: ['string'],\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'user.tags.bulk_apply',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.user.tags.bulk_apply(\n    user_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    project_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    table_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    tag_reference_ids=["string"],\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/user/$USER_ID/tags \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "projectId": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "tableId": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "tagReferenceIds": [\n            "string"\n          ]\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/user/{user_id}/tags/{tag_id}',
    httpMethod: 'delete',
    summary: 'Delete Tag from User',
    description: 'Delete a tag from a specific user',
    stainlessPath: '(resource) user.tags > (method) delete',
    qualified: 'client.user.tags.delete',
    params: ['user_id: string;', 'tag_id: string;'],
    response: '{ data?: string; metadata?: object; }',
    markdown:
      "## delete\n\n`client.user.tags.delete(user_id: string, tag_id: string): { data?: string; metadata?: object; }`\n\n**delete** `/v1/user/{user_id}/tags/{tag_id}`\n\nDelete a tag from a specific user\n\n### Parameters\n\n- `user_id: string`\n\n- `tag_id: string`\n\n### Returns\n\n- `{ data?: string; metadata?: object; }`\n\n  - `data?: string`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst tag = await client.user.tags.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { user_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(tag);\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.tags.delete',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst tag = await client.user.tags.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  user_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(tag.data);",
      },
      python: {
        method: 'user.tags.delete',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\ntag = client.user.tags.delete(\n    tag_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    user_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(tag.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/user/$USER_ID/tags/$TAG_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/hub/{hub_id}',
    httpMethod: 'get',
    summary: 'Get Hub Information',
    description: 'Retrieve detailed information about a specific hub identified by its UUID',
    stainlessPath: '(resource) hub > (method) retrieve',
    qualified: 'client.hub.retrieve',
    params: ['hub_id: string;'],
    response:
      '{ data?: { folders?: { childFolders?: object[]; name?: string; }[]; projectDetails?: object; role?: string; }; metadata?: object; }',
    markdown:
      "## retrieve\n\n`client.hub.retrieve(hub_id: string): { data?: object; metadata?: object; }`\n\n**get** `/v1/hub/{hub_id}`\n\nRetrieve detailed information about a specific hub identified by its UUID\n\n### Parameters\n\n- `hub_id: string`\n\n### Returns\n\n- `{ data?: { folders?: { childFolders?: object[]; name?: string; }[]; projectDetails?: object; role?: string; }; metadata?: object; }`\n\n  - `data?: { folders?: { childFolders?: { name?: string; }[]; name?: string; }[]; projectDetails?: { aiSearchEnabled?: boolean; allowDocumentExport?: boolean; allowTableExport?: boolean; createdAt?: string; defaultBanner?: string; defaultDateFormat?: string; defaultDatetimeFormat?: string; defaultHeaderBackgroundColor?: string; defaultHeaderTextColor?: string; defaultProcessId?: string; deletedAt?: string; domainsAccess?: string[]; fontColour?: string; headingStyles?: { bold?: boolean; colour?: string; fontSize?: number; italic?: boolean; level?: number; numberingStyle?: number; publicId?: string; startAt0?: boolean; underline?: boolean; }[]; hideProcessCreated?: boolean; image?: string; isDeleted?: boolean; logo?: string; mfaRequired?: boolean; name?: string; primaryColour?: string; processTitleAlignment?: string; processTitleBold?: boolean; processTitleColour?: string; processTitleFontSize?: number; processTitleItalic?: boolean; processTitleUnderline?: boolean; projectList?: { createdAt?: string; favourite?: boolean; projectRole?: string; updatedAt?: string; user?: object; }[]; public?: boolean; publicId?: string; updatedAt?: string; wordTemplate?: string; }; role?: string; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst hub = await client.hub.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(hub);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.retrieve',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst hub = await client.hub.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(hub.data);",
      },
      python: {
        method: 'hub.retrieve',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nhub = client.hub.retrieve(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(hub.data)',
      },
      http: {
        example: 'curl https://api.morta.io/v1/hub/$HUB_ID \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/hub/{hub_id}',
    httpMethod: 'delete',
    summary: 'Delete a Hub',
    description: 'Delete a specific hub identified by its UUID',
    stainlessPath: '(resource) hub > (method) delete',
    qualified: 'client.hub.delete',
    params: ['hub_id: string;'],
    response: '{ data?: string; metadata?: object; }',
    markdown:
      "## delete\n\n`client.hub.delete(hub_id: string): { data?: string; metadata?: object; }`\n\n**delete** `/v1/hub/{hub_id}`\n\nDelete a specific hub identified by its UUID\n\n### Parameters\n\n- `hub_id: string`\n\n### Returns\n\n- `{ data?: string; metadata?: object; }`\n\n  - `data?: string`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst hub = await client.hub.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(hub);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.delete',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst hub = await client.hub.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(hub.data);",
      },
      python: {
        method: 'hub.delete',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nhub = client.hub.delete(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(hub.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/hub/$HUB_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/hub/{hub_id}',
    httpMethod: 'put',
    summary: 'Update an Existing Hub',
    description: "Update an existing hub's details by hub ID",
    stainlessPath: '(resource) hub > (method) update',
    qualified: 'client.hub.update',
    params: [
      'hub_id: string;',
      'aiSearchEnabled?: boolean;',
      'allowDocumentExport?: boolean;',
      'allowTableExport?: boolean;',
      'bulkUpdateText?: object | { replaceText: string; searchText: string; };',
      'defaultBanner?: string;',
      'defaultDateFormat?: string;',
      'defaultDatetimeFormat?: string;',
      'defaultHeaderBackgroundColor?: string;',
      'defaultHeaderTextColor?: string;',
      'defaultProcessId?: string;',
      'domainsAccess?: string[];',
      'fontColour?: string;',
      'hideProcessCreated?: boolean;',
      'logo?: string;',
      'mfaRequired?: boolean;',
      'name?: string;',
      'primaryColour?: string;',
      "processTitleAlignment?: 'left' | 'center' | 'right';",
      'processTitleBold?: boolean;',
      'processTitleColour?: string;',
      'processTitleFontSize?: number;',
      'processTitleItalic?: boolean;',
      'processTitleUnderline?: boolean;',
      'public?: boolean;',
      'wordTemplate?: string;',
    ],
    response:
      '{ data?: { aiSearchEnabled?: boolean; allowDocumentExport?: boolean; allowTableExport?: boolean; createdAt?: string; defaultBanner?: string; defaultDateFormat?: string; defaultDatetimeFormat?: string; defaultHeaderBackgroundColor?: string; defaultHeaderTextColor?: string; defaultProcessId?: string; deletedAt?: string; domainsAccess?: string[]; fontColour?: string; headingStyles?: object[]; hideProcessCreated?: boolean; image?: string; isDeleted?: boolean; logo?: string; mfaRequired?: boolean; name?: string; primaryColour?: string; processTitleAlignment?: string; processTitleBold?: boolean; processTitleColour?: string; processTitleFontSize?: number; processTitleItalic?: boolean; processTitleUnderline?: boolean; projectList?: object[]; public?: boolean; publicId?: string; updatedAt?: string; wordTemplate?: string; }; metadata?: object; }',
    markdown:
      "## update\n\n`client.hub.update(hub_id: string, aiSearchEnabled?: boolean, allowDocumentExport?: boolean, allowTableExport?: boolean, bulkUpdateText?: object | { replaceText: string; searchText: string; }, defaultBanner?: string, defaultDateFormat?: string, defaultDatetimeFormat?: string, defaultHeaderBackgroundColor?: string, defaultHeaderTextColor?: string, defaultProcessId?: string, domainsAccess?: string[], fontColour?: string, hideProcessCreated?: boolean, logo?: string, mfaRequired?: boolean, name?: string, primaryColour?: string, processTitleAlignment?: 'left' | 'center' | 'right', processTitleBold?: boolean, processTitleColour?: string, processTitleFontSize?: number, processTitleItalic?: boolean, processTitleUnderline?: boolean, public?: boolean, wordTemplate?: string): { data?: simple_hub; metadata?: object; }`\n\n**put** `/v1/hub/{hub_id}`\n\nUpdate an existing hub's details by hub ID\n\n### Parameters\n\n- `hub_id: string`\n\n- `aiSearchEnabled?: boolean`\n\n- `allowDocumentExport?: boolean`\n\n- `allowTableExport?: boolean`\n\n- `bulkUpdateText?: object | { replaceText: string; searchText: string; }`\n\n- `defaultBanner?: string`\n\n- `defaultDateFormat?: string`\n\n- `defaultDatetimeFormat?: string`\n\n- `defaultHeaderBackgroundColor?: string`\n\n- `defaultHeaderTextColor?: string`\n\n- `defaultProcessId?: string`\n\n- `domainsAccess?: string[]`\n\n- `fontColour?: string`\n\n- `hideProcessCreated?: boolean`\n\n- `logo?: string`\n\n- `mfaRequired?: boolean`\n\n- `name?: string`\n\n- `primaryColour?: string`\n\n- `processTitleAlignment?: 'left' | 'center' | 'right'`\n\n- `processTitleBold?: boolean`\n\n- `processTitleColour?: string`\n\n- `processTitleFontSize?: number`\n\n- `processTitleItalic?: boolean`\n\n- `processTitleUnderline?: boolean`\n\n- `public?: boolean`\n\n- `wordTemplate?: string`\n\n### Returns\n\n- `{ data?: { aiSearchEnabled?: boolean; allowDocumentExport?: boolean; allowTableExport?: boolean; createdAt?: string; defaultBanner?: string; defaultDateFormat?: string; defaultDatetimeFormat?: string; defaultHeaderBackgroundColor?: string; defaultHeaderTextColor?: string; defaultProcessId?: string; deletedAt?: string; domainsAccess?: string[]; fontColour?: string; headingStyles?: object[]; hideProcessCreated?: boolean; image?: string; isDeleted?: boolean; logo?: string; mfaRequired?: boolean; name?: string; primaryColour?: string; processTitleAlignment?: string; processTitleBold?: boolean; processTitleColour?: string; processTitleFontSize?: number; processTitleItalic?: boolean; processTitleUnderline?: boolean; projectList?: object[]; public?: boolean; publicId?: string; updatedAt?: string; wordTemplate?: string; }; metadata?: object; }`\n\n  - `data?: { aiSearchEnabled?: boolean; allowDocumentExport?: boolean; allowTableExport?: boolean; createdAt?: string; defaultBanner?: string; defaultDateFormat?: string; defaultDatetimeFormat?: string; defaultHeaderBackgroundColor?: string; defaultHeaderTextColor?: string; defaultProcessId?: string; deletedAt?: string; domainsAccess?: string[]; fontColour?: string; headingStyles?: { bold?: boolean; colour?: string; fontSize?: number; italic?: boolean; level?: number; numberingStyle?: number; publicId?: string; startAt0?: boolean; underline?: boolean; }[]; hideProcessCreated?: boolean; image?: string; isDeleted?: boolean; logo?: string; mfaRequired?: boolean; name?: string; primaryColour?: string; processTitleAlignment?: string; processTitleBold?: boolean; processTitleColour?: string; processTitleFontSize?: number; processTitleItalic?: boolean; processTitleUnderline?: boolean; projectList?: { createdAt?: string; favourite?: boolean; projectRole?: string; updatedAt?: string; user?: { email?: string; firebaseUserId?: string; kind?: string; name?: string; publicId?: string; }; }[]; public?: boolean; publicId?: string; updatedAt?: string; wordTemplate?: string; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst hub = await client.hub.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(hub);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.update',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst hub = await client.hub.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(hub.data);",
      },
      python: {
        method: 'hub.update',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nhub = client.hub.update(\n    hub_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(hub.data)',
      },
      http: {
        example:
          "curl https://api.morta.io/v1/hub/$HUB_ID \\\n    -X PUT \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $MORTA_API_KEY\" \\\n    -d '{}'",
      },
    },
  },
  {
    name: 'get_resources',
    endpoint: '/v1/hub/{hub_id}/resources',
    httpMethod: 'post',
    summary: 'Get Hub Resources',
    description: 'Retrieve resources associated with a specific hub identified by its UUID',
    stainlessPath: '(resource) hub > (method) get_resources',
    qualified: 'client.hub.getResources',
    params: [
      'hub_id: string;',
      'adminView?: boolean;',
      'excludeProcesses?: boolean;',
      'excludeTables?: boolean;',
      'onlyAdmin?: boolean;',
      'onlyDeleted?: boolean;',
      'projectPermissions?: boolean;',
      'typeId?: string;',
    ],
    response:
      '{ data?: { name?: string; process?: { createdAt?: string; deletedAt?: string; logo?: string; name?: string; publicId?: string; type?: string; updatedAt?: string; }; table?: { createdAt?: string; defaultViewId?: string; deletedAt?: string; isDeleted?: boolean; joins?: table_join[]; logo?: string; name?: string; publicId?: string; type?: string; updatedAt?: string; }; type?: string; }[]; metadata?: object; }',
    markdown:
      "## get_resources\n\n`client.hub.getResources(hub_id: string, adminView?: boolean, excludeProcesses?: boolean, excludeTables?: boolean, onlyAdmin?: boolean, onlyDeleted?: boolean, projectPermissions?: boolean, typeId?: string): { data?: object[]; metadata?: object; }`\n\n**post** `/v1/hub/{hub_id}/resources`\n\nRetrieve resources associated with a specific hub identified by its UUID\n\n### Parameters\n\n- `hub_id: string`\n\n- `adminView?: boolean`\n\n- `excludeProcesses?: boolean`\n\n- `excludeTables?: boolean`\n\n- `onlyAdmin?: boolean`\n\n- `onlyDeleted?: boolean`\n\n- `projectPermissions?: boolean`\n\n- `typeId?: string`\n\n### Returns\n\n- `{ data?: { name?: string; process?: { createdAt?: string; deletedAt?: string; logo?: string; name?: string; publicId?: string; type?: string; updatedAt?: string; }; table?: { createdAt?: string; defaultViewId?: string; deletedAt?: string; isDeleted?: boolean; joins?: table_join[]; logo?: string; name?: string; publicId?: string; type?: string; updatedAt?: string; }; type?: string; }[]; metadata?: object; }`\n\n  - `data?: { name?: string; process?: { createdAt?: string; deletedAt?: string; logo?: string; name?: string; publicId?: string; type?: string; updatedAt?: string; }; table?: { createdAt?: string; defaultViewId?: string; deletedAt?: string; isDeleted?: boolean; joins?: { dataColumns?: table_join_imported_columns[]; isOneToMany?: boolean; joinColumns?: table_column_join[]; joinTableId?: string; joinViewId?: string; publicId?: string; }[]; logo?: string; name?: string; publicId?: string; type?: string; updatedAt?: string; }; type?: string; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.hub.getResources('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.getResources',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.hub.getResources('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'hub.get_resources',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.hub.get_resources(\n    hub_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          "curl https://api.morta.io/v1/hub/$HUB_ID/resources \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $MORTA_API_KEY\" \\\n    -d '{}'",
      },
    },
  },
  {
    name: 'search_resources',
    endpoint: '/v1/hub/{hub_id}/search-resources',
    httpMethod: 'get',
    summary: 'Search for Resources within a Hub',
    description: 'Perform a search operation within a specific hub, identified by its UUID',
    stainlessPath: '(resource) hub > (method) search_resources',
    qualified: 'client.hub.searchResources',
    params: ['hub_id: string;', 'search: string;', 'process_public_id?: string;'],
    response:
      '{ data?: { answer?: string; answerComment?: string; answerVote?: boolean; contextUrls?: string[]; createdAt?: string; question?: string; updatedAt?: string; user?: user_hub; }; metadata?: object; }',
    markdown:
      "## search_resources\n\n`client.hub.searchResources(hub_id: string, search: string, process_public_id?: string): { data?: answer; metadata?: object; }`\n\n**get** `/v1/hub/{hub_id}/search-resources`\n\nPerform a search operation within a specific hub, identified by its UUID\n\n### Parameters\n\n- `hub_id: string`\n\n- `search: string`\n  Search query string\n\n- `process_public_id?: string`\n  Optional UUID of a document to restrict the search within a specific document\n\n### Returns\n\n- `{ data?: { answer?: string; answerComment?: string; answerVote?: boolean; contextUrls?: string[]; createdAt?: string; question?: string; updatedAt?: string; user?: user_hub; }; metadata?: object; }`\n\n  - `data?: { answer?: string; answerComment?: string; answerVote?: boolean; contextUrls?: string[]; createdAt?: string; question?: string; updatedAt?: string; user?: { email?: string; name?: string; }; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.hub.searchResources('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { search: 'search' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.searchResources',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.hub.searchResources('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  search: 'search',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'hub.search_resources',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.hub.search_resources(\n    hub_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    search="search",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/hub/$HUB_ID/search-resources \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'ai_search',
    endpoint: '/v1/hub/{hub_id}/search-ai',
    httpMethod: 'get',
    summary: 'AI Search within a Hub',
    description: 'Perform an AI search operation within a specific hub, identified by its UUID',
    stainlessPath: '(resource) hub > (method) ai_search',
    qualified: 'client.hub.aiSearch',
    params: ['hub_id: string;', 'search: string;', 'process_public_id?: string;'],
    response:
      '{ data?: { answer?: string; answerComment?: string; answerVote?: boolean; contextUrls?: string[]; createdAt?: string; question?: string; updatedAt?: string; user?: user_hub; }; metadata?: object; }',
    markdown:
      "## ai_search\n\n`client.hub.aiSearch(hub_id: string, search: string, process_public_id?: string): { data?: answer; metadata?: object; }`\n\n**get** `/v1/hub/{hub_id}/search-ai`\n\nPerform an AI search operation within a specific hub, identified by its UUID\n\n### Parameters\n\n- `hub_id: string`\n\n- `search: string`\n  Search query string\n\n- `process_public_id?: string`\n  Optional UUID of a document to restrict the search within a specific document\n\n### Returns\n\n- `{ data?: { answer?: string; answerComment?: string; answerVote?: boolean; contextUrls?: string[]; createdAt?: string; question?: string; updatedAt?: string; user?: user_hub; }; metadata?: object; }`\n\n  - `data?: { answer?: string; answerComment?: string; answerVote?: boolean; contextUrls?: string[]; createdAt?: string; question?: string; updatedAt?: string; user?: { email?: string; name?: string; }; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.hub.aiSearch('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { search: 'search' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.aiSearch',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.hub.aiSearch('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  search: 'search',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'hub.ai_search',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.hub.ai_search(\n    hub_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    search="search",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/hub/$HUB_ID/search-ai \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'get_ai_answers',
    endpoint: '/v1/hub/{hub_id}/ai-answers',
    httpMethod: 'get',
    summary: 'Get AI Answers within a Hub',
    description: 'Retrieve AI answers within a specific hub, identified by its UUID',
    stainlessPath: '(resource) hub > (method) get_ai_answers',
    qualified: 'client.hub.getAIAnswers',
    params: ['hub_id: string;'],
    response:
      '{ data?: { answer?: string; answerComment?: string; answerVote?: boolean; contextUrls?: string[]; createdAt?: string; question?: string; updatedAt?: string; user?: object; }[]; metadata?: object; }',
    markdown:
      "## get_ai_answers\n\n`client.hub.getAIAnswers(hub_id: string): { data?: object[]; metadata?: object; }`\n\n**get** `/v1/hub/{hub_id}/ai-answers`\n\nRetrieve AI answers within a specific hub, identified by its UUID\n\n### Parameters\n\n- `hub_id: string`\n\n### Returns\n\n- `{ data?: { answer?: string; answerComment?: string; answerVote?: boolean; contextUrls?: string[]; createdAt?: string; question?: string; updatedAt?: string; user?: object; }[]; metadata?: object; }`\n\n  - `data?: { answer?: string; answerComment?: string; answerVote?: boolean; contextUrls?: string[]; createdAt?: string; question?: string; updatedAt?: string; user?: { email?: string; name?: string; }; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.hub.getAIAnswers('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.getAIAnswers',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.hub.getAIAnswers('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'hub.get_ai_answers',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.hub.get_ai_answers(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/hub/$HUB_ID/ai-answers \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'permanently_delete',
    endpoint: '/v1/hub/{hub_id}/permanent',
    httpMethod: 'delete',
    summary: 'Permanently Delete a Hub',
    description: 'Permanently delete a specific hub identified by its UUID',
    stainlessPath: '(resource) hub > (method) permanently_delete',
    qualified: 'client.hub.permanentlyDelete',
    params: ['hub_id: string;'],
    response: '{ data?: string; metadata?: object; }',
    markdown:
      "## permanently_delete\n\n`client.hub.permanentlyDelete(hub_id: string): { data?: string; metadata?: object; }`\n\n**delete** `/v1/hub/{hub_id}/permanent`\n\nPermanently delete a specific hub identified by its UUID\n\n### Parameters\n\n- `hub_id: string`\n\n### Returns\n\n- `{ data?: string; metadata?: object; }`\n\n  - `data?: string`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.hub.permanentlyDelete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.permanentlyDelete',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.hub.permanentlyDelete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'hub.permanently_delete',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.hub.permanently_delete(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/hub/$HUB_ID/permanent \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'restore',
    endpoint: '/v1/hub/{hub_id}/restore',
    httpMethod: 'put',
    summary: 'Restore a Hub',
    description: 'Restore a specific hub, identified by its UUID, that has been previously deleted',
    stainlessPath: '(resource) hub > (method) restore',
    qualified: 'client.hub.restore',
    params: ['hub_id: string;'],
    response: '{ data?: string; metadata?: object; }',
    markdown:
      "## restore\n\n`client.hub.restore(hub_id: string): { data?: string; metadata?: object; }`\n\n**put** `/v1/hub/{hub_id}/restore`\n\nRestore a specific hub, identified by its UUID, that has been previously deleted\n\n### Parameters\n\n- `hub_id: string`\n\n### Returns\n\n- `{ data?: string; metadata?: object; }`\n\n  - `data?: string`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.hub.restore('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.restore',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.hub.restore('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'hub.restore',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.hub.restore(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/hub/$HUB_ID/restore \\\n    -X PUT \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'get_documents',
    endpoint: '/v1/hub/{hub_id}/documents',
    httpMethod: 'get',
    summary: 'Retrieve Documents within a Hub',
    description: 'Get all documents associated with a specific hub, identified by its UUID',
    stainlessPath: '(resource) hub > (method) get_documents',
    qualified: 'client.hub.getDocuments',
    params: ['hub_id: string;'],
    response:
      '{ data?: { allowComments?: boolean; children?: object[]; createdAt?: string; deletedAt?: string; description?: object; expandByDefault?: boolean; isDeleted?: boolean; isTemplate?: boolean; lockedTemplate?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; publicId?: string; type?: string; updatedAt?: string; variables?: string[]; variableValues?: string[]; }[]; metadata?: object; }',
    markdown:
      "## get_documents\n\n`client.hub.getDocuments(hub_id: string): { data?: simple_document[]; metadata?: object; }`\n\n**get** `/v1/hub/{hub_id}/documents`\n\nGet all documents associated with a specific hub, identified by its UUID\n\n### Parameters\n\n- `hub_id: string`\n\n### Returns\n\n- `{ data?: { allowComments?: boolean; children?: object[]; createdAt?: string; deletedAt?: string; description?: object; expandByDefault?: boolean; isDeleted?: boolean; isTemplate?: boolean; lockedTemplate?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; publicId?: string; type?: string; updatedAt?: string; variables?: string[]; variableValues?: string[]; }[]; metadata?: object; }`\n\n  - `data?: { allowComments?: boolean; children?: { name?: string; publicId?: string; }[]; createdAt?: string; deletedAt?: string; description?: object; expandByDefault?: boolean; isDeleted?: boolean; isTemplate?: boolean; lockedTemplate?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; publicId?: string; type?: string; updatedAt?: string; variables?: string[]; variableValues?: string[]; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.hub.getDocuments('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.getDocuments',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.hub.getDocuments('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'hub.get_documents',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.hub.get_documents(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/hub/$HUB_ID/documents \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'get_deleted_documents',
    endpoint: '/v1/hub/{hub_id}/deleted-documents',
    httpMethod: 'get',
    summary: 'Retrieve Deleted Documents within a Hub',
    description: 'Get all deleted documents associated with a specific hub, identified by its UUID',
    stainlessPath: '(resource) hub > (method) get_deleted_documents',
    qualified: 'client.hub.getDeletedDocuments',
    params: ['hub_id: string;'],
    response:
      '{ data?: { allowComments?: boolean; children?: object[]; createdAt?: string; deletedAt?: string; description?: object; expandByDefault?: boolean; isDeleted?: boolean; isTemplate?: boolean; lockedTemplate?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; publicId?: string; type?: string; updatedAt?: string; variables?: string[]; variableValues?: string[]; }[]; metadata?: object; }',
    markdown:
      "## get_deleted_documents\n\n`client.hub.getDeletedDocuments(hub_id: string): { data?: simple_document[]; metadata?: object; }`\n\n**get** `/v1/hub/{hub_id}/deleted-documents`\n\nGet all deleted documents associated with a specific hub, identified by its UUID\n\n### Parameters\n\n- `hub_id: string`\n\n### Returns\n\n- `{ data?: { allowComments?: boolean; children?: object[]; createdAt?: string; deletedAt?: string; description?: object; expandByDefault?: boolean; isDeleted?: boolean; isTemplate?: boolean; lockedTemplate?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; publicId?: string; type?: string; updatedAt?: string; variables?: string[]; variableValues?: string[]; }[]; metadata?: object; }`\n\n  - `data?: { allowComments?: boolean; children?: { name?: string; publicId?: string; }[]; createdAt?: string; deletedAt?: string; description?: object; expandByDefault?: boolean; isDeleted?: boolean; isTemplate?: boolean; lockedTemplate?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; publicId?: string; type?: string; updatedAt?: string; variables?: string[]; variableValues?: string[]; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.hub.getDeletedDocuments('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.getDeletedDocuments',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.hub.getDeletedDocuments('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'hub.get_deleted_documents',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.hub.get_deleted_documents(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/hub/$HUB_ID/deleted-documents \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'change_user_role',
    endpoint: '/v1/hub/{hub_id}/change-user-role/{firebase_id}',
    httpMethod: 'put',
    summary: "Change a User's Role in a Hub",
    description:
      "Change the role of a user in a specific hub, identified by the hub's UUID and user's Firebase ID",
    stainlessPath: '(resource) hub > (method) change_user_role',
    qualified: 'client.hub.changeUserRole',
    params: ['hub_id: string;', 'firebase_id: string;', "role: 'owner' | 'admin' | 'member';"],
    response:
      '{ data?: { aiSearchEnabled?: boolean; allowDocumentExport?: boolean; allowTableExport?: boolean; createdAt?: string; defaultBanner?: string; defaultDateFormat?: string; defaultDatetimeFormat?: string; defaultHeaderBackgroundColor?: string; defaultHeaderTextColor?: string; defaultProcessId?: string; deletedAt?: string; domainsAccess?: string[]; fontColour?: string; headingStyles?: object[]; hideProcessCreated?: boolean; image?: string; isDeleted?: boolean; logo?: string; mfaRequired?: boolean; name?: string; primaryColour?: string; processTitleAlignment?: string; processTitleBold?: boolean; processTitleColour?: string; processTitleFontSize?: number; processTitleItalic?: boolean; processTitleUnderline?: boolean; projectList?: object[]; public?: boolean; publicId?: string; updatedAt?: string; wordTemplate?: string; }; metadata?: object; }',
    markdown:
      "## change_user_role\n\n`client.hub.changeUserRole(hub_id: string, firebase_id: string, role: 'owner' | 'admin' | 'member'): { data?: simple_hub; metadata?: object; }`\n\n**put** `/v1/hub/{hub_id}/change-user-role/{firebase_id}`\n\nChange the role of a user in a specific hub, identified by the hub's UUID and user's Firebase ID\n\n### Parameters\n\n- `hub_id: string`\n\n- `firebase_id: string`\n\n- `role: 'owner' | 'admin' | 'member'`\n\n### Returns\n\n- `{ data?: { aiSearchEnabled?: boolean; allowDocumentExport?: boolean; allowTableExport?: boolean; createdAt?: string; defaultBanner?: string; defaultDateFormat?: string; defaultDatetimeFormat?: string; defaultHeaderBackgroundColor?: string; defaultHeaderTextColor?: string; defaultProcessId?: string; deletedAt?: string; domainsAccess?: string[]; fontColour?: string; headingStyles?: object[]; hideProcessCreated?: boolean; image?: string; isDeleted?: boolean; logo?: string; mfaRequired?: boolean; name?: string; primaryColour?: string; processTitleAlignment?: string; processTitleBold?: boolean; processTitleColour?: string; processTitleFontSize?: number; processTitleItalic?: boolean; processTitleUnderline?: boolean; projectList?: object[]; public?: boolean; publicId?: string; updatedAt?: string; wordTemplate?: string; }; metadata?: object; }`\n\n  - `data?: { aiSearchEnabled?: boolean; allowDocumentExport?: boolean; allowTableExport?: boolean; createdAt?: string; defaultBanner?: string; defaultDateFormat?: string; defaultDatetimeFormat?: string; defaultHeaderBackgroundColor?: string; defaultHeaderTextColor?: string; defaultProcessId?: string; deletedAt?: string; domainsAccess?: string[]; fontColour?: string; headingStyles?: { bold?: boolean; colour?: string; fontSize?: number; italic?: boolean; level?: number; numberingStyle?: number; publicId?: string; startAt0?: boolean; underline?: boolean; }[]; hideProcessCreated?: boolean; image?: string; isDeleted?: boolean; logo?: string; mfaRequired?: boolean; name?: string; primaryColour?: string; processTitleAlignment?: string; processTitleBold?: boolean; processTitleColour?: string; processTitleFontSize?: number; processTitleItalic?: boolean; processTitleUnderline?: boolean; projectList?: { createdAt?: string; favourite?: boolean; projectRole?: string; updatedAt?: string; user?: { email?: string; firebaseUserId?: string; kind?: string; name?: string; publicId?: string; }; }[]; public?: boolean; publicId?: string; updatedAt?: string; wordTemplate?: string; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.hub.changeUserRole('firebase_id', { hub_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', role: 'owner' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.changeUserRole',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.hub.changeUserRole('firebase_id', {\n  hub_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  role: 'owner',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'hub.change_user_role',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.hub.change_user_role(\n    firebase_id="firebase_id",\n    hub_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    role="owner",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/hub/$HUB_ID/change-user-role/$FIREBASE_ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "role": "owner"\n        }\'',
      },
    },
  },
  {
    name: 'remove_user',
    endpoint: '/v1/hub/{hub_id}/remove-user/{firebase_id}',
    httpMethod: 'delete',
    summary: 'Delete a User from a Hub',
    description: "Remove a user from a specific hub, identified by the hub's UUID and user's Firebase ID",
    stainlessPath: '(resource) hub > (method) remove_user',
    qualified: 'client.hub.removeUser',
    params: ['hub_id: string;', 'firebase_id: string;'],
    response:
      '{ data?: { aiSearchEnabled?: boolean; allowDocumentExport?: boolean; allowTableExport?: boolean; createdAt?: string; defaultBanner?: string; defaultDateFormat?: string; defaultDatetimeFormat?: string; defaultHeaderBackgroundColor?: string; defaultHeaderTextColor?: string; defaultProcessId?: string; deletedAt?: string; domainsAccess?: string[]; fontColour?: string; headingStyles?: object[]; hideProcessCreated?: boolean; image?: string; isDeleted?: boolean; logo?: string; mfaRequired?: boolean; name?: string; primaryColour?: string; processTitleAlignment?: string; processTitleBold?: boolean; processTitleColour?: string; processTitleFontSize?: number; processTitleItalic?: boolean; processTitleUnderline?: boolean; projectList?: object[]; public?: boolean; publicId?: string; updatedAt?: string; wordTemplate?: string; }; metadata?: object; }',
    markdown:
      "## remove_user\n\n`client.hub.removeUser(hub_id: string, firebase_id: string): { data?: simple_hub; metadata?: object; }`\n\n**delete** `/v1/hub/{hub_id}/remove-user/{firebase_id}`\n\nRemove a user from a specific hub, identified by the hub's UUID and user's Firebase ID\n\n### Parameters\n\n- `hub_id: string`\n\n- `firebase_id: string`\n\n### Returns\n\n- `{ data?: { aiSearchEnabled?: boolean; allowDocumentExport?: boolean; allowTableExport?: boolean; createdAt?: string; defaultBanner?: string; defaultDateFormat?: string; defaultDatetimeFormat?: string; defaultHeaderBackgroundColor?: string; defaultHeaderTextColor?: string; defaultProcessId?: string; deletedAt?: string; domainsAccess?: string[]; fontColour?: string; headingStyles?: object[]; hideProcessCreated?: boolean; image?: string; isDeleted?: boolean; logo?: string; mfaRequired?: boolean; name?: string; primaryColour?: string; processTitleAlignment?: string; processTitleBold?: boolean; processTitleColour?: string; processTitleFontSize?: number; processTitleItalic?: boolean; processTitleUnderline?: boolean; projectList?: object[]; public?: boolean; publicId?: string; updatedAt?: string; wordTemplate?: string; }; metadata?: object; }`\n\n  - `data?: { aiSearchEnabled?: boolean; allowDocumentExport?: boolean; allowTableExport?: boolean; createdAt?: string; defaultBanner?: string; defaultDateFormat?: string; defaultDatetimeFormat?: string; defaultHeaderBackgroundColor?: string; defaultHeaderTextColor?: string; defaultProcessId?: string; deletedAt?: string; domainsAccess?: string[]; fontColour?: string; headingStyles?: { bold?: boolean; colour?: string; fontSize?: number; italic?: boolean; level?: number; numberingStyle?: number; publicId?: string; startAt0?: boolean; underline?: boolean; }[]; hideProcessCreated?: boolean; image?: string; isDeleted?: boolean; logo?: string; mfaRequired?: boolean; name?: string; primaryColour?: string; processTitleAlignment?: string; processTitleBold?: boolean; processTitleColour?: string; processTitleFontSize?: number; processTitleItalic?: boolean; processTitleUnderline?: boolean; projectList?: { createdAt?: string; favourite?: boolean; projectRole?: string; updatedAt?: string; user?: { email?: string; firebaseUserId?: string; kind?: string; name?: string; publicId?: string; }; }[]; public?: boolean; publicId?: string; updatedAt?: string; wordTemplate?: string; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.hub.removeUser('firebase_id', { hub_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.removeUser',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.hub.removeUser('firebase_id', {\n  hub_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'hub.remove_user',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.hub.remove_user(\n    firebase_id="firebase_id",\n    hub_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/hub/$HUB_ID/remove-user/$FIREBASE_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/hub',
    httpMethod: 'post',
    summary: 'Create a New Hub',
    description: 'Create a new hub with the specified name',
    stainlessPath: '(resource) hub > (method) create',
    qualified: 'client.hub.create',
    params: ['name: string;'],
    response:
      '{ data?: { aiSearchEnabled?: boolean; allowDocumentExport?: boolean; allowTableExport?: boolean; createdAt?: string; defaultBanner?: string; defaultDateFormat?: string; defaultDatetimeFormat?: string; defaultHeaderBackgroundColor?: string; defaultHeaderTextColor?: string; defaultProcessId?: string; deletedAt?: string; domainsAccess?: string[]; fontColour?: string; headingStyles?: object[]; hideProcessCreated?: boolean; image?: string; isDeleted?: boolean; logo?: string; mfaRequired?: boolean; name?: string; primaryColour?: string; processTitleAlignment?: string; processTitleBold?: boolean; processTitleColour?: string; processTitleFontSize?: number; processTitleItalic?: boolean; processTitleUnderline?: boolean; projectList?: object[]; public?: boolean; publicId?: string; updatedAt?: string; wordTemplate?: string; }; metadata?: object; }',
    markdown:
      "## create\n\n`client.hub.create(name: string): { data?: simple_hub; metadata?: object; }`\n\n**post** `/v1/hub`\n\nCreate a new hub with the specified name\n\n### Parameters\n\n- `name: string`\n\n### Returns\n\n- `{ data?: { aiSearchEnabled?: boolean; allowDocumentExport?: boolean; allowTableExport?: boolean; createdAt?: string; defaultBanner?: string; defaultDateFormat?: string; defaultDatetimeFormat?: string; defaultHeaderBackgroundColor?: string; defaultHeaderTextColor?: string; defaultProcessId?: string; deletedAt?: string; domainsAccess?: string[]; fontColour?: string; headingStyles?: object[]; hideProcessCreated?: boolean; image?: string; isDeleted?: boolean; logo?: string; mfaRequired?: boolean; name?: string; primaryColour?: string; processTitleAlignment?: string; processTitleBold?: boolean; processTitleColour?: string; processTitleFontSize?: number; processTitleItalic?: boolean; processTitleUnderline?: boolean; projectList?: object[]; public?: boolean; publicId?: string; updatedAt?: string; wordTemplate?: string; }; metadata?: object; }`\n\n  - `data?: { aiSearchEnabled?: boolean; allowDocumentExport?: boolean; allowTableExport?: boolean; createdAt?: string; defaultBanner?: string; defaultDateFormat?: string; defaultDatetimeFormat?: string; defaultHeaderBackgroundColor?: string; defaultHeaderTextColor?: string; defaultProcessId?: string; deletedAt?: string; domainsAccess?: string[]; fontColour?: string; headingStyles?: { bold?: boolean; colour?: string; fontSize?: number; italic?: boolean; level?: number; numberingStyle?: number; publicId?: string; startAt0?: boolean; underline?: boolean; }[]; hideProcessCreated?: boolean; image?: string; isDeleted?: boolean; logo?: string; mfaRequired?: boolean; name?: string; primaryColour?: string; processTitleAlignment?: string; processTitleBold?: boolean; processTitleColour?: string; processTitleFontSize?: number; processTitleItalic?: boolean; processTitleUnderline?: boolean; projectList?: { createdAt?: string; favourite?: boolean; projectRole?: string; updatedAt?: string; user?: { email?: string; firebaseUserId?: string; kind?: string; name?: string; publicId?: string; }; }[]; public?: boolean; publicId?: string; updatedAt?: string; wordTemplate?: string; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst hub = await client.hub.create({ name: 'name' });\n\nconsole.log(hub);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.create',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst hub = await client.hub.create({ name: 'name' });\n\nconsole.log(hub.data);",
      },
      python: {
        method: 'hub.create',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nhub = client.hub.create(\n    name="name",\n)\nprint(hub.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/hub \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "name": "name"\n        }\'',
      },
    },
  },
  {
    name: 'get_tables',
    endpoint: '/v1/hub/{hub_id}/tables',
    httpMethod: 'get',
    summary: 'Get Hub Tables',
    description: 'Retrieve tables associated with a specific hub, identified by its UUID',
    stainlessPath: '(resource) hub > (method) get_tables',
    qualified: 'client.hub.getTables',
    params: ['hub_id: string;'],
    response: '{ data?: object[]; metadata?: object; }',
    markdown:
      "## get_tables\n\n`client.hub.getTables(hub_id: string): { data?: table[]; metadata?: object; }`\n\n**get** `/v1/hub/{hub_id}/tables`\n\nRetrieve tables associated with a specific hub, identified by its UUID\n\n### Parameters\n\n- `hub_id: string`\n\n### Returns\n\n- `{ data?: { allowComments?: boolean; autodeskBim360ModelProperties?: object; columns?: table_column[]; createdAt?: string; defaultViewId?: string; deletedAt?: string; failedSyncAttempts?: number; isAconexSynced?: boolean; isAconexWorkflowsSynced?: boolean; isAsiteDocumentsSynced?: boolean; isAsiteFormsSynced?: boolean; isAutodeskBim360ChecklistsSynced?: boolean; isAutodeskBim360IssuesSynced?: boolean; isAutodeskBim360ModelsSynced?: boolean; isAutodeskBim360Synced?: boolean; isAutodeskBim360UsersSynced?: boolean; isDeleted?: boolean; isMortaColumnsSynced?: boolean; isMortaCommentsSynced?: boolean; isMortaProjectsSynced?: boolean; isMortaResourcesSynced?: boolean; isMortaSynced?: boolean; isMortaUsersSynced?: boolean; isProcoreSynced?: boolean; isReferenceTable?: boolean; isReviztoIssuesSynced?: boolean; isSynced?: boolean; isSyncing?: boolean; isViewpointRfisSynced?: boolean; isViewpointSynced?: boolean; joins?: table_join[]; keepColoursInSync?: boolean; keepValidationsInSync?: boolean; lastSync?: string; lockedFromDuplication?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; projects?: project[]; publicId?: string; syncHourlyFrequency?: number; syncUser?: object; type?: string; updatedAt?: string; }[]; metadata?: object; }`\n\n  - `data?: { allowComments?: boolean; autodeskBim360ModelProperties?: object; columns?: { aggregate?: number; alterOptions?: table_column_alter | object; dateFormat?: string; decimalPlaces?: number; description?: object | draftjs; displayLink?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: select_options_lookup; name?: string; publicId?: string; script?: string; scriptEnabled?: boolean; thousandSeparator?: boolean; width?: number; }[]; createdAt?: string; defaultViewId?: string; deletedAt?: string; failedSyncAttempts?: number; isAconexSynced?: boolean; isAconexWorkflowsSynced?: boolean; isAsiteDocumentsSynced?: boolean; isAsiteFormsSynced?: boolean; isAutodeskBim360ChecklistsSynced?: boolean; isAutodeskBim360IssuesSynced?: boolean; isAutodeskBim360ModelsSynced?: boolean; isAutodeskBim360Synced?: boolean; isAutodeskBim360UsersSynced?: boolean; isDeleted?: boolean; isMortaColumnsSynced?: boolean; isMortaCommentsSynced?: boolean; isMortaProjectsSynced?: boolean; isMortaResourcesSynced?: boolean; isMortaSynced?: boolean; isMortaUsersSynced?: boolean; isProcoreSynced?: boolean; isReferenceTable?: boolean; isReviztoIssuesSynced?: boolean; isSynced?: boolean; isSyncing?: boolean; isViewpointRfisSynced?: boolean; isViewpointSynced?: boolean; joins?: { dataColumns?: table_join_imported_columns[]; isOneToMany?: boolean; joinColumns?: table_column_join[]; joinTableId?: string; joinViewId?: string; publicId?: string; }[]; keepColoursInSync?: boolean; keepValidationsInSync?: boolean; lastSync?: string; lockedFromDuplication?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; projects?: { name?: string; publicId?: string; }[]; publicId?: string; syncHourlyFrequency?: number; syncUser?: { name?: string; publicId?: string; }; type?: string; updatedAt?: string; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.hub.getTables('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.getTables',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.hub.getTables('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'hub.get_tables',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.hub.get_tables(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/hub/$HUB_ID/tables \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'get_deleted_tables',
    endpoint: '/v1/hub/{hub_id}/deleted-tables',
    httpMethod: 'get',
    summary: 'Get Deleted Tables in a Hub',
    description:
      'Retrieve all deleted tables from a specific hub, identified by its UUID. Only accessible by hub owners.',
    stainlessPath: '(resource) hub > (method) get_deleted_tables',
    qualified: 'client.hub.getDeletedTables',
    params: ['hub_id: string;'],
    response: '{ data?: object[]; metadata?: object; }',
    markdown:
      "## get_deleted_tables\n\n`client.hub.getDeletedTables(hub_id: string): { data?: table[]; metadata?: object; }`\n\n**get** `/v1/hub/{hub_id}/deleted-tables`\n\nRetrieve all deleted tables from a specific hub, identified by its UUID. Only accessible by hub owners.\n\n### Parameters\n\n- `hub_id: string`\n\n### Returns\n\n- `{ data?: { allowComments?: boolean; autodeskBim360ModelProperties?: object; columns?: table_column[]; createdAt?: string; defaultViewId?: string; deletedAt?: string; failedSyncAttempts?: number; isAconexSynced?: boolean; isAconexWorkflowsSynced?: boolean; isAsiteDocumentsSynced?: boolean; isAsiteFormsSynced?: boolean; isAutodeskBim360ChecklistsSynced?: boolean; isAutodeskBim360IssuesSynced?: boolean; isAutodeskBim360ModelsSynced?: boolean; isAutodeskBim360Synced?: boolean; isAutodeskBim360UsersSynced?: boolean; isDeleted?: boolean; isMortaColumnsSynced?: boolean; isMortaCommentsSynced?: boolean; isMortaProjectsSynced?: boolean; isMortaResourcesSynced?: boolean; isMortaSynced?: boolean; isMortaUsersSynced?: boolean; isProcoreSynced?: boolean; isReferenceTable?: boolean; isReviztoIssuesSynced?: boolean; isSynced?: boolean; isSyncing?: boolean; isViewpointRfisSynced?: boolean; isViewpointSynced?: boolean; joins?: table_join[]; keepColoursInSync?: boolean; keepValidationsInSync?: boolean; lastSync?: string; lockedFromDuplication?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; projects?: project[]; publicId?: string; syncHourlyFrequency?: number; syncUser?: object; type?: string; updatedAt?: string; }[]; metadata?: object; }`\n\n  - `data?: { allowComments?: boolean; autodeskBim360ModelProperties?: object; columns?: { aggregate?: number; alterOptions?: table_column_alter | object; dateFormat?: string; decimalPlaces?: number; description?: object | draftjs; displayLink?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: select_options_lookup; name?: string; publicId?: string; script?: string; scriptEnabled?: boolean; thousandSeparator?: boolean; width?: number; }[]; createdAt?: string; defaultViewId?: string; deletedAt?: string; failedSyncAttempts?: number; isAconexSynced?: boolean; isAconexWorkflowsSynced?: boolean; isAsiteDocumentsSynced?: boolean; isAsiteFormsSynced?: boolean; isAutodeskBim360ChecklistsSynced?: boolean; isAutodeskBim360IssuesSynced?: boolean; isAutodeskBim360ModelsSynced?: boolean; isAutodeskBim360Synced?: boolean; isAutodeskBim360UsersSynced?: boolean; isDeleted?: boolean; isMortaColumnsSynced?: boolean; isMortaCommentsSynced?: boolean; isMortaProjectsSynced?: boolean; isMortaResourcesSynced?: boolean; isMortaSynced?: boolean; isMortaUsersSynced?: boolean; isProcoreSynced?: boolean; isReferenceTable?: boolean; isReviztoIssuesSynced?: boolean; isSynced?: boolean; isSyncing?: boolean; isViewpointRfisSynced?: boolean; isViewpointSynced?: boolean; joins?: { dataColumns?: table_join_imported_columns[]; isOneToMany?: boolean; joinColumns?: table_column_join[]; joinTableId?: string; joinViewId?: string; publicId?: string; }[]; keepColoursInSync?: boolean; keepValidationsInSync?: boolean; lastSync?: string; lockedFromDuplication?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; projects?: { name?: string; publicId?: string; }[]; publicId?: string; syncHourlyFrequency?: number; syncUser?: { name?: string; publicId?: string; }; type?: string; updatedAt?: string; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.hub.getDeletedTables('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.getDeletedTables',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.hub.getDeletedTables('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'hub.get_deleted_tables',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.hub.get_deleted_tables(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/hub/$HUB_ID/deleted-tables \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'invite_multiple_users',
    endpoint: '/v1/hub/{hub_id}/invite-multiple',
    httpMethod: 'post',
    summary: 'Invite Multiple Users to a Hub',
    description:
      'Invite multiple users to join a hub, by email. If users already exist, they are added directly, otherwise, an invite is sent. Requires owner or admin permissions.',
    stainlessPath: '(resource) hub > (method) invite_multiple_users',
    qualified: 'client.hub.inviteMultipleUsers',
    params: [
      'hub_id: string;',
      'emails?: string[];',
      "projectRole?: 'member' | 'admin' | 'owner';",
      'tags?: string[];',
    ],
    response: '{ data?: string; metadata?: object; }',
    markdown:
      "## invite_multiple_users\n\n`client.hub.inviteMultipleUsers(hub_id: string, emails?: string[], projectRole?: 'member' | 'admin' | 'owner', tags?: string[]): { data?: string; metadata?: object; }`\n\n**post** `/v1/hub/{hub_id}/invite-multiple`\n\nInvite multiple users to join a hub, by email. If users already exist, they are added directly, otherwise, an invite is sent. Requires owner or admin permissions.\n\n### Parameters\n\n- `hub_id: string`\n\n- `emails?: string[]`\n\n- `projectRole?: 'member' | 'admin' | 'owner'`\n\n- `tags?: string[]`\n\n### Returns\n\n- `{ data?: string; metadata?: object; }`\n\n  - `data?: string`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.hub.inviteMultipleUsers('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.inviteMultipleUsers',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.hub.inviteMultipleUsers('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'hub.invite_multiple_users',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.hub.invite_multiple_users(\n    hub_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          "curl https://api.morta.io/v1/hub/$HUB_ID/invite-multiple \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $MORTA_API_KEY\" \\\n    -d '{}'",
      },
    },
  },
  {
    name: 'get_notifications',
    endpoint: '/v1/hub/{hub_id}/notifications',
    httpMethod: 'get',
    summary: 'Get Notifications for a Hub',
    description:
      'Retrieve all notifications associated with a specific hub. This endpoint is accessible only to users with owner-level permissions for the hub.',
    stainlessPath: '(resource) hub > (method) get_notifications',
    qualified: 'client.hub.getNotifications',
    params: ['hub_id: string;'],
    response:
      '{ data?: { actions: action[]; publicId: string; triggers: trigger[]; createdAt?: string; description?: string; processes?: document[]; tables?: table1[]; user?: summary_user; }[]; metadata?: object; }',
    markdown:
      "## get_notifications\n\n`client.hub.getNotifications(hub_id: string): { data?: notification[]; metadata?: object; }`\n\n**get** `/v1/hub/{hub_id}/notifications`\n\nRetrieve all notifications associated with a specific hub. This endpoint is accessible only to users with owner-level permissions for the hub.\n\n### Parameters\n\n- `hub_id: string`\n\n### Returns\n\n- `{ data?: { actions: action[]; publicId: string; triggers: trigger[]; createdAt?: string; description?: string; processes?: document[]; tables?: table1[]; user?: summary_user; }[]; metadata?: object; }`\n\n  - `data?: { actions: { kind: string; publicId: string; customHeaders?: object[]; webhookUrl?: string; }[]; publicId: string; triggers: { publicId: string; resource: string; verb: string; }[]; createdAt?: string; description?: string; processes?: { name?: string; publicId?: string; }[]; tables?: { defaultViewId?: string; name?: string; publicId?: string; }[]; user?: { email?: string; firebaseUserId?: string; name?: string; profilePicture?: string; publicId?: string; }; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.hub.getNotifications('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.getNotifications',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.hub.getNotifications('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'hub.get_notifications',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.hub.get_notifications(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/hub/$HUB_ID/notifications \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'get_sent_notifications',
    endpoint: '/v1/hub/{hub_id}/sent-notifications',
    httpMethod: 'get',
    summary: 'Get Sent Notifications for a Hub',
    description: 'Retrieve all sent notifications for a specified hub',
    stainlessPath: '(resource) hub > (method) get_sent_notifications',
    qualified: 'client.hub.getSentNotifications',
    params: ['hub_id: string;', 'notification_id?: string;', 'page?: number;', 'size?: number;'],
    response:
      '{ data?: { publicId: string; createdAt?: string; description?: string; isSuccess?: boolean; notification?: { actions: action[]; publicId: string; triggers: trigger[]; createdAt?: string; description?: string; processes?: document[]; tables?: table1[]; }; updatedAt?: string; }[]; metadata?: object; }',
    markdown:
      "## get_sent_notifications\n\n`client.hub.getSentNotifications(hub_id: string, notification_id?: string, page?: number, size?: number): { data?: object[]; metadata?: object; }`\n\n**get** `/v1/hub/{hub_id}/sent-notifications`\n\nRetrieve all sent notifications for a specified hub\n\n### Parameters\n\n- `hub_id: string`\n\n- `notification_id?: string`\n  UUID of a specific notification to filter the executions\n\n- `page?: number`\n  Page number of the notification executions\n\n- `size?: number`\n  Number of notification executions per page\n\n### Returns\n\n- `{ data?: { publicId: string; createdAt?: string; description?: string; isSuccess?: boolean; notification?: { actions: action[]; publicId: string; triggers: trigger[]; createdAt?: string; description?: string; processes?: document[]; tables?: table1[]; }; updatedAt?: string; }[]; metadata?: object; }`\n\n  - `data?: { publicId: string; createdAt?: string; description?: string; isSuccess?: boolean; notification?: { actions: { kind: string; publicId: string; customHeaders?: object[]; webhookUrl?: string; }[]; publicId: string; triggers: { publicId: string; resource: string; verb: string; }[]; createdAt?: string; description?: string; processes?: { name?: string; publicId?: string; }[]; tables?: { defaultViewId?: string; name?: string; publicId?: string; }[]; }; updatedAt?: string; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.hub.getSentNotifications('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.getSentNotifications',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.hub.getSentNotifications('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'hub.get_sent_notifications',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.hub.get_sent_notifications(\n    hub_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/hub/$HUB_ID/sent-notifications \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'get_tags',
    endpoint: '/v1/hub/{hub_id}/tags',
    httpMethod: 'get',
    summary: 'Get Hub Tags',
    description: 'Retrieve all tags associated with a specified hub',
    stainlessPath: '(resource) hub > (method) get_tags',
    qualified: 'client.hub.getTags',
    params: ['hub_id: string;'],
    response:
      '{ data?: { cells?: { id?: string; column?: object; value?: string; }[]; name?: string; publicId?: string; }[]; metadata?: object; }',
    markdown:
      "## get_tags\n\n`client.hub.getTags(hub_id: string): { data?: object[]; metadata?: object; }`\n\n**get** `/v1/hub/{hub_id}/tags`\n\nRetrieve all tags associated with a specified hub\n\n### Parameters\n\n- `hub_id: string`\n\n### Returns\n\n- `{ data?: { cells?: { id?: string; column?: object; value?: string; }[]; name?: string; publicId?: string; }[]; metadata?: object; }`\n\n  - `data?: { cells?: { id?: string; column?: { name?: string; publicId?: string; }; value?: string; }[]; name?: string; publicId?: string; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.hub.getTags('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.getTags',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.hub.getTags('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'hub.get_tags',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.hub.get_tags(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/hub/$HUB_ID/tags \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'get_variables',
    endpoint: '/v1/hub/{hub_id}/variables',
    httpMethod: 'get',
    summary: 'Get Hub Variables',
    description: 'Retrieve all variables associated with a specified hub',
    stainlessPath: '(resource) hub > (method) get_variables',
    qualified: 'client.hub.getVariables',
    params: ['hub_id: string;'],
    response:
      '{ data?: { cells?: { id?: string; column?: object; value?: string; }[]; name?: string; publicId?: string; }[]; metadata?: object; }',
    markdown:
      "## get_variables\n\n`client.hub.getVariables(hub_id: string): { data?: object[]; metadata?: object; }`\n\n**get** `/v1/hub/{hub_id}/variables`\n\nRetrieve all variables associated with a specified hub\n\n### Parameters\n\n- `hub_id: string`\n\n### Returns\n\n- `{ data?: { cells?: { id?: string; column?: object; value?: string; }[]; name?: string; publicId?: string; }[]; metadata?: object; }`\n\n  - `data?: { cells?: { id?: string; column?: { name?: string; publicId?: string; }; value?: string; }[]; name?: string; publicId?: string; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.hub.getVariables('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.getVariables',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.hub.getVariables('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'hub.get_variables',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.hub.get_variables(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/hub/$HUB_ID/variables \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'get_members',
    endpoint: '/v1/hub/{hub_id}/members',
    httpMethod: 'get',
    summary: 'Get Hub Members',
    description: 'Retrieve all members associated with a specified hub',
    stainlessPath: '(resource) hub > (method) get_members',
    qualified: 'client.hub.getMembers',
    params: ['hub_id: string;'],
    response:
      '{ data?: { createdAt?: string; favourite?: boolean; projectRole?: string; updatedAt?: string; user?: { email?: string; firebaseUserId?: string; kind?: string; name?: string; profilePicture?: string; publicId?: string; tags?: object; }; }[]; metadata?: object; }',
    markdown:
      "## get_members\n\n`client.hub.getMembers(hub_id: string): { data?: object[]; metadata?: object; }`\n\n**get** `/v1/hub/{hub_id}/members`\n\nRetrieve all members associated with a specified hub\n\n### Parameters\n\n- `hub_id: string`\n\n### Returns\n\n- `{ data?: { createdAt?: string; favourite?: boolean; projectRole?: string; updatedAt?: string; user?: { email?: string; firebaseUserId?: string; kind?: string; name?: string; profilePicture?: string; publicId?: string; tags?: object; }; }[]; metadata?: object; }`\n\n  - `data?: { createdAt?: string; favourite?: boolean; projectRole?: string; updatedAt?: string; user?: { email?: string; firebaseUserId?: string; kind?: string; name?: string; profilePicture?: string; publicId?: string; tags?: object; }; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.hub.getMembers('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.getMembers',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.hub.getMembers('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'hub.get_members',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.hub.get_members(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/hub/$HUB_ID/members \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'get_invited_members',
    endpoint: '/v1/hub/{hub_id}/invited-members',
    httpMethod: 'get',
    summary: 'Get Invited Hub Members',
    description: 'Retrieve all invited members for a specified hub',
    stainlessPath: '(resource) hub > (method) get_invited_members',
    qualified: 'client.hub.getInvitedMembers',
    params: ['hub_id: string;'],
    response:
      '{ data?: { createdAt?: string; email?: string; invitedBy?: summary_user; projectRole?: string; publicId?: string; tags?: tag[]; }[]; metadata?: object; }',
    markdown:
      "## get_invited_members\n\n`client.hub.getInvitedMembers(hub_id: string): { data?: invited_member[]; metadata?: object; }`\n\n**get** `/v1/hub/{hub_id}/invited-members`\n\nRetrieve all invited members for a specified hub\n\n### Parameters\n\n- `hub_id: string`\n\n### Returns\n\n- `{ data?: { createdAt?: string; email?: string; invitedBy?: summary_user; projectRole?: string; publicId?: string; tags?: tag[]; }[]; metadata?: object; }`\n\n  - `data?: { createdAt?: string; email?: string; invitedBy?: { email?: string; firebaseUserId?: string; name?: string; profilePicture?: string; publicId?: string; }; projectRole?: string; publicId?: string; tags?: { documentTableId?: string; projectPublicId?: string; publicId?: string; referencePublicId?: string; value?: object; }[]; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.hub.getInvitedMembers('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.getInvitedMembers',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.hub.getInvitedMembers('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'hub.get_invited_members',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.hub.get_invited_members(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/hub/$HUB_ID/invited-members \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'create_heading_styling',
    endpoint: '/v1/hub/{hub_id}/add_heading_styling',
    httpMethod: 'post',
    summary: 'Create New Hub Heading Styling',
    description: 'Create new heading styling for a specific hub',
    stainlessPath: '(resource) hub > (method) create_heading_styling',
    qualified: 'client.hub.createHeadingStyling',
    params: ['hub_id: string;'],
    response:
      '{ data?: { aiSearchEnabled?: boolean; allowDocumentExport?: boolean; allowTableExport?: boolean; createdAt?: string; defaultBanner?: string; defaultDateFormat?: string; defaultDatetimeFormat?: string; defaultHeaderBackgroundColor?: string; defaultHeaderTextColor?: string; defaultProcessId?: string; deletedAt?: string; domainsAccess?: string[]; fontColour?: string; headingStyles?: object[]; hideProcessCreated?: boolean; image?: string; isDeleted?: boolean; logo?: string; mfaRequired?: boolean; name?: string; primaryColour?: string; processTitleAlignment?: string; processTitleBold?: boolean; processTitleColour?: string; processTitleFontSize?: number; processTitleItalic?: boolean; processTitleUnderline?: boolean; projectList?: object[]; public?: boolean; publicId?: string; updatedAt?: string; wordTemplate?: string; }; metadata?: object; }',
    markdown:
      "## create_heading_styling\n\n`client.hub.createHeadingStyling(hub_id: string): { data?: simple_hub; metadata?: object; }`\n\n**post** `/v1/hub/{hub_id}/add_heading_styling`\n\nCreate new heading styling for a specific hub\n\n### Parameters\n\n- `hub_id: string`\n\n### Returns\n\n- `{ data?: { aiSearchEnabled?: boolean; allowDocumentExport?: boolean; allowTableExport?: boolean; createdAt?: string; defaultBanner?: string; defaultDateFormat?: string; defaultDatetimeFormat?: string; defaultHeaderBackgroundColor?: string; defaultHeaderTextColor?: string; defaultProcessId?: string; deletedAt?: string; domainsAccess?: string[]; fontColour?: string; headingStyles?: object[]; hideProcessCreated?: boolean; image?: string; isDeleted?: boolean; logo?: string; mfaRequired?: boolean; name?: string; primaryColour?: string; processTitleAlignment?: string; processTitleBold?: boolean; processTitleColour?: string; processTitleFontSize?: number; processTitleItalic?: boolean; processTitleUnderline?: boolean; projectList?: object[]; public?: boolean; publicId?: string; updatedAt?: string; wordTemplate?: string; }; metadata?: object; }`\n\n  - `data?: { aiSearchEnabled?: boolean; allowDocumentExport?: boolean; allowTableExport?: boolean; createdAt?: string; defaultBanner?: string; defaultDateFormat?: string; defaultDatetimeFormat?: string; defaultHeaderBackgroundColor?: string; defaultHeaderTextColor?: string; defaultProcessId?: string; deletedAt?: string; domainsAccess?: string[]; fontColour?: string; headingStyles?: { bold?: boolean; colour?: string; fontSize?: number; italic?: boolean; level?: number; numberingStyle?: number; publicId?: string; startAt0?: boolean; underline?: boolean; }[]; hideProcessCreated?: boolean; image?: string; isDeleted?: boolean; logo?: string; mfaRequired?: boolean; name?: string; primaryColour?: string; processTitleAlignment?: string; processTitleBold?: boolean; processTitleColour?: string; processTitleFontSize?: number; processTitleItalic?: boolean; processTitleUnderline?: boolean; projectList?: { createdAt?: string; favourite?: boolean; projectRole?: string; updatedAt?: string; user?: { email?: string; firebaseUserId?: string; kind?: string; name?: string; publicId?: string; }; }[]; public?: boolean; publicId?: string; updatedAt?: string; wordTemplate?: string; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.hub.createHeadingStyling('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.createHeadingStyling',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.hub.createHeadingStyling('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'hub.create_heading_styling',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.hub.create_heading_styling(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/hub/$HUB_ID/add_heading_styling \\\n    -X POST \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'update_heading_styling',
    endpoint: '/v1/hub/{hub_id}/style/{style_id}',
    httpMethod: 'post',
    summary: 'Update Hub Heading Styling',
    description: 'Update heading styling for a specific hub',
    stainlessPath: '(resource) hub > (method) update_heading_styling',
    qualified: 'client.hub.updateHeadingStyling',
    params: [
      'hub_id: string;',
      'style_id: string;',
      'bold?: boolean;',
      'colour?: string;',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
      'fontSize?: number;',
      'italic?: boolean;',
      'numberingStyle?: number;',
      'startAt0?: boolean;',
      'underline?: boolean;',
    ],
    response:
      '{ data?: { aiSearchEnabled?: boolean; allowDocumentExport?: boolean; allowTableExport?: boolean; createdAt?: string; defaultBanner?: string; defaultDateFormat?: string; defaultDatetimeFormat?: string; defaultHeaderBackgroundColor?: string; defaultHeaderTextColor?: string; defaultProcessId?: string; deletedAt?: string; domainsAccess?: string[]; fontColour?: string; headingStyles?: object[]; hideProcessCreated?: boolean; image?: string; isDeleted?: boolean; logo?: string; mfaRequired?: boolean; name?: string; primaryColour?: string; processTitleAlignment?: string; processTitleBold?: boolean; processTitleColour?: string; processTitleFontSize?: number; processTitleItalic?: boolean; processTitleUnderline?: boolean; projectList?: object[]; public?: boolean; publicId?: string; updatedAt?: string; wordTemplate?: string; }; metadata?: object; }',
    markdown:
      "## update_heading_styling\n\n`client.hub.updateHeadingStyling(hub_id: string, style_id: string, bold?: boolean, colour?: string, context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }, fontSize?: number, italic?: boolean, numberingStyle?: number, startAt0?: boolean, underline?: boolean): { data?: simple_hub; metadata?: object; }`\n\n**post** `/v1/hub/{hub_id}/style/{style_id}`\n\nUpdate heading styling for a specific hub\n\n### Parameters\n\n- `hub_id: string`\n\n- `style_id: string`\n\n- `bold?: boolean`\n\n- `colour?: string`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n- `fontSize?: number`\n\n- `italic?: boolean`\n\n- `numberingStyle?: number`\n\n- `startAt0?: boolean`\n\n- `underline?: boolean`\n\n### Returns\n\n- `{ data?: { aiSearchEnabled?: boolean; allowDocumentExport?: boolean; allowTableExport?: boolean; createdAt?: string; defaultBanner?: string; defaultDateFormat?: string; defaultDatetimeFormat?: string; defaultHeaderBackgroundColor?: string; defaultHeaderTextColor?: string; defaultProcessId?: string; deletedAt?: string; domainsAccess?: string[]; fontColour?: string; headingStyles?: object[]; hideProcessCreated?: boolean; image?: string; isDeleted?: boolean; logo?: string; mfaRequired?: boolean; name?: string; primaryColour?: string; processTitleAlignment?: string; processTitleBold?: boolean; processTitleColour?: string; processTitleFontSize?: number; processTitleItalic?: boolean; processTitleUnderline?: boolean; projectList?: object[]; public?: boolean; publicId?: string; updatedAt?: string; wordTemplate?: string; }; metadata?: object; }`\n\n  - `data?: { aiSearchEnabled?: boolean; allowDocumentExport?: boolean; allowTableExport?: boolean; createdAt?: string; defaultBanner?: string; defaultDateFormat?: string; defaultDatetimeFormat?: string; defaultHeaderBackgroundColor?: string; defaultHeaderTextColor?: string; defaultProcessId?: string; deletedAt?: string; domainsAccess?: string[]; fontColour?: string; headingStyles?: { bold?: boolean; colour?: string; fontSize?: number; italic?: boolean; level?: number; numberingStyle?: number; publicId?: string; startAt0?: boolean; underline?: boolean; }[]; hideProcessCreated?: boolean; image?: string; isDeleted?: boolean; logo?: string; mfaRequired?: boolean; name?: string; primaryColour?: string; processTitleAlignment?: string; processTitleBold?: boolean; processTitleColour?: string; processTitleFontSize?: number; processTitleItalic?: boolean; processTitleUnderline?: boolean; projectList?: { createdAt?: string; favourite?: boolean; projectRole?: string; updatedAt?: string; user?: { email?: string; firebaseUserId?: string; kind?: string; name?: string; publicId?: string; }; }[]; public?: boolean; publicId?: string; updatedAt?: string; wordTemplate?: string; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.hub.updateHeadingStyling('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { hub_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.updateHeadingStyling',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.hub.updateHeadingStyling('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  hub_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'hub.update_heading_styling',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.hub.update_heading_styling(\n    style_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    hub_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          "curl https://api.morta.io/v1/hub/$HUB_ID/style/$STYLE_ID \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $MORTA_API_KEY\" \\\n    -d '{}'",
      },
    },
  },
  {
    name: 'delete_top_heading_styling',
    endpoint: '/v1/hub/{hub_id}/delete_top_style',
    httpMethod: 'delete',
    summary: 'Delete Top Hub Heading Styling',
    description: 'Delete the top heading styling for a specific hub',
    stainlessPath: '(resource) hub > (method) delete_top_heading_styling',
    qualified: 'client.hub.deleteTopHeadingStyling',
    params: ['hub_id: string;'],
    response:
      '{ data?: { aiSearchEnabled?: boolean; allowDocumentExport?: boolean; allowTableExport?: boolean; createdAt?: string; defaultBanner?: string; defaultDateFormat?: string; defaultDatetimeFormat?: string; defaultHeaderBackgroundColor?: string; defaultHeaderTextColor?: string; defaultProcessId?: string; deletedAt?: string; domainsAccess?: string[]; fontColour?: string; headingStyles?: object[]; hideProcessCreated?: boolean; image?: string; isDeleted?: boolean; logo?: string; mfaRequired?: boolean; name?: string; primaryColour?: string; processTitleAlignment?: string; processTitleBold?: boolean; processTitleColour?: string; processTitleFontSize?: number; processTitleItalic?: boolean; processTitleUnderline?: boolean; projectList?: object[]; public?: boolean; publicId?: string; updatedAt?: string; wordTemplate?: string; }; metadata?: object; }',
    markdown:
      "## delete_top_heading_styling\n\n`client.hub.deleteTopHeadingStyling(hub_id: string): { data?: simple_hub; metadata?: object; }`\n\n**delete** `/v1/hub/{hub_id}/delete_top_style`\n\nDelete the top heading styling for a specific hub\n\n### Parameters\n\n- `hub_id: string`\n\n### Returns\n\n- `{ data?: { aiSearchEnabled?: boolean; allowDocumentExport?: boolean; allowTableExport?: boolean; createdAt?: string; defaultBanner?: string; defaultDateFormat?: string; defaultDatetimeFormat?: string; defaultHeaderBackgroundColor?: string; defaultHeaderTextColor?: string; defaultProcessId?: string; deletedAt?: string; domainsAccess?: string[]; fontColour?: string; headingStyles?: object[]; hideProcessCreated?: boolean; image?: string; isDeleted?: boolean; logo?: string; mfaRequired?: boolean; name?: string; primaryColour?: string; processTitleAlignment?: string; processTitleBold?: boolean; processTitleColour?: string; processTitleFontSize?: number; processTitleItalic?: boolean; processTitleUnderline?: boolean; projectList?: object[]; public?: boolean; publicId?: string; updatedAt?: string; wordTemplate?: string; }; metadata?: object; }`\n\n  - `data?: { aiSearchEnabled?: boolean; allowDocumentExport?: boolean; allowTableExport?: boolean; createdAt?: string; defaultBanner?: string; defaultDateFormat?: string; defaultDatetimeFormat?: string; defaultHeaderBackgroundColor?: string; defaultHeaderTextColor?: string; defaultProcessId?: string; deletedAt?: string; domainsAccess?: string[]; fontColour?: string; headingStyles?: { bold?: boolean; colour?: string; fontSize?: number; italic?: boolean; level?: number; numberingStyle?: number; publicId?: string; startAt0?: boolean; underline?: boolean; }[]; hideProcessCreated?: boolean; image?: string; isDeleted?: boolean; logo?: string; mfaRequired?: boolean; name?: string; primaryColour?: string; processTitleAlignment?: string; processTitleBold?: boolean; processTitleColour?: string; processTitleFontSize?: number; processTitleItalic?: boolean; processTitleUnderline?: boolean; projectList?: { createdAt?: string; favourite?: boolean; projectRole?: string; updatedAt?: string; user?: { email?: string; firebaseUserId?: string; kind?: string; name?: string; publicId?: string; }; }[]; public?: boolean; publicId?: string; updatedAt?: string; wordTemplate?: string; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.hub.deleteTopHeadingStyling('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.deleteTopHeadingStyling',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.hub.deleteTopHeadingStyling('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'hub.delete_top_heading_styling',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.hub.delete_top_heading_styling(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/hub/$HUB_ID/delete_top_style \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'duplicate',
    endpoint: '/v1/hub/{hub_id}/duplicate',
    httpMethod: 'post',
    summary: 'Duplicate a Hub',
    description: 'Create a duplicate of an existing hub',
    stainlessPath: '(resource) hub > (method) duplicate',
    qualified: 'client.hub.duplicate',
    params: [
      'hub_id: string;',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
      'duplicatePermissions?: boolean;',
      'lockResource?: boolean;',
    ],
    markdown:
      "## duplicate\n\n`client.hub.duplicate(hub_id: string, context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }, duplicatePermissions?: boolean, lockResource?: boolean): void`\n\n**post** `/v1/hub/{hub_id}/duplicate`\n\nCreate a duplicate of an existing hub\n\n### Parameters\n\n- `hub_id: string`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n- `duplicatePermissions?: boolean`\n\n- `lockResource?: boolean`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nawait client.hub.duplicate('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e')\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.duplicate',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.hub.duplicate('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');",
      },
      python: {
        method: 'hub.duplicate',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nclient.hub.duplicate(\n    hub_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)',
      },
      http: {
        example:
          "curl https://api.morta.io/v1/hub/$HUB_ID/duplicate \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $MORTA_API_KEY\" \\\n    -d '{}'",
      },
    },
  },
  {
    name: 'create_knowledge_base',
    endpoint: '/v1/hub/{hub_id}/knowledge-base',
    httpMethod: 'post',
    summary: 'Create a Knowledge Base',
    description: 'Create a new knowledge base entry for a hub',
    stainlessPath: '(resource) hub > (method) create_knowledge_base',
    qualified: 'client.hub.createKnowledgeBase',
    params: [
      'hub_id: string;',
      'source: string;',
      'text: string;',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
      'link?: string;',
    ],
    markdown:
      "## create_knowledge_base\n\n`client.hub.createKnowledgeBase(hub_id: string, source: string, text: string, context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }, link?: string): void`\n\n**post** `/v1/hub/{hub_id}/knowledge-base`\n\nCreate a new knowledge base entry for a hub\n\n### Parameters\n\n- `hub_id: string`\n\n- `source: string`\n\n- `text: string`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n- `link?: string`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nawait client.hub.createKnowledgeBase('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { source: 'source', text: 'text' })\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.createKnowledgeBase',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.hub.createKnowledgeBase('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  source: 'source',\n  text: 'text',\n});",
      },
      python: {
        method: 'hub.create_knowledge_base',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nclient.hub.create_knowledge_base(\n    hub_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    source="source",\n    text="text",\n)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/hub/$HUB_ID/knowledge-base \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "source": "source",\n          "text": "text"\n        }\'',
      },
    },
  },
  {
    name: 'train_knowledge_base',
    endpoint: '/v1/hub/{hub_id}/train-knowledge-base',
    httpMethod: 'post',
    summary: 'Train Knowledge Base',
    description: 'Train the knowledge base for a hub',
    stainlessPath: '(resource) hub > (method) train_knowledge_base',
    qualified: 'client.hub.trainKnowledgeBase',
    params: ['hub_id: string;'],
    markdown:
      "## train_knowledge_base\n\n`client.hub.trainKnowledgeBase(hub_id: string): void`\n\n**post** `/v1/hub/{hub_id}/train-knowledge-base`\n\nTrain the knowledge base for a hub\n\n### Parameters\n\n- `hub_id: string`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nawait client.hub.trainKnowledgeBase('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e')\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.trainKnowledgeBase',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.hub.trainKnowledgeBase('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');",
      },
      python: {
        method: 'hub.train_knowledge_base',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nclient.hub.train_knowledge_base(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/hub/$HUB_ID/train-knowledge-base \\\n    -X POST \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'set_column_coloring',
    endpoint: '/v1/hub/{hub_id}/set-column-coloring',
    httpMethod: 'post',
    summary: 'Set Column Coloring',
    description: 'Set column coloring for a hub',
    stainlessPath: '(resource) hub > (method) set_column_coloring',
    qualified: 'client.hub.setColumnColoring',
    params: ['hub_id: string;'],
    markdown:
      "## set_column_coloring\n\n`client.hub.setColumnColoring(hub_id: string): void`\n\n**post** `/v1/hub/{hub_id}/set-column-coloring`\n\nSet column coloring for a hub\n\n### Parameters\n\n- `hub_id: string`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nawait client.hub.setColumnColoring('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e')\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.setColumnColoring',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.hub.setColumnColoring('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');",
      },
      python: {
        method: 'hub.set_column_coloring',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nclient.hub.set_column_coloring(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/hub/$HUB_ID/set-column-coloring \\\n    -X POST \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'set_column_format',
    endpoint: '/v1/hub/{hub_id}/set-column-format/{kind}',
    httpMethod: 'post',
    summary: 'Set Column Date Format',
    description: 'Set column date formatting for a hub',
    stainlessPath: '(resource) hub > (method) set_column_format',
    qualified: 'client.hub.setColumnFormat',
    params: ['hub_id: string;', 'kind: string;'],
    markdown:
      "## set_column_format\n\n`client.hub.setColumnFormat(hub_id: string, kind: string): void`\n\n**post** `/v1/hub/{hub_id}/set-column-format/{kind}`\n\nSet column date formatting for a hub\n\n### Parameters\n\n- `hub_id: string`\n\n- `kind: string`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nawait client.hub.setColumnFormat('kind', { hub_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' })\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.setColumnFormat',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.hub.setColumnFormat('kind', { hub_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });",
      },
      python: {
        method: 'hub.set_column_format',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nclient.hub.set_column_format(\n    kind="kind",\n    hub_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/hub/$HUB_ID/set-column-format/$KIND \\\n    -X POST \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'request_contributor_access',
    endpoint: '/v1/hub/{hub_id}/request-contributor-access',
    httpMethod: 'post',
    summary: 'Request Contributor Access',
    description: 'Request contributor access to a hub',
    stainlessPath: '(resource) hub > (method) request_contributor_access',
    qualified: 'client.hub.requestContributorAccess',
    params: ['hub_id: string;'],
    markdown:
      "## request_contributor_access\n\n`client.hub.requestContributorAccess(hub_id: string): void`\n\n**post** `/v1/hub/{hub_id}/request-contributor-access`\n\nRequest contributor access to a hub\n\n### Parameters\n\n- `hub_id: string`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nawait client.hub.requestContributorAccess('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e')\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.requestContributorAccess',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.hub.requestContributorAccess('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');",
      },
      python: {
        method: 'hub.request_contributor_access',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nclient.hub.request_contributor_access(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/hub/$HUB_ID/request-contributor-access \\\n    -X POST \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'upload_template',
    endpoint: '/v1/hub/{hub_id}/upload-template',
    httpMethod: 'post',
    summary: 'Upload a Template Document',
    description: 'Upload a template document for a hub',
    stainlessPath: '(resource) hub > (method) upload_template',
    qualified: 'client.hub.uploadTemplate',
    params: ['hub_id: string;', 'file?: string;'],
    response:
      '{ data?: { aiSearchEnabled?: boolean; allowDocumentExport?: boolean; allowTableExport?: boolean; createdAt?: string; defaultBanner?: string; defaultDateFormat?: string; defaultDatetimeFormat?: string; defaultHeaderBackgroundColor?: string; defaultHeaderTextColor?: string; defaultProcessId?: string; deletedAt?: string; domainsAccess?: string[]; fontColour?: string; headingStyles?: object[]; hideProcessCreated?: boolean; image?: string; isDeleted?: boolean; logo?: string; mfaRequired?: boolean; name?: string; primaryColour?: string; processTitleAlignment?: string; processTitleBold?: boolean; processTitleColour?: string; processTitleFontSize?: number; processTitleItalic?: boolean; processTitleUnderline?: boolean; projectList?: object[]; public?: boolean; publicId?: string; updatedAt?: string; wordTemplate?: string; }; metadata?: object; }',
    markdown:
      "## upload_template\n\n`client.hub.uploadTemplate(hub_id: string, file?: string): { data?: simple_hub; metadata?: object; }`\n\n**post** `/v1/hub/{hub_id}/upload-template`\n\nUpload a template document for a hub\n\n### Parameters\n\n- `hub_id: string`\n\n- `file?: string`\n\n### Returns\n\n- `{ data?: { aiSearchEnabled?: boolean; allowDocumentExport?: boolean; allowTableExport?: boolean; createdAt?: string; defaultBanner?: string; defaultDateFormat?: string; defaultDatetimeFormat?: string; defaultHeaderBackgroundColor?: string; defaultHeaderTextColor?: string; defaultProcessId?: string; deletedAt?: string; domainsAccess?: string[]; fontColour?: string; headingStyles?: object[]; hideProcessCreated?: boolean; image?: string; isDeleted?: boolean; logo?: string; mfaRequired?: boolean; name?: string; primaryColour?: string; processTitleAlignment?: string; processTitleBold?: boolean; processTitleColour?: string; processTitleFontSize?: number; processTitleItalic?: boolean; processTitleUnderline?: boolean; projectList?: object[]; public?: boolean; publicId?: string; updatedAt?: string; wordTemplate?: string; }; metadata?: object; }`\n\n  - `data?: { aiSearchEnabled?: boolean; allowDocumentExport?: boolean; allowTableExport?: boolean; createdAt?: string; defaultBanner?: string; defaultDateFormat?: string; defaultDatetimeFormat?: string; defaultHeaderBackgroundColor?: string; defaultHeaderTextColor?: string; defaultProcessId?: string; deletedAt?: string; domainsAccess?: string[]; fontColour?: string; headingStyles?: { bold?: boolean; colour?: string; fontSize?: number; italic?: boolean; level?: number; numberingStyle?: number; publicId?: string; startAt0?: boolean; underline?: boolean; }[]; hideProcessCreated?: boolean; image?: string; isDeleted?: boolean; logo?: string; mfaRequired?: boolean; name?: string; primaryColour?: string; processTitleAlignment?: string; processTitleBold?: boolean; processTitleColour?: string; processTitleFontSize?: number; processTitleItalic?: boolean; processTitleUnderline?: boolean; projectList?: { createdAt?: string; favourite?: boolean; projectRole?: string; updatedAt?: string; user?: { email?: string; firebaseUserId?: string; kind?: string; name?: string; publicId?: string; }; }[]; public?: boolean; publicId?: string; updatedAt?: string; wordTemplate?: string; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.hub.uploadTemplate('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.uploadTemplate',
        example:
          "import fs from 'fs';\nimport Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.hub.uploadTemplate('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'hub.upload_template',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.hub.upload_template(\n    hub_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/hub/$HUB_ID/upload-template \\\n    -H \'Content-Type: multipart/form-data\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'get_duplicated_children',
    endpoint: '/v1/hub/{hub_id}/duplicated-children',
    httpMethod: 'get',
    summary: 'Get Duplicated Children',
    description: 'Get duplicated children of a hub',
    stainlessPath: '(resource) hub > (method) get_duplicated_children',
    qualified: 'client.hub.getDuplicatedChildren',
    params: ['hub_id: string;'],
    response:
      '{ data?: { createdAt?: string; deletedAt?: string; deletedBy?: string; link?: string; name?: string; publicId?: string; user?: string; }[]; metadata?: object; }',
    markdown:
      "## get_duplicated_children\n\n`client.hub.getDuplicatedChildren(hub_id: string): { data?: object[]; metadata?: object; }`\n\n**get** `/v1/hub/{hub_id}/duplicated-children`\n\nGet duplicated children of a hub\n\n### Parameters\n\n- `hub_id: string`\n\n### Returns\n\n- `{ data?: { createdAt?: string; deletedAt?: string; deletedBy?: string; link?: string; name?: string; publicId?: string; user?: string; }[]; metadata?: object; }`\n\n  - `data?: { createdAt?: string; deletedAt?: string; deletedBy?: string; link?: string; name?: string; publicId?: string; user?: string; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.hub.getDuplicatedChildren('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.getDuplicatedChildren',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.hub.getDuplicatedChildren('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'hub.get_duplicated_children',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.hub.get_duplicated_children(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/hub/$HUB_ID/duplicated-children \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'vote',
    endpoint: '/v1/hub/{hub_id}/ai-answer/{answer_id}/vote',
    httpMethod: 'post',
    summary: 'Vote on an AI Answer',
    description:
      "Vote on an AI answer within a specific hub, identified by the hub's UUID and the answer's UUID",
    stainlessPath: '(resource) hub.ai_answer > (method) vote',
    qualified: 'client.hub.aiAnswer.vote',
    params: ['hub_id: string;', 'answer_id: string;', 'comment?: string;', 'vote?: boolean;'],
    response: '{ data?: string; metadata?: object; }',
    markdown:
      "## vote\n\n`client.hub.aiAnswer.vote(hub_id: string, answer_id: string, comment?: string, vote?: boolean): { data?: string; metadata?: object; }`\n\n**post** `/v1/hub/{hub_id}/ai-answer/{answer_id}/vote`\n\nVote on an AI answer within a specific hub, identified by the hub's UUID and the answer's UUID\n\n### Parameters\n\n- `hub_id: string`\n\n- `answer_id: string`\n\n- `comment?: string`\n\n- `vote?: boolean`\n\n### Returns\n\n- `{ data?: string; metadata?: object; }`\n\n  - `data?: string`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.hub.aiAnswer.vote('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { hub_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.aiAnswer.vote',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.hub.aiAnswer.vote('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  hub_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'hub.ai_answer.vote',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.hub.ai_answer.vote(\n    answer_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    hub_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          "curl https://api.morta.io/v1/hub/$HUB_ID/ai-answer/$ANSWER_ID/vote \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $MORTA_API_KEY\" \\\n    -d '{}'",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/hub/{hub_id}/invite',
    httpMethod: 'post',
    summary: 'Invite a User to a Hub',
    description:
      'Invite a single user to join a hub by email. If the user already exists, they are added directly; otherwise, an invite is sent. Requires owner or admin permissions.',
    stainlessPath: '(resource) hub.invite > (method) create',
    qualified: 'client.hub.invite.create',
    params: [
      'hub_id: string;',
      'email: string;',
      "projectRole?: 'member' | 'admin' | 'owner';",
      'tags?: string[];',
    ],
    response: '{ data?: string; metadata?: object; }',
    markdown:
      "## create\n\n`client.hub.invite.create(hub_id: string, email: string, projectRole?: 'member' | 'admin' | 'owner', tags?: string[]): { data?: string; metadata?: object; }`\n\n**post** `/v1/hub/{hub_id}/invite`\n\nInvite a single user to join a hub by email. If the user already exists, they are added directly; otherwise, an invite is sent. Requires owner or admin permissions.\n\n### Parameters\n\n- `hub_id: string`\n\n- `email: string`\n\n- `projectRole?: 'member' | 'admin' | 'owner'`\n\n- `tags?: string[]`\n\n### Returns\n\n- `{ data?: string; metadata?: object; }`\n\n  - `data?: string`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst invite = await client.hub.invite.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { email: 'dev@stainless.com' });\n\nconsole.log(invite);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.invite.create',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst invite = await client.hub.invite.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  email: 'dev@stainless.com',\n});\n\nconsole.log(invite.data);",
      },
      python: {
        method: 'hub.invite.create',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\ninvite = client.hub.invite.create(\n    hub_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    email="dev@stainless.com",\n)\nprint(invite.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/hub/$HUB_ID/invite \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "email": "dev@stainless.com"\n        }\'',
      },
    },
  },
  {
    name: 'resend',
    endpoint: '/v1/hub/{hub_id}/invite/{invite_id}',
    httpMethod: 'post',
    summary: 'Resend an Invite to a User for a Hub',
    description:
      'Resend an invitation to a user for a hub. This is applicable for both new users and existing users who have previously been invited. Requires owner or admin permissions.',
    stainlessPath: '(resource) hub.invite > (method) resend',
    qualified: 'client.hub.invite.resend',
    params: ['hub_id: string;', 'invite_id: string;'],
    response: '{ data?: string; metadata?: object; }',
    markdown:
      "## resend\n\n`client.hub.invite.resend(hub_id: string, invite_id: string): { data?: string; metadata?: object; }`\n\n**post** `/v1/hub/{hub_id}/invite/{invite_id}`\n\nResend an invitation to a user for a hub. This is applicable for both new users and existing users who have previously been invited. Requires owner or admin permissions.\n\n### Parameters\n\n- `hub_id: string`\n\n- `invite_id: string`\n\n### Returns\n\n- `{ data?: string; metadata?: object; }`\n\n  - `data?: string`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.hub.invite.resend('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { hub_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.invite.resend',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.hub.invite.resend('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  hub_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'hub.invite.resend',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.hub.invite.resend(\n    invite_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    hub_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/hub/$HUB_ID/invite/$INVITE_ID \\\n    -X POST \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/hub/{hub_id}/invite/{invite_id}',
    httpMethod: 'delete',
    summary: 'Delete a Hub Invite',
    description: 'Delete an invite to a hub',
    stainlessPath: '(resource) hub.invite > (method) delete',
    qualified: 'client.hub.invite.delete',
    params: ['hub_id: string;', 'invite_id: string;'],
    response: '{ data?: string; metadata?: object; }',
    markdown:
      "## delete\n\n`client.hub.invite.delete(hub_id: string, invite_id: string): { data?: string; metadata?: object; }`\n\n**delete** `/v1/hub/{hub_id}/invite/{invite_id}`\n\nDelete an invite to a hub\n\n### Parameters\n\n- `hub_id: string`\n\n- `invite_id: string`\n\n### Returns\n\n- `{ data?: string; metadata?: object; }`\n\n  - `data?: string`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst invite = await client.hub.invite.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { hub_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(invite);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.invite.delete',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst invite = await client.hub.invite.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  hub_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(invite.data);",
      },
      python: {
        method: 'hub.invite.delete',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\ninvite = client.hub.invite.delete(\n    invite_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    hub_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(invite.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/hub/$HUB_ID/invite/$INVITE_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/hub/{hub_id}/invite/{invite_id}',
    httpMethod: 'put',
    summary: 'Update a Hub Invite',
    description: 'Update an existing invite in a hub',
    stainlessPath: '(resource) hub.invite > (method) update',
    qualified: 'client.hub.invite.update',
    params: [
      'hub_id: string;',
      'invite_id: string;',
      "projectRole?: 'member' | 'admin' | 'owner';",
      'tags?: string[];',
    ],
    response:
      '{ data?: { createdAt?: string; email?: string; invitedBy?: summary_user; projectRole?: string; publicId?: string; tags?: tag[]; }; metadata?: object; }',
    markdown:
      "## update\n\n`client.hub.invite.update(hub_id: string, invite_id: string, projectRole?: 'member' | 'admin' | 'owner', tags?: string[]): { data?: invited_member; metadata?: object; }`\n\n**put** `/v1/hub/{hub_id}/invite/{invite_id}`\n\nUpdate an existing invite in a hub\n\n### Parameters\n\n- `hub_id: string`\n\n- `invite_id: string`\n\n- `projectRole?: 'member' | 'admin' | 'owner'`\n\n- `tags?: string[]`\n\n### Returns\n\n- `{ data?: { createdAt?: string; email?: string; invitedBy?: summary_user; projectRole?: string; publicId?: string; tags?: tag[]; }; metadata?: object; }`\n\n  - `data?: { createdAt?: string; email?: string; invitedBy?: { email?: string; firebaseUserId?: string; name?: string; profilePicture?: string; publicId?: string; }; projectRole?: string; publicId?: string; tags?: { documentTableId?: string; projectPublicId?: string; publicId?: string; referencePublicId?: string; value?: object; }[]; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst invite = await client.hub.invite.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { hub_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(invite);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.invite.update',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst invite = await client.hub.invite.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  hub_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(invite.data);",
      },
      python: {
        method: 'hub.invite.update',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\ninvite = client.hub.invite.update(\n    invite_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    hub_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(invite.data)',
      },
      http: {
        example:
          "curl https://api.morta.io/v1/hub/$HUB_ID/invite/$INVITE_ID \\\n    -X PUT \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $MORTA_API_KEY\" \\\n    -d '{}'",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/hub/{hub_id}/secrets',
    httpMethod: 'get',
    summary: 'Get Hub Secrets',
    description: 'Retrieve all secrets for a specified hub',
    stainlessPath: '(resource) hub.secrets > (method) list',
    qualified: 'client.hub.secrets.list',
    params: ['hub_id: string;'],
    response:
      '{ data?: { createdAt?: string; name?: string; publicId?: string; updatedAt?: string; value?: string; }[]; metadata?: object; }',
    markdown:
      "## list\n\n`client.hub.secrets.list(hub_id: string): { data?: hub_secret[]; metadata?: object; }`\n\n**get** `/v1/hub/{hub_id}/secrets`\n\nRetrieve all secrets for a specified hub\n\n### Parameters\n\n- `hub_id: string`\n\n### Returns\n\n- `{ data?: { createdAt?: string; name?: string; publicId?: string; updatedAt?: string; value?: string; }[]; metadata?: object; }`\n\n  - `data?: { createdAt?: string; name?: string; publicId?: string; updatedAt?: string; value?: string; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst secrets = await client.hub.secrets.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(secrets);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.secrets.list',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst secrets = await client.hub.secrets.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(secrets.data);",
      },
      python: {
        method: 'hub.secrets.list',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nsecrets = client.hub.secrets.list(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(secrets.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/hub/$HUB_ID/secrets \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/hub/{hub_id}/secrets',
    httpMethod: 'post',
    summary: 'Create a New Hub Secret',
    description: 'Create a new secret for a specified hub',
    stainlessPath: '(resource) hub.secrets > (method) create',
    qualified: 'client.hub.secrets.create',
    params: ['hub_id: string;', 'name: string;', 'value: string;'],
    response:
      '{ data?: { createdAt?: string; name?: string; publicId?: string; updatedAt?: string; value?: string; }; metadata?: object; }',
    markdown:
      "## create\n\n`client.hub.secrets.create(hub_id: string, name: string, value: string): { data?: hub_secret; metadata?: object; }`\n\n**post** `/v1/hub/{hub_id}/secrets`\n\nCreate a new secret for a specified hub\n\n### Parameters\n\n- `hub_id: string`\n\n- `name: string`\n\n- `value: string`\n\n### Returns\n\n- `{ data?: { createdAt?: string; name?: string; publicId?: string; updatedAt?: string; value?: string; }; metadata?: object; }`\n\n  - `data?: { createdAt?: string; name?: string; publicId?: string; updatedAt?: string; value?: string; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst secret = await client.hub.secrets.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { name: 'name', value: 'value' });\n\nconsole.log(secret);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.secrets.create',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst secret = await client.hub.secrets.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  name: 'name',\n  value: 'value',\n});\n\nconsole.log(secret.data);",
      },
      python: {
        method: 'hub.secrets.create',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nsecret = client.hub.secrets.create(\n    hub_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    name="name",\n    value="value",\n)\nprint(secret.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/hub/$HUB_ID/secrets \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "name": "name",\n          "value": "value"\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/hub/{hub_id}/secrets/{secret_id}',
    httpMethod: 'delete',
    summary: 'Delete a Hub Secret',
    description: 'Delete a specific secret from a hub',
    stainlessPath: '(resource) hub.secrets > (method) delete',
    qualified: 'client.hub.secrets.delete',
    params: ['hub_id: string;', 'secret_id: string;'],
    response: '{ data?: string; metadata?: object; }',
    markdown:
      "## delete\n\n`client.hub.secrets.delete(hub_id: string, secret_id: string): { data?: string; metadata?: object; }`\n\n**delete** `/v1/hub/{hub_id}/secrets/{secret_id}`\n\nDelete a specific secret from a hub\n\n### Parameters\n\n- `hub_id: string`\n\n- `secret_id: string`\n\n### Returns\n\n- `{ data?: string; metadata?: object; }`\n\n  - `data?: string`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst secret = await client.hub.secrets.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { hub_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(secret);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.secrets.delete',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst secret = await client.hub.secrets.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  hub_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(secret.data);",
      },
      python: {
        method: 'hub.secrets.delete',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nsecret = client.hub.secrets.delete(\n    secret_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    hub_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(secret.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/hub/$HUB_ID/secrets/$SECRET_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/hub/{hub_id}/secrets/{secret_id}',
    httpMethod: 'put',
    summary: 'Update a Hub Secret',
    description: 'Update a specific secret in a hub',
    stainlessPath: '(resource) hub.secrets > (method) update',
    qualified: 'client.hub.secrets.update',
    params: ['hub_id: string;', 'secret_id: string;', 'name: string;', 'value: string;'],
    response:
      '{ data?: { createdAt?: string; name?: string; publicId?: string; updatedAt?: string; value?: string; }; metadata?: object; }',
    markdown:
      "## update\n\n`client.hub.secrets.update(hub_id: string, secret_id: string, name: string, value: string): { data?: hub_secret; metadata?: object; }`\n\n**put** `/v1/hub/{hub_id}/secrets/{secret_id}`\n\nUpdate a specific secret in a hub\n\n### Parameters\n\n- `hub_id: string`\n\n- `secret_id: string`\n\n- `name: string`\n\n- `value: string`\n\n### Returns\n\n- `{ data?: { createdAt?: string; name?: string; publicId?: string; updatedAt?: string; value?: string; }; metadata?: object; }`\n\n  - `data?: { createdAt?: string; name?: string; publicId?: string; updatedAt?: string; value?: string; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst secret = await client.hub.secrets.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  hub_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  name: 'name',\n  value: 'value',\n});\n\nconsole.log(secret);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hub.secrets.update',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst secret = await client.hub.secrets.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  hub_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  name: 'name',\n  value: 'value',\n});\n\nconsole.log(secret.data);",
      },
      python: {
        method: 'hub.secrets.update',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nsecret = client.hub.secrets.update(\n    secret_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    hub_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    name="name",\n    value="value",\n)\nprint(secret.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/hub/$HUB_ID/secrets/$SECRET_ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "name": "name",\n          "value": "value"\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/table/{table_id}',
    httpMethod: 'get',
    summary: 'Get Table and Its Rows',
    description: 'Retrieve a table and its rows based on provided parameters',
    stainlessPath: '(resource) table > (method) retrieve',
    qualified: 'client.table.retrieve',
    params: [
      'table_id: string;',
      'columns?: string[];',
      'distinct_columns?: string[];',
      'filter?: string;',
      'ignore_cached_options?: boolean;',
      'last_created_at?: string;',
      'last_updated_at?: string;',
      'next_page_token?: string;',
      'page?: number;',
      'size?: number;',
      'sort?: string;',
    ],
    response: '{ data?: object; metadata?: { page?: number; size?: number; total?: number; }; }',
    markdown:
      "## retrieve\n\n`client.table.retrieve(table_id: string, columns?: string[], distinct_columns?: string[], filter?: string, ignore_cached_options?: boolean, last_created_at?: string, last_updated_at?: string, next_page_token?: string, page?: number, size?: number, sort?: string): { data?: table; metadata?: object; }`\n\n**get** `/v1/table/{table_id}`\n\nRetrieve a table and its rows based on provided parameters\n\n### Parameters\n\n- `table_id: string`\n\n- `columns?: string[]`\n  Specific columns to include in the response\n\n- `distinct_columns?: string[]`\n  Columns to apply distinct filtering\n\n- `filter?: string`\n  Filter criteria for the table rows\n\n- `ignore_cached_options?: boolean`\n  Flag to indicate whether to ignore cached options in the response.\n\n- `last_created_at?: string`\n  Filter for rows created after this date\n\n- `last_updated_at?: string`\n  Filter for rows updated after this date\n\n- `next_page_token?: string`\n  Token for fetching the next page of results\n\n- `page?: number`\n  Page number for pagination\n\n- `size?: number`\n  Number of items per page for pagination\n\n- `sort?: string`\n  Sorting criteria for the table rows\n\n### Returns\n\n- `{ data?: { allowComments?: boolean; autodeskBim360ModelProperties?: object; columns?: table_column[]; createdAt?: string; defaultViewId?: string; deletedAt?: string; failedSyncAttempts?: number; isAconexSynced?: boolean; isAconexWorkflowsSynced?: boolean; isAsiteDocumentsSynced?: boolean; isAsiteFormsSynced?: boolean; isAutodeskBim360ChecklistsSynced?: boolean; isAutodeskBim360IssuesSynced?: boolean; isAutodeskBim360ModelsSynced?: boolean; isAutodeskBim360Synced?: boolean; isAutodeskBim360UsersSynced?: boolean; isDeleted?: boolean; isMortaColumnsSynced?: boolean; isMortaCommentsSynced?: boolean; isMortaProjectsSynced?: boolean; isMortaResourcesSynced?: boolean; isMortaSynced?: boolean; isMortaUsersSynced?: boolean; isProcoreSynced?: boolean; isReferenceTable?: boolean; isReviztoIssuesSynced?: boolean; isSynced?: boolean; isSyncing?: boolean; isViewpointRfisSynced?: boolean; isViewpointSynced?: boolean; joins?: table_join[]; keepColoursInSync?: boolean; keepValidationsInSync?: boolean; lastSync?: string; lockedFromDuplication?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; projects?: project[]; publicId?: string; syncHourlyFrequency?: number; syncUser?: object; type?: string; updatedAt?: string; }; metadata?: { page?: number; size?: number; total?: number; }; }`\n\n  - `data?: { allowComments?: boolean; autodeskBim360ModelProperties?: object; columns?: { aggregate?: number; alterOptions?: table_column_alter | object; dateFormat?: string; decimalPlaces?: number; description?: object | draftjs; displayLink?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: select_options_lookup; name?: string; publicId?: string; script?: string; scriptEnabled?: boolean; thousandSeparator?: boolean; width?: number; }[]; createdAt?: string; defaultViewId?: string; deletedAt?: string; failedSyncAttempts?: number; isAconexSynced?: boolean; isAconexWorkflowsSynced?: boolean; isAsiteDocumentsSynced?: boolean; isAsiteFormsSynced?: boolean; isAutodeskBim360ChecklistsSynced?: boolean; isAutodeskBim360IssuesSynced?: boolean; isAutodeskBim360ModelsSynced?: boolean; isAutodeskBim360Synced?: boolean; isAutodeskBim360UsersSynced?: boolean; isDeleted?: boolean; isMortaColumnsSynced?: boolean; isMortaCommentsSynced?: boolean; isMortaProjectsSynced?: boolean; isMortaResourcesSynced?: boolean; isMortaSynced?: boolean; isMortaUsersSynced?: boolean; isProcoreSynced?: boolean; isReferenceTable?: boolean; isReviztoIssuesSynced?: boolean; isSynced?: boolean; isSyncing?: boolean; isViewpointRfisSynced?: boolean; isViewpointSynced?: boolean; joins?: { dataColumns?: table_join_imported_columns[]; isOneToMany?: boolean; joinColumns?: table_column_join[]; joinTableId?: string; joinViewId?: string; publicId?: string; }[]; keepColoursInSync?: boolean; keepValidationsInSync?: boolean; lastSync?: string; lockedFromDuplication?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; projects?: { name?: string; publicId?: string; }[]; publicId?: string; syncHourlyFrequency?: number; syncUser?: { name?: string; publicId?: string; }; type?: string; updatedAt?: string; }`\n  - `metadata?: { page?: number; size?: number; total?: number; }`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst table = await client.table.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(table);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.retrieve',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst table = await client.table.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(table.data);",
      },
      python: {
        method: 'table.retrieve',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\ntable = client.table.retrieve(\n    table_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(table.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/$TABLE_ID \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/table/{table_id}',
    httpMethod: 'put',
    summary: 'Update existing table',
    description: 'Update the properties of an existing table.',
    stainlessPath: '(resource) table > (method) update',
    qualified: 'client.table.update',
    params: [
      'table_id: string;',
      'allowComments?: boolean;',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
      'isReferenceTable?: boolean;',
      'joins?: { dataColumns?: { sourceColumnId?: string; targetColumnId?: string; }[]; isOneToMany?: boolean; joinColumns?: { sourceColumnId?: string; targetColumnId?: string; }[]; joinTableName?: string; joinViewId?: string; joinViewName?: string; publicId?: string; }[];',
      'keepColoursInSync?: boolean;',
      'keepValidationsInSync?: boolean;',
      'logo?: string;',
      'name?: string;',
      'syncHourlyFrequency?: 0 | 24;',
      'type?: string;',
    ],
    response: '{ data?: object; metadata?: object; }',
    markdown:
      "## update\n\n`client.table.update(table_id: string, allowComments?: boolean, context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }, isReferenceTable?: boolean, joins?: { dataColumns?: object[]; isOneToMany?: boolean; joinColumns?: object[]; joinTableName?: string; joinViewId?: string; joinViewName?: string; publicId?: string; }[], keepColoursInSync?: boolean, keepValidationsInSync?: boolean, logo?: string, name?: string, syncHourlyFrequency?: 0 | 24, type?: string): { data?: table; metadata?: object; }`\n\n**put** `/v1/table/{table_id}`\n\nUpdate the properties of an existing table.\n\n### Parameters\n\n- `table_id: string`\n\n- `allowComments?: boolean`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n- `isReferenceTable?: boolean`\n\n- `joins?: { dataColumns?: { sourceColumnId?: string; targetColumnId?: string; }[]; isOneToMany?: boolean; joinColumns?: { sourceColumnId?: string; targetColumnId?: string; }[]; joinTableName?: string; joinViewId?: string; joinViewName?: string; publicId?: string; }[]`\n\n- `keepColoursInSync?: boolean`\n\n- `keepValidationsInSync?: boolean`\n\n- `logo?: string`\n\n- `name?: string`\n\n- `syncHourlyFrequency?: 0 | 24`\n\n- `type?: string`\n\n### Returns\n\n- `{ data?: { allowComments?: boolean; autodeskBim360ModelProperties?: object; columns?: table_column[]; createdAt?: string; defaultViewId?: string; deletedAt?: string; failedSyncAttempts?: number; isAconexSynced?: boolean; isAconexWorkflowsSynced?: boolean; isAsiteDocumentsSynced?: boolean; isAsiteFormsSynced?: boolean; isAutodeskBim360ChecklistsSynced?: boolean; isAutodeskBim360IssuesSynced?: boolean; isAutodeskBim360ModelsSynced?: boolean; isAutodeskBim360Synced?: boolean; isAutodeskBim360UsersSynced?: boolean; isDeleted?: boolean; isMortaColumnsSynced?: boolean; isMortaCommentsSynced?: boolean; isMortaProjectsSynced?: boolean; isMortaResourcesSynced?: boolean; isMortaSynced?: boolean; isMortaUsersSynced?: boolean; isProcoreSynced?: boolean; isReferenceTable?: boolean; isReviztoIssuesSynced?: boolean; isSynced?: boolean; isSyncing?: boolean; isViewpointRfisSynced?: boolean; isViewpointSynced?: boolean; joins?: table_join[]; keepColoursInSync?: boolean; keepValidationsInSync?: boolean; lastSync?: string; lockedFromDuplication?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; projects?: project[]; publicId?: string; syncHourlyFrequency?: number; syncUser?: object; type?: string; updatedAt?: string; }; metadata?: object; }`\n\n  - `data?: { allowComments?: boolean; autodeskBim360ModelProperties?: object; columns?: { aggregate?: number; alterOptions?: table_column_alter | object; dateFormat?: string; decimalPlaces?: number; description?: object | draftjs; displayLink?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: select_options_lookup; name?: string; publicId?: string; script?: string; scriptEnabled?: boolean; thousandSeparator?: boolean; width?: number; }[]; createdAt?: string; defaultViewId?: string; deletedAt?: string; failedSyncAttempts?: number; isAconexSynced?: boolean; isAconexWorkflowsSynced?: boolean; isAsiteDocumentsSynced?: boolean; isAsiteFormsSynced?: boolean; isAutodeskBim360ChecklistsSynced?: boolean; isAutodeskBim360IssuesSynced?: boolean; isAutodeskBim360ModelsSynced?: boolean; isAutodeskBim360Synced?: boolean; isAutodeskBim360UsersSynced?: boolean; isDeleted?: boolean; isMortaColumnsSynced?: boolean; isMortaCommentsSynced?: boolean; isMortaProjectsSynced?: boolean; isMortaResourcesSynced?: boolean; isMortaSynced?: boolean; isMortaUsersSynced?: boolean; isProcoreSynced?: boolean; isReferenceTable?: boolean; isReviztoIssuesSynced?: boolean; isSynced?: boolean; isSyncing?: boolean; isViewpointRfisSynced?: boolean; isViewpointSynced?: boolean; joins?: { dataColumns?: table_join_imported_columns[]; isOneToMany?: boolean; joinColumns?: table_column_join[]; joinTableId?: string; joinViewId?: string; publicId?: string; }[]; keepColoursInSync?: boolean; keepValidationsInSync?: boolean; lastSync?: string; lockedFromDuplication?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; projects?: { name?: string; publicId?: string; }[]; publicId?: string; syncHourlyFrequency?: number; syncUser?: { name?: string; publicId?: string; }; type?: string; updatedAt?: string; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst table = await client.table.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(table);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.update',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst table = await client.table.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(table.data);",
      },
      python: {
        method: 'table.update',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\ntable = client.table.update(\n    table_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(table.data)',
      },
      http: {
        example:
          "curl https://api.morta.io/v1/table/$TABLE_ID \\\n    -X PUT \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $MORTA_API_KEY\" \\\n    -d '{}'",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/table/{table_id}',
    httpMethod: 'delete',
    summary: 'Delete a table',
    description: 'Delete a specified table by its UUID.',
    stainlessPath: '(resource) table > (method) delete',
    qualified: 'client.table.delete',
    params: ['table_id: string;'],
    response: '{ data?: string; metadata?: object; }',
    markdown:
      "## delete\n\n`client.table.delete(table_id: string): { data?: string; metadata?: object; }`\n\n**delete** `/v1/table/{table_id}`\n\nDelete a specified table by its UUID.\n\n### Parameters\n\n- `table_id: string`\n\n### Returns\n\n- `{ data?: string; metadata?: object; }`\n\n  - `data?: string`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst table = await client.table.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(table);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.delete',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst table = await client.table.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(table.data);",
      },
      python: {
        method: 'table.delete',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\ntable = client.table.delete(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(table.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/$TABLE_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/table',
    httpMethod: 'post',
    summary: 'Create new document table',
    description: 'Create a new document table within a hub.',
    stainlessPath: '(resource) table > (method) create',
    qualified: 'client.table.create',
    params: [
      "columns: { aggregate?: number; alterOptions?: { dateConversionFormat?: 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'ISO8601' | 'DD-Mon-YY'; runScriptOnAllCells?: boolean; } | object; dateFormat?: string; decimalPlaces?: number; description?: object | { content: object; }; displayLink?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: { autopopulate?: boolean; manualOptions?: string[]; tableOptions?: object; }; name?: string; publicId?: string; script?: string; scriptEnabled?: boolean; thousandSeparator?: boolean; width?: number; }[];",
      'name: string;',
      'projectId: string;',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
      'joins?: { dataColumns?: { sourceColumnId?: string; targetColumnId?: string; }[]; isOneToMany?: boolean; joinColumns?: { sourceColumnId?: string; targetColumnId?: string; }[]; joinTableName?: string; joinViewId?: string; joinViewName?: string; }[];',
      'type?: string;',
    ],
    response: '{ data?: object; metadata?: object; }',
    markdown:
      "## create\n\n`client.table.create(columns: { aggregate?: number; alterOptions?: table_column_alter | object; dateFormat?: string; decimalPlaces?: number; description?: object | draftjs; displayLink?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: select_options_lookup; name?: string; publicId?: string; script?: string; scriptEnabled?: boolean; thousandSeparator?: boolean; width?: number; }[], name: string, projectId: string, context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }, joins?: { dataColumns?: object[]; isOneToMany?: boolean; joinColumns?: object[]; joinTableName?: string; joinViewId?: string; joinViewName?: string; }[], type?: string): { data?: table; metadata?: object; }`\n\n**post** `/v1/table`\n\nCreate a new document table within a hub.\n\n### Parameters\n\n- `columns: { aggregate?: number; alterOptions?: { dateConversionFormat?: 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'ISO8601' | 'DD-Mon-YY'; runScriptOnAllCells?: boolean; } | object; dateFormat?: string; decimalPlaces?: number; description?: object | { content: object; }; displayLink?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: { autopopulate?: boolean; manualOptions?: string[]; tableOptions?: object; }; name?: string; publicId?: string; script?: string; scriptEnabled?: boolean; thousandSeparator?: boolean; width?: number; }[]`\n\n- `name: string`\n\n- `projectId: string`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n- `joins?: { dataColumns?: { sourceColumnId?: string; targetColumnId?: string; }[]; isOneToMany?: boolean; joinColumns?: { sourceColumnId?: string; targetColumnId?: string; }[]; joinTableName?: string; joinViewId?: string; joinViewName?: string; }[]`\n\n- `type?: string`\n\n### Returns\n\n- `{ data?: { allowComments?: boolean; autodeskBim360ModelProperties?: object; columns?: table_column[]; createdAt?: string; defaultViewId?: string; deletedAt?: string; failedSyncAttempts?: number; isAconexSynced?: boolean; isAconexWorkflowsSynced?: boolean; isAsiteDocumentsSynced?: boolean; isAsiteFormsSynced?: boolean; isAutodeskBim360ChecklistsSynced?: boolean; isAutodeskBim360IssuesSynced?: boolean; isAutodeskBim360ModelsSynced?: boolean; isAutodeskBim360Synced?: boolean; isAutodeskBim360UsersSynced?: boolean; isDeleted?: boolean; isMortaColumnsSynced?: boolean; isMortaCommentsSynced?: boolean; isMortaProjectsSynced?: boolean; isMortaResourcesSynced?: boolean; isMortaSynced?: boolean; isMortaUsersSynced?: boolean; isProcoreSynced?: boolean; isReferenceTable?: boolean; isReviztoIssuesSynced?: boolean; isSynced?: boolean; isSyncing?: boolean; isViewpointRfisSynced?: boolean; isViewpointSynced?: boolean; joins?: table_join[]; keepColoursInSync?: boolean; keepValidationsInSync?: boolean; lastSync?: string; lockedFromDuplication?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; projects?: project[]; publicId?: string; syncHourlyFrequency?: number; syncUser?: object; type?: string; updatedAt?: string; }; metadata?: object; }`\n\n  - `data?: { allowComments?: boolean; autodeskBim360ModelProperties?: object; columns?: { aggregate?: number; alterOptions?: table_column_alter | object; dateFormat?: string; decimalPlaces?: number; description?: object | draftjs; displayLink?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: select_options_lookup; name?: string; publicId?: string; script?: string; scriptEnabled?: boolean; thousandSeparator?: boolean; width?: number; }[]; createdAt?: string; defaultViewId?: string; deletedAt?: string; failedSyncAttempts?: number; isAconexSynced?: boolean; isAconexWorkflowsSynced?: boolean; isAsiteDocumentsSynced?: boolean; isAsiteFormsSynced?: boolean; isAutodeskBim360ChecklistsSynced?: boolean; isAutodeskBim360IssuesSynced?: boolean; isAutodeskBim360ModelsSynced?: boolean; isAutodeskBim360Synced?: boolean; isAutodeskBim360UsersSynced?: boolean; isDeleted?: boolean; isMortaColumnsSynced?: boolean; isMortaCommentsSynced?: boolean; isMortaProjectsSynced?: boolean; isMortaResourcesSynced?: boolean; isMortaSynced?: boolean; isMortaUsersSynced?: boolean; isProcoreSynced?: boolean; isReferenceTable?: boolean; isReviztoIssuesSynced?: boolean; isSynced?: boolean; isSyncing?: boolean; isViewpointRfisSynced?: boolean; isViewpointSynced?: boolean; joins?: { dataColumns?: table_join_imported_columns[]; isOneToMany?: boolean; joinColumns?: table_column_join[]; joinTableId?: string; joinViewId?: string; publicId?: string; }[]; keepColoursInSync?: boolean; keepValidationsInSync?: boolean; lastSync?: string; lockedFromDuplication?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; projects?: { name?: string; publicId?: string; }[]; publicId?: string; syncHourlyFrequency?: number; syncUser?: { name?: string; publicId?: string; }; type?: string; updatedAt?: string; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst table = await client.table.create({\n  columns: [{}],\n  name: 'name',\n  projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(table);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.create',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst table = await client.table.create({\n  columns: [{}],\n  name: 'name',\n  projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(table.data);",
      },
      python: {
        method: 'table.create',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\ntable = client.table.create(\n    columns=[{}],\n    name="name",\n    project_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(table.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "columns": [\n            {}\n          ],\n          "name": "name",\n          "projectId": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n        }\'',
      },
    },
  },
  {
    name: 'restore',
    endpoint: '/v1/table/{table_id}/restore',
    httpMethod: 'put',
    summary: 'Restore a deleted table',
    description: 'Restore a previously deleted table using its UUID.',
    stainlessPath: '(resource) table > (method) restore',
    qualified: 'client.table.restore',
    params: ['table_id: string;'],
    response: '{ data?: object; metadata?: object; }',
    markdown:
      "## restore\n\n`client.table.restore(table_id: string): { data?: table; metadata?: object; }`\n\n**put** `/v1/table/{table_id}/restore`\n\nRestore a previously deleted table using its UUID.\n\n### Parameters\n\n- `table_id: string`\n\n### Returns\n\n- `{ data?: { allowComments?: boolean; autodeskBim360ModelProperties?: object; columns?: table_column[]; createdAt?: string; defaultViewId?: string; deletedAt?: string; failedSyncAttempts?: number; isAconexSynced?: boolean; isAconexWorkflowsSynced?: boolean; isAsiteDocumentsSynced?: boolean; isAsiteFormsSynced?: boolean; isAutodeskBim360ChecklistsSynced?: boolean; isAutodeskBim360IssuesSynced?: boolean; isAutodeskBim360ModelsSynced?: boolean; isAutodeskBim360Synced?: boolean; isAutodeskBim360UsersSynced?: boolean; isDeleted?: boolean; isMortaColumnsSynced?: boolean; isMortaCommentsSynced?: boolean; isMortaProjectsSynced?: boolean; isMortaResourcesSynced?: boolean; isMortaSynced?: boolean; isMortaUsersSynced?: boolean; isProcoreSynced?: boolean; isReferenceTable?: boolean; isReviztoIssuesSynced?: boolean; isSynced?: boolean; isSyncing?: boolean; isViewpointRfisSynced?: boolean; isViewpointSynced?: boolean; joins?: table_join[]; keepColoursInSync?: boolean; keepValidationsInSync?: boolean; lastSync?: string; lockedFromDuplication?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; projects?: project[]; publicId?: string; syncHourlyFrequency?: number; syncUser?: object; type?: string; updatedAt?: string; }; metadata?: object; }`\n\n  - `data?: { allowComments?: boolean; autodeskBim360ModelProperties?: object; columns?: { aggregate?: number; alterOptions?: table_column_alter | object; dateFormat?: string; decimalPlaces?: number; description?: object | draftjs; displayLink?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: select_options_lookup; name?: string; publicId?: string; script?: string; scriptEnabled?: boolean; thousandSeparator?: boolean; width?: number; }[]; createdAt?: string; defaultViewId?: string; deletedAt?: string; failedSyncAttempts?: number; isAconexSynced?: boolean; isAconexWorkflowsSynced?: boolean; isAsiteDocumentsSynced?: boolean; isAsiteFormsSynced?: boolean; isAutodeskBim360ChecklistsSynced?: boolean; isAutodeskBim360IssuesSynced?: boolean; isAutodeskBim360ModelsSynced?: boolean; isAutodeskBim360Synced?: boolean; isAutodeskBim360UsersSynced?: boolean; isDeleted?: boolean; isMortaColumnsSynced?: boolean; isMortaCommentsSynced?: boolean; isMortaProjectsSynced?: boolean; isMortaResourcesSynced?: boolean; isMortaSynced?: boolean; isMortaUsersSynced?: boolean; isProcoreSynced?: boolean; isReferenceTable?: boolean; isReviztoIssuesSynced?: boolean; isSynced?: boolean; isSyncing?: boolean; isViewpointRfisSynced?: boolean; isViewpointSynced?: boolean; joins?: { dataColumns?: table_join_imported_columns[]; isOneToMany?: boolean; joinColumns?: table_column_join[]; joinTableId?: string; joinViewId?: string; publicId?: string; }[]; keepColoursInSync?: boolean; keepValidationsInSync?: boolean; lastSync?: string; lockedFromDuplication?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; projects?: { name?: string; publicId?: string; }[]; publicId?: string; syncHourlyFrequency?: number; syncUser?: { name?: string; publicId?: string; }; type?: string; updatedAt?: string; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.restore('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.restore',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.restore('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'table.restore',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.restore(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/$TABLE_ID/restore \\\n    -X PUT \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'duplicate',
    endpoint: '/v1/table/{table_id}/duplicate',
    httpMethod: 'post',
    summary: 'Duplicate a table',
    description:
      'Create a duplicate of an existing table along with its data, settings, and optionally linked tables.',
    stainlessPath: '(resource) table > (method) duplicate',
    qualified: 'client.table.duplicate',
    params: [
      'table_id: string;',
      'targetProjectId: string;',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
      'duplicateLinkedTables?: boolean;',
      'duplicatePermissions?: boolean;',
    ],
    response: '{ data?: string; metadata?: object; }',
    markdown:
      "## duplicate\n\n`client.table.duplicate(table_id: string, targetProjectId: string, context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }, duplicateLinkedTables?: boolean, duplicatePermissions?: boolean): { data?: string; metadata?: object; }`\n\n**post** `/v1/table/{table_id}/duplicate`\n\nCreate a duplicate of an existing table along with its data, settings, and optionally linked tables.\n\n### Parameters\n\n- `table_id: string`\n\n- `targetProjectId: string`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n- `duplicateLinkedTables?: boolean`\n\n- `duplicatePermissions?: boolean`\n\n### Returns\n\n- `{ data?: string; metadata?: object; }`\n\n  - `data?: string`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.duplicate('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { targetProjectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.duplicate',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.duplicate('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  targetProjectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'table.duplicate',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.duplicate(\n    table_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    target_project_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/$TABLE_ID/duplicate \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "targetProjectId": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n        }\'',
      },
    },
  },
  {
    name: 'check_usage',
    endpoint: '/v1/table/{table_id}/used',
    httpMethod: 'get',
    summary: 'Check Documents Table is Used In',
    description:
      'Check and return a list of documents, table joins, and selects where the specified table is used.',
    stainlessPath: '(resource) table > (method) check_usage',
    qualified: 'client.table.checkUsage',
    params: ['table_id: string;'],
    response: '{ data?: { link?: string; name?: string; type?: string; }[]; metadata?: object; }',
    markdown:
      "## check_usage\n\n`client.table.checkUsage(table_id: string): { data?: object[]; metadata?: object; }`\n\n**get** `/v1/table/{table_id}/used`\n\nCheck and return a list of documents, table joins, and selects where the specified table is used.\n\n### Parameters\n\n- `table_id: string`\n\n### Returns\n\n- `{ data?: { link?: string; name?: string; type?: string; }[]; metadata?: object; }`\n\n  - `data?: { link?: string; name?: string; type?: string; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.checkUsage('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.checkUsage',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.checkUsage('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'table.check_usage',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.check_usage(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/$TABLE_ID/used \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'list_columns',
    endpoint: '/v1/table/{table_id}/columns',
    httpMethod: 'get',
    summary: 'Get Table Columns',
    description: 'Retrieve all active columns of a specific table.',
    stainlessPath: '(resource) table > (method) list_columns',
    qualified: 'client.table.listColumns',
    params: ['table_id: string;'],
    response:
      '{ data?: { aggregate?: number; alterOptions?: table_column_alter | object; dateFormat?: string; decimalPlaces?: number; description?: object | draftjs; displayLink?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: select_options_lookup; name?: string; publicId?: string; script?: string; scriptEnabled?: boolean; thousandSeparator?: boolean; width?: number; }[]; metadata?: object; }',
    markdown:
      "## list_columns\n\n`client.table.listColumns(table_id: string): { data?: table_column[]; metadata?: object; }`\n\n**get** `/v1/table/{table_id}/columns`\n\nRetrieve all active columns of a specific table.\n\n### Parameters\n\n- `table_id: string`\n\n### Returns\n\n- `{ data?: { aggregate?: number; alterOptions?: table_column_alter | object; dateFormat?: string; decimalPlaces?: number; description?: object | draftjs; displayLink?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: select_options_lookup; name?: string; publicId?: string; script?: string; scriptEnabled?: boolean; thousandSeparator?: boolean; width?: number; }[]; metadata?: object; }`\n\n  - `data?: { aggregate?: number; alterOptions?: { dateConversionFormat?: 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'ISO8601' | 'DD-Mon-YY'; runScriptOnAllCells?: boolean; } | object; dateFormat?: string; decimalPlaces?: number; description?: object | { content: object; }; displayLink?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: { autopopulate?: boolean; manualOptions?: string[]; tableOptions?: object; }; name?: string; publicId?: string; script?: string; scriptEnabled?: boolean; thousandSeparator?: boolean; width?: number; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.listColumns('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.listColumns',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.listColumns('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'table.list_columns',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.list_columns(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/$TABLE_ID/columns \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'get_statistics',
    endpoint: '/v1/table/{table_id}/stats',
    httpMethod: 'get',
    summary: 'Get Table Column Statistics',
    description: 'Retrieve statistics for table columns based on specified parameters.',
    stainlessPath: '(resource) table > (method) get_statistics',
    qualified: 'client.table.getStatistics',
    params: ['table_id: string;', 'aggregation?: object;', 'filter?: string;'],
    response: '{ data?: { aggregation?: object; name?: string; publicId?: string; }[]; metadata?: object; }',
    markdown:
      "## get_statistics\n\n`client.table.getStatistics(table_id: string, aggregation?: object, filter?: string): { data?: table_column_with_aggregation[]; metadata?: object; }`\n\n**get** `/v1/table/{table_id}/stats`\n\nRetrieve statistics for table columns based on specified parameters.\n\n### Parameters\n\n- `table_id: string`\n\n- `aggregation?: object`\n  Aggregation functions to apply on columns\n\n- `filter?: string`\n  Filter criteria for the columns\n\n### Returns\n\n- `{ data?: { aggregation?: object; name?: string; publicId?: string; }[]; metadata?: object; }`\n\n  - `data?: { aggregation?: { name?: string; value?: number; }; name?: string; publicId?: string; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.getStatistics('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.getStatistics',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.getStatistics('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'table.get_statistics',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.get_statistics(\n    table_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/$TABLE_ID/stats \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'download_csv',
    endpoint: '/v1/table/{table_id}/csv',
    httpMethod: 'get',
    summary: 'Download Table Data as CSV',
    description: 'Download the data of a specified table as a CSV file.',
    stainlessPath: '(resource) table > (method) download_csv',
    qualified: 'client.table.downloadCsv',
    params: ['table_id: string;', 'filter?: string;', 'sort?: string;'],
    response: 'string',
    markdown:
      "## download_csv\n\n`client.table.downloadCsv(table_id: string, filter?: string, sort?: string): string`\n\n**get** `/v1/table/{table_id}/csv`\n\nDownload the data of a specified table as a CSV file.\n\n### Parameters\n\n- `table_id: string`\n\n- `filter?: string`\n  Filter criteria for the table rows\n\n- `sort?: string`\n  Sorting criteria for the table rows\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.downloadCsv('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.downloadCsv',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.downloadCsv('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);",
      },
      python: {
        method: 'table.download_csv',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.download_csv(\n    table_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/$TABLE_ID/csv \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'get_file',
    endpoint: '/v1/table/{table_id}/file',
    httpMethod: 'get',
    summary: 'Get File for Table Cell',
    description: 'Retrieve a file associated with a specific cell in a table.',
    stainlessPath: '(resource) table > (method) get_file',
    qualified: 'client.table.getFile',
    params: ['table_id: string;', 'column_id: string;', 'filename: string;'],
    response: 'string',
    markdown:
      "## get_file\n\n`client.table.getFile(table_id: string, column_id: string, filename: string): string`\n\n**get** `/v1/table/{table_id}/file`\n\nRetrieve a file associated with a specific cell in a table.\n\n### Parameters\n\n- `table_id: string`\n\n- `column_id: string`\n  UUID of the column containing the cell.\n\n- `filename: string`\n  Name of the file to retrieve.\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.getFile('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { column_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', filename: 'filename' });\n\nconsole.log(response);\n\nconst content = await response.blob()\nconsole.log(content)\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.getFile',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.getFile('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  column_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  filename: 'filename',\n});\n\nconsole.log(response);\n\nconst content = await response.blob();\nconsole.log(content);",
      },
      python: {
        method: 'table.get_file',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.get_file(\n    table_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    column_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    filename="filename",\n)\nprint(response)\ncontent = response.read()\nprint(content)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/$TABLE_ID/file \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'delete_rows',
    endpoint: '/v1/table/{table_id}/rows',
    httpMethod: 'delete',
    summary: 'Delete Table Rows',
    description: 'Delete all rows or specific rows from a table.',
    stainlessPath: '(resource) table > (method) delete_rows',
    qualified: 'client.table.deleteRows',
    params: ['table_id: string;'],
    response: '{ data?: string; metadata?: object; }',
    markdown:
      "## delete_rows\n\n`client.table.deleteRows(table_id: string): { data?: string; metadata?: object; }`\n\n**delete** `/v1/table/{table_id}/rows`\n\nDelete all rows or specific rows from a table.\n\n### Parameters\n\n- `table_id: string`\n\n### Returns\n\n- `{ data?: string; metadata?: object; }`\n\n  - `data?: string`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.deleteRows('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.deleteRows',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.deleteRows('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'table.delete_rows',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.delete_rows(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/$TABLE_ID/rows \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'update_cells',
    endpoint: '/v1/table/{table_id}/cells',
    httpMethod: 'put',
    summary: 'Update Table Cells',
    description: 'Update specific cells in a table.',
    stainlessPath: '(resource) table > (method) update_cells',
    qualified: 'client.table.updateCells',
    params: [
      'table_id: string;',
      'cells: { columnName: string; rowId: string; value: object; context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }; }[];',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
    ],
    response: '{ data?: string; metadata?: object; }',
    markdown:
      "## update_cells\n\n`client.table.updateCells(table_id: string, cells: { columnName: string; rowId: string; value: object; context?: object; }[], context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }): { data?: string; metadata?: object; }`\n\n**put** `/v1/table/{table_id}/cells`\n\nUpdate specific cells in a table.\n\n### Parameters\n\n- `table_id: string`\n\n- `cells: { columnName: string; rowId: string; value: object; context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }; }[]`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n### Returns\n\n- `{ data?: string; metadata?: object; }`\n\n  - `data?: string`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.updateCells('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { cells: [{\n  columnName: 'x',\n  rowId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  value: {},\n}] });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.updateCells',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.updateCells('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  cells: [\n    {\n      columnName: 'x',\n      rowId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n      value: {},\n    },\n  ],\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'table.update_cells',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.update_cells(\n    table_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    cells=[{\n        "column_name": "x",\n        "row_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n        "value": {},\n    }],\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/$TABLE_ID/cells \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "cells": [\n            {\n              "columnName": "x",\n              "rowId": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n              "value": {}\n            }\n          ]\n        }\'',
      },
    },
  },
  {
    name: 'create_index',
    endpoint: '/v1/table/{table_id}/indexes',
    httpMethod: 'post',
    summary: 'Create Index on Table Column',
    description: 'Create an index on one or more columns of a table to improve query performance.',
    stainlessPath: '(resource) table > (method) create_index',
    qualified: 'client.table.createIndex',
    params: ['table_id: string;', 'columns: { publicId: string; }[];'],
    response:
      '{ data?: { aggregate?: number; alterOptions?: table_column_alter | object; dateFormat?: string; decimalPlaces?: number; description?: object | draftjs; displayLink?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: select_options_lookup; name?: string; publicId?: string; script?: string; scriptEnabled?: boolean; thousandSeparator?: boolean; width?: number; }[]; metadata?: object; }',
    markdown:
      "## create_index\n\n`client.table.createIndex(table_id: string, columns: { publicId: string; }[]): { data?: table_column[]; metadata?: object; }`\n\n**post** `/v1/table/{table_id}/indexes`\n\nCreate an index on one or more columns of a table to improve query performance.\n\n### Parameters\n\n- `table_id: string`\n\n- `columns: { publicId: string; }[]`\n\n### Returns\n\n- `{ data?: { aggregate?: number; alterOptions?: table_column_alter | object; dateFormat?: string; decimalPlaces?: number; description?: object | draftjs; displayLink?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: select_options_lookup; name?: string; publicId?: string; script?: string; scriptEnabled?: boolean; thousandSeparator?: boolean; width?: number; }[]; metadata?: object; }`\n\n  - `data?: { aggregate?: number; alterOptions?: { dateConversionFormat?: 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'ISO8601' | 'DD-Mon-YY'; runScriptOnAllCells?: boolean; } | object; dateFormat?: string; decimalPlaces?: number; description?: object | { content: object; }; displayLink?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: { autopopulate?: boolean; manualOptions?: string[]; tableOptions?: object; }; name?: string; publicId?: string; script?: string; scriptEnabled?: boolean; thousandSeparator?: boolean; width?: number; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.createIndex('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { columns: [{ publicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' }] });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.createIndex',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.createIndex('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  columns: [{ publicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' }],\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'table.create_index',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.create_index(\n    table_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    columns=[{\n        "public_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n    }],\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/$TABLE_ID/indexes \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "columns": [\n            {\n              "publicId": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n            }\n          ]\n        }\'',
      },
    },
  },
  {
    name: 'truncate',
    endpoint: '/v1/table/{table_id}/truncate',
    httpMethod: 'delete',
    summary: 'Delete All Rows from Table',
    description: 'Deletes all rows from the specified table.',
    stainlessPath: '(resource) table > (method) truncate',
    qualified: 'client.table.truncate',
    params: ['table_id: string;'],
    response: '{ data?: string; metadata?: object; }',
    markdown:
      "## truncate\n\n`client.table.truncate(table_id: string): { data?: string; metadata?: object; }`\n\n**delete** `/v1/table/{table_id}/truncate`\n\nDeletes all rows from the specified table.\n\n### Parameters\n\n- `table_id: string`\n\n### Returns\n\n- `{ data?: string; metadata?: object; }`\n\n  - `data?: string`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.truncate('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.truncate',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.truncate('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'table.truncate',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.truncate(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/$TABLE_ID/truncate \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'stream_rows',
    endpoint: '/v1/table/{table_id}/rows-stream',
    httpMethod: 'get',
    summary: 'Stream all rows for the table',
    description: 'Stream the data of all rows for a specific table.',
    stainlessPath: '(resource) table > (method) stream_rows',
    qualified: 'client.table.streamRows',
    params: ['table_id: string;', 'filter?: string;', 'page?: number;', 'size?: number;', 'sort?: string;'],
    response: 'string',
    markdown:
      "## stream_rows\n\n`client.table.streamRows(table_id: string, filter?: string, page?: number, size?: number, sort?: string): string`\n\n**get** `/v1/table/{table_id}/rows-stream`\n\nStream the data of all rows for a specific table.\n\n### Parameters\n\n- `table_id: string`\n\n- `filter?: string`\n  Filters to apply to the streaming data.\n\n- `page?: number`\n  Page number for pagination\n\n- `size?: number`\n  Number of items per page for pagination\n\n- `sort?: string`\n  Sorting parameters for the streaming data.\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.streamRows('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n\nconst content = await response.blob()\nconsole.log(content)\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.streamRows',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.streamRows('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n\nconst content = await response.blob();\nconsole.log(content);",
      },
      python: {
        method: 'table.stream_rows',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.stream_rows(\n    table_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response)\ncontent = response.read()\nprint(content)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/$TABLE_ID/rows-stream \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'list_joins',
    endpoint: '/v1/table/{table_id}/joins',
    httpMethod: 'get',
    summary: 'Get All Table Joins',
    description: 'Retrieve all joins associated with a table.',
    stainlessPath: '(resource) table > (method) list_joins',
    qualified: 'client.table.listJoins',
    params: ['table_id: string;'],
    response:
      '{ data?: { dataColumns?: table_join_imported_columns[]; isOneToMany?: boolean; joinColumns?: table_column_join[]; joinTableId?: string; joinViewId?: string; publicId?: string; }[]; metadata?: object; }',
    markdown:
      "## list_joins\n\n`client.table.listJoins(table_id: string): { data?: table_join[]; metadata?: object; }`\n\n**get** `/v1/table/{table_id}/joins`\n\nRetrieve all joins associated with a table.\n\n### Parameters\n\n- `table_id: string`\n\n### Returns\n\n- `{ data?: { dataColumns?: table_join_imported_columns[]; isOneToMany?: boolean; joinColumns?: table_column_join[]; joinTableId?: string; joinViewId?: string; publicId?: string; }[]; metadata?: object; }`\n\n  - `data?: { dataColumns?: { sourceColumnId?: string; targetColumnId?: string; }[]; isOneToMany?: boolean; joinColumns?: { sourceColumnId?: string; targetColumnId?: string; }[]; joinTableId?: string; joinViewId?: string; publicId?: string; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.listJoins('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.listJoins',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.listJoins('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'table.list_joins',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.list_joins(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/$TABLE_ID/joins \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'get_duplicated_children',
    endpoint: '/v1/table/{table_id}/duplicated-children',
    httpMethod: 'get',
    summary: 'Get Duplicated Children',
    description: 'Get duplicated children of a table',
    stainlessPath: '(resource) table > (method) get_duplicated_children',
    qualified: 'client.table.getDuplicatedChildren',
    params: ['table_id: string;'],
    response:
      '{ data?: { createdAt?: string; deletedAt?: string; deletedBy?: string; link?: string; name?: string; publicId?: string; user?: string; }[]; metadata?: object; }',
    markdown:
      "## get_duplicated_children\n\n`client.table.getDuplicatedChildren(table_id: string): { data?: object[]; metadata?: object; }`\n\n**get** `/v1/table/{table_id}/duplicated-children`\n\nGet duplicated children of a table\n\n### Parameters\n\n- `table_id: string`\n\n### Returns\n\n- `{ data?: { createdAt?: string; deletedAt?: string; deletedBy?: string; link?: string; name?: string; publicId?: string; user?: string; }[]; metadata?: object; }`\n\n  - `data?: { createdAt?: string; deletedAt?: string; deletedBy?: string; link?: string; name?: string; publicId?: string; user?: string; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.getDuplicatedChildren('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.getDuplicatedChildren',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.getDuplicatedChildren('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'table.get_duplicated_children',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.get_duplicated_children(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/$TABLE_ID/duplicated-children \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'get_csv_backup',
    endpoint: '/v1/table/{table_id}/csv-backup',
    httpMethod: 'get',
    summary: 'Get Table CSV Backup',
    description: 'Get a CSV backup of a table at a specific date',
    stainlessPath: '(resource) table > (method) get_csv_backup',
    qualified: 'client.table.getCsvBackup',
    params: ['table_id: string;', 'date: string;'],
    response: 'string',
    markdown:
      "## get_csv_backup\n\n`client.table.getCsvBackup(table_id: string, date: string): string`\n\n**get** `/v1/table/{table_id}/csv-backup`\n\nGet a CSV backup of a table at a specific date\n\n### Parameters\n\n- `table_id: string`\n\n- `date: string`\n  The date of the backup to retrieve\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.getCsvBackup('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { date: 'date' });\n\nconsole.log(response);\n\nconst content = await response.blob()\nconsole.log(content)\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.getCsvBackup',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.getCsvBackup('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  date: 'date',\n});\n\nconsole.log(response);\n\nconst content = await response.blob();\nconsole.log(content);",
      },
      python: {
        method: 'table.get_csv_backup',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.get_csv_backup(\n    table_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    date="date",\n)\nprint(response)\ncontent = response.read()\nprint(content)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/$TABLE_ID/csv-backup \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/table/{table_id}/column',
    httpMethod: 'post',
    summary: 'Create Table Column',
    description: 'Add a new column to an existing table.',
    stainlessPath: '(resource) table.column > (method) create',
    qualified: 'client.table.column.create',
    params: [
      'table_id: string;',
      'aggregate?: number;',
      "alterOptions?: { dateConversionFormat?: 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'ISO8601' | 'DD-Mon-YY'; runScriptOnAllCells?: boolean; } | object;",
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
      'dateFormat?: string;',
      'decimalPlaces?: number;',
      'description?: object | { content: { blocks: { data: object; depth: number; entityRanges: object[]; inlineStyleRanges: object[]; key: string; text: string; type: string; }[]; entityMap: object; }; };',
      'displayLink?: boolean;',
      'exportWidth?: number;',
      'formula?: string;',
      'formulaEnabled?: boolean;',
      'headerBackgroundColor?: string;',
      'headerTextColor?: string;',
      'isIndexed?: boolean;',
      'isJoined?: boolean;',
      'isSynced?: boolean;',
      'kind?: string;',
      'kindOptions?: { autopopulate?: boolean; manualOptions?: string[]; tableOptions?: { columnId?: string; dependencies?: { columnId: string; columnJoinId?: string; }[]; liveValues?: boolean; tableId?: string; viewId?: string; }; };',
      'name?: string;',
      'publicId?: string;',
      'script?: string;',
      'scriptEnabled?: boolean;',
      'thousandSeparator?: boolean;',
      'width?: number;',
    ],
    response:
      '{ data?: { aggregate?: number; alterOptions?: table_column_alter | object; dateFormat?: string; decimalPlaces?: number; description?: object | draftjs; displayLink?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: select_options_lookup; name?: string; publicId?: string; script?: string; scriptEnabled?: boolean; thousandSeparator?: boolean; width?: number; }; metadata?: object; }',
    markdown:
      "## create\n\n`client.table.column.create(table_id: string, aggregate?: number, alterOptions?: { dateConversionFormat?: 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'ISO8601' | 'DD-Mon-YY'; runScriptOnAllCells?: boolean; } | object, context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }, dateFormat?: string, decimalPlaces?: number, description?: object | { content: object; }, displayLink?: boolean, exportWidth?: number, formula?: string, formulaEnabled?: boolean, headerBackgroundColor?: string, headerTextColor?: string, isIndexed?: boolean, isJoined?: boolean, isSynced?: boolean, kind?: string, kindOptions?: { autopopulate?: boolean; manualOptions?: string[]; tableOptions?: object; }, name?: string, publicId?: string, script?: string, scriptEnabled?: boolean, thousandSeparator?: boolean, width?: number): { data?: table_column; metadata?: object; }`\n\n**post** `/v1/table/{table_id}/column`\n\nAdd a new column to an existing table.\n\n### Parameters\n\n- `table_id: string`\n\n- `aggregate?: number`\n\n- `alterOptions?: { dateConversionFormat?: 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'ISO8601' | 'DD-Mon-YY'; runScriptOnAllCells?: boolean; } | object`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n- `dateFormat?: string`\n\n- `decimalPlaces?: number`\n\n- `description?: object | { content: { blocks: { data: object; depth: number; entityRanges: object[]; inlineStyleRanges: object[]; key: string; text: string; type: string; }[]; entityMap: object; }; }`\n\n- `displayLink?: boolean`\n\n- `exportWidth?: number`\n\n- `formula?: string`\n\n- `formulaEnabled?: boolean`\n\n- `headerBackgroundColor?: string`\n\n- `headerTextColor?: string`\n\n- `isIndexed?: boolean`\n\n- `isJoined?: boolean`\n\n- `isSynced?: boolean`\n\n- `kind?: string`\n\n- `kindOptions?: { autopopulate?: boolean; manualOptions?: string[]; tableOptions?: { columnId?: string; dependencies?: { columnId: string; columnJoinId?: string; }[]; liveValues?: boolean; tableId?: string; viewId?: string; }; }`\n  - `autopopulate?: boolean`\n  - `manualOptions?: string[]`\n  - `tableOptions?: { columnId?: string; dependencies?: { columnId: string; columnJoinId?: string; }[]; liveValues?: boolean; tableId?: string; viewId?: string; }`\n\n- `name?: string`\n\n- `publicId?: string`\n\n- `script?: string`\n\n- `scriptEnabled?: boolean`\n\n- `thousandSeparator?: boolean`\n\n- `width?: number`\n\n### Returns\n\n- `{ data?: { aggregate?: number; alterOptions?: table_column_alter | object; dateFormat?: string; decimalPlaces?: number; description?: object | draftjs; displayLink?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: select_options_lookup; name?: string; publicId?: string; script?: string; scriptEnabled?: boolean; thousandSeparator?: boolean; width?: number; }; metadata?: object; }`\n\n  - `data?: { aggregate?: number; alterOptions?: { dateConversionFormat?: 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'ISO8601' | 'DD-Mon-YY'; runScriptOnAllCells?: boolean; } | object; dateFormat?: string; decimalPlaces?: number; description?: object | { content: object; }; displayLink?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: { autopopulate?: boolean; manualOptions?: string[]; tableOptions?: object; }; name?: string; publicId?: string; script?: string; scriptEnabled?: boolean; thousandSeparator?: boolean; width?: number; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst column = await client.table.column.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(column);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.column.create',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst column = await client.table.column.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(column.data);",
      },
      python: {
        method: 'table.column.create',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\ncolumn = client.table.column.create(\n    table_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(column.data)',
      },
      http: {
        example:
          "curl https://api.morta.io/v1/table/$TABLE_ID/column \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $MORTA_API_KEY\" \\\n    -d '{}'",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/table/{table_id}/column/{column_id}',
    httpMethod: 'put',
    summary: 'Update Table Column',
    description: 'Update the properties of a specific column in a table.',
    stainlessPath: '(resource) table.column > (method) update',
    qualified: 'client.table.column.update',
    params: [
      'table_id: string;',
      'column_id: string;',
      'aggregate?: number;',
      "alterOptions?: { dateConversionFormat?: 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'ISO8601' | 'DD-Mon-YY'; runScriptOnAllCells?: boolean; } | object;",
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
      'dateFormat?: string;',
      'decimalPlaces?: number;',
      'description?: object | { content: { blocks: { data: object; depth: number; entityRanges: object[]; inlineStyleRanges: object[]; key: string; text: string; type: string; }[]; entityMap: object; }; };',
      'displayLink?: boolean;',
      'exportWidth?: number;',
      'formula?: string;',
      'formulaEnabled?: boolean;',
      'headerBackgroundColor?: string;',
      'headerTextColor?: string;',
      'isIndexed?: boolean;',
      'isJoined?: boolean;',
      'isSynced?: boolean;',
      'kind?: string;',
      'kindOptions?: { autopopulate?: boolean; manualOptions?: string[]; tableOptions?: { columnId?: string; dependencies?: { columnId: string; columnJoinId?: string; }[]; liveValues?: boolean; tableId?: string; viewId?: string; }; };',
      'name?: string;',
      'publicId?: string;',
      'script?: string;',
      'scriptEnabled?: boolean;',
      'thousandSeparator?: boolean;',
      'width?: number;',
    ],
    response:
      '{ data?: { aggregate?: number; alterOptions?: table_column_alter | object; dateFormat?: string; decimalPlaces?: number; description?: object | draftjs; displayLink?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: select_options_lookup; name?: string; publicId?: string; script?: string; scriptEnabled?: boolean; thousandSeparator?: boolean; width?: number; }; metadata?: object; }',
    markdown:
      "## update\n\n`client.table.column.update(table_id: string, column_id: string, aggregate?: number, alterOptions?: { dateConversionFormat?: 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'ISO8601' | 'DD-Mon-YY'; runScriptOnAllCells?: boolean; } | object, context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }, dateFormat?: string, decimalPlaces?: number, description?: object | { content: object; }, displayLink?: boolean, exportWidth?: number, formula?: string, formulaEnabled?: boolean, headerBackgroundColor?: string, headerTextColor?: string, isIndexed?: boolean, isJoined?: boolean, isSynced?: boolean, kind?: string, kindOptions?: { autopopulate?: boolean; manualOptions?: string[]; tableOptions?: object; }, name?: string, publicId?: string, script?: string, scriptEnabled?: boolean, thousandSeparator?: boolean, width?: number): { data?: table_column; metadata?: object; }`\n\n**put** `/v1/table/{table_id}/column/{column_id}`\n\nUpdate the properties of a specific column in a table.\n\n### Parameters\n\n- `table_id: string`\n\n- `column_id: string`\n\n- `aggregate?: number`\n\n- `alterOptions?: { dateConversionFormat?: 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'ISO8601' | 'DD-Mon-YY'; runScriptOnAllCells?: boolean; } | object`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n- `dateFormat?: string`\n\n- `decimalPlaces?: number`\n\n- `description?: object | { content: { blocks: { data: object; depth: number; entityRanges: object[]; inlineStyleRanges: object[]; key: string; text: string; type: string; }[]; entityMap: object; }; }`\n\n- `displayLink?: boolean`\n\n- `exportWidth?: number`\n\n- `formula?: string`\n\n- `formulaEnabled?: boolean`\n\n- `headerBackgroundColor?: string`\n\n- `headerTextColor?: string`\n\n- `isIndexed?: boolean`\n\n- `isJoined?: boolean`\n\n- `isSynced?: boolean`\n\n- `kind?: string`\n\n- `kindOptions?: { autopopulate?: boolean; manualOptions?: string[]; tableOptions?: { columnId?: string; dependencies?: { columnId: string; columnJoinId?: string; }[]; liveValues?: boolean; tableId?: string; viewId?: string; }; }`\n  - `autopopulate?: boolean`\n  - `manualOptions?: string[]`\n  - `tableOptions?: { columnId?: string; dependencies?: { columnId: string; columnJoinId?: string; }[]; liveValues?: boolean; tableId?: string; viewId?: string; }`\n\n- `name?: string`\n\n- `publicId?: string`\n\n- `script?: string`\n\n- `scriptEnabled?: boolean`\n\n- `thousandSeparator?: boolean`\n\n- `width?: number`\n\n### Returns\n\n- `{ data?: { aggregate?: number; alterOptions?: table_column_alter | object; dateFormat?: string; decimalPlaces?: number; description?: object | draftjs; displayLink?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: select_options_lookup; name?: string; publicId?: string; script?: string; scriptEnabled?: boolean; thousandSeparator?: boolean; width?: number; }; metadata?: object; }`\n\n  - `data?: { aggregate?: number; alterOptions?: { dateConversionFormat?: 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'ISO8601' | 'DD-Mon-YY'; runScriptOnAllCells?: boolean; } | object; dateFormat?: string; decimalPlaces?: number; description?: object | { content: object; }; displayLink?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: { autopopulate?: boolean; manualOptions?: string[]; tableOptions?: object; }; name?: string; publicId?: string; script?: string; scriptEnabled?: boolean; thousandSeparator?: boolean; width?: number; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst column = await client.table.column.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(column);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.column.update',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst column = await client.table.column.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(column.data);",
      },
      python: {
        method: 'table.column.update',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\ncolumn = client.table.column.update(\n    column_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    table_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(column.data)',
      },
      http: {
        example:
          "curl https://api.morta.io/v1/table/$TABLE_ID/column/$COLUMN_ID \\\n    -X PUT \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $MORTA_API_KEY\" \\\n    -d '{}'",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/table/{table_id}/column/{column_id}',
    httpMethod: 'delete',
    summary: 'Delete Table Column',
    description: 'Delete a specific column from a table.',
    stainlessPath: '(resource) table.column > (method) delete',
    qualified: 'client.table.column.delete',
    params: ['table_id: string;', 'column_id: string;'],
    response: '{ data?: string; metadata?: object; }',
    markdown:
      "## delete\n\n`client.table.column.delete(table_id: string, column_id: string): { data?: string; metadata?: object; }`\n\n**delete** `/v1/table/{table_id}/column/{column_id}`\n\nDelete a specific column from a table.\n\n### Parameters\n\n- `table_id: string`\n\n- `column_id: string`\n\n### Returns\n\n- `{ data?: string; metadata?: object; }`\n\n  - `data?: string`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst column = await client.table.column.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(column);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.column.delete',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst column = await client.table.column.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(column.data);",
      },
      python: {
        method: 'table.column.delete',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\ncolumn = client.table.column.delete(\n    column_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    table_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(column.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/$TABLE_ID/column/$COLUMN_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'check_views',
    endpoint: '/v1/table/{table_id}/column/{column_id}/views',
    httpMethod: 'get',
    summary: 'Check Views Column Is Used In',
    description: 'Retrieve all views in which a specific table column is used.',
    stainlessPath: '(resource) table.column > (method) check_views',
    qualified: 'client.table.column.checkViews',
    params: ['table_id: string;', 'column_id: string;'],
    response:
      '{ data?: { name: string; allowContributorDelete?: boolean; chartSettings?: chart; collapsedGroupView?: boolean; colourSettings?: colour[]; columns?: table_view_column[]; description?: draftjs; disableNewRow?: boolean; disableSyncCsv?: boolean; displayCommentRows?: number; displayValidationErrorRows?: number; filterSettings?: filter[]; frozenIndex?: number; groupSettings?: group[]; isDefault?: boolean; lockedFromDuplication?: boolean; publicId?: string; rowHeight?: number; sortSettings?: sort[]; type?: number; unpackMultiselectGroupView?: boolean; }[]; metadata?: object; }',
    markdown:
      "## check_views\n\n`client.table.column.checkViews(table_id: string, column_id: string): { data?: table_view[]; metadata?: object; }`\n\n**get** `/v1/table/{table_id}/column/{column_id}/views`\n\nRetrieve all views in which a specific table column is used.\n\n### Parameters\n\n- `table_id: string`\n\n- `column_id: string`\n\n### Returns\n\n- `{ data?: { name: string; allowContributorDelete?: boolean; chartSettings?: chart; collapsedGroupView?: boolean; colourSettings?: colour[]; columns?: table_view_column[]; description?: draftjs; disableNewRow?: boolean; disableSyncCsv?: boolean; displayCommentRows?: number; displayValidationErrorRows?: number; filterSettings?: filter[]; frozenIndex?: number; groupSettings?: group[]; isDefault?: boolean; lockedFromDuplication?: boolean; publicId?: string; rowHeight?: number; sortSettings?: sort[]; type?: number; unpackMultiselectGroupView?: boolean; }[]; metadata?: object; }`\n\n  - `data?: { name: string; allowContributorDelete?: boolean; chartSettings?: { aggregate?: 'sum' | 'count' | 'avg'; chartType?: string; columnGanttEndDateId?: string; columnGanttStartDateId?: string; columnLabelId?: string; columnStackId?: string; columnValueId?: string; showLegend?: boolean; showTitle?: boolean; showValues?: boolean; sortAggregate?: 'asc' | 'desc'; }; collapsedGroupView?: boolean; colourSettings?: { backgroundColour: string; columnName: string; filterType: string; fontColour: string; columnId?: string; multipleValues?: object[]; value?: object; }[]; columns?: { aggregate?: number; alterOptions?: table_column_alter | object; dateFormat?: string; decimalPlaces?: number; description?: object | draftjs; displayLink?: boolean; displayValidationError?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; hardValidation?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: select_options_lookup; locked?: boolean; name?: string; publicId?: string; required?: boolean; script?: string; scriptEnabled?: boolean; sortOrder?: number; stringValidation?: string; thousandSeparator?: boolean; validationMessage?: string; validationNoBlanks?: boolean; validationNoDuplicates?: boolean; width?: number; }[]; description?: { content: object; }; disableNewRow?: boolean; disableSyncCsv?: boolean; displayCommentRows?: number; displayValidationErrorRows?: number; filterSettings?: { columnName: string; filterType: string; columnId?: string; multipleValues?: object[]; orGroup?: string; value?: object; }[]; frozenIndex?: number; groupSettings?: { columnName: string; direction: string; columnId?: string; }[]; isDefault?: boolean; lockedFromDuplication?: boolean; publicId?: string; rowHeight?: number; sortSettings?: { columnName: string; direction: string; columnId?: string; }[]; type?: number; unpackMultiselectGroupView?: boolean; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.column.checkViews('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.column.checkViews',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.column.checkViews('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'table.column.check_views',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.column.check_views(\n    column_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    table_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/$TABLE_ID/column/$COLUMN_ID/views \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'restore',
    endpoint: '/v1/table/{table_id}/column/{column_id}/restore',
    httpMethod: 'put',
    summary: 'Restore Table Column',
    description: 'Restore a previously deleted column in a table.',
    stainlessPath: '(resource) table.column > (method) restore',
    qualified: 'client.table.column.restore',
    params: ['table_id: string;', 'column_id: string;'],
    response:
      '{ data?: { aggregate?: number; alterOptions?: table_column_alter | object; dateFormat?: string; decimalPlaces?: number; description?: object | draftjs; displayLink?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: select_options_lookup; name?: string; publicId?: string; script?: string; scriptEnabled?: boolean; thousandSeparator?: boolean; width?: number; }; metadata?: object; }',
    markdown:
      "## restore\n\n`client.table.column.restore(table_id: string, column_id: string): { data?: table_column; metadata?: object; }`\n\n**put** `/v1/table/{table_id}/column/{column_id}/restore`\n\nRestore a previously deleted column in a table.\n\n### Parameters\n\n- `table_id: string`\n\n- `column_id: string`\n\n### Returns\n\n- `{ data?: { aggregate?: number; alterOptions?: table_column_alter | object; dateFormat?: string; decimalPlaces?: number; description?: object | draftjs; displayLink?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: select_options_lookup; name?: string; publicId?: string; script?: string; scriptEnabled?: boolean; thousandSeparator?: boolean; width?: number; }; metadata?: object; }`\n\n  - `data?: { aggregate?: number; alterOptions?: { dateConversionFormat?: 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'ISO8601' | 'DD-Mon-YY'; runScriptOnAllCells?: boolean; } | object; dateFormat?: string; decimalPlaces?: number; description?: object | { content: object; }; displayLink?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: { autopopulate?: boolean; manualOptions?: string[]; tableOptions?: object; }; name?: string; publicId?: string; script?: string; scriptEnabled?: boolean; thousandSeparator?: boolean; width?: number; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.column.restore('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.column.restore',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.column.restore('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'table.column.restore',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.column.restore(\n    column_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    table_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/$TABLE_ID/column/$COLUMN_ID/restore \\\n    -X PUT \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'get_distinct_values',
    endpoint: '/v1/table/{table_id}/column/{column_id}/distinct',
    httpMethod: 'get',
    summary: 'Get Unique Values for a Column',
    description: 'Retrieve a list of distinct (unique) values for a specified column in a table.',
    stainlessPath: '(resource) table.column > (method) get_distinct_values',
    qualified: 'client.table.column.getDistinctValues',
    params: ['table_id: string;', 'column_id: string;', 'filter?: string;', 'group_columns?: string[];'],
    response: '{ data?: string[]; metadata?: object; }',
    markdown:
      "## get_distinct_values\n\n`client.table.column.getDistinctValues(table_id: string, column_id: string, filter?: string, group_columns?: string[]): { data?: string[]; metadata?: object; }`\n\n**get** `/v1/table/{table_id}/column/{column_id}/distinct`\n\nRetrieve a list of distinct (unique) values for a specified column in a table.\n\n### Parameters\n\n- `table_id: string`\n\n- `column_id: string`\n\n- `filter?: string`\n  Filter criteria for the distinct values\n\n- `group_columns?: string[]`\n  Specify columns for grouping values\n\n### Returns\n\n- `{ data?: string[]; metadata?: object; }`\n\n  - `data?: string[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.column.getDistinctValues('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.column.getDistinctValues',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.column.getDistinctValues(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },\n);\n\nconsole.log(response.data);",
      },
      python: {
        method: 'table.column.get_distinct_values',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.column.get_distinct_values(\n    column_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    table_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/$TABLE_ID/column/$COLUMN_ID/distinct \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'get_rows',
    endpoint: '/v1/table/{table_id}/row',
    httpMethod: 'get',
    summary: 'Get Table Rows',
    description: 'Retrieve rows from a table based on provided query parameters.',
    stainlessPath: '(resource) table.row > (method) get_rows',
    qualified: 'client.table.row.getRows',
    params: [
      'table_id: string;',
      'columns?: string[];',
      'distinct_columns?: string[];',
      'filter?: string;',
      'last_created_at?: string;',
      'last_updated_at?: string;',
      'next_page_token?: string;',
      'page?: number;',
      'size?: number;',
      'sort?: string;',
    ],
    response:
      '{ data?: { publicId?: string; rowData?: object; sortOrder?: number; }[]; metadata?: { next_page_token?: string; page?: number; size?: number; total?: number; }; }',
    markdown:
      "## get_rows\n\n`client.table.row.getRows(table_id: string, columns?: string[], distinct_columns?: string[], filter?: string, last_created_at?: string, last_updated_at?: string, next_page_token?: string, page?: number, size?: number, sort?: string): { data?: object[]; metadata?: object; }`\n\n**get** `/v1/table/{table_id}/row`\n\nRetrieve rows from a table based on provided query parameters.\n\n### Parameters\n\n- `table_id: string`\n\n- `columns?: string[]`\n  Specific columns to include in the response\n\n- `distinct_columns?: string[]`\n  Columns to apply distinct filtering\n\n- `filter?: string`\n  Filter criteria for the table rows\n\n- `last_created_at?: string`\n  Filter for rows created after this date\n\n- `last_updated_at?: string`\n  Filter for rows updated after this date\n\n- `next_page_token?: string`\n  Token for fetching the next page of results\n\n- `page?: number`\n  Page number for pagination\n\n- `size?: number`\n  Number of items per page for pagination\n\n- `sort?: string`\n  Sorting criteria for the table rows\n\n### Returns\n\n- `{ data?: { publicId?: string; rowData?: object; sortOrder?: number; }[]; metadata?: { next_page_token?: string; page?: number; size?: number; total?: number; }; }`\n\n  - `data?: { publicId?: string; rowData?: object; sortOrder?: number; }[]`\n  - `metadata?: { next_page_token?: string; page?: number; size?: number; total?: number; }`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.row.getRows('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.row.getRows',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.row.getRows('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'table.row.get_rows',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.row.get_rows(\n    table_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/$TABLE_ID/row \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'add',
    endpoint: '/v1/table/{table_id}/row',
    httpMethod: 'post',
    summary: 'Add Row to Table',
    description: 'Add a new row to the specified table.',
    stainlessPath: '(resource) table.row > (method) add',
    qualified: 'client.table.row.add',
    params: [
      'table_id: string;',
      'rows: { rowData: object; context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }; sortOrder?: number; }[];',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
    ],
    response: '{ data?: { publicId?: string; rowData?: object; sortOrder?: number; }[]; metadata?: object; }',
    markdown:
      "## add\n\n`client.table.row.add(table_id: string, rows: { rowData: object; context?: base_request_context; sortOrder?: number; }[], context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }): { data?: object[]; metadata?: object; }`\n\n**post** `/v1/table/{table_id}/row`\n\nAdd a new row to the specified table.\n\n### Parameters\n\n- `table_id: string`\n\n- `rows: { rowData: object; context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }; sortOrder?: number; }[]`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n### Returns\n\n- `{ data?: { publicId?: string; rowData?: object; sortOrder?: number; }[]; metadata?: object; }`\n\n  - `data?: { publicId?: string; rowData?: object; sortOrder?: number; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.row.add('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { rows: [{ rowData: { foo: 'bar' } }] });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.row.add',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.row.add('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  rows: [{ rowData: { foo: 'bar' } }],\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'table.row.add',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.row.add(\n    table_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    rows=[{\n        "row_data": {\n            "foo": "bar"\n        }\n    }],\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/$TABLE_ID/row \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "rows": [\n            {\n              "rowData": {\n                "foo": "bar"\n              }\n            }\n          ]\n        }\'',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/table/{table_id}/row',
    httpMethod: 'put',
    summary: 'Update Existing Rows in Table',
    description: 'Update existing rows in the specified table.',
    stainlessPath: '(resource) table.row > (method) update',
    qualified: 'client.table.row.update',
    params: [
      'table_id: string;',
      'rows: { publicId: string; rowData: object; context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }; sortOrder?: number; }[];',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
    ],
    response: '{ data?: { publicId?: string; rowData?: object; sortOrder?: number; }[]; metadata?: object; }',
    markdown:
      "## update\n\n`client.table.row.update(table_id: string, rows: { publicId: string; rowData: object; context?: object; sortOrder?: number; }[], context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }): { data?: object[]; metadata?: object; }`\n\n**put** `/v1/table/{table_id}/row`\n\nUpdate existing rows in the specified table.\n\n### Parameters\n\n- `table_id: string`\n\n- `rows: { publicId: string; rowData: object; context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }; sortOrder?: number; }[]`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n### Returns\n\n- `{ data?: { publicId?: string; rowData?: object; sortOrder?: number; }[]; metadata?: object; }`\n\n  - `data?: { publicId?: string; rowData?: object; sortOrder?: number; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst row = await client.table.row.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { rows: [{\n  publicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  rowData: { foo: 'bar' },\n}] });\n\nconsole.log(row);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.row.update',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst row = await client.table.row.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  rows: [\n    {\n      publicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n      rowData: { foo: 'bar' },\n    },\n  ],\n});\n\nconsole.log(row.data);",
      },
      python: {
        method: 'table.row.update',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nrow = client.table.row.update(\n    table_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    rows=[{\n        "public_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n        "row_data": {\n            "foo": "bar"\n        },\n    }],\n)\nprint(row.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/$TABLE_ID/row \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "rows": [\n            {\n              "publicId": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n              "rowData": {\n                "foo": "bar"\n              }\n            }\n          ]\n        }\'',
      },
    },
  },
  {
    name: 'upsert',
    endpoint: '/v1/table/{table_id}/row/upsert',
    httpMethod: 'post',
    summary: 'Upsert Row in Table',
    description: 'Add or update a row in the specified table based on a unique column value.',
    stainlessPath: '(resource) table.row > (method) upsert',
    qualified: 'client.table.row.upsert',
    params: [
      'table_id: string;',
      'rows: { rowData: object; context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }; sortOrder?: number; }[];',
      'upsertColumnName: string;',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
    ],
    response: '{ data?: { publicId?: string; rowData?: object; sortOrder?: number; }[]; metadata?: object; }',
    markdown:
      "## upsert\n\n`client.table.row.upsert(table_id: string, rows: { rowData: object; context?: base_request_context; sortOrder?: number; }[], upsertColumnName: string, context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }): { data?: object[]; metadata?: object; }`\n\n**post** `/v1/table/{table_id}/row/upsert`\n\nAdd or update a row in the specified table based on a unique column value.\n\n### Parameters\n\n- `table_id: string`\n\n- `rows: { rowData: object; context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }; sortOrder?: number; }[]`\n\n- `upsertColumnName: string`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n### Returns\n\n- `{ data?: { publicId?: string; rowData?: object; sortOrder?: number; }[]; metadata?: object; }`\n\n  - `data?: { publicId?: string; rowData?: object; sortOrder?: number; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.row.upsert('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { rows: [{ rowData: { foo: 'bar' } }], upsertColumnName: 'upsertColumnName' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.row.upsert',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.row.upsert('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  rows: [{ rowData: { foo: 'bar' } }],\n  upsertColumnName: 'upsertColumnName',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'table.row.upsert',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.row.upsert(\n    table_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    rows=[{\n        "row_data": {\n            "foo": "bar"\n        }\n    }],\n    upsert_column_name="upsertColumnName",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/$TABLE_ID/row/upsert \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "rows": [\n            {\n              "rowData": {\n                "foo": "bar"\n              }\n            }\n          ],\n          "upsertColumnName": "upsertColumnName"\n        }\'',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/table/{table_id}/join',
    httpMethod: 'post',
    summary: 'Create Table Join',
    description: 'Create a join between two tables.',
    stainlessPath: '(resource) table.join > (method) create',
    qualified: 'client.table.join.create',
    params: [
      'table_id: string;',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
      'dataColumns?: string[];',
      'isOneToMany?: boolean;',
      'joinColumns?: { sourceColumnId?: string; targetColumnId?: string; }[];',
      'joinViewId?: string;',
    ],
    response: '{ data?: object; metadata?: object; }',
    markdown:
      "## create\n\n`client.table.join.create(table_id: string, context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }, dataColumns?: string[], isOneToMany?: boolean, joinColumns?: { sourceColumnId?: string; targetColumnId?: string; }[], joinViewId?: string): { data?: table; metadata?: object; }`\n\n**post** `/v1/table/{table_id}/join`\n\nCreate a join between two tables.\n\n### Parameters\n\n- `table_id: string`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n- `dataColumns?: string[]`\n\n- `isOneToMany?: boolean`\n\n- `joinColumns?: { sourceColumnId?: string; targetColumnId?: string; }[]`\n\n- `joinViewId?: string`\n\n### Returns\n\n- `{ data?: { allowComments?: boolean; autodeskBim360ModelProperties?: object; columns?: table_column[]; createdAt?: string; defaultViewId?: string; deletedAt?: string; failedSyncAttempts?: number; isAconexSynced?: boolean; isAconexWorkflowsSynced?: boolean; isAsiteDocumentsSynced?: boolean; isAsiteFormsSynced?: boolean; isAutodeskBim360ChecklistsSynced?: boolean; isAutodeskBim360IssuesSynced?: boolean; isAutodeskBim360ModelsSynced?: boolean; isAutodeskBim360Synced?: boolean; isAutodeskBim360UsersSynced?: boolean; isDeleted?: boolean; isMortaColumnsSynced?: boolean; isMortaCommentsSynced?: boolean; isMortaProjectsSynced?: boolean; isMortaResourcesSynced?: boolean; isMortaSynced?: boolean; isMortaUsersSynced?: boolean; isProcoreSynced?: boolean; isReferenceTable?: boolean; isReviztoIssuesSynced?: boolean; isSynced?: boolean; isSyncing?: boolean; isViewpointRfisSynced?: boolean; isViewpointSynced?: boolean; joins?: table_join[]; keepColoursInSync?: boolean; keepValidationsInSync?: boolean; lastSync?: string; lockedFromDuplication?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; projects?: project[]; publicId?: string; syncHourlyFrequency?: number; syncUser?: object; type?: string; updatedAt?: string; }; metadata?: object; }`\n\n  - `data?: { allowComments?: boolean; autodeskBim360ModelProperties?: object; columns?: { aggregate?: number; alterOptions?: table_column_alter | object; dateFormat?: string; decimalPlaces?: number; description?: object | draftjs; displayLink?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: select_options_lookup; name?: string; publicId?: string; script?: string; scriptEnabled?: boolean; thousandSeparator?: boolean; width?: number; }[]; createdAt?: string; defaultViewId?: string; deletedAt?: string; failedSyncAttempts?: number; isAconexSynced?: boolean; isAconexWorkflowsSynced?: boolean; isAsiteDocumentsSynced?: boolean; isAsiteFormsSynced?: boolean; isAutodeskBim360ChecklistsSynced?: boolean; isAutodeskBim360IssuesSynced?: boolean; isAutodeskBim360ModelsSynced?: boolean; isAutodeskBim360Synced?: boolean; isAutodeskBim360UsersSynced?: boolean; isDeleted?: boolean; isMortaColumnsSynced?: boolean; isMortaCommentsSynced?: boolean; isMortaProjectsSynced?: boolean; isMortaResourcesSynced?: boolean; isMortaSynced?: boolean; isMortaUsersSynced?: boolean; isProcoreSynced?: boolean; isReferenceTable?: boolean; isReviztoIssuesSynced?: boolean; isSynced?: boolean; isSyncing?: boolean; isViewpointRfisSynced?: boolean; isViewpointSynced?: boolean; joins?: { dataColumns?: table_join_imported_columns[]; isOneToMany?: boolean; joinColumns?: table_column_join[]; joinTableId?: string; joinViewId?: string; publicId?: string; }[]; keepColoursInSync?: boolean; keepValidationsInSync?: boolean; lastSync?: string; lockedFromDuplication?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; projects?: { name?: string; publicId?: string; }[]; publicId?: string; syncHourlyFrequency?: number; syncUser?: { name?: string; publicId?: string; }; type?: string; updatedAt?: string; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst join = await client.table.join.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(join);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.join.create',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst join = await client.table.join.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(join.data);",
      },
      python: {
        method: 'table.join.create',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\njoin = client.table.join.create(\n    table_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(join.data)',
      },
      http: {
        example:
          "curl https://api.morta.io/v1/table/$TABLE_ID/join \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $MORTA_API_KEY\" \\\n    -d '{}'",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/table/{table_id}/join/{join_id}',
    httpMethod: 'put',
    summary: 'Update Table Join',
    description: 'Update an existing join on a table.',
    stainlessPath: '(resource) table.join > (method) update',
    qualified: 'client.table.join.update',
    params: [
      'table_id: string;',
      'join_id: string;',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
      'dataColumns?: string[];',
      'isOneToMany?: boolean;',
      'joinColumns?: { sourceColumnId?: string; targetColumnId?: string; }[];',
      'joinViewId?: string;',
    ],
    response: '{ data?: object; metadata?: object; }',
    markdown:
      "## update\n\n`client.table.join.update(table_id: string, join_id: string, context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }, dataColumns?: string[], isOneToMany?: boolean, joinColumns?: { sourceColumnId?: string; targetColumnId?: string; }[], joinViewId?: string): { data?: table; metadata?: object; }`\n\n**put** `/v1/table/{table_id}/join/{join_id}`\n\nUpdate an existing join on a table.\n\n### Parameters\n\n- `table_id: string`\n\n- `join_id: string`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n- `dataColumns?: string[]`\n\n- `isOneToMany?: boolean`\n\n- `joinColumns?: { sourceColumnId?: string; targetColumnId?: string; }[]`\n\n- `joinViewId?: string`\n\n### Returns\n\n- `{ data?: { allowComments?: boolean; autodeskBim360ModelProperties?: object; columns?: table_column[]; createdAt?: string; defaultViewId?: string; deletedAt?: string; failedSyncAttempts?: number; isAconexSynced?: boolean; isAconexWorkflowsSynced?: boolean; isAsiteDocumentsSynced?: boolean; isAsiteFormsSynced?: boolean; isAutodeskBim360ChecklistsSynced?: boolean; isAutodeskBim360IssuesSynced?: boolean; isAutodeskBim360ModelsSynced?: boolean; isAutodeskBim360Synced?: boolean; isAutodeskBim360UsersSynced?: boolean; isDeleted?: boolean; isMortaColumnsSynced?: boolean; isMortaCommentsSynced?: boolean; isMortaProjectsSynced?: boolean; isMortaResourcesSynced?: boolean; isMortaSynced?: boolean; isMortaUsersSynced?: boolean; isProcoreSynced?: boolean; isReferenceTable?: boolean; isReviztoIssuesSynced?: boolean; isSynced?: boolean; isSyncing?: boolean; isViewpointRfisSynced?: boolean; isViewpointSynced?: boolean; joins?: table_join[]; keepColoursInSync?: boolean; keepValidationsInSync?: boolean; lastSync?: string; lockedFromDuplication?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; projects?: project[]; publicId?: string; syncHourlyFrequency?: number; syncUser?: object; type?: string; updatedAt?: string; }; metadata?: object; }`\n\n  - `data?: { allowComments?: boolean; autodeskBim360ModelProperties?: object; columns?: { aggregate?: number; alterOptions?: table_column_alter | object; dateFormat?: string; decimalPlaces?: number; description?: object | draftjs; displayLink?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: select_options_lookup; name?: string; publicId?: string; script?: string; scriptEnabled?: boolean; thousandSeparator?: boolean; width?: number; }[]; createdAt?: string; defaultViewId?: string; deletedAt?: string; failedSyncAttempts?: number; isAconexSynced?: boolean; isAconexWorkflowsSynced?: boolean; isAsiteDocumentsSynced?: boolean; isAsiteFormsSynced?: boolean; isAutodeskBim360ChecklistsSynced?: boolean; isAutodeskBim360IssuesSynced?: boolean; isAutodeskBim360ModelsSynced?: boolean; isAutodeskBim360Synced?: boolean; isAutodeskBim360UsersSynced?: boolean; isDeleted?: boolean; isMortaColumnsSynced?: boolean; isMortaCommentsSynced?: boolean; isMortaProjectsSynced?: boolean; isMortaResourcesSynced?: boolean; isMortaSynced?: boolean; isMortaUsersSynced?: boolean; isProcoreSynced?: boolean; isReferenceTable?: boolean; isReviztoIssuesSynced?: boolean; isSynced?: boolean; isSyncing?: boolean; isViewpointRfisSynced?: boolean; isViewpointSynced?: boolean; joins?: { dataColumns?: table_join_imported_columns[]; isOneToMany?: boolean; joinColumns?: table_column_join[]; joinTableId?: string; joinViewId?: string; publicId?: string; }[]; keepColoursInSync?: boolean; keepValidationsInSync?: boolean; lastSync?: string; lockedFromDuplication?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; projects?: { name?: string; publicId?: string; }[]; publicId?: string; syncHourlyFrequency?: number; syncUser?: { name?: string; publicId?: string; }; type?: string; updatedAt?: string; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst join = await client.table.join.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(join);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.join.update',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst join = await client.table.join.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(join.data);",
      },
      python: {
        method: 'table.join.update',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\njoin = client.table.join.update(\n    join_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    table_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(join.data)',
      },
      http: {
        example:
          "curl https://api.morta.io/v1/table/$TABLE_ID/join/$JOIN_ID \\\n    -X PUT \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $MORTA_API_KEY\" \\\n    -d '{}'",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/table/{table_id}/join/{join_id}',
    httpMethod: 'delete',
    summary: 'Delete Table Join',
    description: 'Delete a join from a table.',
    stainlessPath: '(resource) table.join > (method) delete',
    qualified: 'client.table.join.delete',
    params: ['table_id: string;', 'join_id: string;'],
    response: '{ data?: string; metadata?: object; }',
    markdown:
      "## delete\n\n`client.table.join.delete(table_id: string, join_id: string): { data?: string; metadata?: object; }`\n\n**delete** `/v1/table/{table_id}/join/{join_id}`\n\nDelete a join from a table.\n\n### Parameters\n\n- `table_id: string`\n\n- `join_id: string`\n\n### Returns\n\n- `{ data?: string; metadata?: object; }`\n\n  - `data?: string`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst join = await client.table.join.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(join);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.join.delete',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst join = await client.table.join.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(join.data);",
      },
      python: {
        method: 'table.join.delete',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\njoin = client.table.join.delete(\n    join_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    table_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(join.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/$TABLE_ID/join/$JOIN_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/table/{table_id}/sync/{integration_name}/update',
    httpMethod: 'post',
    summary: 'Update Sync Table',
    description: 'Update a synced table with a specified integration.',
    stainlessPath: '(resource) table.sync > (method) update',
    qualified: 'client.table.sync.update',
    params: [
      'table_id: string;',
      'integration_name: string;',
      'companyId?: string;',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
      'docTypes?: string[];',
      'enterpriseId?: string;',
      'folderId?: string;',
      'hubId?: string;',
      'licenseId?: string;',
      'modelId?: string;',
      'projectId?: string;',
      'projectIds?: string[];',
      'properties?: string[];',
      'region?: string;',
      'topFolderId?: string;',
      'type?: string;',
    ],
    response: '{ data?: string; metadata?: object; }',
    markdown:
      "## update\n\n`client.table.sync.update(table_id: string, integration_name: string, companyId?: string, context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }, docTypes?: string[], enterpriseId?: string, folderId?: string, hubId?: string, licenseId?: string, modelId?: string, projectId?: string, projectIds?: string[], properties?: string[], region?: string, topFolderId?: string, type?: string): { data?: string; metadata?: object; }`\n\n**post** `/v1/table/{table_id}/sync/{integration_name}/update`\n\nUpdate a synced table with a specified integration.\n\n### Parameters\n\n- `table_id: string`\n\n- `integration_name: string`\n\n- `companyId?: string`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n- `docTypes?: string[]`\n\n- `enterpriseId?: string`\n\n- `folderId?: string`\n\n- `hubId?: string`\n\n- `licenseId?: string`\n\n- `modelId?: string`\n\n- `projectId?: string`\n\n- `projectIds?: string[]`\n\n- `properties?: string[]`\n\n- `region?: string`\n\n- `topFolderId?: string`\n\n- `type?: string`\n\n### Returns\n\n- `{ data?: string; metadata?: object; }`\n\n  - `data?: string`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst sync = await client.table.sync.update('integration_name', { table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(sync);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.sync.update',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst sync = await client.table.sync.update('integration_name', {\n  table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(sync.data);",
      },
      python: {
        method: 'table.sync.update',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nsync = client.table.sync.update(\n    integration_name="integration_name",\n    table_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(sync.data)',
      },
      http: {
        example:
          "curl https://api.morta.io/v1/table/$TABLE_ID/sync/$INTEGRATION_NAME/update \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $MORTA_API_KEY\" \\\n    -d '{}'",
      },
    },
  },
  {
    name: 'sync_with_integration',
    endpoint: '/v1/table/{table_id}/sync/{integration_name}',
    httpMethod: 'post',
    summary: 'Sync Table with Integration',
    description: 'Sync a table with a specified integration.',
    stainlessPath: '(resource) table.sync > (method) sync_with_integration',
    qualified: 'client.table.sync.syncWithIntegration',
    params: [
      'table_id: string;',
      'integration_name: string;',
      'companyId?: string;',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
      'docTypes?: string[];',
      'enterpriseId?: string;',
      'folderId?: string;',
      'hubId?: string;',
      'licenseId?: string;',
      'modelId?: string;',
      'projectId?: string;',
      'projectIds?: string[];',
      'properties?: string[];',
      'region?: string;',
      'topFolderId?: string;',
      'type?: string;',
    ],
    response: '{ data?: string; metadata?: object; }',
    markdown:
      "## sync_with_integration\n\n`client.table.sync.syncWithIntegration(table_id: string, integration_name: string, companyId?: string, context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }, docTypes?: string[], enterpriseId?: string, folderId?: string, hubId?: string, licenseId?: string, modelId?: string, projectId?: string, projectIds?: string[], properties?: string[], region?: string, topFolderId?: string, type?: string): { data?: string; metadata?: object; }`\n\n**post** `/v1/table/{table_id}/sync/{integration_name}`\n\nSync a table with a specified integration.\n\n### Parameters\n\n- `table_id: string`\n\n- `integration_name: string`\n\n- `companyId?: string`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n- `docTypes?: string[]`\n\n- `enterpriseId?: string`\n\n- `folderId?: string`\n\n- `hubId?: string`\n\n- `licenseId?: string`\n\n- `modelId?: string`\n\n- `projectId?: string`\n\n- `projectIds?: string[]`\n\n- `properties?: string[]`\n\n- `region?: string`\n\n- `topFolderId?: string`\n\n- `type?: string`\n\n### Returns\n\n- `{ data?: string; metadata?: object; }`\n\n  - `data?: string`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.sync.syncWithIntegration('integration_name', { table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.sync.syncWithIntegration',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.sync.syncWithIntegration('integration_name', {\n  table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'table.sync.sync_with_integration',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.sync.sync_with_integration(\n    integration_name="integration_name",\n    table_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          "curl https://api.morta.io/v1/table/$TABLE_ID/sync/$INTEGRATION_NAME \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $MORTA_API_KEY\" \\\n    -d '{}'",
      },
    },
  },
  {
    name: 'delete_integration',
    endpoint: '/v1/table/{table_id}/sync/{integration_name}',
    httpMethod: 'delete',
    summary: 'Delete Integration from Table',
    description: 'Remove a specific integration from a table.',
    stainlessPath: '(resource) table.sync > (method) delete_integration',
    qualified: 'client.table.sync.deleteIntegration',
    params: ['table_id: string;', 'integration_name: string;'],
    response: '{ data?: string; metadata?: object; }',
    markdown:
      "## delete_integration\n\n`client.table.sync.deleteIntegration(table_id: string, integration_name: string): { data?: string; metadata?: object; }`\n\n**delete** `/v1/table/{table_id}/sync/{integration_name}`\n\nRemove a specific integration from a table.\n\n### Parameters\n\n- `table_id: string`\n\n- `integration_name: string`\n\n### Returns\n\n- `{ data?: string; metadata?: object; }`\n\n  - `data?: string`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.sync.deleteIntegration('integration_name', { table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.sync.deleteIntegration',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.sync.deleteIntegration('integration_name', {\n  table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'table.sync.delete_integration',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.sync.delete_integration(\n    integration_name="integration_name",\n    table_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/$TABLE_ID/sync/$INTEGRATION_NAME \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'retry_integration_sync',
    endpoint: '/v1/table/{table_id}/sync/manual',
    httpMethod: 'get',
    summary: 'Retry Integration Sync',
    description: 'Retry a failed integration sync.',
    stainlessPath: '(resource) table.sync > (method) retry_integration_sync',
    qualified: 'client.table.sync.retryIntegrationSync',
    params: ['table_id: string;'],
    response: '{ data?: string; metadata?: object; }',
    markdown:
      "## retry_integration_sync\n\n`client.table.sync.retryIntegrationSync(table_id: string): { data?: string; metadata?: object; }`\n\n**get** `/v1/table/{table_id}/sync/manual`\n\nRetry a failed integration sync.\n\n### Parameters\n\n- `table_id: string`\n\n### Returns\n\n- `{ data?: string; metadata?: object; }`\n\n  - `data?: string`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.sync.retryIntegrationSync('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.sync.retryIntegrationSync',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.sync.retryIntegrationSync(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(response.data);",
      },
      python: {
        method: 'table.sync.retry_integration_sync',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.sync.retry_integration_sync(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/$TABLE_ID/sync/manual \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'get_sync_info',
    endpoint: '/v1/table/{table_id}/sync/info',
    httpMethod: 'get',
    summary: 'Get Table Syncronization Info',
    description: 'Retrieve the integration sync info of a given table.',
    stainlessPath: '(resource) table.sync > (method) get_sync_info',
    qualified: 'client.table.sync.getSyncInfo',
    params: ['table_id: string;'],
    response:
      '{ data?: { createdAt?: string; deletedAt?: string; failedSyncAttempts?: number; isAconexSynced?: boolean; isAconexWorkflowsSynced?: boolean; isAsiteDocumentsSynced?: boolean; isAsiteFormsSynced?: boolean; isAutodeskBim360ChecklistsSynced?: boolean; isAutodeskBim360IssuesSynced?: boolean; isAutodeskBim360ModelsSynced?: boolean; isAutodeskBim360Synced?: boolean; isAutodeskBim360UsersSynced?: boolean; isDeleted?: boolean; isMortaColumnsSynced?: boolean; isMortaCommentsSynced?: boolean; isMortaProjectsSynced?: boolean; isMortaResourcesSynced?: boolean; isMortaSynced?: boolean; isMortaUsersSynced?: boolean; isProcoreSynced?: boolean; isReviztoIssuesSynced?: boolean; isSynced?: boolean; isSyncing?: boolean; isViewpointRfisSynced?: boolean; isViewpointSynced?: boolean; lastSync?: string; name?: string; publicId?: string; syncHourlyFrequency?: number; type?: string; updatedAt?: string; }; }',
    markdown:
      "## get_sync_info\n\n`client.table.sync.getSyncInfo(table_id: string): { data?: object; }`\n\n**get** `/v1/table/{table_id}/sync/info`\n\nRetrieve the integration sync info of a given table.\n\n### Parameters\n\n- `table_id: string`\n\n### Returns\n\n- `{ data?: { createdAt?: string; deletedAt?: string; failedSyncAttempts?: number; isAconexSynced?: boolean; isAconexWorkflowsSynced?: boolean; isAsiteDocumentsSynced?: boolean; isAsiteFormsSynced?: boolean; isAutodeskBim360ChecklistsSynced?: boolean; isAutodeskBim360IssuesSynced?: boolean; isAutodeskBim360ModelsSynced?: boolean; isAutodeskBim360Synced?: boolean; isAutodeskBim360UsersSynced?: boolean; isDeleted?: boolean; isMortaColumnsSynced?: boolean; isMortaCommentsSynced?: boolean; isMortaProjectsSynced?: boolean; isMortaResourcesSynced?: boolean; isMortaSynced?: boolean; isMortaUsersSynced?: boolean; isProcoreSynced?: boolean; isReviztoIssuesSynced?: boolean; isSynced?: boolean; isSyncing?: boolean; isViewpointRfisSynced?: boolean; isViewpointSynced?: boolean; lastSync?: string; name?: string; publicId?: string; syncHourlyFrequency?: number; type?: string; updatedAt?: string; }; }`\n\n  - `data?: { createdAt?: string; deletedAt?: string; failedSyncAttempts?: number; isAconexSynced?: boolean; isAconexWorkflowsSynced?: boolean; isAsiteDocumentsSynced?: boolean; isAsiteFormsSynced?: boolean; isAutodeskBim360ChecklistsSynced?: boolean; isAutodeskBim360IssuesSynced?: boolean; isAutodeskBim360ModelsSynced?: boolean; isAutodeskBim360Synced?: boolean; isAutodeskBim360UsersSynced?: boolean; isDeleted?: boolean; isMortaColumnsSynced?: boolean; isMortaCommentsSynced?: boolean; isMortaProjectsSynced?: boolean; isMortaResourcesSynced?: boolean; isMortaSynced?: boolean; isMortaUsersSynced?: boolean; isProcoreSynced?: boolean; isReviztoIssuesSynced?: boolean; isSynced?: boolean; isSyncing?: boolean; isViewpointRfisSynced?: boolean; isViewpointSynced?: boolean; lastSync?: string; name?: string; publicId?: string; syncHourlyFrequency?: number; type?: string; updatedAt?: string; }`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.sync.getSyncInfo('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.sync.getSyncInfo',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.sync.getSyncInfo('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'table.sync.get_sync_info',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.sync.get_sync_info(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/$TABLE_ID/sync/info \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/table/{table_id}/views',
    httpMethod: 'post',
    summary: 'Create a new view for a table',
    description: 'Create a new view for a specific table.',
    stainlessPath: '(resource) table.views > (method) create',
    qualified: 'client.table.views.create',
    params: [
      'table_id: string;',
      'name: string;',
      'allowContributorDelete?: boolean;',
      "chartSettings?: object | { aggregate?: 'sum' | 'count' | 'avg'; chartType?: string; columnGanttEndDateId?: string; columnGanttStartDateId?: string; columnLabelId?: string; columnStackId?: string; columnValueId?: string; showLegend?: boolean; showTitle?: boolean; showValues?: boolean; sortAggregate?: 'asc' | 'desc'; };",
      'collapsedGroupView?: boolean;',
      'colourSettings?: { backgroundColour: string; columnName: string; filterType: string; fontColour: string; columnId?: string; multipleValues?: object[]; value?: object; }[];',
      'columns?: { columnName: string; columnId?: string; description?: { content: { blocks: object[]; entityMap: object; }; } | object; displayValidationError?: boolean; hardValidation?: boolean; locked?: boolean; required?: boolean; stringValidation?: string; validationMessage?: string; validationNoBlanks?: boolean; validationNoDuplicates?: boolean; }[];',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
      'description?: object | { content: { blocks: { data: object; depth: number; entityRanges: object[]; inlineStyleRanges: object[]; key: string; text: string; type: string; }[]; entityMap: object; }; };',
      'disableNewRow?: boolean;',
      'disableSyncCsv?: boolean;',
      'displayCommentRows?: number;',
      'displayValidationErrorRows?: 0 | 1 | 2;',
      'filterSettings?: { columnName: string; filterType: string; columnId?: string; multipleValues?: object[]; orGroup?: string; value?: object; }[];',
      'frozenIndex?: number;',
      'groupSettings?: { columnName: string; direction: string; columnId?: string; }[];',
      'includeAllColumns?: boolean;',
      'isDefault?: boolean;',
      'rowHeight?: number;',
      'sortSettings?: { columnName: string; direction: string; columnId?: string; }[];',
      'type?: number;',
      'unpackMultiselectGroupView?: boolean;',
    ],
    response:
      '{ data?: { name: string; allowContributorDelete?: boolean; chartSettings?: chart; collapsedGroupView?: boolean; colourSettings?: colour[]; columns?: table_view_column[]; description?: draftjs; disableNewRow?: boolean; disableSyncCsv?: boolean; displayCommentRows?: number; displayValidationErrorRows?: number; filterSettings?: filter[]; frozenIndex?: number; groupSettings?: group[]; isDefault?: boolean; lockedFromDuplication?: boolean; publicId?: string; rowHeight?: number; sortSettings?: sort[]; type?: number; unpackMultiselectGroupView?: boolean; }; metadata?: object; }',
    markdown:
      "## create\n\n`client.table.views.create(table_id: string, name: string, allowContributorDelete?: boolean, chartSettings?: object | { aggregate?: 'sum' | 'count' | 'avg'; chartType?: string; columnGanttEndDateId?: string; columnGanttStartDateId?: string; columnLabelId?: string; columnStackId?: string; columnValueId?: string; showLegend?: boolean; showTitle?: boolean; showValues?: boolean; sortAggregate?: 'asc' | 'desc'; }, collapsedGroupView?: boolean, colourSettings?: { backgroundColour: string; columnName: string; filterType: string; fontColour: string; columnId?: string; multipleValues?: object[]; value?: object; }[], columns?: { columnName: string; columnId?: string; description?: object | object; displayValidationError?: boolean; hardValidation?: boolean; locked?: boolean; required?: boolean; stringValidation?: string; validationMessage?: string; validationNoBlanks?: boolean; validationNoDuplicates?: boolean; }[], context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }, description?: object | { content: object; }, disableNewRow?: boolean, disableSyncCsv?: boolean, displayCommentRows?: number, displayValidationErrorRows?: 0 | 1 | 2, filterSettings?: { columnName: string; filterType: string; columnId?: string; multipleValues?: object[]; orGroup?: string; value?: object; }[], frozenIndex?: number, groupSettings?: { columnName: string; direction: string; columnId?: string; }[], includeAllColumns?: boolean, isDefault?: boolean, rowHeight?: number, sortSettings?: { columnName: string; direction: string; columnId?: string; }[], type?: number, unpackMultiselectGroupView?: boolean): { data?: table_view; metadata?: object; }`\n\n**post** `/v1/table/{table_id}/views`\n\nCreate a new view for a specific table.\n\n### Parameters\n\n- `table_id: string`\n\n- `name: string`\n\n- `allowContributorDelete?: boolean`\n\n- `chartSettings?: object | { aggregate?: 'sum' | 'count' | 'avg'; chartType?: string; columnGanttEndDateId?: string; columnGanttStartDateId?: string; columnLabelId?: string; columnStackId?: string; columnValueId?: string; showLegend?: boolean; showTitle?: boolean; showValues?: boolean; sortAggregate?: 'asc' | 'desc'; }`\n\n- `collapsedGroupView?: boolean`\n\n- `colourSettings?: { backgroundColour: string; columnName: string; filterType: string; fontColour: string; columnId?: string; multipleValues?: object[]; value?: object; }[]`\n\n- `columns?: { columnName: string; columnId?: string; description?: { content: { blocks: object[]; entityMap: object; }; } | object; displayValidationError?: boolean; hardValidation?: boolean; locked?: boolean; required?: boolean; stringValidation?: string; validationMessage?: string; validationNoBlanks?: boolean; validationNoDuplicates?: boolean; }[]`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n- `description?: object | { content: { blocks: { data: object; depth: number; entityRanges: object[]; inlineStyleRanges: object[]; key: string; text: string; type: string; }[]; entityMap: object; }; }`\n\n- `disableNewRow?: boolean`\n\n- `disableSyncCsv?: boolean`\n\n- `displayCommentRows?: number`\n\n- `displayValidationErrorRows?: 0 | 1 | 2`\n\n- `filterSettings?: { columnName: string; filterType: string; columnId?: string; multipleValues?: object[]; orGroup?: string; value?: object; }[]`\n\n- `frozenIndex?: number`\n\n- `groupSettings?: { columnName: string; direction: string; columnId?: string; }[]`\n\n- `includeAllColumns?: boolean`\n\n- `isDefault?: boolean`\n\n- `rowHeight?: number`\n\n- `sortSettings?: { columnName: string; direction: string; columnId?: string; }[]`\n\n- `type?: number`\n\n- `unpackMultiselectGroupView?: boolean`\n\n### Returns\n\n- `{ data?: { name: string; allowContributorDelete?: boolean; chartSettings?: chart; collapsedGroupView?: boolean; colourSettings?: colour[]; columns?: table_view_column[]; description?: draftjs; disableNewRow?: boolean; disableSyncCsv?: boolean; displayCommentRows?: number; displayValidationErrorRows?: number; filterSettings?: filter[]; frozenIndex?: number; groupSettings?: group[]; isDefault?: boolean; lockedFromDuplication?: boolean; publicId?: string; rowHeight?: number; sortSettings?: sort[]; type?: number; unpackMultiselectGroupView?: boolean; }; metadata?: object; }`\n\n  - `data?: { name: string; allowContributorDelete?: boolean; chartSettings?: { aggregate?: 'sum' | 'count' | 'avg'; chartType?: string; columnGanttEndDateId?: string; columnGanttStartDateId?: string; columnLabelId?: string; columnStackId?: string; columnValueId?: string; showLegend?: boolean; showTitle?: boolean; showValues?: boolean; sortAggregate?: 'asc' | 'desc'; }; collapsedGroupView?: boolean; colourSettings?: { backgroundColour: string; columnName: string; filterType: string; fontColour: string; columnId?: string; multipleValues?: object[]; value?: object; }[]; columns?: { aggregate?: number; alterOptions?: table_column_alter | object; dateFormat?: string; decimalPlaces?: number; description?: object | draftjs; displayLink?: boolean; displayValidationError?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; hardValidation?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: select_options_lookup; locked?: boolean; name?: string; publicId?: string; required?: boolean; script?: string; scriptEnabled?: boolean; sortOrder?: number; stringValidation?: string; thousandSeparator?: boolean; validationMessage?: string; validationNoBlanks?: boolean; validationNoDuplicates?: boolean; width?: number; }[]; description?: { content: object; }; disableNewRow?: boolean; disableSyncCsv?: boolean; displayCommentRows?: number; displayValidationErrorRows?: number; filterSettings?: { columnName: string; filterType: string; columnId?: string; multipleValues?: object[]; orGroup?: string; value?: object; }[]; frozenIndex?: number; groupSettings?: { columnName: string; direction: string; columnId?: string; }[]; isDefault?: boolean; lockedFromDuplication?: boolean; publicId?: string; rowHeight?: number; sortSettings?: { columnName: string; direction: string; columnId?: string; }[]; type?: number; unpackMultiselectGroupView?: boolean; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst view = await client.table.views.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { name: 'x' });\n\nconsole.log(view);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.views.create',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst view = await client.table.views.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { name: 'x' });\n\nconsole.log(view.data);",
      },
      python: {
        method: 'table.views.create',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nview = client.table.views.create(\n    table_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    name="x",\n)\nprint(view.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/$TABLE_ID/views \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "name": "x"\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/table/{table_id}/views',
    httpMethod: 'get',
    summary: 'Get all views for a table',
    description: 'Retrieve all views associated with a specific table.',
    stainlessPath: '(resource) table.views > (method) list',
    qualified: 'client.table.views.list',
    params: ['table_id: string;', 'ignore_columns?: boolean;'],
    response:
      '{ data?: { name: string; allowContributorDelete?: boolean; chartSettings?: chart; collapsedGroupView?: boolean; colourSettings?: colour[]; columns?: table_view_column[]; description?: draftjs; disableNewRow?: boolean; disableSyncCsv?: boolean; displayCommentRows?: number; displayValidationErrorRows?: number; filterSettings?: filter[]; frozenIndex?: number; groupSettings?: group[]; isDefault?: boolean; lockedFromDuplication?: boolean; publicId?: string; rowHeight?: number; sortSettings?: sort[]; type?: number; unpackMultiselectGroupView?: boolean; }[]; metadata?: object; }',
    markdown:
      "## list\n\n`client.table.views.list(table_id: string, ignore_columns?: boolean): { data?: table_view[]; metadata?: object; }`\n\n**get** `/v1/table/{table_id}/views`\n\nRetrieve all views associated with a specific table.\n\n### Parameters\n\n- `table_id: string`\n\n- `ignore_columns?: boolean`\n  Flag to indicate whether to ignore column data in the response.\n\n### Returns\n\n- `{ data?: { name: string; allowContributorDelete?: boolean; chartSettings?: chart; collapsedGroupView?: boolean; colourSettings?: colour[]; columns?: table_view_column[]; description?: draftjs; disableNewRow?: boolean; disableSyncCsv?: boolean; displayCommentRows?: number; displayValidationErrorRows?: number; filterSettings?: filter[]; frozenIndex?: number; groupSettings?: group[]; isDefault?: boolean; lockedFromDuplication?: boolean; publicId?: string; rowHeight?: number; sortSettings?: sort[]; type?: number; unpackMultiselectGroupView?: boolean; }[]; metadata?: object; }`\n\n  - `data?: { name: string; allowContributorDelete?: boolean; chartSettings?: { aggregate?: 'sum' | 'count' | 'avg'; chartType?: string; columnGanttEndDateId?: string; columnGanttStartDateId?: string; columnLabelId?: string; columnStackId?: string; columnValueId?: string; showLegend?: boolean; showTitle?: boolean; showValues?: boolean; sortAggregate?: 'asc' | 'desc'; }; collapsedGroupView?: boolean; colourSettings?: { backgroundColour: string; columnName: string; filterType: string; fontColour: string; columnId?: string; multipleValues?: object[]; value?: object; }[]; columns?: { aggregate?: number; alterOptions?: table_column_alter | object; dateFormat?: string; decimalPlaces?: number; description?: object | draftjs; displayLink?: boolean; displayValidationError?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; hardValidation?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: select_options_lookup; locked?: boolean; name?: string; publicId?: string; required?: boolean; script?: string; scriptEnabled?: boolean; sortOrder?: number; stringValidation?: string; thousandSeparator?: boolean; validationMessage?: string; validationNoBlanks?: boolean; validationNoDuplicates?: boolean; width?: number; }[]; description?: { content: object; }; disableNewRow?: boolean; disableSyncCsv?: boolean; displayCommentRows?: number; displayValidationErrorRows?: number; filterSettings?: { columnName: string; filterType: string; columnId?: string; multipleValues?: object[]; orGroup?: string; value?: object; }[]; frozenIndex?: number; groupSettings?: { columnName: string; direction: string; columnId?: string; }[]; isDefault?: boolean; lockedFromDuplication?: boolean; publicId?: string; rowHeight?: number; sortSettings?: { columnName: string; direction: string; columnId?: string; }[]; type?: number; unpackMultiselectGroupView?: boolean; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst views = await client.table.views.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(views);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.views.list',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst views = await client.table.views.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(views.data);",
      },
      python: {
        method: 'table.views.list',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nviews = client.table.views.list(\n    table_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(views.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/$TABLE_ID/views \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'duplicate_default',
    endpoint: '/v1/table/{table_id}/views/duplicate-default',
    httpMethod: 'post',
    summary: 'Duplicate the default view for a table',
    description: 'Create a duplicate of the default view for a specific table.',
    stainlessPath: '(resource) table.views > (method) duplicate_default',
    qualified: 'client.table.views.duplicateDefault',
    params: [
      'table_id: string;',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
      'name?: string;',
      'type?: number;',
    ],
    response:
      '{ data?: { name: string; allowContributorDelete?: boolean; chartSettings?: chart; collapsedGroupView?: boolean; colourSettings?: colour[]; columns?: table_view_column[]; description?: draftjs; disableNewRow?: boolean; disableSyncCsv?: boolean; displayCommentRows?: number; displayValidationErrorRows?: number; filterSettings?: filter[]; frozenIndex?: number; groupSettings?: group[]; isDefault?: boolean; lockedFromDuplication?: boolean; publicId?: string; rowHeight?: number; sortSettings?: sort[]; type?: number; unpackMultiselectGroupView?: boolean; }; metadata?: object; }',
    markdown:
      "## duplicate_default\n\n`client.table.views.duplicateDefault(table_id: string, context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }, name?: string, type?: number): { data?: table_view; metadata?: object; }`\n\n**post** `/v1/table/{table_id}/views/duplicate-default`\n\nCreate a duplicate of the default view for a specific table.\n\n### Parameters\n\n- `table_id: string`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n- `name?: string`\n\n- `type?: number`\n\n### Returns\n\n- `{ data?: { name: string; allowContributorDelete?: boolean; chartSettings?: chart; collapsedGroupView?: boolean; colourSettings?: colour[]; columns?: table_view_column[]; description?: draftjs; disableNewRow?: boolean; disableSyncCsv?: boolean; displayCommentRows?: number; displayValidationErrorRows?: number; filterSettings?: filter[]; frozenIndex?: number; groupSettings?: group[]; isDefault?: boolean; lockedFromDuplication?: boolean; publicId?: string; rowHeight?: number; sortSettings?: sort[]; type?: number; unpackMultiselectGroupView?: boolean; }; metadata?: object; }`\n\n  - `data?: { name: string; allowContributorDelete?: boolean; chartSettings?: { aggregate?: 'sum' | 'count' | 'avg'; chartType?: string; columnGanttEndDateId?: string; columnGanttStartDateId?: string; columnLabelId?: string; columnStackId?: string; columnValueId?: string; showLegend?: boolean; showTitle?: boolean; showValues?: boolean; sortAggregate?: 'asc' | 'desc'; }; collapsedGroupView?: boolean; colourSettings?: { backgroundColour: string; columnName: string; filterType: string; fontColour: string; columnId?: string; multipleValues?: object[]; value?: object; }[]; columns?: { aggregate?: number; alterOptions?: table_column_alter | object; dateFormat?: string; decimalPlaces?: number; description?: object | draftjs; displayLink?: boolean; displayValidationError?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; hardValidation?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: select_options_lookup; locked?: boolean; name?: string; publicId?: string; required?: boolean; script?: string; scriptEnabled?: boolean; sortOrder?: number; stringValidation?: string; thousandSeparator?: boolean; validationMessage?: string; validationNoBlanks?: boolean; validationNoDuplicates?: boolean; width?: number; }[]; description?: { content: object; }; disableNewRow?: boolean; disableSyncCsv?: boolean; displayCommentRows?: number; displayValidationErrorRows?: number; filterSettings?: { columnName: string; filterType: string; columnId?: string; multipleValues?: object[]; orGroup?: string; value?: object; }[]; frozenIndex?: number; groupSettings?: { columnName: string; direction: string; columnId?: string; }[]; isDefault?: boolean; lockedFromDuplication?: boolean; publicId?: string; rowHeight?: number; sortSettings?: { columnName: string; direction: string; columnId?: string; }[]; type?: number; unpackMultiselectGroupView?: boolean; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.views.duplicateDefault('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.views.duplicateDefault',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.views.duplicateDefault('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'table.views.duplicate_default',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.views.duplicate_default(\n    table_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          "curl https://api.morta.io/v1/table/$TABLE_ID/views/duplicate-default \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $MORTA_API_KEY\" \\\n    -d '{}'",
      },
    },
  },
  {
    name: 'duplicate',
    endpoint: '/v1/table/{table_id}/views/{view_id}/duplicate',
    httpMethod: 'post',
    summary: 'Duplicate a view for a table',
    description: 'Create a duplicate of an existing view for a specific table.',
    stainlessPath: '(resource) table.views > (method) duplicate',
    qualified: 'client.table.views.duplicate',
    params: ['table_id: string;', 'view_id: string;'],
    response:
      '{ data?: { name: string; allowContributorDelete?: boolean; chartSettings?: chart; collapsedGroupView?: boolean; colourSettings?: colour[]; columns?: table_view_column[]; description?: draftjs; disableNewRow?: boolean; disableSyncCsv?: boolean; displayCommentRows?: number; displayValidationErrorRows?: number; filterSettings?: filter[]; frozenIndex?: number; groupSettings?: group[]; isDefault?: boolean; lockedFromDuplication?: boolean; publicId?: string; rowHeight?: number; sortSettings?: sort[]; type?: number; unpackMultiselectGroupView?: boolean; }; metadata?: object; }',
    markdown:
      "## duplicate\n\n`client.table.views.duplicate(table_id: string, view_id: string): { data?: table_view; metadata?: object; }`\n\n**post** `/v1/table/{table_id}/views/{view_id}/duplicate`\n\nCreate a duplicate of an existing view for a specific table.\n\n### Parameters\n\n- `table_id: string`\n\n- `view_id: string`\n\n### Returns\n\n- `{ data?: { name: string; allowContributorDelete?: boolean; chartSettings?: chart; collapsedGroupView?: boolean; colourSettings?: colour[]; columns?: table_view_column[]; description?: draftjs; disableNewRow?: boolean; disableSyncCsv?: boolean; displayCommentRows?: number; displayValidationErrorRows?: number; filterSettings?: filter[]; frozenIndex?: number; groupSettings?: group[]; isDefault?: boolean; lockedFromDuplication?: boolean; publicId?: string; rowHeight?: number; sortSettings?: sort[]; type?: number; unpackMultiselectGroupView?: boolean; }; metadata?: object; }`\n\n  - `data?: { name: string; allowContributorDelete?: boolean; chartSettings?: { aggregate?: 'sum' | 'count' | 'avg'; chartType?: string; columnGanttEndDateId?: string; columnGanttStartDateId?: string; columnLabelId?: string; columnStackId?: string; columnValueId?: string; showLegend?: boolean; showTitle?: boolean; showValues?: boolean; sortAggregate?: 'asc' | 'desc'; }; collapsedGroupView?: boolean; colourSettings?: { backgroundColour: string; columnName: string; filterType: string; fontColour: string; columnId?: string; multipleValues?: object[]; value?: object; }[]; columns?: { aggregate?: number; alterOptions?: table_column_alter | object; dateFormat?: string; decimalPlaces?: number; description?: object | draftjs; displayLink?: boolean; displayValidationError?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; hardValidation?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: select_options_lookup; locked?: boolean; name?: string; publicId?: string; required?: boolean; script?: string; scriptEnabled?: boolean; sortOrder?: number; stringValidation?: string; thousandSeparator?: boolean; validationMessage?: string; validationNoBlanks?: boolean; validationNoDuplicates?: boolean; width?: number; }[]; description?: { content: object; }; disableNewRow?: boolean; disableSyncCsv?: boolean; displayCommentRows?: number; displayValidationErrorRows?: number; filterSettings?: { columnName: string; filterType: string; columnId?: string; multipleValues?: object[]; orGroup?: string; value?: object; }[]; frozenIndex?: number; groupSettings?: { columnName: string; direction: string; columnId?: string; }[]; isDefault?: boolean; lockedFromDuplication?: boolean; publicId?: string; rowHeight?: number; sortSettings?: { columnName: string; direction: string; columnId?: string; }[]; type?: number; unpackMultiselectGroupView?: boolean; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.views.duplicate('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.views.duplicate',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.views.duplicate('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'table.views.duplicate',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.views.duplicate(\n    view_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    table_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/$TABLE_ID/views/$VIEW_ID/duplicate \\\n    -X POST \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/table/views/{view_id}',
    httpMethod: 'get',
    summary: 'Get a single view for a table',
    description: 'Retrieve a specific view by its ID for a table.',
    stainlessPath: '(resource) table.views > (method) retrieve',
    qualified: 'client.table.views.retrieve',
    params: ['view_id: string;', 'ignore_cached_options?: boolean;'],
    response:
      '{ data?: { name: string; allowContributorDelete?: boolean; chartSettings?: object; collapsedGroupView?: boolean; colourSettings?: object[]; columns?: object[]; description?: object; disableNewRow?: boolean; disableSyncCsv?: boolean; displayCommentRows?: number; displayValidationErrorRows?: number; documentTable?: { createdAt?: string; name?: string; publicId?: string; type?: string; updatedAt?: string; }; filterSettings?: object[]; frozenIndex?: number; groupSettings?: object[]; isDefault?: boolean; lockedFromDuplication?: boolean; publicId?: string; rowHeight?: number; sortSettings?: object[]; type?: number; unpackMultiselectGroupView?: boolean; }; metadata?: object; }',
    markdown:
      "## retrieve\n\n`client.table.views.retrieve(view_id: string, ignore_cached_options?: boolean): { data?: object; metadata?: object; }`\n\n**get** `/v1/table/views/{view_id}`\n\nRetrieve a specific view by its ID for a table.\n\n### Parameters\n\n- `view_id: string`\n\n- `ignore_cached_options?: boolean`\n  Flag to indicate whether to ignore cached options in the response.\n\n### Returns\n\n- `{ data?: { name: string; allowContributorDelete?: boolean; chartSettings?: object; collapsedGroupView?: boolean; colourSettings?: object[]; columns?: object[]; description?: object; disableNewRow?: boolean; disableSyncCsv?: boolean; displayCommentRows?: number; displayValidationErrorRows?: number; documentTable?: { createdAt?: string; name?: string; publicId?: string; type?: string; updatedAt?: string; }; filterSettings?: object[]; frozenIndex?: number; groupSettings?: object[]; isDefault?: boolean; lockedFromDuplication?: boolean; publicId?: string; rowHeight?: number; sortSettings?: object[]; type?: number; unpackMultiselectGroupView?: boolean; }; metadata?: object; }`\n\n  - `data?: { name: string; allowContributorDelete?: boolean; chartSettings?: { aggregate?: 'sum' | 'count' | 'avg'; chartType?: string; columnGanttEndDateId?: string; columnGanttStartDateId?: string; columnLabelId?: string; columnStackId?: string; columnValueId?: string; showLegend?: boolean; showTitle?: boolean; showValues?: boolean; sortAggregate?: 'asc' | 'desc'; }; collapsedGroupView?: boolean; colourSettings?: { backgroundColour: string; columnName: string; filterType: string; fontColour: string; columnId?: string; multipleValues?: object[]; value?: object; }[]; columns?: { aggregate?: number; alterOptions?: object | object; dateFormat?: string; decimalPlaces?: number; description?: object | object; displayLink?: boolean; displayValidationError?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; hardValidation?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: object; locked?: boolean; name?: string; publicId?: string; required?: boolean; script?: string; scriptEnabled?: boolean; sortOrder?: number; stringValidation?: string; thousandSeparator?: boolean; validationMessage?: string; validationNoBlanks?: boolean; validationNoDuplicates?: boolean; width?: number; }[]; description?: { content: { blocks: object[]; entityMap: object; }; }; disableNewRow?: boolean; disableSyncCsv?: boolean; displayCommentRows?: number; displayValidationErrorRows?: number; documentTable?: { createdAt?: string; name?: string; publicId?: string; type?: string; updatedAt?: string; }; filterSettings?: { columnName: string; filterType: string; columnId?: string; multipleValues?: object[]; orGroup?: string; value?: object; }[]; frozenIndex?: number; groupSettings?: { columnName: string; direction: string; columnId?: string; }[]; isDefault?: boolean; lockedFromDuplication?: boolean; publicId?: string; rowHeight?: number; sortSettings?: { columnName: string; direction: string; columnId?: string; }[]; type?: number; unpackMultiselectGroupView?: boolean; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst view = await client.table.views.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(view);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.views.retrieve',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst view = await client.table.views.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(view.data);",
      },
      python: {
        method: 'table.views.retrieve',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nview = client.table.views.retrieve(\n    view_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(view.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/views/$VIEW_ID \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/table/views/{view_id}',
    httpMethod: 'put',
    summary: 'Update a view for a table',
    description: 'Update an existing view for a specific table.',
    stainlessPath: '(resource) table.views > (method) update',
    qualified: 'client.table.views.update',
    params: [
      'view_id: string;',
      'allowContributorDelete?: boolean;',
      "chartSettings?: object | { aggregate?: 'sum' | 'count' | 'avg'; chartType?: string; columnGanttEndDateId?: string; columnGanttStartDateId?: string; columnLabelId?: string; columnStackId?: string; columnValueId?: string; showLegend?: boolean; showTitle?: boolean; showValues?: boolean; sortAggregate?: 'asc' | 'desc'; };",
      'collapsedGroupView?: boolean;',
      'colourSettings?: { backgroundColour: string; columnName: string; filterType: string; fontColour: string; columnId?: string; multipleValues?: object[]; value?: object; }[];',
      "columns?: { aggregate?: number; alterOptions?: { dateConversionFormat?: 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'ISO8601' | 'DD-Mon-YY'; runScriptOnAllCells?: boolean; } | object; context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }; dateFormat?: string; decimalPlaces?: number; description?: object | { content: object; }; displayLink?: boolean; displayValidationError?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; hardValidation?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: { autopopulate?: boolean; manualOptions?: string[]; tableOptions?: object; }; locked?: boolean; name?: string; publicId?: string; required?: boolean; script?: string; scriptEnabled?: boolean; sortOrder?: number; stringValidation?: string; thousandSeparator?: boolean; validationMessage?: string; validationNoBlanks?: boolean; validationNoDuplicates?: boolean; width?: number; }[];",
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
      'description?: object | { content: { blocks: { data: object; depth: number; entityRanges: object[]; inlineStyleRanges: object[]; key: string; text: string; type: string; }[]; entityMap: object; }; };',
      'disableNewRow?: boolean;',
      'disableSyncCsv?: boolean;',
      'displayCommentRows?: number;',
      'displayValidationErrorRows?: 0 | 1 | 2;',
      'filterSettings?: { columnName: string; filterType: string; columnId?: string; multipleValues?: object[]; orGroup?: string; value?: object; }[];',
      'frozenIndex?: number;',
      'groupSettings?: { columnName: string; direction: string; columnId?: string; }[];',
      'name?: string;',
      'rowHeight?: number;',
      'sortSettings?: { columnName: string; direction: string; columnId?: string; }[];',
      'type?: number;',
      'unpackMultiselectGroupView?: boolean;',
    ],
    response:
      '{ data?: { name: string; allowContributorDelete?: boolean; chartSettings?: chart; collapsedGroupView?: boolean; colourSettings?: colour[]; columns?: table_view_column[]; description?: draftjs; disableNewRow?: boolean; disableSyncCsv?: boolean; displayCommentRows?: number; displayValidationErrorRows?: number; filterSettings?: filter[]; frozenIndex?: number; groupSettings?: group[]; isDefault?: boolean; lockedFromDuplication?: boolean; publicId?: string; rowHeight?: number; sortSettings?: sort[]; type?: number; unpackMultiselectGroupView?: boolean; }; metadata?: object; }',
    markdown:
      "## update\n\n`client.table.views.update(view_id: string, allowContributorDelete?: boolean, chartSettings?: object | { aggregate?: 'sum' | 'count' | 'avg'; chartType?: string; columnGanttEndDateId?: string; columnGanttStartDateId?: string; columnLabelId?: string; columnStackId?: string; columnValueId?: string; showLegend?: boolean; showTitle?: boolean; showValues?: boolean; sortAggregate?: 'asc' | 'desc'; }, collapsedGroupView?: boolean, colourSettings?: { backgroundColour: string; columnName: string; filterType: string; fontColour: string; columnId?: string; multipleValues?: object[]; value?: object; }[], columns?: { aggregate?: number; alterOptions?: table_column_alter | object; context?: base_request_context; dateFormat?: string; decimalPlaces?: number; description?: object | draftjs; displayLink?: boolean; displayValidationError?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; hardValidation?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: select_options_lookup; locked?: boolean; name?: string; publicId?: string; required?: boolean; script?: string; scriptEnabled?: boolean; sortOrder?: number; stringValidation?: string; thousandSeparator?: boolean; validationMessage?: string; validationNoBlanks?: boolean; validationNoDuplicates?: boolean; width?: number; }[], context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }, description?: object | { content: object; }, disableNewRow?: boolean, disableSyncCsv?: boolean, displayCommentRows?: number, displayValidationErrorRows?: 0 | 1 | 2, filterSettings?: { columnName: string; filterType: string; columnId?: string; multipleValues?: object[]; orGroup?: string; value?: object; }[], frozenIndex?: number, groupSettings?: { columnName: string; direction: string; columnId?: string; }[], name?: string, rowHeight?: number, sortSettings?: { columnName: string; direction: string; columnId?: string; }[], type?: number, unpackMultiselectGroupView?: boolean): { data?: table_view; metadata?: object; }`\n\n**put** `/v1/table/views/{view_id}`\n\nUpdate an existing view for a specific table.\n\n### Parameters\n\n- `view_id: string`\n\n- `allowContributorDelete?: boolean`\n\n- `chartSettings?: object | { aggregate?: 'sum' | 'count' | 'avg'; chartType?: string; columnGanttEndDateId?: string; columnGanttStartDateId?: string; columnLabelId?: string; columnStackId?: string; columnValueId?: string; showLegend?: boolean; showTitle?: boolean; showValues?: boolean; sortAggregate?: 'asc' | 'desc'; }`\n\n- `collapsedGroupView?: boolean`\n\n- `colourSettings?: { backgroundColour: string; columnName: string; filterType: string; fontColour: string; columnId?: string; multipleValues?: object[]; value?: object; }[]`\n\n- `columns?: { aggregate?: number; alterOptions?: { dateConversionFormat?: 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'ISO8601' | 'DD-Mon-YY'; runScriptOnAllCells?: boolean; } | object; context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }; dateFormat?: string; decimalPlaces?: number; description?: object | { content: object; }; displayLink?: boolean; displayValidationError?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; hardValidation?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: { autopopulate?: boolean; manualOptions?: string[]; tableOptions?: object; }; locked?: boolean; name?: string; publicId?: string; required?: boolean; script?: string; scriptEnabled?: boolean; sortOrder?: number; stringValidation?: string; thousandSeparator?: boolean; validationMessage?: string; validationNoBlanks?: boolean; validationNoDuplicates?: boolean; width?: number; }[]`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n- `description?: object | { content: { blocks: { data: object; depth: number; entityRanges: object[]; inlineStyleRanges: object[]; key: string; text: string; type: string; }[]; entityMap: object; }; }`\n\n- `disableNewRow?: boolean`\n\n- `disableSyncCsv?: boolean`\n\n- `displayCommentRows?: number`\n\n- `displayValidationErrorRows?: 0 | 1 | 2`\n\n- `filterSettings?: { columnName: string; filterType: string; columnId?: string; multipleValues?: object[]; orGroup?: string; value?: object; }[]`\n\n- `frozenIndex?: number`\n\n- `groupSettings?: { columnName: string; direction: string; columnId?: string; }[]`\n\n- `name?: string`\n\n- `rowHeight?: number`\n\n- `sortSettings?: { columnName: string; direction: string; columnId?: string; }[]`\n\n- `type?: number`\n\n- `unpackMultiselectGroupView?: boolean`\n\n### Returns\n\n- `{ data?: { name: string; allowContributorDelete?: boolean; chartSettings?: chart; collapsedGroupView?: boolean; colourSettings?: colour[]; columns?: table_view_column[]; description?: draftjs; disableNewRow?: boolean; disableSyncCsv?: boolean; displayCommentRows?: number; displayValidationErrorRows?: number; filterSettings?: filter[]; frozenIndex?: number; groupSettings?: group[]; isDefault?: boolean; lockedFromDuplication?: boolean; publicId?: string; rowHeight?: number; sortSettings?: sort[]; type?: number; unpackMultiselectGroupView?: boolean; }; metadata?: object; }`\n\n  - `data?: { name: string; allowContributorDelete?: boolean; chartSettings?: { aggregate?: 'sum' | 'count' | 'avg'; chartType?: string; columnGanttEndDateId?: string; columnGanttStartDateId?: string; columnLabelId?: string; columnStackId?: string; columnValueId?: string; showLegend?: boolean; showTitle?: boolean; showValues?: boolean; sortAggregate?: 'asc' | 'desc'; }; collapsedGroupView?: boolean; colourSettings?: { backgroundColour: string; columnName: string; filterType: string; fontColour: string; columnId?: string; multipleValues?: object[]; value?: object; }[]; columns?: { aggregate?: number; alterOptions?: table_column_alter | object; dateFormat?: string; decimalPlaces?: number; description?: object | draftjs; displayLink?: boolean; displayValidationError?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; hardValidation?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: select_options_lookup; locked?: boolean; name?: string; publicId?: string; required?: boolean; script?: string; scriptEnabled?: boolean; sortOrder?: number; stringValidation?: string; thousandSeparator?: boolean; validationMessage?: string; validationNoBlanks?: boolean; validationNoDuplicates?: boolean; width?: number; }[]; description?: { content: object; }; disableNewRow?: boolean; disableSyncCsv?: boolean; displayCommentRows?: number; displayValidationErrorRows?: number; filterSettings?: { columnName: string; filterType: string; columnId?: string; multipleValues?: object[]; orGroup?: string; value?: object; }[]; frozenIndex?: number; groupSettings?: { columnName: string; direction: string; columnId?: string; }[]; isDefault?: boolean; lockedFromDuplication?: boolean; publicId?: string; rowHeight?: number; sortSettings?: { columnName: string; direction: string; columnId?: string; }[]; type?: number; unpackMultiselectGroupView?: boolean; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst view = await client.table.views.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(view);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.views.update',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst view = await client.table.views.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(view.data);",
      },
      python: {
        method: 'table.views.update',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nview = client.table.views.update(\n    view_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(view.data)',
      },
      http: {
        example:
          "curl https://api.morta.io/v1/table/views/$VIEW_ID \\\n    -X PUT \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $MORTA_API_KEY\" \\\n    -d '{}'",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/table/views/{view_id}',
    httpMethod: 'delete',
    summary: 'Delete a view for a table',
    description: 'Delete a specific view of a table.',
    stainlessPath: '(resource) table.views > (method) delete',
    qualified: 'client.table.views.delete',
    params: ['view_id: string;'],
    response: '{ data?: string; metadata?: object; }',
    markdown:
      "## delete\n\n`client.table.views.delete(view_id: string): { data?: string; metadata?: object; }`\n\n**delete** `/v1/table/views/{view_id}`\n\nDelete a specific view of a table.\n\n### Parameters\n\n- `view_id: string`\n\n### Returns\n\n- `{ data?: string; metadata?: object; }`\n\n  - `data?: string`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst view = await client.table.views.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(view);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.views.delete',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst view = await client.table.views.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(view.data);",
      },
      python: {
        method: 'table.views.delete',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nview = client.table.views.delete(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(view.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/views/$VIEW_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'stats',
    endpoint: '/v1/table/views/{view_id}/stats',
    httpMethod: 'get',
    summary: 'Get stats on table columns',
    description: 'Retrieve statistical data for columns in a specific table view.',
    stainlessPath: '(resource) table.views > (method) stats',
    qualified: 'client.table.views.stats',
    params: [
      'view_id: string;',
      'filter?: string;',
      'process_id?: string;',
      'sum, avg, max, min, count?: string[];',
    ],
    response: '{ data?: { aggregation?: object; name?: string; publicId?: string; }[]; metadata?: object; }',
    markdown:
      "## stats\n\n`client.table.views.stats(view_id: string, filter?: string, process_id?: string, sum, avg, max, min, count?: string[]): { data?: table_column_with_aggregation[]; metadata?: object; }`\n\n**get** `/v1/table/views/{view_id}/stats`\n\nRetrieve statistical data for columns in a specific table view.\n\n### Parameters\n\n- `view_id: string`\n\n- `filter?: string`\n  Filters to apply to the statistical data retrieval.\n\n- `process_id?: string`\n  Optional UUID of a process to filter the data.\n\n- `sum, avg, max, min, count?: string[]`\n  Specify columns to perform sum, average, max, min, or count operations.\n\n### Returns\n\n- `{ data?: { aggregation?: object; name?: string; publicId?: string; }[]; metadata?: object; }`\n\n  - `data?: { aggregation?: { name?: string; value?: number; }; name?: string; publicId?: string; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.views.stats('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.views.stats',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.views.stats('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'table.views.stats',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.views.stats(\n    view_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/views/$VIEW_ID/stats \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'download_csv',
    endpoint: '/v1/table/views/{view_id}/csv',
    httpMethod: 'get',
    summary: 'Download view data as a csv file',
    description: 'Download the data of a specific table view in CSV format.',
    stainlessPath: '(resource) table.views > (method) download_csv',
    qualified: 'client.table.views.downloadCsv',
    params: ['view_id: string;', 'filter?: string;', 'process_id?: string;', 'sort?: string;'],
    response: 'string',
    markdown:
      "## download_csv\n\n`client.table.views.downloadCsv(view_id: string, filter?: string, process_id?: string, sort?: string): string`\n\n**get** `/v1/table/views/{view_id}/csv`\n\nDownload the data of a specific table view in CSV format.\n\n### Parameters\n\n- `view_id: string`\n\n- `filter?: string`\n  Filters to apply to the CSV data.\n\n- `process_id?: string`\n  Optional UUID of a process to filter the data.\n\n- `sort?: string`\n  Sorting parameters for the CSV data.\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.views.downloadCsv('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.views.downloadCsv',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.views.downloadCsv('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);",
      },
      python: {
        method: 'table.views.download_csv',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.views.download_csv(\n    view_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/views/$VIEW_ID/csv \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'set_default',
    endpoint: '/v1/table/views/{view_id}/default',
    httpMethod: 'post',
    summary: 'Set the view as the default view',
    description: 'Designate a specific table view as the default view for the table.',
    stainlessPath: '(resource) table.views > (method) set_default',
    qualified: 'client.table.views.setDefault',
    params: ['view_id: string;'],
    response:
      '{ data?: { name: string; allowContributorDelete?: boolean; chartSettings?: chart; collapsedGroupView?: boolean; colourSettings?: colour[]; columns?: table_view_column[]; description?: draftjs; disableNewRow?: boolean; disableSyncCsv?: boolean; displayCommentRows?: number; displayValidationErrorRows?: number; filterSettings?: filter[]; frozenIndex?: number; groupSettings?: group[]; isDefault?: boolean; lockedFromDuplication?: boolean; publicId?: string; rowHeight?: number; sortSettings?: sort[]; type?: number; unpackMultiselectGroupView?: boolean; }; metadata?: object; }',
    markdown:
      "## set_default\n\n`client.table.views.setDefault(view_id: string): { data?: table_view; metadata?: object; }`\n\n**post** `/v1/table/views/{view_id}/default`\n\nDesignate a specific table view as the default view for the table.\n\n### Parameters\n\n- `view_id: string`\n\n### Returns\n\n- `{ data?: { name: string; allowContributorDelete?: boolean; chartSettings?: chart; collapsedGroupView?: boolean; colourSettings?: colour[]; columns?: table_view_column[]; description?: draftjs; disableNewRow?: boolean; disableSyncCsv?: boolean; displayCommentRows?: number; displayValidationErrorRows?: number; filterSettings?: filter[]; frozenIndex?: number; groupSettings?: group[]; isDefault?: boolean; lockedFromDuplication?: boolean; publicId?: string; rowHeight?: number; sortSettings?: sort[]; type?: number; unpackMultiselectGroupView?: boolean; }; metadata?: object; }`\n\n  - `data?: { name: string; allowContributorDelete?: boolean; chartSettings?: { aggregate?: 'sum' | 'count' | 'avg'; chartType?: string; columnGanttEndDateId?: string; columnGanttStartDateId?: string; columnLabelId?: string; columnStackId?: string; columnValueId?: string; showLegend?: boolean; showTitle?: boolean; showValues?: boolean; sortAggregate?: 'asc' | 'desc'; }; collapsedGroupView?: boolean; colourSettings?: { backgroundColour: string; columnName: string; filterType: string; fontColour: string; columnId?: string; multipleValues?: object[]; value?: object; }[]; columns?: { aggregate?: number; alterOptions?: table_column_alter | object; dateFormat?: string; decimalPlaces?: number; description?: object | draftjs; displayLink?: boolean; displayValidationError?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; hardValidation?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: select_options_lookup; locked?: boolean; name?: string; publicId?: string; required?: boolean; script?: string; scriptEnabled?: boolean; sortOrder?: number; stringValidation?: string; thousandSeparator?: boolean; validationMessage?: string; validationNoBlanks?: boolean; validationNoDuplicates?: boolean; width?: number; }[]; description?: { content: object; }; disableNewRow?: boolean; disableSyncCsv?: boolean; displayCommentRows?: number; displayValidationErrorRows?: number; filterSettings?: { columnName: string; filterType: string; columnId?: string; multipleValues?: object[]; orGroup?: string; value?: object; }[]; frozenIndex?: number; groupSettings?: { columnName: string; direction: string; columnId?: string; }[]; isDefault?: boolean; lockedFromDuplication?: boolean; publicId?: string; rowHeight?: number; sortSettings?: { columnName: string; direction: string; columnId?: string; }[]; type?: number; unpackMultiselectGroupView?: boolean; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.views.setDefault('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.views.setDefault',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.views.setDefault('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'table.views.set_default',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.views.set_default(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/views/$VIEW_ID/default \\\n    -X POST \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'preview_row',
    endpoint: '/v1/table/views/{view_id}/preview-row',
    httpMethod: 'post',
    summary: 'Preview resulting row from inputs',
    description: 'Preview the resulting row from given inputs in a specific table view.',
    stainlessPath: '(resource) table.views > (method) preview_row',
    qualified: 'client.table.views.previewRow',
    params: [
      'view_id: string;',
      'rowData: object;',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
    ],
    response: '{ data?: { publicId?: string; rowData?: object; sortOrder?: number; }; metadata?: object; }',
    markdown:
      "## preview_row\n\n`client.table.views.previewRow(view_id: string, rowData: object, context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }): { data?: object; metadata?: object; }`\n\n**post** `/v1/table/views/{view_id}/preview-row`\n\nPreview the resulting row from given inputs in a specific table view.\n\n### Parameters\n\n- `view_id: string`\n\n- `rowData: object`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n### Returns\n\n- `{ data?: { publicId?: string; rowData?: object; sortOrder?: number; }; metadata?: object; }`\n\n  - `data?: { publicId?: string; rowData?: object; sortOrder?: number; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.views.previewRow('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { rowData: { foo: 'bar' } });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.views.previewRow',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.views.previewRow('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  rowData: { foo: 'bar' },\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'table.views.preview_row',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.views.preview_row(\n    view_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    row_data={\n        "foo": "bar"\n    },\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/views/$VIEW_ID/preview-row \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "rowData": {\n            "foo": "bar"\n          }\n        }\'',
      },
    },
  },
  {
    name: 'update_cells',
    endpoint: '/v1/table/views/{view_id}/cells',
    httpMethod: 'put',
    summary: 'Update existing table cells',
    description: 'Update specific cells in a table view.',
    stainlessPath: '(resource) table.views > (method) update_cells',
    qualified: 'client.table.views.updateCells',
    params: [
      'view_id: string;',
      'cells: { columnName: string; rowId: string; value: object; context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }; }[];',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
    ],
    response: '{ data?: { publicId?: string; rowData?: object; sortOrder?: number; }[]; metadata?: object; }',
    markdown:
      "## update_cells\n\n`client.table.views.updateCells(view_id: string, cells: { columnName: string; rowId: string; value: object; context?: object; }[], context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }): { data?: object[]; metadata?: object; }`\n\n**put** `/v1/table/views/{view_id}/cells`\n\nUpdate specific cells in a table view.\n\n### Parameters\n\n- `view_id: string`\n\n- `cells: { columnName: string; rowId: string; value: object; context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }; }[]`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n### Returns\n\n- `{ data?: { publicId?: string; rowData?: object; sortOrder?: number; }[]; metadata?: object; }`\n\n  - `data?: { publicId?: string; rowData?: object; sortOrder?: number; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.views.updateCells('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { cells: [{\n  columnName: 'x',\n  rowId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  value: {},\n}] });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.views.updateCells',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.views.updateCells('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  cells: [\n    {\n      columnName: 'x',\n      rowId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n      value: {},\n    },\n  ],\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'table.views.update_cells',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.views.update_cells(\n    view_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    cells=[{\n        "column_name": "x",\n        "row_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n        "value": {},\n    }],\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/views/$VIEW_ID/cells \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "cells": [\n            {\n              "columnName": "x",\n              "rowId": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n              "value": {}\n            }\n          ]\n        }\'',
      },
    },
  },
  {
    name: 'stream_rows',
    endpoint: '/v1/table/views/{view_id}/rows-stream',
    httpMethod: 'get',
    summary: 'Stream all rows for the view',
    description: 'Stream the data of all rows for a specific table view.',
    stainlessPath: '(resource) table.views > (method) stream_rows',
    qualified: 'client.table.views.streamRows',
    params: [
      'view_id: string;',
      'filter?: string;',
      'page?: number;',
      'process_id?: string;',
      'size?: number;',
      'sort?: string;',
    ],
    response: 'string',
    markdown:
      "## stream_rows\n\n`client.table.views.streamRows(view_id: string, filter?: string, page?: number, process_id?: string, size?: number, sort?: string): string`\n\n**get** `/v1/table/views/{view_id}/rows-stream`\n\nStream the data of all rows for a specific table view.\n\n### Parameters\n\n- `view_id: string`\n\n- `filter?: string`\n  Filters to apply to the streaming data.\n\n- `page?: number`\n  Page number for pagination\n\n- `process_id?: string`\n  Optional UUID of a process to filter the data.\n\n- `size?: number`\n  Number of items per page for pagination\n\n- `sort?: string`\n  Sorting parameters for the streaming data.\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.views.streamRows('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n\nconst content = await response.blob()\nconsole.log(content)\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.views.streamRows',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.views.streamRows('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n\nconst content = await response.blob();\nconsole.log(content);",
      },
      python: {
        method: 'table.views.stream_rows',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.views.stream_rows(\n    view_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response)\ncontent = response.read()\nprint(content)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/views/$VIEW_ID/rows-stream \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/table/views/{view_id}/rows',
    httpMethod: 'get',
    summary: 'Get actual table view data',
    description: 'Retrieve the actual data for a specific table view.',
    stainlessPath: '(resource) table.views.rows > (method) list',
    qualified: 'client.table.views.rows.list',
    params: [
      'view_id: string;',
      'alphabeticalColumnSort?: boolean;',
      'filter?: string;',
      'page?: number;',
      'size?: number;',
      'sort?: string;',
    ],
    response:
      '{ data?: { publicId?: string; rowData?: object; sortOrder?: number; }[]; metadata?: { next_page_token?: string; size?: number; total?: number; }; }',
    markdown:
      "## list\n\n`client.table.views.rows.list(view_id: string, alphabeticalColumnSort?: boolean, filter?: string, page?: number, size?: number, sort?: string): { data?: object[]; metadata?: object; }`\n\n**get** `/v1/table/views/{view_id}/rows`\n\nRetrieve the actual data for a specific table view.\n\n### Parameters\n\n- `view_id: string`\n\n- `alphabeticalColumnSort?: boolean`\n  If true, columns in row data are sorted alphabetically otherwise columns in row data follows their order in the view.\n\n- `filter?: string`\n  URL encoded JSON string of filter criteria (e.g. 'filter=%7B%22columnName%22%3A%22Price%22%2C%22value%22%3A%22100%22%2C%22filterType%22%3A%22gt%22%7D')\n\n- `page?: number`\n  Page number for pagination.\n\n- `size?: number`\n  Number of items per page for pagination.\n\n- `sort?: string`\n  Sort the results by a field, this parameter takes the form `ColumnName:SortDirection`, for example to sort by price ascending `sort=Price:asc`. Sort direction can be either `asc` or `desc`. You can pass multiple sort parameters to add secondary and tertiary sorts etc., the sort will be applied in the order of the query string.\n\n### Returns\n\n- `{ data?: { publicId?: string; rowData?: object; sortOrder?: number; }[]; metadata?: { next_page_token?: string; size?: number; total?: number; }; }`\n\n  - `data?: { publicId?: string; rowData?: object; sortOrder?: number; }[]`\n  - `metadata?: { next_page_token?: string; size?: number; total?: number; }`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst rows = await client.table.views.rows.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(rows);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.views.rows.list',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst rows = await client.table.views.rows.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(rows.data);",
      },
      python: {
        method: 'table.views.rows.list',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nrows = client.table.views.rows.list(\n    view_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(rows.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/views/$VIEW_ID/rows \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'add',
    endpoint: '/v1/table/views/{view_id}/rows',
    httpMethod: 'post',
    summary: 'Add rows to end of table',
    description: 'Insert new rows at the end of the specified table view.',
    stainlessPath: '(resource) table.views.rows > (method) add',
    qualified: 'client.table.views.rows.add',
    params: [
      'view_id: string;',
      'rows: { rowData: object; context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }; sortOrder?: number; }[];',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
    ],
    response: '{ data?: { publicId?: string; rowData?: object; sortOrder?: number; }[]; metadata?: object; }',
    markdown:
      "## add\n\n`client.table.views.rows.add(view_id: string, rows: { rowData: object; context?: base_request_context; sortOrder?: number; }[], context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }): { data?: object[]; metadata?: object; }`\n\n**post** `/v1/table/views/{view_id}/rows`\n\nInsert new rows at the end of the specified table view.\n\n### Parameters\n\n- `view_id: string`\n\n- `rows: { rowData: object; context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }; sortOrder?: number; }[]`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n### Returns\n\n- `{ data?: { publicId?: string; rowData?: object; sortOrder?: number; }[]; metadata?: object; }`\n\n  - `data?: { publicId?: string; rowData?: object; sortOrder?: number; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.views.rows.add('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { rows: [{ rowData: { foo: 'bar' } }] });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.views.rows.add',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.views.rows.add('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  rows: [{ rowData: { foo: 'bar' } }],\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'table.views.rows.add',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.views.rows.add(\n    view_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    rows=[{\n        "row_data": {\n            "foo": "bar"\n        }\n    }],\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/views/$VIEW_ID/rows \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "rows": [\n            {\n              "rowData": {\n                "foo": "bar"\n              }\n            }\n          ]\n        }\'',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/table/views/{view_id}/rows',
    httpMethod: 'put',
    summary: 'Update existing rows',
    description: 'Update existing rows in a specified table view.',
    stainlessPath: '(resource) table.views.rows > (method) update',
    qualified: 'client.table.views.rows.update',
    params: [
      'view_id: string;',
      'rows: { publicId: string; rowData: object; context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }; sortOrder?: number; }[];',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
    ],
    response: '{ data?: { publicId?: string; rowData?: object; sortOrder?: number; }[]; metadata?: object; }',
    markdown:
      "## update\n\n`client.table.views.rows.update(view_id: string, rows: { publicId: string; rowData: object; context?: object; sortOrder?: number; }[], context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }): { data?: object[]; metadata?: object; }`\n\n**put** `/v1/table/views/{view_id}/rows`\n\nUpdate existing rows in a specified table view.\n\n### Parameters\n\n- `view_id: string`\n\n- `rows: { publicId: string; rowData: object; context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }; sortOrder?: number; }[]`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n### Returns\n\n- `{ data?: { publicId?: string; rowData?: object; sortOrder?: number; }[]; metadata?: object; }`\n\n  - `data?: { publicId?: string; rowData?: object; sortOrder?: number; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst row = await client.table.views.rows.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { rows: [{\n  publicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  rowData: { foo: 'bar' },\n}] });\n\nconsole.log(row);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.views.rows.update',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst row = await client.table.views.rows.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  rows: [\n    {\n      publicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n      rowData: { foo: 'bar' },\n    },\n  ],\n});\n\nconsole.log(row.data);",
      },
      python: {
        method: 'table.views.rows.update',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nrow = client.table.views.rows.update(\n    view_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    rows=[{\n        "public_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n        "row_data": {\n            "foo": "bar"\n        },\n    }],\n)\nprint(row.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/views/$VIEW_ID/rows \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "rows": [\n            {\n              "publicId": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n              "rowData": {\n                "foo": "bar"\n              }\n            }\n          ]\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/table/views/{view_id}/rows',
    httpMethod: 'delete',
    summary: 'Delete specific rows',
    description: 'Delete specific rows from a table view based on row IDs.',
    stainlessPath: '(resource) table.views.rows > (method) delete',
    qualified: 'client.table.views.rows.delete',
    params: ['view_id: string;'],
    response: '{ data?: string; metadata?: object; }',
    markdown:
      "## delete\n\n`client.table.views.rows.delete(view_id: string): { data?: string; metadata?: object; }`\n\n**delete** `/v1/table/views/{view_id}/rows`\n\nDelete specific rows from a table view based on row IDs.\n\n### Parameters\n\n- `view_id: string`\n\n### Returns\n\n- `{ data?: string; metadata?: object; }`\n\n  - `data?: string`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst row = await client.table.views.rows.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(row);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.views.rows.delete',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst row = await client.table.views.rows.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(row.data);",
      },
      python: {
        method: 'table.views.rows.delete',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nrow = client.table.views.rows.delete(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(row.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/views/$VIEW_ID/rows \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'upsert',
    endpoint: '/v1/table/views/{view_id}/rows/upsert',
    httpMethod: 'post',
    summary: 'Add or update rows in a table',
    description: 'Upsert (add or update) rows in a table view based on a specified column.',
    stainlessPath: '(resource) table.views.rows > (method) upsert',
    qualified: 'client.table.views.rows.upsert',
    params: [
      'view_id: string;',
      'rows: { rowData: object; context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }; sortOrder?: number; }[];',
      'upsertColumnName: string;',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
    ],
    response: '{ data?: { publicId?: string; rowData?: object; sortOrder?: number; }[]; metadata?: object; }',
    markdown:
      "## upsert\n\n`client.table.views.rows.upsert(view_id: string, rows: { rowData: object; context?: base_request_context; sortOrder?: number; }[], upsertColumnName: string, context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }): { data?: object[]; metadata?: object; }`\n\n**post** `/v1/table/views/{view_id}/rows/upsert`\n\nUpsert (add or update) rows in a table view based on a specified column.\n\n### Parameters\n\n- `view_id: string`\n\n- `rows: { rowData: object; context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }; sortOrder?: number; }[]`\n\n- `upsertColumnName: string`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n### Returns\n\n- `{ data?: { publicId?: string; rowData?: object; sortOrder?: number; }[]; metadata?: object; }`\n\n  - `data?: { publicId?: string; rowData?: object; sortOrder?: number; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.views.rows.upsert('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { rows: [{ rowData: { foo: 'bar' } }], upsertColumnName: 'upsertColumnName' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.views.rows.upsert',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.views.rows.upsert('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  rows: [{ rowData: { foo: 'bar' } }],\n  upsertColumnName: 'upsertColumnName',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'table.views.rows.upsert',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.views.rows.upsert(\n    view_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    rows=[{\n        "row_data": {\n            "foo": "bar"\n        }\n    }],\n    upsert_column_name="upsertColumnName",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/views/$VIEW_ID/rows/upsert \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "rows": [\n            {\n              "rowData": {\n                "foo": "bar"\n              }\n            }\n          ],\n          "upsertColumnName": "upsertColumnName"\n        }\'',
      },
    },
  },
  {
    name: 'distinct',
    endpoint: '/v1/table/views/{view_id}/column/{column_id}/distinct',
    httpMethod: 'get',
    summary: 'Get the unique values for a column',
    description: 'Retrieve the unique/distinct values for a specific column in a table view.',
    stainlessPath: '(resource) table.views.columns > (method) distinct',
    qualified: 'client.table.views.columns.distinct',
    params: ['view_id: string;', 'column_id: string;', 'filter?: string;', 'group_columns?: string[];'],
    response: '{ data?: string[]; metadata?: object; }',
    markdown:
      "## distinct\n\n`client.table.views.columns.distinct(view_id: string, column_id: string, filter?: string, group_columns?: string[]): { data?: string[]; metadata?: object; }`\n\n**get** `/v1/table/views/{view_id}/column/{column_id}/distinct`\n\nRetrieve the unique/distinct values for a specific column in a table view.\n\n### Parameters\n\n- `view_id: string`\n\n- `column_id: string`\n\n- `filter?: string`\n  Filters to apply to the data retrieval.\n\n- `group_columns?: string[]`\n  Optional columns to group the distinct values.\n\n### Returns\n\n- `{ data?: string[]; metadata?: object; }`\n\n  - `data?: string[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.views.columns.distinct('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { view_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.views.columns.distinct',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.views.columns.distinct('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  view_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'table.views.columns.distinct',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.views.columns.distinct(\n    column_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    view_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/views/$VIEW_ID/column/$COLUMN_ID/distinct \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'formula_info',
    endpoint: '/v1/table/views/{view_id}/column/{column_id}/formula-info',
    httpMethod: 'get',
    summary: 'Get formula info for a column',
    description: 'Retrieve formula information for a specific column in a table view.',
    stainlessPath: '(resource) table.views.columns > (method) formula_info',
    qualified: 'client.table.views.columns.formulaInfo',
    params: ['view_id: string;', 'column_id: string;'],
    response: '{ data?: { formula_info?: object; }; metadata?: object; }',
    markdown:
      "## formula_info\n\n`client.table.views.columns.formulaInfo(view_id: string, column_id: string): { data?: object; metadata?: object; }`\n\n**get** `/v1/table/views/{view_id}/column/{column_id}/formula-info`\n\nRetrieve formula information for a specific column in a table view.\n\n### Parameters\n\n- `view_id: string`\n\n- `column_id: string`\n\n### Returns\n\n- `{ data?: { formula_info?: object; }; metadata?: object; }`\n\n  - `data?: { formula_info?: object; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.views.columns.formulaInfo('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { view_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.views.columns.formulaInfo',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.views.columns.formulaInfo(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { view_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },\n);\n\nconsole.log(response.data);",
      },
      python: {
        method: 'table.views.columns.formula_info',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.views.columns.formula_info(\n    column_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    view_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/views/$VIEW_ID/column/$COLUMN_ID/formula-info \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'ai_formula_helper',
    endpoint: '/v1/table/views/{view_id}/column/{column_id}/ai-formula-helper',
    httpMethod: 'post',
    summary: 'Get AI formula helper',
    description: 'Get AI formula helper for a specific column in a table view.',
    stainlessPath: '(resource) table.views.columns > (method) ai_formula_helper',
    qualified: 'client.table.views.columns.aiFormulaHelper',
    params: ['view_id: string;', 'column_id: string;', 'text: string;'],
    response: '{ data?: { ai_formula_helper?: object; }; metadata?: object; }',
    markdown:
      "## ai_formula_helper\n\n`client.table.views.columns.aiFormulaHelper(view_id: string, column_id: string, text: string): { data?: object; metadata?: object; }`\n\n**post** `/v1/table/views/{view_id}/column/{column_id}/ai-formula-helper`\n\nGet AI formula helper for a specific column in a table view.\n\n### Parameters\n\n- `view_id: string`\n\n- `column_id: string`\n\n- `text: string`\n\n### Returns\n\n- `{ data?: { ai_formula_helper?: object; }; metadata?: object; }`\n\n  - `data?: { ai_formula_helper?: object; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.views.columns.aiFormulaHelper('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { view_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', text: 'text' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.views.columns.aiFormulaHelper',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.views.columns.aiFormulaHelper(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { view_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', text: 'text' },\n);\n\nconsole.log(response.data);",
      },
      python: {
        method: 'table.views.columns.ai_formula_helper',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.views.columns.ai_formula_helper(\n    column_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    view_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    text="text",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/views/$VIEW_ID/column/$COLUMN_ID/ai-formula-helper \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "text": "text"\n        }\'',
      },
    },
  },
  {
    name: 'add',
    endpoint: '/v1/table/views/{view_id}/columns',
    httpMethod: 'post',
    summary: 'Add a column to a view',
    description: 'Add a new column to a specific table view.',
    stainlessPath: '(resource) table.views.columns > (method) add',
    qualified: 'client.table.views.columns.add',
    params: [
      'view_id: string;',
      'locked: boolean;',
      'required: boolean;',
      'sortOrder: number;',
      'aggregate?: number;',
      "alterOptions?: { dateConversionFormat?: 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'ISO8601' | 'DD-Mon-YY'; runScriptOnAllCells?: boolean; } | object;",
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
      'dateFormat?: string;',
      'decimalPlaces?: number;',
      'description?: object | { content: { blocks: { data: object; depth: number; entityRanges: object[]; inlineStyleRanges: object[]; key: string; text: string; type: string; }[]; entityMap: object; }; };',
      'displayLink?: boolean;',
      'displayValidationError?: boolean;',
      'exportWidth?: number;',
      'formula?: string;',
      'formulaEnabled?: boolean;',
      'hardValidation?: boolean;',
      'headerBackgroundColor?: string;',
      'headerTextColor?: string;',
      'isIndexed?: boolean;',
      'isJoined?: boolean;',
      'isSynced?: boolean;',
      'kind?: string;',
      'kindOptions?: { autopopulate?: boolean; manualOptions?: string[]; tableOptions?: { columnId?: string; dependencies?: { columnId: string; columnJoinId?: string; }[]; liveValues?: boolean; tableId?: string; viewId?: string; }; };',
      'name?: string;',
      'publicId?: string;',
      'script?: string;',
      'scriptEnabled?: boolean;',
      'stringValidation?: string;',
      'thousandSeparator?: boolean;',
      'validationMessage?: string;',
      'validationNoBlanks?: boolean;',
      'validationNoDuplicates?: boolean;',
      'width?: number;',
    ],
    response:
      '{ data?: { aggregate?: number; alterOptions?: table_column_alter | object; dateFormat?: string; decimalPlaces?: number; description?: object | draftjs; displayLink?: boolean; displayValidationError?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; hardValidation?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: select_options_lookup; locked?: boolean; name?: string; publicId?: string; required?: boolean; script?: string; scriptEnabled?: boolean; sortOrder?: number; stringValidation?: string; thousandSeparator?: boolean; validationMessage?: string; validationNoBlanks?: boolean; validationNoDuplicates?: boolean; width?: number; }; metadata?: object; }',
    markdown:
      "## add\n\n`client.table.views.columns.add(view_id: string, locked: boolean, required: boolean, sortOrder: number, aggregate?: number, alterOptions?: { dateConversionFormat?: 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'ISO8601' | 'DD-Mon-YY'; runScriptOnAllCells?: boolean; } | object, context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }, dateFormat?: string, decimalPlaces?: number, description?: object | { content: object; }, displayLink?: boolean, displayValidationError?: boolean, exportWidth?: number, formula?: string, formulaEnabled?: boolean, hardValidation?: boolean, headerBackgroundColor?: string, headerTextColor?: string, isIndexed?: boolean, isJoined?: boolean, isSynced?: boolean, kind?: string, kindOptions?: { autopopulate?: boolean; manualOptions?: string[]; tableOptions?: object; }, name?: string, publicId?: string, script?: string, scriptEnabled?: boolean, stringValidation?: string, thousandSeparator?: boolean, validationMessage?: string, validationNoBlanks?: boolean, validationNoDuplicates?: boolean, width?: number): { data?: table_view_column; metadata?: object; }`\n\n**post** `/v1/table/views/{view_id}/columns`\n\nAdd a new column to a specific table view.\n\n### Parameters\n\n- `view_id: string`\n\n- `locked: boolean`\n\n- `required: boolean`\n\n- `sortOrder: number`\n\n- `aggregate?: number`\n\n- `alterOptions?: { dateConversionFormat?: 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'ISO8601' | 'DD-Mon-YY'; runScriptOnAllCells?: boolean; } | object`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n- `dateFormat?: string`\n\n- `decimalPlaces?: number`\n\n- `description?: object | { content: { blocks: { data: object; depth: number; entityRanges: object[]; inlineStyleRanges: object[]; key: string; text: string; type: string; }[]; entityMap: object; }; }`\n\n- `displayLink?: boolean`\n\n- `displayValidationError?: boolean`\n\n- `exportWidth?: number`\n\n- `formula?: string`\n\n- `formulaEnabled?: boolean`\n\n- `hardValidation?: boolean`\n\n- `headerBackgroundColor?: string`\n\n- `headerTextColor?: string`\n\n- `isIndexed?: boolean`\n\n- `isJoined?: boolean`\n\n- `isSynced?: boolean`\n\n- `kind?: string`\n\n- `kindOptions?: { autopopulate?: boolean; manualOptions?: string[]; tableOptions?: { columnId?: string; dependencies?: { columnId: string; columnJoinId?: string; }[]; liveValues?: boolean; tableId?: string; viewId?: string; }; }`\n  - `autopopulate?: boolean`\n  - `manualOptions?: string[]`\n  - `tableOptions?: { columnId?: string; dependencies?: { columnId: string; columnJoinId?: string; }[]; liveValues?: boolean; tableId?: string; viewId?: string; }`\n\n- `name?: string`\n\n- `publicId?: string`\n\n- `script?: string`\n\n- `scriptEnabled?: boolean`\n\n- `stringValidation?: string`\n\n- `thousandSeparator?: boolean`\n\n- `validationMessage?: string`\n\n- `validationNoBlanks?: boolean`\n\n- `validationNoDuplicates?: boolean`\n\n- `width?: number`\n\n### Returns\n\n- `{ data?: { aggregate?: number; alterOptions?: table_column_alter | object; dateFormat?: string; decimalPlaces?: number; description?: object | draftjs; displayLink?: boolean; displayValidationError?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; hardValidation?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: select_options_lookup; locked?: boolean; name?: string; publicId?: string; required?: boolean; script?: string; scriptEnabled?: boolean; sortOrder?: number; stringValidation?: string; thousandSeparator?: boolean; validationMessage?: string; validationNoBlanks?: boolean; validationNoDuplicates?: boolean; width?: number; }; metadata?: object; }`\n\n  - `data?: { aggregate?: number; alterOptions?: { dateConversionFormat?: 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'ISO8601' | 'DD-Mon-YY'; runScriptOnAllCells?: boolean; } | object; dateFormat?: string; decimalPlaces?: number; description?: object | { content: object; }; displayLink?: boolean; displayValidationError?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; hardValidation?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: { autopopulate?: boolean; manualOptions?: string[]; tableOptions?: object; }; locked?: boolean; name?: string; publicId?: string; required?: boolean; script?: string; scriptEnabled?: boolean; sortOrder?: number; stringValidation?: string; thousandSeparator?: boolean; validationMessage?: string; validationNoBlanks?: boolean; validationNoDuplicates?: boolean; width?: number; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.table.views.columns.add('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  locked: true,\n  required: true,\n  sortOrder: 0,\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.views.columns.add',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.table.views.columns.add('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  locked: true,\n  required: true,\n  sortOrder: 0,\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'table.views.columns.add',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.table.views.columns.add(\n    view_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    locked=True,\n    required=True,\n    sort_order=0,\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/table/views/$VIEW_ID/columns \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "locked": true,\n          "required": true,\n          "sortOrder": 0\n        }\'',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/table/views/{view_id}/columns/{column_id}',
    httpMethod: 'put',
    summary: 'Update column on view',
    description: 'Update a specific column in a table view.',
    stainlessPath: '(resource) table.views.columns > (method) update',
    qualified: 'client.table.views.columns.update',
    params: [
      'view_id: string;',
      'column_id: string;',
      'aggregate?: number;',
      "alterOptions?: { dateConversionFormat?: 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'ISO8601' | 'DD-Mon-YY'; runScriptOnAllCells?: boolean; } | object;",
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
      'dateFormat?: string;',
      'decimalPlaces?: number;',
      'description?: object | { content: { blocks: { data: object; depth: number; entityRanges: object[]; inlineStyleRanges: object[]; key: string; text: string; type: string; }[]; entityMap: object; }; };',
      'displayLink?: boolean;',
      'displayValidationError?: boolean;',
      'exportWidth?: number;',
      'formula?: string;',
      'formulaEnabled?: boolean;',
      'hardValidation?: boolean;',
      'headerBackgroundColor?: string;',
      'headerTextColor?: string;',
      'isIndexed?: boolean;',
      'isJoined?: boolean;',
      'isSynced?: boolean;',
      'kind?: string;',
      'kindOptions?: { autopopulate?: boolean; manualOptions?: string[]; tableOptions?: { columnId?: string; dependencies?: { columnId: string; columnJoinId?: string; }[]; liveValues?: boolean; tableId?: string; viewId?: string; }; };',
      'locked?: boolean;',
      'name?: string;',
      'publicId?: string;',
      'required?: boolean;',
      'script?: string;',
      'scriptEnabled?: boolean;',
      'sortOrder?: number;',
      'stringValidation?: string;',
      'thousandSeparator?: boolean;',
      'validationMessage?: string;',
      'validationNoBlanks?: boolean;',
      'validationNoDuplicates?: boolean;',
      'width?: number;',
    ],
    response:
      '{ data?: { aggregate?: number; alterOptions?: table_column_alter | object; dateFormat?: string; decimalPlaces?: number; description?: object | draftjs; displayLink?: boolean; displayValidationError?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; hardValidation?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: select_options_lookup; locked?: boolean; name?: string; publicId?: string; required?: boolean; script?: string; scriptEnabled?: boolean; sortOrder?: number; stringValidation?: string; thousandSeparator?: boolean; validationMessage?: string; validationNoBlanks?: boolean; validationNoDuplicates?: boolean; width?: number; }; metadata?: object; }',
    markdown:
      "## update\n\n`client.table.views.columns.update(view_id: string, column_id: string, aggregate?: number, alterOptions?: { dateConversionFormat?: 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'ISO8601' | 'DD-Mon-YY'; runScriptOnAllCells?: boolean; } | object, context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }, dateFormat?: string, decimalPlaces?: number, description?: object | { content: object; }, displayLink?: boolean, displayValidationError?: boolean, exportWidth?: number, formula?: string, formulaEnabled?: boolean, hardValidation?: boolean, headerBackgroundColor?: string, headerTextColor?: string, isIndexed?: boolean, isJoined?: boolean, isSynced?: boolean, kind?: string, kindOptions?: { autopopulate?: boolean; manualOptions?: string[]; tableOptions?: object; }, locked?: boolean, name?: string, publicId?: string, required?: boolean, script?: string, scriptEnabled?: boolean, sortOrder?: number, stringValidation?: string, thousandSeparator?: boolean, validationMessage?: string, validationNoBlanks?: boolean, validationNoDuplicates?: boolean, width?: number): { data?: table_view_column; metadata?: object; }`\n\n**put** `/v1/table/views/{view_id}/columns/{column_id}`\n\nUpdate a specific column in a table view.\n\n### Parameters\n\n- `view_id: string`\n\n- `column_id: string`\n\n- `aggregate?: number`\n\n- `alterOptions?: { dateConversionFormat?: 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'ISO8601' | 'DD-Mon-YY'; runScriptOnAllCells?: boolean; } | object`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n- `dateFormat?: string`\n\n- `decimalPlaces?: number`\n\n- `description?: object | { content: { blocks: { data: object; depth: number; entityRanges: object[]; inlineStyleRanges: object[]; key: string; text: string; type: string; }[]; entityMap: object; }; }`\n\n- `displayLink?: boolean`\n\n- `displayValidationError?: boolean`\n\n- `exportWidth?: number`\n\n- `formula?: string`\n\n- `formulaEnabled?: boolean`\n\n- `hardValidation?: boolean`\n\n- `headerBackgroundColor?: string`\n\n- `headerTextColor?: string`\n\n- `isIndexed?: boolean`\n\n- `isJoined?: boolean`\n\n- `isSynced?: boolean`\n\n- `kind?: string`\n\n- `kindOptions?: { autopopulate?: boolean; manualOptions?: string[]; tableOptions?: { columnId?: string; dependencies?: { columnId: string; columnJoinId?: string; }[]; liveValues?: boolean; tableId?: string; viewId?: string; }; }`\n  - `autopopulate?: boolean`\n  - `manualOptions?: string[]`\n  - `tableOptions?: { columnId?: string; dependencies?: { columnId: string; columnJoinId?: string; }[]; liveValues?: boolean; tableId?: string; viewId?: string; }`\n\n- `locked?: boolean`\n\n- `name?: string`\n\n- `publicId?: string`\n\n- `required?: boolean`\n\n- `script?: string`\n\n- `scriptEnabled?: boolean`\n\n- `sortOrder?: number`\n\n- `stringValidation?: string`\n\n- `thousandSeparator?: boolean`\n\n- `validationMessage?: string`\n\n- `validationNoBlanks?: boolean`\n\n- `validationNoDuplicates?: boolean`\n\n- `width?: number`\n\n### Returns\n\n- `{ data?: { aggregate?: number; alterOptions?: table_column_alter | object; dateFormat?: string; decimalPlaces?: number; description?: object | draftjs; displayLink?: boolean; displayValidationError?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; hardValidation?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: select_options_lookup; locked?: boolean; name?: string; publicId?: string; required?: boolean; script?: string; scriptEnabled?: boolean; sortOrder?: number; stringValidation?: string; thousandSeparator?: boolean; validationMessage?: string; validationNoBlanks?: boolean; validationNoDuplicates?: boolean; width?: number; }; metadata?: object; }`\n\n  - `data?: { aggregate?: number; alterOptions?: { dateConversionFormat?: 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'ISO8601' | 'DD-Mon-YY'; runScriptOnAllCells?: boolean; } | object; dateFormat?: string; decimalPlaces?: number; description?: object | { content: object; }; displayLink?: boolean; displayValidationError?: boolean; exportWidth?: number; formula?: string; formulaEnabled?: boolean; hardValidation?: boolean; headerBackgroundColor?: string; headerTextColor?: string; isIndexed?: boolean; isJoined?: boolean; isSynced?: boolean; kind?: string; kindOptions?: { autopopulate?: boolean; manualOptions?: string[]; tableOptions?: object; }; locked?: boolean; name?: string; publicId?: string; required?: boolean; script?: string; scriptEnabled?: boolean; sortOrder?: number; stringValidation?: string; thousandSeparator?: boolean; validationMessage?: string; validationNoBlanks?: boolean; validationNoDuplicates?: boolean; width?: number; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst column = await client.table.views.columns.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { view_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(column);\n```",
    perLanguage: {
      typescript: {
        method: 'client.table.views.columns.update',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst column = await client.table.views.columns.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  view_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(column.data);",
      },
      python: {
        method: 'table.views.columns.update',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\ncolumn = client.table.views.columns.update(\n    column_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    view_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(column.data)',
      },
      http: {
        example:
          "curl https://api.morta.io/v1/table/views/$VIEW_ID/columns/$COLUMN_ID \\\n    -X PUT \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $MORTA_API_KEY\" \\\n    -d '{}'",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/document',
    httpMethod: 'post',
    summary: 'Create a New Document',
    description: 'Create a new document in a specified hub',
    stainlessPath: '(resource) document > (method) create',
    qualified: 'client.document.create',
    params: [
      'name: string;',
      'projectId: string;',
      'type: string;',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
    ],
    response:
      '{ data?: { name?: string; publicId?: string; }; metadata?: { change?: object; event?: string; resourceId?: string; }; }',
    markdown:
      "## create\n\n`client.document.create(name: string, projectId: string, type: string, context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }): { data?: document; metadata?: object; }`\n\n**post** `/v1/document`\n\nCreate a new document in a specified hub\n\n### Parameters\n\n- `name: string`\n\n- `projectId: string`\n\n- `type: string`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n### Returns\n\n- `{ data?: { name?: string; publicId?: string; }; metadata?: { change?: object; event?: string; resourceId?: string; }; }`\n\n  - `data?: { name?: string; publicId?: string; }`\n  - `metadata?: { change?: object; event?: string; resourceId?: string; }`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst document = await client.document.create({\n  name: 'name',\n  projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  type: 'type',\n});\n\nconsole.log(document);\n```",
    perLanguage: {
      typescript: {
        method: 'client.document.create',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst document = await client.document.create({\n  name: 'name',\n  projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  type: 'type',\n});\n\nconsole.log(document.data);",
      },
      python: {
        method: 'document.create',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\ndocument = client.document.create(\n    name="name",\n    project_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    type="type",\n)\nprint(document.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/document \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "name": "name",\n          "projectId": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "type": "type"\n        }\'',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/document/{document_id}',
    httpMethod: 'put',
    summary: 'Update an Existing Document',
    description: "Update an existing documents's details by document ID",
    stainlessPath: '(resource) document > (method) update',
    qualified: 'client.document.update',
    params: [
      'document_id: string;',
      'allowComments?: boolean;',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
      'description?: object | { content: { blocks: { data: object; depth: number; entityRanges: object[]; inlineStyleRanges: object[]; key: string; text: string; type: string; }[]; entityMap: object; }; };',
      'expandByDefault?: boolean;',
      'isTemplate?: boolean;',
      'lockedTemplate?: boolean;',
      'logo?: string;',
      'name?: string;',
      'plaintextDescription?: string;',
      'type?: string;',
      'variables?: string[];',
    ],
    response:
      '{ data?: { allowComments?: boolean; children?: object[]; createdAt?: string; deletedAt?: string; description?: object; expandByDefault?: boolean; isDeleted?: boolean; isTemplate?: boolean; lockedTemplate?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; publicId?: string; type?: string; updatedAt?: string; variables?: string[]; variableValues?: string[]; }; metadata?: object; }',
    markdown:
      "## update\n\n`client.document.update(document_id: string, allowComments?: boolean, context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }, description?: object | { content: object; }, expandByDefault?: boolean, isTemplate?: boolean, lockedTemplate?: boolean, logo?: string, name?: string, plaintextDescription?: string, type?: string, variables?: string[]): { data?: simple_document; metadata?: object; }`\n\n**put** `/v1/document/{document_id}`\n\nUpdate an existing documents's details by document ID\n\n### Parameters\n\n- `document_id: string`\n\n- `allowComments?: boolean`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n- `description?: object | { content: { blocks: { data: object; depth: number; entityRanges: object[]; inlineStyleRanges: object[]; key: string; text: string; type: string; }[]; entityMap: object; }; }`\n\n- `expandByDefault?: boolean`\n\n- `isTemplate?: boolean`\n\n- `lockedTemplate?: boolean`\n\n- `logo?: string`\n\n- `name?: string`\n\n- `plaintextDescription?: string`\n\n- `type?: string`\n\n- `variables?: string[]`\n\n### Returns\n\n- `{ data?: { allowComments?: boolean; children?: object[]; createdAt?: string; deletedAt?: string; description?: object; expandByDefault?: boolean; isDeleted?: boolean; isTemplate?: boolean; lockedTemplate?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; publicId?: string; type?: string; updatedAt?: string; variables?: string[]; variableValues?: string[]; }; metadata?: object; }`\n\n  - `data?: { allowComments?: boolean; children?: { name?: string; publicId?: string; }[]; createdAt?: string; deletedAt?: string; description?: object; expandByDefault?: boolean; isDeleted?: boolean; isTemplate?: boolean; lockedTemplate?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; publicId?: string; type?: string; updatedAt?: string; variables?: string[]; variableValues?: string[]; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst document = await client.document.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(document);\n```",
    perLanguage: {
      typescript: {
        method: 'client.document.update',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst document = await client.document.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(document.data);",
      },
      python: {
        method: 'document.update',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\ndocument = client.document.update(\n    document_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(document.data)',
      },
      http: {
        example:
          "curl https://api.morta.io/v1/document/$DOCUMENT_ID \\\n    -X PUT \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $MORTA_API_KEY\" \\\n    -d '{}'",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/document/{document_id}',
    httpMethod: 'delete',
    summary: 'Delete Document',
    description: 'Delete a document identified by its UUID',
    stainlessPath: '(resource) document > (method) delete',
    qualified: 'client.document.delete',
    params: ['document_id: string;'],
    response:
      '{ data?: { allowComments?: boolean; children?: document_section_1[]; createdAt?: string; deletedAt?: string; description?: object; expandByDefault?: boolean; isDeleted?: boolean; isTemplate?: boolean; lockedTemplate?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; publicId?: string; type?: string; updatedAt?: string; variables?: string[]; variableValues?: string[]; }; metadata?: object; }',
    markdown:
      "## delete\n\n`client.document.delete(document_id: string): { data?: morta_document; metadata?: object; }`\n\n**delete** `/v1/document/{document_id}`\n\nDelete a document identified by its UUID\n\n### Parameters\n\n- `document_id: string`\n\n### Returns\n\n- `{ data?: { allowComments?: boolean; children?: document_section_1[]; createdAt?: string; deletedAt?: string; description?: object; expandByDefault?: boolean; isDeleted?: boolean; isTemplate?: boolean; lockedTemplate?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; publicId?: string; type?: string; updatedAt?: string; variables?: string[]; variableValues?: string[]; }; metadata?: object; }`\n\n  - `data?: { allowComments?: boolean; children?: { children?: document_section_1[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }[]; createdAt?: string; deletedAt?: string; description?: object; expandByDefault?: boolean; isDeleted?: boolean; isTemplate?: boolean; lockedTemplate?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; publicId?: string; type?: string; updatedAt?: string; variables?: string[]; variableValues?: string[]; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst document = await client.document.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(document);\n```",
    perLanguage: {
      typescript: {
        method: 'client.document.delete',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst document = await client.document.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(document.data);",
      },
      python: {
        method: 'document.delete',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\ndocument = client.document.delete(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(document.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/document/$DOCUMENT_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/document/{document_id}',
    httpMethod: 'get',
    summary: 'Get Document Details',
    description: 'Retrieve detailed information of a specific document by its UUID',
    stainlessPath: '(resource) document > (method) retrieve',
    qualified: 'client.document.retrieve',
    params: ['document_id: string;', 'exclude_children?: boolean;'],
    response:
      '{ data?: { allowComments?: boolean; children?: document_section_1[]; createdAt?: string; deletedAt?: string; description?: object; expandByDefault?: boolean; isDeleted?: boolean; isTemplate?: boolean; lockedTemplate?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; publicId?: string; type?: string; updatedAt?: string; variables?: string[]; variableValues?: string[]; }; metadata?: object; }',
    markdown:
      "## retrieve\n\n`client.document.retrieve(document_id: string, exclude_children?: boolean): { data?: morta_document; metadata?: object; }`\n\n**get** `/v1/document/{document_id}`\n\nRetrieve detailed information of a specific document by its UUID\n\n### Parameters\n\n- `document_id: string`\n\n- `exclude_children?: boolean`\n  Flag to exclude child elements from the document response\n\n### Returns\n\n- `{ data?: { allowComments?: boolean; children?: document_section_1[]; createdAt?: string; deletedAt?: string; description?: object; expandByDefault?: boolean; isDeleted?: boolean; isTemplate?: boolean; lockedTemplate?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; publicId?: string; type?: string; updatedAt?: string; variables?: string[]; variableValues?: string[]; }; metadata?: object; }`\n\n  - `data?: { allowComments?: boolean; children?: { children?: document_section_1[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }[]; createdAt?: string; deletedAt?: string; description?: object; expandByDefault?: boolean; isDeleted?: boolean; isTemplate?: boolean; lockedTemplate?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; publicId?: string; type?: string; updatedAt?: string; variables?: string[]; variableValues?: string[]; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst document = await client.document.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(document);\n```",
    perLanguage: {
      typescript: {
        method: 'client.document.retrieve',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst document = await client.document.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(document.data);",
      },
      python: {
        method: 'document.retrieve',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\ndocument = client.document.retrieve(\n    document_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(document.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/document/$DOCUMENT_ID \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'restore',
    endpoint: '/v1/document/{document_id}/restore',
    httpMethod: 'put',
    summary: 'Restore Document',
    description: 'Restore a deleted document identified by its UUID',
    stainlessPath: '(resource) document > (method) restore',
    qualified: 'client.document.restore',
    params: ['document_id: string;'],
    response:
      '{ data?: { allowComments?: boolean; children?: document_section_1[]; createdAt?: string; deletedAt?: string; description?: object; expandByDefault?: boolean; isDeleted?: boolean; isTemplate?: boolean; lockedTemplate?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; publicId?: string; type?: string; updatedAt?: string; variables?: string[]; variableValues?: string[]; }; metadata?: object; }',
    markdown:
      "## restore\n\n`client.document.restore(document_id: string): { data?: morta_document; metadata?: object; }`\n\n**put** `/v1/document/{document_id}/restore`\n\nRestore a deleted document identified by its UUID\n\n### Parameters\n\n- `document_id: string`\n\n### Returns\n\n- `{ data?: { allowComments?: boolean; children?: document_section_1[]; createdAt?: string; deletedAt?: string; description?: object; expandByDefault?: boolean; isDeleted?: boolean; isTemplate?: boolean; lockedTemplate?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; publicId?: string; type?: string; updatedAt?: string; variables?: string[]; variableValues?: string[]; }; metadata?: object; }`\n\n  - `data?: { allowComments?: boolean; children?: { children?: document_section_1[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }[]; createdAt?: string; deletedAt?: string; description?: object; expandByDefault?: boolean; isDeleted?: boolean; isTemplate?: boolean; lockedTemplate?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; publicId?: string; type?: string; updatedAt?: string; variables?: string[]; variableValues?: string[]; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.document.restore('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.document.restore',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.document.restore('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'document.restore',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.document.restore(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/document/$DOCUMENT_ID/restore \\\n    -X PUT \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'export',
    endpoint: '/v1/document/{document_id}/export',
    httpMethod: 'get',
    summary: 'Export Document',
    description: 'Export a specific document by its UUID',
    stainlessPath: '(resource) document > (method) export',
    qualified: 'client.document.export',
    params: [
      'document_id: string;',
      "page_format?: 'A1' | 'A2' | 'A3' | 'A4' | 'letter' | 'legal';",
      "page_orientation?: 'portrait' | 'landscape';",
      'table_links?: boolean;',
    ],
    response: 'string',
    markdown:
      "## export\n\n`client.document.export(document_id: string, page_format?: 'A1' | 'A2' | 'A3' | 'A4' | 'letter' | 'legal', page_orientation?: 'portrait' | 'landscape', table_links?: boolean): string`\n\n**get** `/v1/document/{document_id}/export`\n\nExport a specific document by its UUID\n\n### Parameters\n\n- `document_id: string`\n\n- `page_format?: 'A1' | 'A2' | 'A3' | 'A4' | 'letter' | 'legal'`\n  Page format for the export\n\n- `page_orientation?: 'portrait' | 'landscape'`\n  Page orientation for the export\n\n- `table_links?: boolean`\n  Include table links in the export\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.document.export('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n\nconst content = await response.blob()\nconsole.log(content)\n```",
    perLanguage: {
      typescript: {
        method: 'client.document.export',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.document.export('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n\nconst content = await response.blob();\nconsole.log(content);",
      },
      python: {
        method: 'document.export',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.document.export(\n    document_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response)\ncontent = response.read()\nprint(content)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/document/$DOCUMENT_ID/export \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'get_deleted_sections',
    endpoint: '/v1/document/{document_id}/deletedsections',
    httpMethod: 'get',
    summary: 'Get Deleted Document Sections',
    description:
      'Retrieve all deleted sections of a specific document, with an optional filter for a specific document section',
    stainlessPath: '(resource) document > (method) get_deleted_sections',
    qualified: 'client.document.getDeletedSections',
    params: ['document_id: string;', 'process_section_id?: string;'],
    response:
      '{ children?: object[]; createdAt?: string; deletedAt?: string; description?: object; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: object[]; }[]',
    markdown:
      "## get_deleted_sections\n\n`client.document.getDeletedSections(document_id: string, process_section_id?: string): object[]`\n\n**get** `/v1/document/{document_id}/deletedsections`\n\nRetrieve all deleted sections of a specific document, with an optional filter for a specific document section\n\n### Parameters\n\n- `document_id: string`\n\n- `process_section_id?: string`\n  Optional UUID of a specific document section to filter deleted sections\n\n### Returns\n\n- `{ children?: object[]; createdAt?: string; deletedAt?: string; description?: object; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: object[]; }[]`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst mortaDocumentSections = await client.document.getDeletedSections('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(mortaDocumentSections);\n```",
    perLanguage: {
      typescript: {
        method: 'client.document.getDeletedSections',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst mortaDocumentSections = await client.document.getDeletedSections(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(mortaDocumentSections);",
      },
      python: {
        method: 'document.get_deleted_sections',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nmorta_document_sections = client.document.get_deleted_sections(\n    document_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(morta_document_sections)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/document/$DOCUMENT_ID/deletedsections \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'create_multiple_sections',
    endpoint: '/v1/document/{document_id}/multiple-section',
    httpMethod: 'post',
    summary: 'Create Multiple New Document Sections',
    description:
      'Create multiple new sections within a specified document, each with an optional parent section',
    stainlessPath: '(resource) document > (method) create_multiple_sections',
    qualified: 'client.document.createMultipleSections',
    params: [
      'document_id: string;',
      'sections: { name: string; context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }; description?: { content: object; } | object; parentId?: string; plaintextDescription?: string; }[];',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
    ],
    response: '{ data?: string; metadata?: { resourceIds?: string[]; }; }',
    markdown:
      "## create_multiple_sections\n\n`client.document.createMultipleSections(document_id: string, sections: { name: string; context?: base_request_context; description?: draftjs | object; parentId?: string; plaintextDescription?: string; }[], context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }): { data?: string; metadata?: object; }`\n\n**post** `/v1/document/{document_id}/multiple-section`\n\nCreate multiple new sections within a specified document, each with an optional parent section\n\n### Parameters\n\n- `document_id: string`\n\n- `sections: { name: string; context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }; description?: { content: object; } | object; parentId?: string; plaintextDescription?: string; }[]`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n### Returns\n\n- `{ data?: string; metadata?: { resourceIds?: string[]; }; }`\n\n  - `data?: string`\n  - `metadata?: { resourceIds?: string[]; }`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.document.createMultipleSections('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { sections: [{ name: 'name' }] });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.document.createMultipleSections',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.document.createMultipleSections(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { sections: [{ name: 'name' }] },\n);\n\nconsole.log(response.data);",
      },
      python: {
        method: 'document.create_multiple_sections',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.document.create_multiple_sections(\n    document_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    sections=[{\n        "name": "name"\n    }],\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/document/$DOCUMENT_ID/multiple-section \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "sections": [\n            {\n              "name": "name"\n            }\n          ]\n        }\'',
      },
    },
  },
  {
    name: 'create_sections',
    endpoint: '/v1/document/{document_id}/sections',
    httpMethod: 'post',
    summary: 'Create New Document Sections',
    description: 'Create multiple new sections within a document',
    stainlessPath: '(resource) document > (method) create_sections',
    qualified: 'client.document.createSections',
    params: [
      'document_id: string;',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
      'details?: { name: string; context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }; description?: { content: object; } | object; parentId?: string; plaintextDescription?: string; }[];',
    ],
    response:
      '{ data?: { children?: morta_document_section[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }[]; metadata?: object; }',
    markdown:
      "## create_sections\n\n`client.document.createSections(document_id: string, context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }, details?: { name: string; context?: base_request_context; description?: draftjs | object; parentId?: string; plaintextDescription?: string; }[]): { data?: morta_document_section[]; metadata?: object; }`\n\n**post** `/v1/document/{document_id}/sections`\n\nCreate multiple new sections within a document\n\n### Parameters\n\n- `document_id: string`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n- `details?: { name: string; context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }; description?: { content: object; } | object; parentId?: string; plaintextDescription?: string; }[]`\n\n### Returns\n\n- `{ data?: { children?: morta_document_section[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }[]; metadata?: object; }`\n\n  - `data?: { children?: { children?: morta_document_section[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }[]; createdAt?: string; deletedAt?: string; description?: { content: object; }; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: { createdAt?: string; deletedAt?: string; enableSubmission?: boolean; isDeleted?: boolean; pdfIncludeResponse?: boolean; position?: number; publicId?: string; resetAfterResponse?: boolean; response?: object; responseDate?: string; type?: string; typeOptions?: object; updatedAt?: string; user?: summary_user; }[]; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.document.createSections('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.document.createSections',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.document.createSections('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'document.create_sections',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.document.create_sections(\n    document_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          "curl https://api.morta.io/v1/document/$DOCUMENT_ID/sections \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $MORTA_API_KEY\" \\\n    -d '{}'",
      },
    },
  },
  {
    name: 'update_multiple_sections',
    endpoint: '/v1/document/{document_id}/update-multiple-section',
    httpMethod: 'put',
    summary: 'Update Multiple Document Sections',
    description: 'Update multiple existing document sections.',
    stainlessPath: '(resource) document > (method) update_multiple_sections',
    qualified: 'client.document.updateMultipleSections',
    params: [
      'document_id: string;',
      'sections: { publicId: string; context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }; description?: object | { content: { blocks: object[]; entityMap: object; }; }; name?: string; pageBreakBefore?: boolean; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; plaintextDescription?: string; }[];',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
    ],
    response:
      '{ data?: { children?: morta_document_section[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }[]; metadata?: object; }',
    markdown:
      "## update_multiple_sections\n\n`client.document.updateMultipleSections(document_id: string, sections: { publicId: string; context?: object; description?: object | object; name?: string; pageBreakBefore?: boolean; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; plaintextDescription?: string; }[], context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }): { data?: morta_document_section[]; metadata?: object; }`\n\n**put** `/v1/document/{document_id}/update-multiple-section`\n\nUpdate multiple existing document sections.\n\n### Parameters\n\n- `document_id: string`\n\n- `sections: { publicId: string; context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }; description?: object | { content: { blocks: object[]; entityMap: object; }; }; name?: string; pageBreakBefore?: boolean; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; plaintextDescription?: string; }[]`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n### Returns\n\n- `{ data?: { children?: morta_document_section[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }[]; metadata?: object; }`\n\n  - `data?: { children?: { children?: morta_document_section[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }[]; createdAt?: string; deletedAt?: string; description?: { content: object; }; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: { createdAt?: string; deletedAt?: string; enableSubmission?: boolean; isDeleted?: boolean; pdfIncludeResponse?: boolean; position?: number; publicId?: string; resetAfterResponse?: boolean; response?: object; responseDate?: string; type?: string; typeOptions?: object; updatedAt?: string; user?: summary_user; }[]; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.document.updateMultipleSections('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { sections: [{ publicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' }] });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.document.updateMultipleSections',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.document.updateMultipleSections(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { sections: [{ publicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' }] },\n);\n\nconsole.log(response.data);",
      },
      python: {
        method: 'document.update_multiple_sections',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.document.update_multiple_sections(\n    document_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    sections=[{\n        "public_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n    }],\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/document/$DOCUMENT_ID/update-multiple-section \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "sections": [\n            {\n              "publicId": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n            }\n          ]\n        }\'',
      },
    },
  },
  {
    name: 'update_section_order',
    endpoint: '/v1/document/{document_id}/changesectionorder',
    httpMethod: 'put',
    summary: 'Update Process Section Order',
    description: 'Update the order of document sections within a document.',
    stainlessPath: '(resource) document > (method) update_section_order',
    qualified: 'client.document.updateSectionOrder',
    params: [
      'document_id: string;',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
      'processSections?: { parentId?: string; position?: number; sectionId?: string; }[];',
    ],
    response:
      '{ data?: { allowComments?: boolean; children?: document_section_1[]; createdAt?: string; deletedAt?: string; description?: object; expandByDefault?: boolean; isDeleted?: boolean; isTemplate?: boolean; lockedTemplate?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; publicId?: string; type?: string; updatedAt?: string; variables?: string[]; variableValues?: string[]; }; metadata?: object; }',
    markdown:
      "## update_section_order\n\n`client.document.updateSectionOrder(document_id: string, context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }, processSections?: { parentId?: string; position?: number; sectionId?: string; }[]): { data?: morta_document; metadata?: object; }`\n\n**put** `/v1/document/{document_id}/changesectionorder`\n\nUpdate the order of document sections within a document.\n\n### Parameters\n\n- `document_id: string`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n- `processSections?: { parentId?: string; position?: number; sectionId?: string; }[]`\n\n### Returns\n\n- `{ data?: { allowComments?: boolean; children?: document_section_1[]; createdAt?: string; deletedAt?: string; description?: object; expandByDefault?: boolean; isDeleted?: boolean; isTemplate?: boolean; lockedTemplate?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; publicId?: string; type?: string; updatedAt?: string; variables?: string[]; variableValues?: string[]; }; metadata?: object; }`\n\n  - `data?: { allowComments?: boolean; children?: { children?: document_section_1[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }[]; createdAt?: string; deletedAt?: string; description?: object; expandByDefault?: boolean; isDeleted?: boolean; isTemplate?: boolean; lockedTemplate?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; publicId?: string; type?: string; updatedAt?: string; variables?: string[]; variableValues?: string[]; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.document.updateSectionOrder('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.document.updateSectionOrder',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.document.updateSectionOrder('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'document.update_section_order',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.document.update_section_order(\n    document_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/document/$DOCUMENT_ID/changesectionorder \\\n    -X PUT \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'update_views_permissions',
    endpoint: '/v1/document/sync-views-permissions',
    httpMethod: 'put',
    summary: 'Update Permissions of Views in Document',
    description: 'Update permissions for all views using as reference the permissions in a document.',
    stainlessPath: '(resource) document > (method) update_views_permissions',
    qualified: 'client.document.updateViewsPermissions',
    params: ['resource_id: string;'],
    response: '{ data?: string; }',
    markdown:
      "## update_views_permissions\n\n`client.document.updateViewsPermissions(resource_id: string): { data?: string; }`\n\n**put** `/v1/document/sync-views-permissions`\n\nUpdate permissions for all views using as reference the permissions in a document.\n\n### Parameters\n\n- `resource_id: string`\n  UUID of the document for which to retrieve permissions.\n\n### Returns\n\n- `{ data?: string; }`\n\n  - `data?: string`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.document.updateViewsPermissions({ resource_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.document.updateViewsPermissions',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.document.updateViewsPermissions({\n  resource_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'document.update_views_permissions',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.document.update_views_permissions(\n    resource_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/document/sync-views-permissions \\\n    -X PUT \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'get_duplicated_children',
    endpoint: '/v1/document/{document_id}/duplicated-children',
    httpMethod: 'get',
    summary: 'Get Duplicated Children',
    description: 'Get duplicated children of a document',
    stainlessPath: '(resource) document > (method) get_duplicated_children',
    qualified: 'client.document.getDuplicatedChildren',
    params: ['document_id: string;'],
    response:
      '{ data?: { createdAt?: string; deletedAt?: string; deletedBy?: string; link?: string; name?: string; publicId?: string; user?: string; }[]; metadata?: object; }',
    markdown:
      "## get_duplicated_children\n\n`client.document.getDuplicatedChildren(document_id: string): { data?: object[]; metadata?: object; }`\n\n**get** `/v1/document/{document_id}/duplicated-children`\n\nGet duplicated children of a document\n\n### Parameters\n\n- `document_id: string`\n\n### Returns\n\n- `{ data?: { createdAt?: string; deletedAt?: string; deletedBy?: string; link?: string; name?: string; publicId?: string; user?: string; }[]; metadata?: object; }`\n\n  - `data?: { createdAt?: string; deletedAt?: string; deletedBy?: string; link?: string; name?: string; publicId?: string; user?: string; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.document.getDuplicatedChildren('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.document.getDuplicatedChildren',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.document.getDuplicatedChildren(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(response.data);",
      },
      python: {
        method: 'document.get_duplicated_children',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.document.get_duplicated_children(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/document/$DOCUMENT_ID/duplicated-children \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'sync_template',
    endpoint: '/v1/document/{document_id}/sync-template',
    httpMethod: 'get',
    summary: 'Sync Template Changes to Children',
    description: 'Sync template changes to children of a document',
    stainlessPath: '(resource) document > (method) sync_template',
    qualified: 'client.document.syncTemplate',
    params: ['document_id: string;'],
    response: '{ data?: { name?: string; publicId?: string; }[]; metadata?: object; }',
    markdown:
      "## sync_template\n\n`client.document.syncTemplate(document_id: string): { data?: document[]; metadata?: object; }`\n\n**get** `/v1/document/{document_id}/sync-template`\n\nSync template changes to children of a document\n\n### Parameters\n\n- `document_id: string`\n\n### Returns\n\n- `{ data?: { name?: string; publicId?: string; }[]; metadata?: object; }`\n\n  - `data?: { name?: string; publicId?: string; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.document.syncTemplate('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.document.syncTemplate',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.document.syncTemplate('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'document.sync_template',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.document.sync_template(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/document/$DOCUMENT_ID/sync-template \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'duplicate',
    endpoint: '/v1/document/{document_id}/duplicate',
    httpMethod: 'post',
    summary: 'Duplicate a Document',
    description: 'Duplicate an existing document, potentially in a different hub',
    stainlessPath: '(resource) document.duplicate > (method) duplicate',
    qualified: 'client.document.duplicate.duplicate',
    params: [
      'document_id: string;',
      'targetProjectId: string;',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
      'duplicateLinkedTables?: boolean;',
      'duplicatePermissions?: boolean;',
    ],
    markdown:
      "## duplicate\n\n`client.document.duplicate.duplicate(document_id: string, targetProjectId: string, context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }, duplicateLinkedTables?: boolean, duplicatePermissions?: boolean): void`\n\n**post** `/v1/document/{document_id}/duplicate`\n\nDuplicate an existing document, potentially in a different hub\n\n### Parameters\n\n- `document_id: string`\n\n- `targetProjectId: string`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n- `duplicateLinkedTables?: boolean`\n\n- `duplicatePermissions?: boolean`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nawait client.document.duplicate.duplicate('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { targetProjectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' })\n```",
    perLanguage: {
      typescript: {
        method: 'client.document.duplicate.duplicate',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.document.duplicate.duplicate('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  targetProjectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});",
      },
      python: {
        method: 'document.duplicate.duplicate',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nclient.document.duplicate.duplicate(\n    document_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    target_project_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/document/$DOCUMENT_ID/duplicate \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "targetProjectId": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n        }\'',
      },
    },
  },
  {
    name: 'global',
    endpoint: '/v1/document/duplicate',
    httpMethod: 'post',
    summary: 'Duplicate Document',
    description: 'Duplicate an existing document, optionally into a different hub',
    stainlessPath: '(resource) document.duplicate > (method) global',
    qualified: 'client.document.duplicate.global',
    params: [
      'processId: string;',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
      'projectId?: string;',
    ],
    response:
      '{ data?: { allowComments?: boolean; children?: document_section_1[]; createdAt?: string; deletedAt?: string; description?: object; expandByDefault?: boolean; isDeleted?: boolean; isTemplate?: boolean; lockedTemplate?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; publicId?: string; type?: string; updatedAt?: string; variables?: string[]; variableValues?: string[]; }; metadata?: object; }',
    markdown:
      "## global\n\n`client.document.duplicate.global(processId: string, context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }, projectId?: string): { data?: morta_document; metadata?: object; }`\n\n**post** `/v1/document/duplicate`\n\nDuplicate an existing document, optionally into a different hub\n\n### Parameters\n\n- `processId: string`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n- `projectId?: string`\n\n### Returns\n\n- `{ data?: { allowComments?: boolean; children?: document_section_1[]; createdAt?: string; deletedAt?: string; description?: object; expandByDefault?: boolean; isDeleted?: boolean; isTemplate?: boolean; lockedTemplate?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; publicId?: string; type?: string; updatedAt?: string; variables?: string[]; variableValues?: string[]; }; metadata?: object; }`\n\n  - `data?: { allowComments?: boolean; children?: { children?: document_section_1[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }[]; createdAt?: string; deletedAt?: string; description?: object; expandByDefault?: boolean; isDeleted?: boolean; isTemplate?: boolean; lockedTemplate?: boolean; logo?: string; name?: string; projectName?: string; projectPublicId?: string; publicId?: string; type?: string; updatedAt?: string; variables?: string[]; variableValues?: string[]; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.document.duplicate.global({ processId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.document.duplicate.global',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.document.duplicate.global({\n  processId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'document.duplicate.global_',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.document.duplicate.global_(\n    process_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/document/duplicate \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "processId": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n        }\'',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/document/{document_id}/section',
    httpMethod: 'post',
    summary: 'Create a New Document Section',
    description: 'Create a new section within a specified document, with an option to set a parent section',
    stainlessPath: '(resource) document.section > (method) create',
    qualified: 'client.document.section.create',
    params: [
      'document_id: string;',
      'name: string;',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
      'description?: { content: { blocks: { data: object; depth: number; entityRanges: object[]; inlineStyleRanges: object[]; key: string; text: string; type: string; }[]; entityMap: object; }; } | object;',
      'parentId?: string;',
      'plaintextDescription?: string;',
    ],
    response:
      '{ data?: { children?: morta_document_section[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }; metadata?: object; }',
    markdown:
      "## create\n\n`client.document.section.create(document_id: string, name: string, context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }, description?: { content: object; } | object, parentId?: string, plaintextDescription?: string): { data?: morta_document_section; metadata?: object; }`\n\n**post** `/v1/document/{document_id}/section`\n\nCreate a new section within a specified document, with an option to set a parent section\n\n### Parameters\n\n- `document_id: string`\n\n- `name: string`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n- `description?: { content: { blocks: { data: object; depth: number; entityRanges: object[]; inlineStyleRanges: object[]; key: string; text: string; type: string; }[]; entityMap: object; }; } | object`\n\n- `parentId?: string`\n\n- `plaintextDescription?: string`\n\n### Returns\n\n- `{ data?: { children?: morta_document_section[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }; metadata?: object; }`\n\n  - `data?: { children?: { children?: morta_document_section[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }[]; createdAt?: string; deletedAt?: string; description?: { content: object; }; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: { createdAt?: string; deletedAt?: string; enableSubmission?: boolean; isDeleted?: boolean; pdfIncludeResponse?: boolean; position?: number; publicId?: string; resetAfterResponse?: boolean; response?: object; responseDate?: string; type?: string; typeOptions?: object; updatedAt?: string; user?: summary_user; }[]; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst section = await client.document.section.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { name: 'name' });\n\nconsole.log(section);\n```",
    perLanguage: {
      typescript: {
        method: 'client.document.section.create',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst section = await client.document.section.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  name: 'name',\n});\n\nconsole.log(section.data);",
      },
      python: {
        method: 'document.section.create',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nsection = client.document.section.create(\n    document_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    name="name",\n)\nprint(section.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/document/$DOCUMENT_ID/section \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "name": "name"\n        }\'',
      },
    },
  },
  {
    name: 'duplicate_async',
    endpoint: '/v1/document/{document_id}/section/{document_section_id}/duplicate-async',
    httpMethod: 'post',
    summary: 'Duplicate Document Section',
    description: 'Duplicate a specific document section asynchronously.',
    stainlessPath: '(resource) document.section > (method) duplicate_async',
    qualified: 'client.document.section.duplicateAsync',
    params: ['document_id: string;', 'document_section_id: string;'],
    response: '{ data?: string; metadata?: object; }',
    markdown:
      "## duplicate_async\n\n`client.document.section.duplicateAsync(document_id: string, document_section_id: string): { data?: string; metadata?: object; }`\n\n**post** `/v1/document/{document_id}/section/{document_section_id}/duplicate-async`\n\nDuplicate a specific document section asynchronously.\n\n### Parameters\n\n- `document_id: string`\n\n- `document_section_id: string`\n\n### Returns\n\n- `{ data?: string; metadata?: object; }`\n\n  - `data?: string`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.document.section.duplicateAsync('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.document.section.duplicateAsync',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.document.section.duplicateAsync(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },\n);\n\nconsole.log(response.data);",
      },
      python: {
        method: 'document.section.duplicate_async',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.document.section.duplicate_async(\n    document_section_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    document_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/document/$DOCUMENT_ID/section/$DOCUMENT_SECTION_ID/duplicate-async \\\n    -X POST \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'duplicate',
    endpoint: '/v1/document/{document_id}/section/{document_section_id}/duplicate',
    httpMethod: 'post',
    summary: 'Duplicate Document Section',
    description: 'Duplicate a specific document section.',
    stainlessPath: '(resource) document.section > (method) duplicate',
    qualified: 'client.document.section.duplicate',
    params: ['document_id: string;', 'document_section_id: string;'],
    response:
      '{ data?: { children?: morta_document_section[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }; metadata?: object; }',
    markdown:
      "## duplicate\n\n`client.document.section.duplicate(document_id: string, document_section_id: string): { data?: morta_document_section; metadata?: object; }`\n\n**post** `/v1/document/{document_id}/section/{document_section_id}/duplicate`\n\nDuplicate a specific document section.\n\n### Parameters\n\n- `document_id: string`\n\n- `document_section_id: string`\n\n### Returns\n\n- `{ data?: { children?: morta_document_section[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }; metadata?: object; }`\n\n  - `data?: { children?: { children?: morta_document_section[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }[]; createdAt?: string; deletedAt?: string; description?: { content: object; }; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: { createdAt?: string; deletedAt?: string; enableSubmission?: boolean; isDeleted?: boolean; pdfIncludeResponse?: boolean; position?: number; publicId?: string; resetAfterResponse?: boolean; response?: object; responseDate?: string; type?: string; typeOptions?: object; updatedAt?: string; user?: summary_user; }[]; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.document.section.duplicate('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.document.section.duplicate',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.document.section.duplicate('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'document.section.duplicate',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.document.section.duplicate(\n    document_section_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    document_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/document/$DOCUMENT_ID/section/$DOCUMENT_SECTION_ID/duplicate \\\n    -X POST \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/document/{document_id}/section/{document_section_id}',
    httpMethod: 'get',
    summary: 'Get Document Section',
    description: 'Retrieve a specific Document section.',
    stainlessPath: '(resource) document.section > (method) retrieve',
    qualified: 'client.document.section.retrieve',
    params: ['document_id: string;', 'document_section_id: string;', 'main_parent_section?: boolean;'],
    response:
      '{ data?: { children?: morta_document_section[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }; metadata?: object; }',
    markdown:
      "## retrieve\n\n`client.document.section.retrieve(document_id: string, document_section_id: string, main_parent_section?: boolean): { data?: morta_document_section; metadata?: object; }`\n\n**get** `/v1/document/{document_id}/section/{document_section_id}`\n\nRetrieve a specific Document section.\n\n### Parameters\n\n- `document_id: string`\n\n- `document_section_id: string`\n\n- `main_parent_section?: boolean`\n  Flag to retrieve the main parent section of the document section\n\n### Returns\n\n- `{ data?: { children?: morta_document_section[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }; metadata?: object; }`\n\n  - `data?: { children?: { children?: morta_document_section[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }[]; createdAt?: string; deletedAt?: string; description?: { content: object; }; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: { createdAt?: string; deletedAt?: string; enableSubmission?: boolean; isDeleted?: boolean; pdfIncludeResponse?: boolean; position?: number; publicId?: string; resetAfterResponse?: boolean; response?: object; responseDate?: string; type?: string; typeOptions?: object; updatedAt?: string; user?: summary_user; }[]; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst section = await client.document.section.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(section);\n```",
    perLanguage: {
      typescript: {
        method: 'client.document.section.retrieve',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst section = await client.document.section.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(section.data);",
      },
      python: {
        method: 'document.section.retrieve',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nsection = client.document.section.retrieve(\n    document_section_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    document_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(section.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/document/$DOCUMENT_ID/section/$DOCUMENT_SECTION_ID \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/document/{document_id}/section/{document_section_id}',
    httpMethod: 'put',
    summary: 'Update an Existing Document Section',
    description: "Update an existing document section's details by document section ID",
    stainlessPath: '(resource) document.section > (method) update',
    qualified: 'client.document.section.update',
    params: [
      'document_id: string;',
      'document_section_id: string;',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
      'description?: object | { content: { blocks: { data: object; depth: number; entityRanges: object[]; inlineStyleRanges: object[]; key: string; text: string; type: string; }[]; entityMap: object; }; };',
      'name?: string;',
      'pageBreakBefore?: boolean;',
      'pdfIncludeDescription?: boolean;',
      'pdfIncludeSection?: boolean;',
      'plaintextDescription?: string;',
    ],
    response:
      '{ data?: { children?: morta_document_section[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }; metadata?: object; }',
    markdown:
      "## update\n\n`client.document.section.update(document_id: string, document_section_id: string, context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }, description?: object | { content: object; }, name?: string, pageBreakBefore?: boolean, pdfIncludeDescription?: boolean, pdfIncludeSection?: boolean, plaintextDescription?: string): { data?: morta_document_section; metadata?: object; }`\n\n**put** `/v1/document/{document_id}/section/{document_section_id}`\n\nUpdate an existing document section's details by document section ID\n\n### Parameters\n\n- `document_id: string`\n\n- `document_section_id: string`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n- `description?: object | { content: { blocks: { data: object; depth: number; entityRanges: object[]; inlineStyleRanges: object[]; key: string; text: string; type: string; }[]; entityMap: object; }; }`\n\n- `name?: string`\n\n- `pageBreakBefore?: boolean`\n\n- `pdfIncludeDescription?: boolean`\n\n- `pdfIncludeSection?: boolean`\n\n- `plaintextDescription?: string`\n\n### Returns\n\n- `{ data?: { children?: morta_document_section[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }; metadata?: object; }`\n\n  - `data?: { children?: { children?: morta_document_section[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }[]; createdAt?: string; deletedAt?: string; description?: { content: object; }; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: { createdAt?: string; deletedAt?: string; enableSubmission?: boolean; isDeleted?: boolean; pdfIncludeResponse?: boolean; position?: number; publicId?: string; resetAfterResponse?: boolean; response?: object; responseDate?: string; type?: string; typeOptions?: object; updatedAt?: string; user?: summary_user; }[]; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst section = await client.document.section.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(section);\n```",
    perLanguage: {
      typescript: {
        method: 'client.document.section.update',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst section = await client.document.section.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(section.data);",
      },
      python: {
        method: 'document.section.update',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nsection = client.document.section.update(\n    document_section_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    document_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(section.data)',
      },
      http: {
        example:
          "curl https://api.morta.io/v1/document/$DOCUMENT_ID/section/$DOCUMENT_SECTION_ID \\\n    -X PUT \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $MORTA_API_KEY\" \\\n    -d '{}'",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/document/{document_id}/section/{document_section_id}',
    httpMethod: 'delete',
    summary: 'Delete Document Section',
    description: 'Delete a specific document section.',
    stainlessPath: '(resource) document.section > (method) delete',
    qualified: 'client.document.section.delete',
    params: ['document_id: string;', 'document_section_id: string;'],
    response:
      '{ data?: { children?: morta_document_section[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }; metadata?: object; }',
    markdown:
      "## delete\n\n`client.document.section.delete(document_id: string, document_section_id: string): { data?: morta_document_section; metadata?: object; }`\n\n**delete** `/v1/document/{document_id}/section/{document_section_id}`\n\nDelete a specific document section.\n\n### Parameters\n\n- `document_id: string`\n\n- `document_section_id: string`\n\n### Returns\n\n- `{ data?: { children?: morta_document_section[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }; metadata?: object; }`\n\n  - `data?: { children?: { children?: morta_document_section[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }[]; createdAt?: string; deletedAt?: string; description?: { content: object; }; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: { createdAt?: string; deletedAt?: string; enableSubmission?: boolean; isDeleted?: boolean; pdfIncludeResponse?: boolean; position?: number; publicId?: string; resetAfterResponse?: boolean; response?: object; responseDate?: string; type?: string; typeOptions?: object; updatedAt?: string; user?: summary_user; }[]; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst section = await client.document.section.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(section);\n```",
    perLanguage: {
      typescript: {
        method: 'client.document.section.delete',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst section = await client.document.section.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(section.data);",
      },
      python: {
        method: 'document.section.delete',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nsection = client.document.section.delete(\n    document_section_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    document_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(section.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/document/$DOCUMENT_ID/section/$DOCUMENT_SECTION_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'restore',
    endpoint: '/v1/document/{document_id}/section/{document_section_id}/restore',
    httpMethod: 'put',
    summary: 'Restore Document Section',
    description: 'Restore a previously deleted document section.',
    stainlessPath: '(resource) document.section > (method) restore',
    qualified: 'client.document.section.restore',
    params: ['document_id: string;', 'document_section_id: string;'],
    response:
      '{ data?: { children?: morta_document_section[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }; metadata?: object; }',
    markdown:
      "## restore\n\n`client.document.section.restore(document_id: string, document_section_id: string): { data?: morta_document_section; metadata?: object; }`\n\n**put** `/v1/document/{document_id}/section/{document_section_id}/restore`\n\nRestore a previously deleted document section.\n\n### Parameters\n\n- `document_id: string`\n\n- `document_section_id: string`\n\n### Returns\n\n- `{ data?: { children?: morta_document_section[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }; metadata?: object; }`\n\n  - `data?: { children?: { children?: morta_document_section[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }[]; createdAt?: string; deletedAt?: string; description?: { content: object; }; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: { createdAt?: string; deletedAt?: string; enableSubmission?: boolean; isDeleted?: boolean; pdfIncludeResponse?: boolean; position?: number; publicId?: string; resetAfterResponse?: boolean; response?: object; responseDate?: string; type?: string; typeOptions?: object; updatedAt?: string; user?: summary_user; }[]; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.document.section.restore('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.document.section.restore',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.document.section.restore('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'document.section.restore',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.document.section.restore(\n    document_section_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    document_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/document/$DOCUMENT_ID/section/$DOCUMENT_SECTION_ID/restore \\\n    -X PUT \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/document/{document_id}/section/{document_section_id}/response',
    httpMethod: 'post',
    summary: 'Create New Document Response',
    description: 'Create a new response for a document section.',
    stainlessPath: '(resource) document.section.response > (method) create',
    qualified: 'client.document.section.response.create',
    params: [
      'document_id: string;',
      'document_section_id: string;',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
      "type?: 'Flexible' | 'File Upload' | 'Table' | 'Signature' | 'Selection';",
    ],
    response:
      '{ data?: { createdAt?: string; deletedAt?: string; enableSubmission?: boolean; isDeleted?: boolean; pdfIncludeResponse?: boolean; position?: number; publicId?: string; resetAfterResponse?: boolean; response?: object; responseDate?: string; type?: string; typeOptions?: object; updatedAt?: string; user?: summary_user; }; metadata?: object; }',
    markdown:
      "## create\n\n`client.document.section.response.create(document_id: string, document_section_id: string, context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }, type?: 'Flexible' | 'File Upload' | 'Table' | 'Signature' | 'Selection'): { data?: document_response; metadata?: object; }`\n\n**post** `/v1/document/{document_id}/section/{document_section_id}/response`\n\nCreate a new response for a document section.\n\n### Parameters\n\n- `document_id: string`\n\n- `document_section_id: string`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n- `type?: 'Flexible' | 'File Upload' | 'Table' | 'Signature' | 'Selection'`\n\n### Returns\n\n- `{ data?: { createdAt?: string; deletedAt?: string; enableSubmission?: boolean; isDeleted?: boolean; pdfIncludeResponse?: boolean; position?: number; publicId?: string; resetAfterResponse?: boolean; response?: object; responseDate?: string; type?: string; typeOptions?: object; updatedAt?: string; user?: summary_user; }; metadata?: object; }`\n\n  - `data?: { createdAt?: string; deletedAt?: string; enableSubmission?: boolean; isDeleted?: boolean; pdfIncludeResponse?: boolean; position?: number; publicId?: string; resetAfterResponse?: boolean; response?: object; responseDate?: string; type?: string; typeOptions?: object; updatedAt?: string; user?: { email?: string; firebaseUserId?: string; name?: string; profilePicture?: string; publicId?: string; }; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.document.section.response.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.document.section.response.create',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.document.section.response.create(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },\n);\n\nconsole.log(response.data);",
      },
      python: {
        method: 'document.section.response.create',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.document.section.response.create(\n    document_section_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    document_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/document/$DOCUMENT_ID/section/$DOCUMENT_SECTION_ID/response \\\n    -X POST \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/document/{document_id}/section/{document_section_id}/response/{document_response_id}',
    httpMethod: 'put',
    summary: 'Update Existing Document Response',
    description: 'Update an existing response for a document section.',
    stainlessPath: '(resource) document.section.response > (method) update',
    qualified: 'client.document.section.response.update',
    params: [
      'document_id: string;',
      'document_section_id: string;',
      'document_response_id: string;',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
      'enableSubmission?: boolean;',
      'pdfIncludeResponse?: boolean;',
      'resetAfterResponse?: boolean;',
      "type?: 'Flexible' | 'File Upload' | 'Table' | 'Signature' | 'Selection';",
      'typeOptions?: object;',
    ],
    response:
      '{ data?: { createdAt?: string; deletedAt?: string; enableSubmission?: boolean; isDeleted?: boolean; pdfIncludeResponse?: boolean; position?: number; publicId?: string; resetAfterResponse?: boolean; response?: object; responseDate?: string; type?: string; typeOptions?: object; updatedAt?: string; user?: object; }; metadata?: object; }',
    markdown:
      "## update\n\n`client.document.section.response.update(document_id: string, document_section_id: string, document_response_id: string, context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }, enableSubmission?: boolean, pdfIncludeResponse?: boolean, resetAfterResponse?: boolean, type?: 'Flexible' | 'File Upload' | 'Table' | 'Signature' | 'Selection', typeOptions?: object): { data?: object; metadata?: object; }`\n\n**put** `/v1/document/{document_id}/section/{document_section_id}/response/{document_response_id}`\n\nUpdate an existing response for a document section.\n\n### Parameters\n\n- `document_id: string`\n\n- `document_section_id: string`\n\n- `document_response_id: string`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n- `enableSubmission?: boolean`\n\n- `pdfIncludeResponse?: boolean`\n\n- `resetAfterResponse?: boolean`\n\n- `type?: 'Flexible' | 'File Upload' | 'Table' | 'Signature' | 'Selection'`\n\n- `typeOptions?: object`\n\n### Returns\n\n- `{ data?: { createdAt?: string; deletedAt?: string; enableSubmission?: boolean; isDeleted?: boolean; pdfIncludeResponse?: boolean; position?: number; publicId?: string; resetAfterResponse?: boolean; response?: object; responseDate?: string; type?: string; typeOptions?: object; updatedAt?: string; user?: object; }; metadata?: object; }`\n\n  - `data?: { createdAt?: string; deletedAt?: string; enableSubmission?: boolean; isDeleted?: boolean; pdfIncludeResponse?: boolean; position?: number; publicId?: string; resetAfterResponse?: boolean; response?: object; responseDate?: string; type?: string; typeOptions?: object; updatedAt?: string; user?: { email?: string; firebaseUserId?: string; name?: string; profilePicture?: string; publicId?: string; }; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.document.section.response.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', document_section_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.document.section.response.update',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.document.section.response.update(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  {\n    document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n    document_section_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  },\n);\n\nconsole.log(response.data);",
      },
      python: {
        method: 'document.section.response.update',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.document.section.response.update(\n    document_response_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    document_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    document_section_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/document/$DOCUMENT_ID/section/$DOCUMENT_SECTION_ID/response/$DOCUMENT_RESPONSE_ID \\\n    -X PUT \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/document/{document_id}/section/{document_section_id}/response/{document_response_id}',
    httpMethod: 'delete',
    summary: 'Delete Document Response',
    description: 'Delete a specific document response.',
    stainlessPath: '(resource) document.section.response > (method) delete',
    qualified: 'client.document.section.response.delete',
    params: ['document_id: string;', 'document_section_id: string;', 'document_response_id: string;'],
    response:
      '{ data?: { children?: morta_document_section[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }; metadata?: object; }',
    markdown:
      "## delete\n\n`client.document.section.response.delete(document_id: string, document_section_id: string, document_response_id: string): { data?: morta_document_section; metadata?: object; }`\n\n**delete** `/v1/document/{document_id}/section/{document_section_id}/response/{document_response_id}`\n\nDelete a specific document response.\n\n### Parameters\n\n- `document_id: string`\n\n- `document_section_id: string`\n\n- `document_response_id: string`\n\n### Returns\n\n- `{ data?: { children?: morta_document_section[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }; metadata?: object; }`\n\n  - `data?: { children?: { children?: morta_document_section[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }[]; createdAt?: string; deletedAt?: string; description?: { content: object; }; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: { createdAt?: string; deletedAt?: string; enableSubmission?: boolean; isDeleted?: boolean; pdfIncludeResponse?: boolean; position?: number; publicId?: string; resetAfterResponse?: boolean; response?: object; responseDate?: string; type?: string; typeOptions?: object; updatedAt?: string; user?: summary_user; }[]; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.document.section.response.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', document_section_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.document.section.response.delete',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.document.section.response.delete(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  {\n    document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n    document_section_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  },\n);\n\nconsole.log(response.data);",
      },
      python: {
        method: 'document.section.response.delete',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.document.section.response.delete(\n    document_response_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    document_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    document_section_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/document/$DOCUMENT_ID/section/$DOCUMENT_SECTION_ID/response/$DOCUMENT_RESPONSE_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'reset',
    endpoint:
      '/v1/document/{document_id}/section/{document_section_id}/response/{document_response_id}/reset',
    httpMethod: 'put',
    summary: 'Reset Document Response',
    description: 'Reset an existing document response to its initial state.',
    stainlessPath: '(resource) document.section.response > (method) reset',
    qualified: 'client.document.section.response.reset',
    params: ['document_id: string;', 'document_section_id: string;', 'document_response_id: string;'],
    response:
      '{ data?: { children?: morta_document_section[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }; metadata?: object; }',
    markdown:
      "## reset\n\n`client.document.section.response.reset(document_id: string, document_section_id: string, document_response_id: string): { data?: morta_document_section; metadata?: object; }`\n\n**put** `/v1/document/{document_id}/section/{document_section_id}/response/{document_response_id}/reset`\n\nReset an existing document response to its initial state.\n\n### Parameters\n\n- `document_id: string`\n\n- `document_section_id: string`\n\n- `document_response_id: string`\n\n### Returns\n\n- `{ data?: { children?: morta_document_section[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }; metadata?: object; }`\n\n  - `data?: { children?: { children?: morta_document_section[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }[]; createdAt?: string; deletedAt?: string; description?: { content: object; }; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: { createdAt?: string; deletedAt?: string; enableSubmission?: boolean; isDeleted?: boolean; pdfIncludeResponse?: boolean; position?: number; publicId?: string; resetAfterResponse?: boolean; response?: object; responseDate?: string; type?: string; typeOptions?: object; updatedAt?: string; user?: summary_user; }[]; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.document.section.response.reset('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', document_section_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.document.section.response.reset',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.document.section.response.reset(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  {\n    document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n    document_section_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  },\n);\n\nconsole.log(response.data);",
      },
      python: {
        method: 'document.section.response.reset',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.document.section.response.reset(\n    document_response_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    document_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    document_section_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/document/$DOCUMENT_ID/section/$DOCUMENT_SECTION_ID/response/$DOCUMENT_RESPONSE_ID/reset \\\n    -X PUT \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'submit',
    endpoint:
      '/v1/document/{document_id}/section/{document_section_id}/response/{document_response_id}/submit',
    httpMethod: 'put',
    summary: 'Submit Document Response',
    description: 'Submit a document response, marking it as completed.',
    stainlessPath: '(resource) document.section.response > (method) submit',
    qualified: 'client.document.section.response.submit',
    params: [
      'document_id: string;',
      'document_section_id: string;',
      'document_response_id: string;',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
      'response?: object;',
    ],
    response:
      '{ data?: { children?: morta_document_section[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }; metadata?: object; }',
    markdown:
      "## submit\n\n`client.document.section.response.submit(document_id: string, document_section_id: string, document_response_id: string, context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }, response?: object): { data?: morta_document_section; metadata?: object; }`\n\n**put** `/v1/document/{document_id}/section/{document_section_id}/response/{document_response_id}/submit`\n\nSubmit a document response, marking it as completed.\n\n### Parameters\n\n- `document_id: string`\n\n- `document_section_id: string`\n\n- `document_response_id: string`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n- `response?: object`\n\n### Returns\n\n- `{ data?: { children?: morta_document_section[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }; metadata?: object; }`\n\n  - `data?: { children?: { children?: morta_document_section[]; createdAt?: string; deletedAt?: string; description?: draftjs; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: document_response[]; }[]; createdAt?: string; deletedAt?: string; description?: { content: object; }; isDeleted?: boolean; name?: string; openCommentThreads?: number; pageBreakBefore?: boolean; parentId?: string; pdfIncludeDescription?: boolean; pdfIncludeSection?: boolean; position?: number; publicId?: string; responses?: { createdAt?: string; deletedAt?: string; enableSubmission?: boolean; isDeleted?: boolean; pdfIncludeResponse?: boolean; position?: number; publicId?: string; resetAfterResponse?: boolean; response?: object; responseDate?: string; type?: string; typeOptions?: object; updatedAt?: string; user?: summary_user; }[]; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.document.section.response.submit('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', document_section_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.document.section.response.submit',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.document.section.response.submit(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  {\n    document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n    document_section_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  },\n);\n\nconsole.log(response.data);",
      },
      python: {
        method: 'document.section.response.submit',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.document.section.response.submit(\n    document_response_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    document_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    document_section_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/document/$DOCUMENT_ID/section/$DOCUMENT_SECTION_ID/response/$DOCUMENT_RESPONSE_ID/submit \\\n    -X PUT \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'restore',
    endpoint:
      '/v1/document/{document_id}/section/{document_section_id}/response/{document_response_id}/restore',
    httpMethod: 'put',
    summary: 'Restore Document Response',
    description: 'Restore a previously deleted document response.',
    stainlessPath: '(resource) document.section.response > (method) restore',
    qualified: 'client.document.section.response.restore',
    params: ['document_id: string;', 'document_section_id: string;', 'document_response_id: string;'],
    response:
      '{ data?: { createdAt?: string; deletedAt?: string; enableSubmission?: boolean; isDeleted?: boolean; pdfIncludeResponse?: boolean; position?: number; publicId?: string; resetAfterResponse?: boolean; response?: object; responseDate?: string; type?: string; typeOptions?: object; updatedAt?: string; user?: summary_user; }; metadata?: object; }',
    markdown:
      "## restore\n\n`client.document.section.response.restore(document_id: string, document_section_id: string, document_response_id: string): { data?: document_response; metadata?: object; }`\n\n**put** `/v1/document/{document_id}/section/{document_section_id}/response/{document_response_id}/restore`\n\nRestore a previously deleted document response.\n\n### Parameters\n\n- `document_id: string`\n\n- `document_section_id: string`\n\n- `document_response_id: string`\n\n### Returns\n\n- `{ data?: { createdAt?: string; deletedAt?: string; enableSubmission?: boolean; isDeleted?: boolean; pdfIncludeResponse?: boolean; position?: number; publicId?: string; resetAfterResponse?: boolean; response?: object; responseDate?: string; type?: string; typeOptions?: object; updatedAt?: string; user?: summary_user; }; metadata?: object; }`\n\n  - `data?: { createdAt?: string; deletedAt?: string; enableSubmission?: boolean; isDeleted?: boolean; pdfIncludeResponse?: boolean; position?: number; publicId?: string; resetAfterResponse?: boolean; response?: object; responseDate?: string; type?: string; typeOptions?: object; updatedAt?: string; user?: { email?: string; firebaseUserId?: string; name?: string; profilePicture?: string; publicId?: string; }; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.document.section.response.restore('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', document_section_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.document.section.response.restore',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.document.section.response.restore(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  {\n    document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n    document_section_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  },\n);\n\nconsole.log(response.data);",
      },
      python: {
        method: 'document.section.response.restore',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.document.section.response.restore(\n    document_response_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    document_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    document_section_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/document/$DOCUMENT_ID/section/$DOCUMENT_SECTION_ID/response/$DOCUMENT_RESPONSE_ID/restore \\\n    -X PUT \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/notifications',
    httpMethod: 'post',
    summary: 'Create a new notification',
    description: 'Create a new notification for a specific hub.',
    stainlessPath: '(resource) notifications > (method) create',
    qualified: 'client.notifications.create',
    params: [
      'description: string;',
      'projectId: string;',
      'triggers: { resource: string; verb: string; }[];',
      'webhookUrl: string;',
      'customHeaders?: { key: string; value: string; }[];',
      'processes?: string[];',
      'tables?: string[];',
    ],
    response:
      '{ data?: { actions: action[]; publicId: string; triggers: trigger[]; createdAt?: string; description?: string; processes?: document[]; tables?: table1[]; user?: summary_user; }; metadata?: object; }',
    markdown:
      "## create\n\n`client.notifications.create(description: string, projectId: string, triggers: { resource: string; verb: string; }[], webhookUrl: string, customHeaders?: { key: string; value: string; }[], processes?: string[], tables?: string[]): { data?: notification; metadata?: object; }`\n\n**post** `/v1/notifications`\n\nCreate a new notification for a specific hub.\n\n### Parameters\n\n- `description: string`\n\n- `projectId: string`\n\n- `triggers: { resource: string; verb: string; }[]`\n\n- `webhookUrl: string`\n\n- `customHeaders?: { key: string; value: string; }[]`\n\n- `processes?: string[]`\n\n- `tables?: string[]`\n\n### Returns\n\n- `{ data?: { actions: action[]; publicId: string; triggers: trigger[]; createdAt?: string; description?: string; processes?: document[]; tables?: table1[]; user?: summary_user; }; metadata?: object; }`\n\n  - `data?: { actions: { kind: string; publicId: string; customHeaders?: object[]; webhookUrl?: string; }[]; publicId: string; triggers: { publicId: string; resource: string; verb: string; }[]; createdAt?: string; description?: string; processes?: { name?: string; publicId?: string; }[]; tables?: { defaultViewId?: string; name?: string; publicId?: string; }[]; user?: { email?: string; firebaseUserId?: string; name?: string; profilePicture?: string; publicId?: string; }; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst notification = await client.notifications.create({\n  description: 'description',\n  projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  triggers: [{ resource: 'resource', verb: 'verb' }],\n  webhookUrl: 'webhookUrl',\n});\n\nconsole.log(notification);\n```",
    perLanguage: {
      typescript: {
        method: 'client.notifications.create',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst notification = await client.notifications.create({\n  description: 'description',\n  projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  triggers: [{ resource: 'resource', verb: 'verb' }],\n  webhookUrl: 'webhookUrl',\n});\n\nconsole.log(notification.data);",
      },
      python: {
        method: 'notifications.create',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nnotification = client.notifications.create(\n    description="description",\n    project_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    triggers=[{\n        "resource": "resource",\n        "verb": "verb",\n    }],\n    webhook_url="webhookUrl",\n)\nprint(notification.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/notifications \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "description": "description",\n          "projectId": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "triggers": [\n            {\n              "resource": "resource",\n              "verb": "verb"\n            }\n          ],\n          "webhookUrl": "webhookUrl"\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/notifications/{id}',
    httpMethod: 'delete',
    summary: 'Delete a single notification',
    description: 'Delete a specific notification by its ID.',
    stainlessPath: '(resource) notifications > (method) delete',
    qualified: 'client.notifications.delete',
    params: ['id: string;'],
    response: '{ data?: string; metadata?: object; }',
    markdown:
      "## delete\n\n`client.notifications.delete(id: string): { data?: string; metadata?: object; }`\n\n**delete** `/v1/notifications/{id}`\n\nDelete a specific notification by its ID.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ data?: string; metadata?: object; }`\n\n  - `data?: string`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst notification = await client.notifications.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(notification);\n```",
    perLanguage: {
      typescript: {
        method: 'client.notifications.delete',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst notification = await client.notifications.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(notification.data);",
      },
      python: {
        method: 'notifications.delete',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nnotification = client.notifications.delete(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(notification.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/notifications/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/notifications/{id}',
    httpMethod: 'put',
    summary: 'Update a single notification',
    description: 'Update a specific notification by its ID.',
    stainlessPath: '(resource) notifications > (method) update',
    qualified: 'client.notifications.update',
    params: [
      'id: string;',
      'webhookUrl: string;',
      'customHeaders?: { key: string; value: string; }[];',
      'description?: string;',
      'processes?: string[];',
      'tables?: string[];',
      'triggers?: { resource: string; verb: string; publicId?: string; }[];',
    ],
    response:
      '{ data?: { actions: action[]; publicId: string; triggers: trigger[]; createdAt?: string; description?: string; processes?: document[]; tables?: table1[]; user?: summary_user; }; metadata?: object; }',
    markdown:
      "## update\n\n`client.notifications.update(id: string, webhookUrl: string, customHeaders?: { key: string; value: string; }[], description?: string, processes?: string[], tables?: string[], triggers?: { resource: string; verb: string; publicId?: string; }[]): { data?: notification; metadata?: object; }`\n\n**put** `/v1/notifications/{id}`\n\nUpdate a specific notification by its ID.\n\n### Parameters\n\n- `id: string`\n\n- `webhookUrl: string`\n\n- `customHeaders?: { key: string; value: string; }[]`\n\n- `description?: string`\n\n- `processes?: string[]`\n\n- `tables?: string[]`\n\n- `triggers?: { resource: string; verb: string; publicId?: string; }[]`\n\n### Returns\n\n- `{ data?: { actions: action[]; publicId: string; triggers: trigger[]; createdAt?: string; description?: string; processes?: document[]; tables?: table1[]; user?: summary_user; }; metadata?: object; }`\n\n  - `data?: { actions: { kind: string; publicId: string; customHeaders?: object[]; webhookUrl?: string; }[]; publicId: string; triggers: { publicId: string; resource: string; verb: string; }[]; createdAt?: string; description?: string; processes?: { name?: string; publicId?: string; }[]; tables?: { defaultViewId?: string; name?: string; publicId?: string; }[]; user?: { email?: string; firebaseUserId?: string; name?: string; profilePicture?: string; publicId?: string; }; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst notification = await client.notifications.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { webhookUrl: 'webhookUrl' });\n\nconsole.log(notification);\n```",
    perLanguage: {
      typescript: {
        method: 'client.notifications.update',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst notification = await client.notifications.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  webhookUrl: 'webhookUrl',\n});\n\nconsole.log(notification.data);",
      },
      python: {
        method: 'notifications.update',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nnotification = client.notifications.update(\n    id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    webhook_url="webhookUrl",\n)\nprint(notification.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/notifications/$ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "webhookUrl": "webhookUrl"\n        }\'',
      },
    },
  },
  {
    name: 'list_event_types',
    endpoint: '/v1/notifications/event-types',
    httpMethod: 'get',
    summary: 'Get a list of all supported event types',
    description: 'Retrieve a list of all supported event types for notifications.',
    stainlessPath: '(resource) notifications > (method) list_event_types',
    qualified: 'client.notifications.listEventTypes',
    response: '{ data?: string[]; metadata?: object; }',
    markdown:
      "## list_event_types\n\n`client.notifications.listEventTypes(): { data?: string[]; metadata?: object; }`\n\n**get** `/v1/notifications/event-types`\n\nRetrieve a list of all supported event types for notifications.\n\n### Returns\n\n- `{ data?: string[]; metadata?: object; }`\n\n  - `data?: string[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.notifications.listEventTypes();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.notifications.listEventTypes',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.notifications.listEventTypes();\n\nconsole.log(response.data);",
      },
      python: {
        method: 'notifications.list_event_types',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.notifications.list_event_types()\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/notifications/event-types \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'list_events',
    endpoint: '/v1/notifications/events/{resource_id}',
    httpMethod: 'get',
    summary: 'Get all events for a resource',
    description: 'Retrieve all events associated with a specific resource, filtered by various criteria.',
    stainlessPath: '(resource) notifications > (method) list_events',
    qualified: 'client.notifications.listEvents',
    params: [
      'resource_id: string;',
      "type: 'process' | 'process_section' | 'process_response' | 'table' | 'project' | 'user';",
      'end_date?: string;',
      'page?: number;',
      'search?: string;',
      'start_date?: string;',
      'users?: string[];',
      'verb?: string[];',
    ],
    response:
      '{ data?: { change?: object; changeId?: string; channel?: string; context?: object; contextProcessId?: number; contextProcessResponseId?: number; contextProcessSectionId?: number; contextTableColumnId?: number; contextTableId?: number; contextTableViewId?: number; createdAt?: string; projectId?: number; publicId?: string; resource?: string; resourcePublicId?: string; userId?: number; verb?: string; }[]; metadata?: object; }',
    markdown:
      "## list_events\n\n`client.notifications.listEvents(resource_id: string, type: 'process' | 'process_section' | 'process_response' | 'table' | 'project' | 'user', end_date?: string, page?: number, search?: string, start_date?: string, users?: string[], verb?: string[]): { data?: event[]; metadata?: object; }`\n\n**get** `/v1/notifications/events/{resource_id}`\n\nRetrieve all events associated with a specific resource, filtered by various criteria.\n\n### Parameters\n\n- `resource_id: string`\n\n- `type: 'process' | 'process_section' | 'process_response' | 'table' | 'project' | 'user'`\n  The type of the resource (e.g., user, process, table, project).\n\n- `end_date?: string`\n  Optional end date to filter the events.\n\n- `page?: number`\n  Page number for pagination.\n\n- `search?: string`\n  Optional search term to filter the events.\n\n- `start_date?: string`\n  Optional start date to filter the events.\n\n- `users?: string[]`\n  Optional UUID of a user to filter the events.\n\n- `verb?: string[]`\n  Optional list of verbs to filter the events.\n\n### Returns\n\n- `{ data?: { change?: object; changeId?: string; channel?: string; context?: object; contextProcessId?: number; contextProcessResponseId?: number; contextProcessSectionId?: number; contextTableColumnId?: number; contextTableId?: number; contextTableViewId?: number; createdAt?: string; projectId?: number; publicId?: string; resource?: string; resourcePublicId?: string; userId?: number; verb?: string; }[]; metadata?: object; }`\n\n  - `data?: { change?: object; changeId?: string; channel?: string; context?: object; contextProcessId?: number; contextProcessResponseId?: number; contextProcessSectionId?: number; contextTableColumnId?: number; contextTableId?: number; contextTableViewId?: number; createdAt?: string; projectId?: number; publicId?: string; resource?: string; resourcePublicId?: string; userId?: number; verb?: string; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.notifications.listEvents('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { type: 'process' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.notifications.listEvents',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.notifications.listEvents('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  type: 'process',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'notifications.list_events',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.notifications.list_events(\n    resource_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    type="process",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/notifications/events/$RESOURCE_ID \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/comment_thread/{comment_thread_id}',
    httpMethod: 'get',
    summary: 'Get Comment Thread',
    description: 'Retrieve a specific comment thread by its ID',
    stainlessPath: '(resource) comment_thread > (method) retrieve',
    qualified: 'client.commentThread.retrieve',
    params: ['comment_thread_id: string;'],
    response:
      '{ data?: { comments?: comment_model[]; createdAt?: string; deletedAt?: string; isCommentInitiator?: object; publicId?: string; resolvedAt?: string; resolver?: object; updatedAt?: string; }; metadata?: object; }',
    markdown:
      "## retrieve\n\n`client.commentThread.retrieve(comment_thread_id: string): { data?: comment_thread; metadata?: object; }`\n\n**get** `/v1/comment_thread/{comment_thread_id}`\n\nRetrieve a specific comment thread by its ID\n\n### Parameters\n\n- `comment_thread_id: string`\n\n### Returns\n\n- `{ data?: { comments?: comment_model[]; createdAt?: string; deletedAt?: string; isCommentInitiator?: object; publicId?: string; resolvedAt?: string; resolver?: object; updatedAt?: string; }; metadata?: object; }`\n\n  - `data?: { comments?: { commentText?: string; createdAt?: string; deletedAt?: string; isOwner?: object; publicId?: string; updatedAt?: string; user?: summary_user; }[]; createdAt?: string; deletedAt?: string; isCommentInitiator?: object; publicId?: string; resolvedAt?: string; resolver?: { name?: string; }; updatedAt?: string; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst commentThread = await client.commentThread.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(commentThread);\n```",
    perLanguage: {
      typescript: {
        method: 'client.commentThread.retrieve',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst commentThread = await client.commentThread.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(commentThread.data);",
      },
      python: {
        method: 'comment_thread.retrieve',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\ncomment_thread = client.comment_thread.retrieve(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(comment_thread.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/comment_thread/$COMMENT_THREAD_ID \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/comment_thread/{comment_thread_id}',
    httpMethod: 'delete',
    summary: 'Delete Comment Thread',
    description: 'Delete a comment thread',
    stainlessPath: '(resource) comment_thread > (method) delete',
    qualified: 'client.commentThread.delete',
    params: ['comment_thread_id: string;'],
    response:
      '{ data?: { comments?: comment_model[]; createdAt?: string; deletedAt?: string; isCommentInitiator?: object; publicId?: string; resolvedAt?: string; resolver?: object; updatedAt?: string; }; metadata?: { change?: object; event?: string; resourceId?: string; }; }',
    markdown:
      "## delete\n\n`client.commentThread.delete(comment_thread_id: string): { data?: comment_thread; metadata?: object; }`\n\n**delete** `/v1/comment_thread/{comment_thread_id}`\n\nDelete a comment thread\n\n### Parameters\n\n- `comment_thread_id: string`\n\n### Returns\n\n- `{ data?: { comments?: comment_model[]; createdAt?: string; deletedAt?: string; isCommentInitiator?: object; publicId?: string; resolvedAt?: string; resolver?: object; updatedAt?: string; }; metadata?: { change?: object; event?: string; resourceId?: string; }; }`\n\n  - `data?: { comments?: { commentText?: string; createdAt?: string; deletedAt?: string; isOwner?: object; publicId?: string; updatedAt?: string; user?: summary_user; }[]; createdAt?: string; deletedAt?: string; isCommentInitiator?: object; publicId?: string; resolvedAt?: string; resolver?: { name?: string; }; updatedAt?: string; }`\n  - `metadata?: { change?: object; event?: string; resourceId?: string; }`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst commentThread = await client.commentThread.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(commentThread);\n```",
    perLanguage: {
      typescript: {
        method: 'client.commentThread.delete',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst commentThread = await client.commentThread.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(commentThread.data);",
      },
      python: {
        method: 'comment_thread.delete',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\ncomment_thread = client.comment_thread.delete(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(comment_thread.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/comment_thread/$COMMENT_THREAD_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/comment_thread',
    httpMethod: 'get',
    summary: 'Get Comment Threads by Reference',
    description: 'Retrieve all comment threads associated with a specific reference',
    stainlessPath: '(resource) comment_thread > (method) list',
    qualified: 'client.commentThread.list',
    params: [
      'reference_id: string;',
      "reference_type: 'process_section' | 'table' | 'table_view';",
      'main_reference?: string;',
    ],
    response:
      '{ data?: { comments?: comment_model[]; createdAt?: string; deletedAt?: string; isCommentInitiator?: object; publicId?: string; resolvedAt?: string; resolver?: object; updatedAt?: string; }[]; metadata?: object; }',
    markdown:
      "## list\n\n`client.commentThread.list(reference_id: string, reference_type: 'process_section' | 'table' | 'table_view', main_reference?: string): { data?: comment_thread[]; metadata?: object; }`\n\n**get** `/v1/comment_thread`\n\nRetrieve all comment threads associated with a specific reference\n\n### Parameters\n\n- `reference_id: string`\n  UUID of the reference associated with the comment threads\n\n- `reference_type: 'process_section' | 'table' | 'table_view'`\n  Type of the reference (process_section, table, or table_view) associated with the comment threads\n\n- `main_reference?: string`\n  Optional main reference for additional filtering\n\n### Returns\n\n- `{ data?: { comments?: comment_model[]; createdAt?: string; deletedAt?: string; isCommentInitiator?: object; publicId?: string; resolvedAt?: string; resolver?: object; updatedAt?: string; }[]; metadata?: object; }`\n\n  - `data?: { comments?: { commentText?: string; createdAt?: string; deletedAt?: string; isOwner?: object; publicId?: string; updatedAt?: string; user?: summary_user; }[]; createdAt?: string; deletedAt?: string; isCommentInitiator?: object; publicId?: string; resolvedAt?: string; resolver?: { name?: string; }; updatedAt?: string; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst commentThreads = await client.commentThread.list({ reference_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', reference_type: 'process_section' });\n\nconsole.log(commentThreads);\n```",
    perLanguage: {
      typescript: {
        method: 'client.commentThread.list',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst commentThreads = await client.commentThread.list({\n  reference_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  reference_type: 'process_section',\n});\n\nconsole.log(commentThreads.data);",
      },
      python: {
        method: 'comment_thread.list',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\ncomment_threads = client.comment_thread.list(\n    reference_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    reference_type="process_section",\n)\nprint(comment_threads.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/comment_thread \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/comment_thread',
    httpMethod: 'post',
    summary: 'Create New Comment Thread',
    description: 'Create a new comment thread',
    stainlessPath: '(resource) comment_thread > (method) create',
    qualified: 'client.commentThread.create',
    params: [
      'commentText: string;',
      'referenceId: string;',
      'referenceType: string;',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
      'mainReferenceId?: string;',
    ],
    response:
      '{ data?: { comments?: comment_model[]; createdAt?: string; deletedAt?: string; isCommentInitiator?: object; publicId?: string; resolvedAt?: string; resolver?: object; updatedAt?: string; }; metadata?: { change?: object; event?: string; resourceId?: string; }; }',
    markdown:
      "## create\n\n`client.commentThread.create(commentText: string, referenceId: string, referenceType: string, context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }, mainReferenceId?: string): { data?: comment_thread; metadata?: object; }`\n\n**post** `/v1/comment_thread`\n\nCreate a new comment thread\n\n### Parameters\n\n- `commentText: string`\n\n- `referenceId: string`\n\n- `referenceType: string`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n- `mainReferenceId?: string`\n\n### Returns\n\n- `{ data?: { comments?: comment_model[]; createdAt?: string; deletedAt?: string; isCommentInitiator?: object; publicId?: string; resolvedAt?: string; resolver?: object; updatedAt?: string; }; metadata?: { change?: object; event?: string; resourceId?: string; }; }`\n\n  - `data?: { comments?: { commentText?: string; createdAt?: string; deletedAt?: string; isOwner?: object; publicId?: string; updatedAt?: string; user?: summary_user; }[]; createdAt?: string; deletedAt?: string; isCommentInitiator?: object; publicId?: string; resolvedAt?: string; resolver?: { name?: string; }; updatedAt?: string; }`\n  - `metadata?: { change?: object; event?: string; resourceId?: string; }`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst commentThread = await client.commentThread.create({\n  commentText: 'commentText',\n  referenceId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  referenceType: 'referenceType',\n});\n\nconsole.log(commentThread);\n```",
    perLanguage: {
      typescript: {
        method: 'client.commentThread.create',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst commentThread = await client.commentThread.create({\n  commentText: 'commentText',\n  referenceId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  referenceType: 'referenceType',\n});\n\nconsole.log(commentThread.data);",
      },
      python: {
        method: 'comment_thread.create',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\ncomment_thread = client.comment_thread.create(\n    comment_text="commentText",\n    reference_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    reference_type="referenceType",\n)\nprint(comment_thread.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/comment_thread \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "commentText": "commentText",\n          "referenceId": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "referenceType": "referenceType"\n        }\'',
      },
    },
  },
  {
    name: 'get_stats',
    endpoint: '/v1/comment_thread/stats',
    httpMethod: 'get',
    summary: 'Get Comment Thread Statistics',
    description: 'Retrieve statistics for comment threads based on reference type and main reference ID',
    stainlessPath: '(resource) comment_thread > (method) get_stats',
    qualified: 'client.commentThread.getStats',
    params: ["reference_type: 'process_section' | 'table' | 'table_view';", 'main_reference_id?: string;'],
    response:
      '{ data?: { openCommentThreads: number; resolvedCommentThreads: number; referenceId?: string; }[]; metadata?: object; }',
    markdown:
      "## get_stats\n\n`client.commentThread.getStats(reference_type: 'process_section' | 'table' | 'table_view', main_reference_id?: string): { data?: object[]; metadata?: object; }`\n\n**get** `/v1/comment_thread/stats`\n\nRetrieve statistics for comment threads based on reference type and main reference ID\n\n### Parameters\n\n- `reference_type: 'process_section' | 'table' | 'table_view'`\n  Type of the reference (process_section, table, or table_view) for which to gather statistics\n\n- `main_reference_id?: string`\n  UUID of the main reference for which to gather statistics\n\n### Returns\n\n- `{ data?: { openCommentThreads: number; resolvedCommentThreads: number; referenceId?: string; }[]; metadata?: object; }`\n\n  - `data?: { openCommentThreads: number; resolvedCommentThreads: number; referenceId?: string; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.commentThread.getStats({ reference_type: 'process_section' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.commentThread.getStats',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.commentThread.getStats({ reference_type: 'process_section' });\n\nconsole.log(response.data);",
      },
      python: {
        method: 'comment_thread.get_stats',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.comment_thread.get_stats(\n    reference_type="process_section",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/comment_thread/stats \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'resolve',
    endpoint: '/v1/comment_thread/{comment_thread_id}/resolve',
    httpMethod: 'put',
    summary: 'Resolve Comment Thread',
    description: 'Resolve a comment thread',
    stainlessPath: '(resource) comment_thread > (method) resolve',
    qualified: 'client.commentThread.resolve',
    params: ['comment_thread_id: string;'],
    response:
      '{ data?: { comments?: comment_model[]; createdAt?: string; deletedAt?: string; isCommentInitiator?: object; publicId?: string; resolvedAt?: string; resolver?: object; updatedAt?: string; }; metadata?: { change?: object; event?: string; resourceId?: string; }; }',
    markdown:
      "## resolve\n\n`client.commentThread.resolve(comment_thread_id: string): { data?: comment_thread; metadata?: object; }`\n\n**put** `/v1/comment_thread/{comment_thread_id}/resolve`\n\nResolve a comment thread\n\n### Parameters\n\n- `comment_thread_id: string`\n\n### Returns\n\n- `{ data?: { comments?: comment_model[]; createdAt?: string; deletedAt?: string; isCommentInitiator?: object; publicId?: string; resolvedAt?: string; resolver?: object; updatedAt?: string; }; metadata?: { change?: object; event?: string; resourceId?: string; }; }`\n\n  - `data?: { comments?: { commentText?: string; createdAt?: string; deletedAt?: string; isOwner?: object; publicId?: string; updatedAt?: string; user?: summary_user; }[]; createdAt?: string; deletedAt?: string; isCommentInitiator?: object; publicId?: string; resolvedAt?: string; resolver?: { name?: string; }; updatedAt?: string; }`\n  - `metadata?: { change?: object; event?: string; resourceId?: string; }`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.commentThread.resolve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.commentThread.resolve',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.commentThread.resolve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'comment_thread.resolve',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.comment_thread.resolve(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/comment_thread/$COMMENT_THREAD_ID/resolve \\\n    -X PUT \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'reopen',
    endpoint: '/v1/comment_thread/{comment_thread_id}/reopen',
    httpMethod: 'put',
    summary: 'Reopen Comment Thread',
    description: 'Reopen a previously resolved comment thread',
    stainlessPath: '(resource) comment_thread > (method) reopen',
    qualified: 'client.commentThread.reopen',
    params: ['comment_thread_id: string;'],
    response:
      '{ data?: { comments?: comment_model[]; createdAt?: string; deletedAt?: string; isCommentInitiator?: object; publicId?: string; resolvedAt?: string; resolver?: object; updatedAt?: string; }; metadata?: { change?: object; event?: string; resourceId?: string; }; }',
    markdown:
      "## reopen\n\n`client.commentThread.reopen(comment_thread_id: string): { data?: comment_thread; metadata?: object; }`\n\n**put** `/v1/comment_thread/{comment_thread_id}/reopen`\n\nReopen a previously resolved comment thread\n\n### Parameters\n\n- `comment_thread_id: string`\n\n### Returns\n\n- `{ data?: { comments?: comment_model[]; createdAt?: string; deletedAt?: string; isCommentInitiator?: object; publicId?: string; resolvedAt?: string; resolver?: object; updatedAt?: string; }; metadata?: { change?: object; event?: string; resourceId?: string; }; }`\n\n  - `data?: { comments?: { commentText?: string; createdAt?: string; deletedAt?: string; isOwner?: object; publicId?: string; updatedAt?: string; user?: summary_user; }[]; createdAt?: string; deletedAt?: string; isCommentInitiator?: object; publicId?: string; resolvedAt?: string; resolver?: { name?: string; }; updatedAt?: string; }`\n  - `metadata?: { change?: object; event?: string; resourceId?: string; }`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.commentThread.reopen('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.commentThread.reopen',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.commentThread.reopen('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'comment_thread.reopen',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.comment_thread.reopen(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/comment_thread/$COMMENT_THREAD_ID/reopen \\\n    -X PUT \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/comment_thread/{comment_thread_id}/comment',
    httpMethod: 'post',
    summary: 'Create New Comment',
    description: 'Create a new comment within a specific comment thread',
    stainlessPath: '(resource) comment_thread.comment > (method) create',
    qualified: 'client.commentThread.comment.create',
    params: [
      'comment_thread_id: string;',
      'commentText: string;',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
    ],
    response:
      '{ data?: { commentText?: string; createdAt?: string; deletedAt?: string; isOwner?: object; publicId?: string; updatedAt?: string; user?: summary_user; }; metadata?: { change?: object; event?: string; resourceId?: string; }; }',
    markdown:
      "## create\n\n`client.commentThread.comment.create(comment_thread_id: string, commentText: string, context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }): { data?: comment_model; metadata?: object; }`\n\n**post** `/v1/comment_thread/{comment_thread_id}/comment`\n\nCreate a new comment within a specific comment thread\n\n### Parameters\n\n- `comment_thread_id: string`\n\n- `commentText: string`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n### Returns\n\n- `{ data?: { commentText?: string; createdAt?: string; deletedAt?: string; isOwner?: object; publicId?: string; updatedAt?: string; user?: summary_user; }; metadata?: { change?: object; event?: string; resourceId?: string; }; }`\n\n  - `data?: { commentText?: string; createdAt?: string; deletedAt?: string; isOwner?: object; publicId?: string; updatedAt?: string; user?: { email?: string; firebaseUserId?: string; name?: string; profilePicture?: string; publicId?: string; }; }`\n  - `metadata?: { change?: object; event?: string; resourceId?: string; }`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst comment = await client.commentThread.comment.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { commentText: 'commentText' });\n\nconsole.log(comment);\n```",
    perLanguage: {
      typescript: {
        method: 'client.commentThread.comment.create',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst comment = await client.commentThread.comment.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  commentText: 'commentText',\n});\n\nconsole.log(comment.data);",
      },
      python: {
        method: 'comment_thread.comment.create',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\ncomment = client.comment_thread.comment.create(\n    comment_thread_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    comment_text="commentText",\n)\nprint(comment.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/comment_thread/$COMMENT_THREAD_ID/comment \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "commentText": "commentText"\n        }\'',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/comment_thread/{comment_thread_id}/comment/{comment_id}',
    httpMethod: 'put',
    summary: 'Update Comment',
    description: 'Update a specific comment within a comment thread',
    stainlessPath: '(resource) comment_thread.comment > (method) update',
    qualified: 'client.commentThread.comment.update',
    params: [
      'comment_thread_id: string;',
      'comment_id: string;',
      'commentText: string;',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
    ],
    response:
      '{ data?: { commentText?: string; createdAt?: string; deletedAt?: string; isOwner?: object; publicId?: string; updatedAt?: string; user?: summary_user; }; metadata?: { change?: object; event?: string; resourceId?: string; }; }',
    markdown:
      "## update\n\n`client.commentThread.comment.update(comment_thread_id: string, comment_id: string, commentText: string, context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }): { data?: comment_model; metadata?: object; }`\n\n**put** `/v1/comment_thread/{comment_thread_id}/comment/{comment_id}`\n\nUpdate a specific comment within a comment thread\n\n### Parameters\n\n- `comment_thread_id: string`\n\n- `comment_id: string`\n\n- `commentText: string`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n### Returns\n\n- `{ data?: { commentText?: string; createdAt?: string; deletedAt?: string; isOwner?: object; publicId?: string; updatedAt?: string; user?: summary_user; }; metadata?: { change?: object; event?: string; resourceId?: string; }; }`\n\n  - `data?: { commentText?: string; createdAt?: string; deletedAt?: string; isOwner?: object; publicId?: string; updatedAt?: string; user?: { email?: string; firebaseUserId?: string; name?: string; profilePicture?: string; publicId?: string; }; }`\n  - `metadata?: { change?: object; event?: string; resourceId?: string; }`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst comment = await client.commentThread.comment.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { comment_thread_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', commentText: 'commentText' });\n\nconsole.log(comment);\n```",
    perLanguage: {
      typescript: {
        method: 'client.commentThread.comment.update',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst comment = await client.commentThread.comment.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  comment_thread_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  commentText: 'commentText',\n});\n\nconsole.log(comment.data);",
      },
      python: {
        method: 'comment_thread.comment.update',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\ncomment = client.comment_thread.comment.update(\n    comment_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    comment_thread_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    comment_text="commentText",\n)\nprint(comment.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/comment_thread/$COMMENT_THREAD_ID/comment/$COMMENT_ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "commentText": "commentText"\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/comment_thread/{comment_thread_id}/comment/{comment_id}',
    httpMethod: 'delete',
    summary: 'Delete Comment',
    description: 'Delete a specific comment within a comment thread',
    stainlessPath: '(resource) comment_thread.comment > (method) delete',
    qualified: 'client.commentThread.comment.delete',
    params: ['comment_thread_id: string;', 'comment_id: string;'],
    response:
      '{ data?: { commentText?: string; createdAt?: string; deletedAt?: string; isOwner?: object; publicId?: string; updatedAt?: string; user?: summary_user; }; metadata?: { change?: object; event?: string; resourceId?: string; }; }',
    markdown:
      "## delete\n\n`client.commentThread.comment.delete(comment_thread_id: string, comment_id: string): { data?: comment_model; metadata?: object; }`\n\n**delete** `/v1/comment_thread/{comment_thread_id}/comment/{comment_id}`\n\nDelete a specific comment within a comment thread\n\n### Parameters\n\n- `comment_thread_id: string`\n\n- `comment_id: string`\n\n### Returns\n\n- `{ data?: { commentText?: string; createdAt?: string; deletedAt?: string; isOwner?: object; publicId?: string; updatedAt?: string; user?: summary_user; }; metadata?: { change?: object; event?: string; resourceId?: string; }; }`\n\n  - `data?: { commentText?: string; createdAt?: string; deletedAt?: string; isOwner?: object; publicId?: string; updatedAt?: string; user?: { email?: string; firebaseUserId?: string; name?: string; profilePicture?: string; publicId?: string; }; }`\n  - `metadata?: { change?: object; event?: string; resourceId?: string; }`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst comment = await client.commentThread.comment.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { comment_thread_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(comment);\n```",
    perLanguage: {
      typescript: {
        method: 'client.commentThread.comment.delete',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst comment = await client.commentThread.comment.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  comment_thread_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(comment.data);",
      },
      python: {
        method: 'comment_thread.comment.delete',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\ncomment = client.comment_thread.comment.delete(\n    comment_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    comment_thread_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(comment.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/comment_thread/$COMMENT_THREAD_ID/comment/$COMMENT_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/permissions',
    httpMethod: 'get',
    summary: 'Get Resource Permissions',
    description: 'Retrieve permissions for a specified resource, such as a table, table view, or process.',
    stainlessPath: '(resource) permissions > (method) retrieve',
    qualified: 'client.permissions.retrieve',
    params: ["resource: 'process' | 'table' | 'table_view';", 'resource_id: string;'],
    response:
      '{ data?: { accessAttribute?: object; accessResource?: object; publicId?: string; role?: number; roleLabel?: string; }[]; metadata?: object; }',
    markdown:
      "## retrieve\n\n`client.permissions.retrieve(resource: 'process' | 'table' | 'table_view', resource_id: string): { data?: access_policy[]; metadata?: object; }`\n\n**get** `/v1/permissions`\n\nRetrieve permissions for a specified resource, such as a table, table view, or process.\n\n### Parameters\n\n- `resource: 'process' | 'table' | 'table_view'`\n  The kind of resource for which to retrieve permissions. Valid options are 'process', 'table', or 'table_view'.\n\n- `resource_id: string`\n  UUID of the resource for which to retrieve permissions.\n\n### Returns\n\n- `{ data?: { accessAttribute?: object; accessResource?: object; publicId?: string; role?: number; roleLabel?: string; }[]; metadata?: object; }`\n\n  - `data?: { accessAttribute?: { documentTable?: object; kind?: string; project?: object; publicId?: string; tag?: object; user?: { firebaseUserId?: string; name?: string; publicId?: string; }; }; accessResource?: { documentTable?: object; kind?: string; process?: object; publicId?: string; }; publicId?: string; role?: number; roleLabel?: string; }[]`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst permission = await client.permissions.retrieve({ resource: 'process', resource_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(permission);\n```",
    perLanguage: {
      typescript: {
        method: 'client.permissions.retrieve',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst permission = await client.permissions.retrieve({\n  resource: 'process',\n  resource_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(permission.data);",
      },
      python: {
        method: 'permissions.retrieve',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\npermission = client.permissions.retrieve(\n    resource="process",\n    resource_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(permission.data)',
      },
      http: {
        example: 'curl https://api.morta.io/v1/permissions \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/permissions',
    httpMethod: 'post',
    summary: 'Create Permissions for a Resource',
    description: 'Create permissions for a specific resource (such as a table, table view, or process).',
    stainlessPath: '(resource) permissions > (method) create',
    qualified: 'client.permissions.create',
    params: [
      "attributeKind: 'user' | 'tag' | 'project' | 'all_table_tags';",
      'resourceId: string;',
      "resourceKind: 'process' | 'table' | 'table_view';",
      'role: 0 | 1 | 2 | 3 | 4;',
      'attributeId?: string;',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
      'tagReferenceId?: string;',
    ],
    response:
      '{ data?: { accessAttribute?: object; accessResource?: object; publicId?: string; role?: number; roleLabel?: string; }; metadata?: object; }',
    markdown:
      "## create\n\n`client.permissions.create(attributeKind: 'user' | 'tag' | 'project' | 'all_table_tags', resourceId: string, resourceKind: 'process' | 'table' | 'table_view', role: 0 | 1 | 2 | 3 | 4, attributeId?: string, context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }, tagReferenceId?: string): { data?: access_policy; metadata?: object; }`\n\n**post** `/v1/permissions`\n\nCreate permissions for a specific resource (such as a table, table view, or process).\n\n### Parameters\n\n- `attributeKind: 'user' | 'tag' | 'project' | 'all_table_tags'`\n\n- `resourceId: string`\n\n- `resourceKind: 'process' | 'table' | 'table_view'`\n\n- `role: 0 | 1 | 2 | 3 | 4`\n\n- `attributeId?: string`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n- `tagReferenceId?: string`\n\n### Returns\n\n- `{ data?: { accessAttribute?: object; accessResource?: object; publicId?: string; role?: number; roleLabel?: string; }; metadata?: object; }`\n\n  - `data?: { accessAttribute?: { documentTable?: object; kind?: string; project?: object; publicId?: string; tag?: object; user?: { firebaseUserId?: string; name?: string; publicId?: string; }; }; accessResource?: { documentTable?: object; kind?: string; process?: object; publicId?: string; }; publicId?: string; role?: number; roleLabel?: string; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst permission = await client.permissions.create({\n  attributeKind: 'user',\n  resourceId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  resourceKind: 'process',\n  role: 0,\n});\n\nconsole.log(permission);\n```",
    perLanguage: {
      typescript: {
        method: 'client.permissions.create',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst permission = await client.permissions.create({\n  attributeKind: 'user',\n  resourceId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  resourceKind: 'process',\n  role: 0,\n});\n\nconsole.log(permission.data);",
      },
      python: {
        method: 'permissions.create',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\npermission = client.permissions.create(\n    attribute_kind="user",\n    resource_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    resource_kind="process",\n    role=0,\n)\nprint(permission.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/permissions \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "attributeKind": "user",\n          "resourceId": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "resourceKind": "process",\n          "role": 0\n        }\'',
      },
    },
  },
  {
    name: 'retrieve_tag',
    endpoint: '/v1/permissions/tag',
    httpMethod: 'get',
    summary: 'Get Tag by Public ID',
    description: 'Retrieve a tag by its public ID.',
    stainlessPath: '(resource) permissions > (method) retrieve_tag',
    qualified: 'client.permissions.retrieveTag',
    params: ['tag_id: string;'],
    response:
      '{ data?: { documentTableId?: string; projectPublicId?: string; publicId?: string; referencePublicId?: string; value?: object; }; metadata?: object; }',
    markdown:
      "## retrieve_tag\n\n`client.permissions.retrieveTag(tag_id: string): { data?: tag; metadata?: object; }`\n\n**get** `/v1/permissions/tag`\n\nRetrieve a tag by its public ID.\n\n### Parameters\n\n- `tag_id: string`\n  Public ID of the tag to retrieve.\n\n### Returns\n\n- `{ data?: { documentTableId?: string; projectPublicId?: string; publicId?: string; referencePublicId?: string; value?: object; }; metadata?: object; }`\n\n  - `data?: { documentTableId?: string; projectPublicId?: string; publicId?: string; referencePublicId?: string; value?: object; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.permissions.retrieveTag({ tag_id: 'tag_id' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.permissions.retrieveTag',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.permissions.retrieveTag({ tag_id: 'tag_id' });\n\nconsole.log(response.data);",
      },
      python: {
        method: 'permissions.retrieve_tag',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.permissions.retrieve_tag(\n    tag_id="tag_id",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/permissions/tag \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'create_all',
    endpoint: '/v1/permissions/all',
    httpMethod: 'post',
    summary: 'Create Permissions for a Resource',
    description: 'Create permissions for a specific resource (such as a table, table view, or process).',
    stainlessPath: '(resource) permissions > (method) create_all',
    qualified: 'client.permissions.createAll',
    params: [
      "attributeKind: 'user' | 'tag' | 'project' | 'all_table_tags';",
      'resourceId: string;',
      "resourceKind: 'process' | 'table' | 'table_view';",
      'role: 0 | 1 | 2 | 3 | 4;',
      'attributeId?: string;',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
      'tagReferenceId?: string;',
    ],
    response:
      '{ data?: { accessAttribute?: object; accessResource?: object; publicId?: string; role?: number; roleLabel?: string; }; metadata?: object; }',
    markdown:
      "## create_all\n\n`client.permissions.createAll(attributeKind: 'user' | 'tag' | 'project' | 'all_table_tags', resourceId: string, resourceKind: 'process' | 'table' | 'table_view', role: 0 | 1 | 2 | 3 | 4, attributeId?: string, context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }, tagReferenceId?: string): { data?: access_policy; metadata?: object; }`\n\n**post** `/v1/permissions/all`\n\nCreate permissions for a specific resource (such as a table, table view, or process).\n\n### Parameters\n\n- `attributeKind: 'user' | 'tag' | 'project' | 'all_table_tags'`\n\n- `resourceId: string`\n\n- `resourceKind: 'process' | 'table' | 'table_view'`\n\n- `role: 0 | 1 | 2 | 3 | 4`\n\n- `attributeId?: string`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n- `tagReferenceId?: string`\n\n### Returns\n\n- `{ data?: { accessAttribute?: object; accessResource?: object; publicId?: string; role?: number; roleLabel?: string; }; metadata?: object; }`\n\n  - `data?: { accessAttribute?: { documentTable?: object; kind?: string; project?: object; publicId?: string; tag?: object; user?: { firebaseUserId?: string; name?: string; publicId?: string; }; }; accessResource?: { documentTable?: object; kind?: string; process?: object; publicId?: string; }; publicId?: string; role?: number; roleLabel?: string; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.permissions.createAll({\n  attributeKind: 'user',\n  resourceId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  resourceKind: 'process',\n  role: 0,\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.permissions.createAll',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.permissions.createAll({\n  attributeKind: 'user',\n  resourceId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  resourceKind: 'process',\n  role: 0,\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'permissions.create_all',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.permissions.create_all(\n    attribute_kind="user",\n    resource_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    resource_kind="process",\n    role=0,\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/permissions/all \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "attributeKind": "user",\n          "resourceId": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "resourceKind": "process",\n          "role": 0\n        }\'',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/permissions/{id}',
    httpMethod: 'put',
    summary: 'Update Permissions for a Resource',
    description: 'Update permissions for a specific resource (such as a table, table view, or process).',
    stainlessPath: '(resource) permissions > (method) update',
    qualified: 'client.permissions.update',
    params: [
      'id: string;',
      'role: 0 | 1 | 2 | 3 | 4;',
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
    ],
    response:
      '{ data?: { accessAttribute?: object; accessResource?: object; publicId?: string; role?: number; roleLabel?: string; }; metadata?: object; }',
    markdown:
      "## update\n\n`client.permissions.update(id: string, role: 0 | 1 | 2 | 3 | 4, context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }): { data?: access_policy; metadata?: object; }`\n\n**put** `/v1/permissions/{id}`\n\nUpdate permissions for a specific resource (such as a table, table view, or process).\n\n### Parameters\n\n- `id: string`\n\n- `role: 0 | 1 | 2 | 3 | 4`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n### Returns\n\n- `{ data?: { accessAttribute?: object; accessResource?: object; publicId?: string; role?: number; roleLabel?: string; }; metadata?: object; }`\n\n  - `data?: { accessAttribute?: { documentTable?: object; kind?: string; project?: object; publicId?: string; tag?: object; user?: { firebaseUserId?: string; name?: string; publicId?: string; }; }; accessResource?: { documentTable?: object; kind?: string; process?: object; publicId?: string; }; publicId?: string; role?: number; roleLabel?: string; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst permission = await client.permissions.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { role: 0 });\n\nconsole.log(permission);\n```",
    perLanguage: {
      typescript: {
        method: 'client.permissions.update',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst permission = await client.permissions.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  role: 0,\n});\n\nconsole.log(permission.data);",
      },
      python: {
        method: 'permissions.update',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\npermission = client.permissions.update(\n    id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    role=0,\n)\nprint(permission.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/permissions/$ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "role": 0\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/permissions/{id}',
    httpMethod: 'delete',
    summary: 'Delete Permissions for a Resource',
    description: 'Delete permissions for a specific resource (such as a table, table view, or process).',
    stainlessPath: '(resource) permissions > (method) delete',
    qualified: 'client.permissions.delete',
    params: ['id: string;'],
    markdown:
      "## delete\n\n`client.permissions.delete(id: string): void`\n\n**delete** `/v1/permissions/{id}`\n\nDelete permissions for a specific resource (such as a table, table view, or process).\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nawait client.permissions.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e')\n```",
    perLanguage: {
      typescript: {
        method: 'client.permissions.delete',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.permissions.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');",
      },
      python: {
        method: 'permissions.delete',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nclient.permissions.delete(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/permissions/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'request',
    endpoint: '/v1/permissions/request/{hub_id}/{type}/{id}',
    httpMethod: 'get',
    summary: 'Request Permissions for a Resource',
    description: 'Request permissions for a specific resource (such as a table, table view, or process).',
    stainlessPath: '(resource) permissions > (method) request',
    qualified: 'client.permissions.request',
    params: ['hub_id: string;', "type: 'project' | 'process' | 'table' | 'view';", 'id: string;'],
    markdown:
      "## request\n\n`client.permissions.request(hub_id: string, type: 'project' | 'process' | 'table' | 'view', id: string): void`\n\n**get** `/v1/permissions/request/{hub_id}/{type}/{id}`\n\nRequest permissions for a specific resource (such as a table, table view, or process).\n\n### Parameters\n\n- `hub_id: string`\n\n- `type: 'project' | 'process' | 'table' | 'view'`\n\n- `id: string`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nawait client.permissions.request('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { hub_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', type: 'project' })\n```",
    perLanguage: {
      typescript: {
        method: 'client.permissions.request',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.permissions.request('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  hub_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  type: 'project',\n});",
      },
      python: {
        method: 'permissions.request',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nclient.permissions.request(\n    id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    hub_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    type="project",\n)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/permissions/request/$HUB_ID/$TYPE/$ID \\\n    -H "Authorization: Bearer $MORTA_API_KEY"',
      },
    },
  },
  {
    name: 'create_passthrough',
    endpoint: '/v1/integrations/passthrough',
    httpMethod: 'post',
    summary: 'Create Passthrough Request to Source System',
    description: 'Make a passthrough API call to an external source system.',
    stainlessPath: '(resource) integrations > (method) create_passthrough',
    qualified: 'client.integrations.createPassthrough',
    params: [
      "method: 'GET' | 'PUT' | 'POST' | 'DELETE' | 'PATCH';",
      'path: string;',
      "sourceSystem: 'viewpoint' | 'aconex' | 'autodesk-bim360' | 'procore' | 'revizto' | 'morta' | 'asite';",
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
      'data?: object;',
      'headers?: object;',
      'onBehalfUserId?: string;',
    ],
    response:
      '{ data?: { body?: object; contentType?: string; headers?: object; status?: string; }; metadata?: object; }',
    markdown:
      "## create_passthrough\n\n`client.integrations.createPassthrough(method: 'GET' | 'PUT' | 'POST' | 'DELETE' | 'PATCH', path: string, sourceSystem: 'viewpoint' | 'aconex' | 'autodesk-bim360' | 'procore' | 'revizto' | 'morta' | 'asite', context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }, data?: object, headers?: object, onBehalfUserId?: string): { data?: object; metadata?: object; }`\n\n**post** `/v1/integrations/passthrough`\n\nMake a passthrough API call to an external source system.\n\n### Parameters\n\n- `method: 'GET' | 'PUT' | 'POST' | 'DELETE' | 'PATCH'`\n\n- `path: string`\n\n- `sourceSystem: 'viewpoint' | 'aconex' | 'autodesk-bim360' | 'procore' | 'revizto' | 'morta' | 'asite'`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n- `data?: object`\n\n- `headers?: object`\n\n- `onBehalfUserId?: string`\n\n### Returns\n\n- `{ data?: { body?: object; contentType?: string; headers?: object; status?: string; }; metadata?: object; }`\n\n  - `data?: { body?: object; contentType?: string; headers?: object; status?: string; }`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.integrations.createPassthrough({\n  method: 'GET',\n  path: 'path',\n  sourceSystem: 'viewpoint',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.integrations.createPassthrough',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.integrations.createPassthrough({\n  method: 'GET',\n  path: 'path',\n  sourceSystem: 'viewpoint',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'integrations.create_passthrough',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.integrations.create_passthrough(\n    method="GET",\n    path="path",\n    source_system="viewpoint",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/integrations/passthrough \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "method": "GET",\n          "path": "path",\n          "sourceSystem": "viewpoint"\n        }\'',
      },
    },
  },
  {
    name: 'create_passthrough_download',
    endpoint: '/v1/integrations/passthrough-download',
    httpMethod: 'post',
    summary: 'Create Passthrough Download Request',
    description: 'Make a passthrough API call to an external source system for downloading files.',
    stainlessPath: '(resource) integrations > (method) create_passthrough_download',
    qualified: 'client.integrations.createPassthroughDownload',
    params: [
      "method: 'GET' | 'PUT' | 'POST' | 'DELETE' | 'PATCH';",
      'path: string;',
      "sourceSystem: 'viewpoint' | 'aconex' | 'autodesk-bim360' | 'procore' | 'revizto' | 'morta' | 'asite';",
      'context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; };',
      'data?: object;',
      'headers?: object;',
      'onBehalfUserId?: string;',
    ],
    response: 'string',
    markdown:
      "## create_passthrough_download\n\n`client.integrations.createPassthroughDownload(method: 'GET' | 'PUT' | 'POST' | 'DELETE' | 'PATCH', path: string, sourceSystem: 'viewpoint' | 'aconex' | 'autodesk-bim360' | 'procore' | 'revizto' | 'morta' | 'asite', context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }, data?: object, headers?: object, onBehalfUserId?: string): string`\n\n**post** `/v1/integrations/passthrough-download`\n\nMake a passthrough API call to an external source system for downloading files.\n\n### Parameters\n\n- `method: 'GET' | 'PUT' | 'POST' | 'DELETE' | 'PATCH'`\n\n- `path: string`\n\n- `sourceSystem: 'viewpoint' | 'aconex' | 'autodesk-bim360' | 'procore' | 'revizto' | 'morta' | 'asite'`\n\n- `context?: { processPublicId?: string; processResponsePublicId?: string; processSectionPublicId?: string; projectId?: string; }`\n  - `processPublicId?: string`\n  - `processResponsePublicId?: string`\n  - `processSectionPublicId?: string`\n  - `projectId?: string`\n\n- `data?: object`\n\n- `headers?: object`\n\n- `onBehalfUserId?: string`\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport Morta from 'morta';\n\nconst client = new Morta();\n\nconst response = await client.integrations.createPassthroughDownload({\n  method: 'GET',\n  path: 'path',\n  sourceSystem: 'viewpoint',\n});\n\nconsole.log(response);\n\nconst content = await response.blob()\nconsole.log(content)\n```",
    perLanguage: {
      typescript: {
        method: 'client.integrations.createPassthroughDownload',
        example:
          "import Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.integrations.createPassthroughDownload({\n  method: 'GET',\n  path: 'path',\n  sourceSystem: 'viewpoint',\n});\n\nconsole.log(response);\n\nconst content = await response.blob();\nconsole.log(content);",
      },
      python: {
        method: 'integrations.create_passthrough_download',
        example:
          'import os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.integrations.create_passthrough_download(\n    method="GET",\n    path="path",\n    source_system="viewpoint",\n)\nprint(response)\ncontent = response.read()\nprint(content)',
      },
      http: {
        example:
          'curl https://api.morta.io/v1/integrations/passthrough-download \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MORTA_API_KEY" \\\n    -d \'{\n          "method": "GET",\n          "path": "path",\n          "sourceSystem": "viewpoint"\n        }\'',
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'python',
    content:
      '# Morta Python API library\n\n<!-- prettier-ignore -->\n[![PyPI version](https://img.shields.io/pypi/v/morta.svg?label=pypi%20(stable))](https://pypi.org/project/morta/)\n\nThe Morta Python library provides convenient access to the Morta REST API from any Python 3.9+\napplication. The library includes type definitions for all request params and response fields,\nand offers both synchronous and asynchronous clients powered by [httpx](https://github.com/encode/httpx).\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Morta MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=morta-mcp&config=eyJuYW1lIjoibW9ydGEtbWNwIiwidHJhbnNwb3J0IjoiaHR0cCIsInVybCI6Imh0dHBzOi8vbW9ydGEtbWNwLnN0bG1jcC5jb20iLCJoZWFkZXJzIjp7IngtbW9ydGEtYXBpLWtleSI6Ik15IEFQSSBLZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22morta-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmorta-mcp.stlmcp.com%22%2C%22headers%22%3A%7B%22x-morta-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\n The full API of this library can be found in [api.md](api.md).\n\n## Installation\n\n```sh\n# install from PyPI\npip install morta\n```\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```python\nimport os\nfrom morta import Morta\n\nclient = Morta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\n\nresponse = client.user.retrieve_me()\nprint(response.data)\n```\n\nWhile you can provide an `api_key` keyword argument,\nwe recommend using [python-dotenv](https://pypi.org/project/python-dotenv/)\nto add `MORTA_API_KEY="My API Key"` to your `.env` file\nso that your API Key is not stored in source control.\n\n## Async usage\n\nSimply import `AsyncMorta` instead of `Morta` and use `await` with each API call:\n\n```python\nimport os\nimport asyncio\nfrom morta import AsyncMorta\n\nclient = AsyncMorta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n)\n\nasync def main() -> None:\n  response = await client.user.retrieve_me()\n  print(response.data)\n\nasyncio.run(main())\n```\n\nFunctionality between the synchronous and asynchronous clients is otherwise identical.\n\n### With aiohttp\n\nBy default, the async client uses `httpx` for HTTP requests. However, for improved concurrency performance you may also use `aiohttp` as the HTTP backend.\n\nYou can enable this by installing `aiohttp`:\n\n```sh\n# install from PyPI\npip install morta[aiohttp]\n```\n\nThen you can enable it by instantiating the client with `http_client=DefaultAioHttpClient()`:\n\n```python\nimport os\nimport asyncio\nfrom morta import DefaultAioHttpClient\nfrom morta import AsyncMorta\n\nasync def main() -> None:\n  async with AsyncMorta(\n    api_key=os.environ.get("MORTA_API_KEY"),  # This is the default and can be omitted\n    http_client=DefaultAioHttpClient(),\n) as client:\n    response = await client.user.retrieve_me()\n    print(response.data)\n\nasyncio.run(main())\n```\n\n\n\n## Using types\n\nNested request parameters are [TypedDicts](https://docs.python.org/3/library/typing.html#typing.TypedDict). Responses are [Pydantic models](https://docs.pydantic.dev) which also provide helper methods for things like:\n\n- Serializing back into JSON, `model.to_json()`\n- Converting to a dictionary, `model.to_dict()`\n\nTyped requests and responses provide autocomplete and documentation within your editor. If you would like to see type errors in VS Code to help catch bugs earlier, set `python.analysis.typeCheckingMode` to `basic`.\n\n\n\n## Nested params\n\nNested parameters are dictionaries, typed using `TypedDict`, for example:\n\n```python\nfrom morta import Morta\n\nclient = Morta()\n\nclient.hub.create_knowledge_base(\n    hub_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    source="source",\n    text="text",\n    context={},\n)\n```\n\n## File uploads\n\nRequest parameters that correspond to file uploads can be passed as `bytes`, or a [`PathLike`](https://docs.python.org/3/library/os.html#os.PathLike) instance or a tuple of `(filename, contents, media type)`.\n\n```python\nfrom pathlib import Path\nfrom morta import Morta\n\nclient = Morta()\n\nclient.hub.upload_template(\n    hub_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    file=Path("/path/to/file"),\n)\n```\n\nThe async client uses the exact same interface. If you pass a [`PathLike`](https://docs.python.org/3/library/os.html#os.PathLike) instance, the file contents will be read asynchronously automatically.\n\n## Handling errors\n\nWhen the library is unable to connect to the API (for example, due to network connection problems or a timeout), a subclass of `morta.APIConnectionError` is raised.\n\nWhen the API returns a non-success status code (that is, 4xx or 5xx\nresponse), a subclass of `morta.APIStatusError` is raised, containing `status_code` and `response` properties.\n\nAll errors inherit from `morta.APIError`.\n\n```python\nimport morta\nfrom morta import Morta\n\nclient = Morta()\n\ntry:\n    client.user.retrieve_me()\nexcept morta.APIConnectionError as e:\n    print("The server could not be reached")\n    print(e.__cause__) # an underlying Exception, likely raised within httpx.\nexcept morta.RateLimitError as e:\n    print("A 429 status code was received; we should back off a bit.")\nexcept morta.APIStatusError as e:\n    print("Another non-200-range status code was received")\n    print(e.status_code)\n    print(e.response)\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors are automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors are all retried by default.\n\nYou can use the `max_retries` option to configure or disable retry settings:\n\n```python\nfrom morta import Morta\n\n# Configure the default for all requests:\nclient = Morta(\n    # default is 2\n    max_retries=0,\n)\n\n# Or, configure per-request:\nclient.with_options(max_retries = 5).user.retrieve_me()\n```\n\n### Timeouts\n\nBy default requests time out after 1 minute. You can configure this with a `timeout` option,\nwhich accepts a float or an [`httpx.Timeout`](https://www.python-httpx.org/advanced/timeouts/#fine-tuning-the-configuration) object:\n\n```python\nfrom morta import Morta\n\n# Configure the default for all requests:\nclient = Morta(\n    # 20 seconds (default is 1 minute)\n    timeout=20.0,\n)\n\n# More granular control:\nclient = Morta(\n    timeout=httpx.Timeout(60.0, read=5.0, write=10.0, connect=2.0),\n)\n\n# Override per-request:\nclient.with_options(timeout = 5.0).user.retrieve_me()\n```\n\nOn timeout, an `APITimeoutError` is thrown.\n\nNote that requests that time out are [retried twice by default](#retries).\n\n\n\n## Advanced\n\n### Logging\n\nWe use the standard library [`logging`](https://docs.python.org/3/library/logging.html) module.\n\nYou can enable logging by setting the environment variable `MORTA_LOG` to `info`.\n\n```shell\n$ export MORTA_LOG=info\n```\n\nOr to `debug` for more verbose logging.\n\n### How to tell whether `None` means `null` or missing\n\nIn an API response, a field may be explicitly `null`, or missing entirely; in either case, its value is `None` in this library. You can differentiate the two cases with `.model_fields_set`:\n\n```py\nif response.my_field is None:\n  if \'my_field\' not in response.model_fields_set:\n    print(\'Got json like {}, without a "my_field" key present at all.\')\n  else:\n    print(\'Got json like {"my_field": null}.\')\n```\n\n### Accessing raw response data (e.g. headers)\n\nThe "raw" Response object can be accessed by prefixing `.with_raw_response.` to any HTTP method call, e.g.,\n\n```py\nfrom morta import Morta\n\nclient = Morta()\nresponse = client.user.with_raw_response.retrieve_me()\nprint(response.headers.get(\'X-My-Header\'))\n\nuser = response.parse()  # get the object that `user.retrieve_me()` would have returned\nprint(user.data)\n```\n\nThese methods return an [`APIResponse`](https://github.com/morta-technology/morta-python/tree/main/src/morta/_response.py) object.\n\nThe async client returns an [`AsyncAPIResponse`](https://github.com/morta-technology/morta-python/tree/main/src/morta/_response.py) with the same structure, the only difference being `await`able methods for reading the response content.\n\n#### `.with_streaming_response`\n\nThe above interface eagerly reads the full response body when you make the request, which may not always be what you want.\n\nTo stream the response body, use `.with_streaming_response` instead, which requires a context manager and only reads the response body once you call `.read()`, `.text()`, `.json()`, `.iter_bytes()`, `.iter_text()`, `.iter_lines()` or `.parse()`. In the async client, these are async methods.\n\n```python\nwith client.user.with_streaming_response.retrieve_me() as response :\n    print(response.headers.get(\'X-My-Header\'))\n\n    for line in response.iter_lines():\n      print(line)\n```\n\nThe context manager is required so that the response will reliably be closed.\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API.\n\nIf you need to access undocumented endpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can make requests using `client.get`, `client.post`, and other\nhttp verbs. Options on the client will be respected (such as retries) when making this request.\n\n```py\nimport httpx\n\nresponse = client.post(\n    "/foo",\n    cast_to=httpx.Response,\n    body={"my_param": True},\n)\n\nprint(response.headers.get("x-foo"))\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you can access the extra fields like `response.unknown_prop`. You\ncan also get all the extra fields on the Pydantic model as a dict with\n[`response.model_extra`](https://docs.pydantic.dev/latest/api/base_model/#pydantic.BaseModel.model_extra).\n\n### Configuring the HTTP client\n\nYou can directly override the [httpx client](https://www.python-httpx.org/api/#client) to customize it for your use case, including:\n\n- Support for [proxies](https://www.python-httpx.org/advanced/proxies/)\n- Custom [transports](https://www.python-httpx.org/advanced/transports/)\n- Additional [advanced](https://www.python-httpx.org/advanced/clients/) functionality\n\n```python\nimport httpx\nfrom morta import Morta, DefaultHttpxClient\n\nclient = Morta(\n    # Or use the `MORTA_BASE_URL` env var\n    base_url="http://my.test.server.example.com:8083",\n    http_client=DefaultHttpxClient(proxy="http://my.test.proxy.example.com", transport=httpx.HTTPTransport(local_address="0.0.0.0")),\n)\n```\n\nYou can also customize the client on a per-request basis by using `with_options()`:\n\n```python\nclient.with_options(http_client=DefaultHttpxClient(...))\n```\n\n### Managing HTTP resources\n\nBy default the library closes underlying HTTP connections whenever the client is [garbage collected](https://docs.python.org/3/reference/datamodel.html#object.__del__). You can manually close the client using the `.close()` method if desired, or with a context manager that closes when exiting.\n\n```py\nfrom morta import Morta\n\nwith Morta() as client:\n  # make requests here\n  ...\n\n# HTTP client is now closed\n```\n\n## Versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/morta-technology/morta-python/issues) with questions, bugs, or suggestions.\n\n### Determining the installed version\n\nIf you\'ve upgraded to the latest version but aren\'t seeing any new features you were expecting then your python environment is likely still using an older version.\n\nYou can determine the version that is being used at runtime with:\n\n```py\nimport morta\nprint(morta.__version__)\n```\n\n## Requirements\n\nPython 3.9 or higher.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'typescript',
    content:
      "# Morta TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/morta.svg?label=npm%20(stable))](https://npmjs.org/package/morta) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/morta)\n\nThis library provides convenient access to the Morta REST API from server-side TypeScript or JavaScript.\n\n\n\nThe full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Morta MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=morta-mcp&config=eyJuYW1lIjoibW9ydGEtbWNwIiwidHJhbnNwb3J0IjoiaHR0cCIsInVybCI6Imh0dHBzOi8vbW9ydGEtbWNwLnN0bG1jcC5jb20iLCJoZWFkZXJzIjp7IngtbW9ydGEtYXBpLWtleSI6Ik15IEFQSSBLZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22morta-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmorta-mcp.stlmcp.com%22%2C%22headers%22%3A%7B%22x-morta-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install morta\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.user.retrieveMe();\n\nconsole.log(response.data);\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport Morta from 'morta';\n\nconst client = new Morta({\n  apiKey: process.env['MORTA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response: Morta.UserRetrieveMeResponse = await client.user.retrieveMe();\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n## File uploads\n\nRequest parameters that correspond to file uploads can be passed in many different forms:\n- `File` (or an object with the same structure)\n- a `fetch` `Response` (or an object with the same structure)\n- an `fs.ReadStream`\n- the return value of our `toFile` helper\n\n```ts\nimport fs from 'fs';\nimport Morta, { toFile } from 'morta';\n\nconst client = new Morta();\n\n// If you have access to Node `fs` we recommend using `fs.createReadStream()`:\nawait client.hub.uploadTemplate('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  file: fs.createReadStream('/path/to/file'),\n});\n\n// Or if you have the web `File` API you can pass a `File` instance:\nawait client.hub.uploadTemplate('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  file: new File(['my bytes'], 'file'),\n});\n\n// You can also pass a `fetch` `Response`:\nawait client.hub.uploadTemplate('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  file: await fetch('https://somesite/file'),\n});\n\n// Finally, if none of the above are convenient, you can use our `toFile` helper:\nawait client.hub.uploadTemplate('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  file: await toFile(Buffer.from('my bytes'), 'file'),\n});\nawait client.hub.uploadTemplate('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  file: await toFile(new Uint8Array([0, 1, 2]), 'file'),\n});\n```\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst response = await client.user.retrieveMe().catch(async (err) => {\n  if (err instanceof Morta.APIError) {\n    console.log(err.status); // 400\n    console.log(err.name); // BadRequestError\n    console.log(err.headers); // {server: 'nginx', ...}\n  } else {\n    throw err;\n  }\n});\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new Morta({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.user.retrieveMe({\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new Morta({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.user.retrieveMe({\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new Morta();\n\nconst response = await client.user.retrieveMe().asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: response, response: raw } = await client.user.retrieveMe().withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(response.data);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `MORTA_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport Morta from 'morta';\n\nconst client = new Morta({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport Morta from 'morta';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new Morta({\n  logger: logger.child({ name: 'Morta' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.user.retrieveMe({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport Morta from 'morta';\nimport fetch from 'my-fetch';\n\nconst client = new Morta({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport Morta from 'morta';\n\nconst client = new Morta({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport Morta from 'morta';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new Morta({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport Morta from 'morta';\n\nconst client = new Morta({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport Morta from 'npm:morta';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new Morta({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/morta-technology/morta-typescript/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
