// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import util from 'node:util';

import Fuse from 'fuse.js';
import ts from 'typescript';

import { WorkerInput, WorkerSuccess, WorkerError } from './code-tool-types';
import { Morta } from 'morta';

function getRunFunctionNode(
  code: string,
): ts.FunctionDeclaration | ts.FunctionExpression | ts.ArrowFunction | null {
  const sourceFile = ts.createSourceFile('code.ts', code, ts.ScriptTarget.Latest, true);

  for (const statement of sourceFile.statements) {
    // Check for top-level function declarations
    if (ts.isFunctionDeclaration(statement)) {
      if (statement.name?.text === 'run') {
        return statement;
      }
    }

    // Check for variable declarations: const run = () => {} or const run = function() {}
    if (ts.isVariableStatement(statement)) {
      for (const declaration of statement.declarationList.declarations) {
        if (ts.isIdentifier(declaration.name) && declaration.name.text === 'run') {
          // Check if it's initialized with a function
          if (
            declaration.initializer &&
            (ts.isFunctionExpression(declaration.initializer) || ts.isArrowFunction(declaration.initializer))
          ) {
            return declaration.initializer;
          }
        }
      }
    }
  }

  return null;
}

const fuse = new Fuse(
  [
    'client.user.create',
    'client.user.listAchievements',
    'client.user.listContributions',
    'client.user.listOwnerHubs',
    'client.user.listPinnedHubs',
    'client.user.listPublicContributions',
    'client.user.listPublicHubs',
    'client.user.listTemplates',
    'client.user.retrieve',
    'client.user.retrieveByPublicID',
    'client.user.retrieveMe',
    'client.user.search',
    'client.user.updateAccount',
    'client.user.updateProfile',
    'client.user.apikey.create',
    'client.user.apikey.delete',
    'client.user.apikey.update',
    'client.user.hubs.list',
    'client.user.hubs.listFavourites',
    'client.user.hubs.listTags',
    'client.user.hubs.toggleFavourite',
    'client.user.hubs.togglePin',
    'client.user.tags.add',
    'client.user.tags.bulkApply',
    'client.user.tags.delete',
    'client.hub.aiSearch',
    'client.hub.changeUserRole',
    'client.hub.create',
    'client.hub.createHeadingStyling',
    'client.hub.createKnowledgeBase',
    'client.hub.delete',
    'client.hub.deleteTopHeadingStyling',
    'client.hub.duplicate',
    'client.hub.getAIAnswers',
    'client.hub.getDeletedDocuments',
    'client.hub.getDeletedTables',
    'client.hub.getDocuments',
    'client.hub.getDuplicatedChildren',
    'client.hub.getInvitedMembers',
    'client.hub.getMembers',
    'client.hub.getNotifications',
    'client.hub.getResources',
    'client.hub.getSentNotifications',
    'client.hub.getTables',
    'client.hub.getTags',
    'client.hub.getVariables',
    'client.hub.inviteMultipleUsers',
    'client.hub.permanentlyDelete',
    'client.hub.removeUser',
    'client.hub.requestContributorAccess',
    'client.hub.restore',
    'client.hub.retrieve',
    'client.hub.searchResources',
    'client.hub.setColumnColoring',
    'client.hub.setColumnFormat',
    'client.hub.trainKnowledgeBase',
    'client.hub.update',
    'client.hub.updateHeadingStyling',
    'client.hub.uploadTemplate',
    'client.hub.aiAnswer.vote',
    'client.hub.invite.create',
    'client.hub.invite.delete',
    'client.hub.invite.resend',
    'client.hub.invite.update',
    'client.hub.secrets.create',
    'client.hub.secrets.delete',
    'client.hub.secrets.list',
    'client.hub.secrets.update',
    'client.table.checkUsage',
    'client.table.create',
    'client.table.createIndex',
    'client.table.delete',
    'client.table.deleteRows',
    'client.table.downloadCsv',
    'client.table.duplicate',
    'client.table.getCsvBackup',
    'client.table.getDuplicatedChildren',
    'client.table.getFile',
    'client.table.getStatistics',
    'client.table.listColumns',
    'client.table.listJoins',
    'client.table.restore',
    'client.table.retrieve',
    'client.table.streamRows',
    'client.table.truncate',
    'client.table.update',
    'client.table.updateCells',
    'client.table.column.checkViews',
    'client.table.column.create',
    'client.table.column.delete',
    'client.table.column.getDistinctValues',
    'client.table.column.restore',
    'client.table.column.update',
    'client.table.row.add',
    'client.table.row.getRows',
    'client.table.row.update',
    'client.table.row.upsert',
    'client.table.join.create',
    'client.table.join.delete',
    'client.table.join.update',
    'client.table.sync.deleteIntegration',
    'client.table.sync.getSyncInfo',
    'client.table.sync.retryIntegrationSync',
    'client.table.sync.syncWithIntegration',
    'client.table.sync.update',
    'client.table.views.create',
    'client.table.views.delete',
    'client.table.views.downloadCsv',
    'client.table.views.duplicate',
    'client.table.views.duplicateDefault',
    'client.table.views.list',
    'client.table.views.previewRow',
    'client.table.views.retrieve',
    'client.table.views.setDefault',
    'client.table.views.stats',
    'client.table.views.streamRows',
    'client.table.views.update',
    'client.table.views.updateCells',
    'client.table.views.rows.add',
    'client.table.views.rows.delete',
    'client.table.views.rows.list',
    'client.table.views.rows.update',
    'client.table.views.rows.upsert',
    'client.table.views.columns.add',
    'client.table.views.columns.aiFormulaHelper',
    'client.table.views.columns.distinct',
    'client.table.views.columns.formulaInfo',
    'client.table.views.columns.update',
    'client.document.create',
    'client.document.createMultipleSections',
    'client.document.createSections',
    'client.document.delete',
    'client.document.export',
    'client.document.getDeletedSections',
    'client.document.getDuplicatedChildren',
    'client.document.restore',
    'client.document.retrieve',
    'client.document.syncTemplate',
    'client.document.update',
    'client.document.updateMultipleSections',
    'client.document.updateSectionOrder',
    'client.document.updateViewsPermissions',
    'client.document.duplicate.duplicate',
    'client.document.duplicate.global',
    'client.document.section.create',
    'client.document.section.delete',
    'client.document.section.duplicate',
    'client.document.section.duplicateAsync',
    'client.document.section.restore',
    'client.document.section.retrieve',
    'client.document.section.update',
    'client.document.section.response.create',
    'client.document.section.response.delete',
    'client.document.section.response.reset',
    'client.document.section.response.restore',
    'client.document.section.response.submit',
    'client.document.section.response.update',
    'client.notifications.create',
    'client.notifications.delete',
    'client.notifications.listEventTypes',
    'client.notifications.listEvents',
    'client.notifications.update',
    'client.commentThread.create',
    'client.commentThread.delete',
    'client.commentThread.getStats',
    'client.commentThread.list',
    'client.commentThread.reopen',
    'client.commentThread.resolve',
    'client.commentThread.retrieve',
    'client.commentThread.comment.create',
    'client.commentThread.comment.delete',
    'client.commentThread.comment.update',
    'client.permissions.create',
    'client.permissions.createAll',
    'client.permissions.delete',
    'client.permissions.request',
    'client.permissions.retrieve',
    'client.permissions.retrieveTag',
    'client.permissions.update',
    'client.integrations.createPassthrough',
    'client.integrations.createPassthroughDownload',
  ],
  { threshold: 1, shouldSort: true },
);

function getMethodSuggestions(fullyQualifiedMethodName: string): string[] {
  return fuse
    .search(fullyQualifiedMethodName)
    .map(({ item }) => item)
    .slice(0, 5);
}

const proxyToObj = new WeakMap<any, any>();
const objToProxy = new WeakMap<any, any>();

type ClientProxyConfig = {
  path: string[];
  isBelievedBad?: boolean;
};

function makeSdkProxy<T extends object>(obj: T, { path, isBelievedBad = false }: ClientProxyConfig): T {
  let proxy: T = objToProxy.get(obj);

  if (!proxy) {
    proxy = new Proxy(obj, {
      get(target, prop, receiver) {
        const propPath = [...path, String(prop)];
        const value = Reflect.get(target, prop, receiver);

        if (isBelievedBad || (!(prop in target) && value === undefined)) {
          // If we're accessing a path that doesn't exist, it will probably eventually error.
          // Let's proxy it and mark it bad so that we can control the error message.
          // We proxy an empty class so that an invocation or construction attempt is possible.
          return makeSdkProxy(class {}, { path: propPath, isBelievedBad: true });
        }

        if (value !== null && (typeof value === 'object' || typeof value === 'function')) {
          return makeSdkProxy(value, { path: propPath, isBelievedBad });
        }

        return value;
      },

      apply(target, thisArg, args) {
        if (isBelievedBad || typeof target !== 'function') {
          const fullyQualifiedMethodName = path.join('.');
          const suggestions = getMethodSuggestions(fullyQualifiedMethodName);
          throw new Error(
            `${fullyQualifiedMethodName} is not a function. Did you mean: ${suggestions.join(', ')}`,
          );
        }

        return Reflect.apply(target, proxyToObj.get(thisArg) ?? thisArg, args);
      },

      construct(target, args, newTarget) {
        if (isBelievedBad || typeof target !== 'function') {
          const fullyQualifiedMethodName = path.join('.');
          const suggestions = getMethodSuggestions(fullyQualifiedMethodName);
          throw new Error(
            `${fullyQualifiedMethodName} is not a constructor. Did you mean: ${suggestions.join(', ')}`,
          );
        }

        return Reflect.construct(target, args, newTarget);
      },
    });

    objToProxy.set(obj, proxy);
    proxyToObj.set(proxy, obj);
  }

  return proxy;
}

function parseError(code: string, error: unknown): string | undefined {
  if (!(error instanceof Error)) return;
  const message = error.name ? `${error.name}: ${error.message}` : error.message;
  try {
    // Deno uses V8; the first "<anonymous>:LINE:COLUMN" is the top of stack.
    const lineNumber = error.stack?.match(/<anonymous>:([0-9]+):[0-9]+/)?.[1];
    // -1 for the zero-based indexing
    const line =
      lineNumber &&
      code
        .split('\n')
        .at(parseInt(lineNumber, 10) - 1)
        ?.trim();
    return line ? `${message}\n  at line ${lineNumber}\n    ${line}` : message;
  } catch {
    return message;
  }
}

const fetch = async (req: Request): Promise<Response> => {
  const { opts, code } = (await req.json()) as WorkerInput;
  if (code == null) {
    return Response.json(
      {
        message:
          'The code param is missing. Provide one containing a top-level `run` function. Write code within this template:\n\n```\nasync function run(client) {\n  // Fill this out\n}\n```',
      } satisfies WorkerError,
      { status: 400, statusText: 'Code execution error' },
    );
  }

  const runFunctionNode = getRunFunctionNode(code);
  if (!runFunctionNode) {
    return Response.json(
      {
        message:
          'The code is missing a top-level `run` function. Write code within this template:\n\n```\nasync function run(client) {\n  // Fill this out\n}\n```',
      } satisfies WorkerError,
      { status: 400, statusText: 'Code execution error' },
    );
  }

  const client = new Morta({
    ...opts,
  });

  const logLines: string[] = [];
  const errLines: string[] = [];
  const console = {
    log: (...args: unknown[]) => {
      logLines.push(util.format(...args));
    },
    error: (...args: unknown[]) => {
      errLines.push(util.format(...args));
    },
  };
  try {
    let run_ = async (client: any) => {};
    eval(`${code}\nrun_ = run;`);
    const result = await run_(makeSdkProxy(client, { path: ['client'] }));
    return Response.json({
      result,
      logLines,
      errLines,
    } satisfies WorkerSuccess);
  } catch (e) {
    return Response.json(
      {
        message: parseError(code, e),
      } satisfies WorkerError,
      { status: 400, statusText: 'Code execution error' },
    );
  }
};

export default { fetch };
