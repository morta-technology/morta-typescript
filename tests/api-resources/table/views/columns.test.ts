// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Morta from 'morta';

const client = new Morta({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource columns', () => {
  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.table.views.columns.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      view_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await client.table.views.columns.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      view_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      aggregate: 0,
      alterOptions: { dateConversionFormat: 'DD/MM/YYYY', runScriptOnAllCells: true },
      context: {
        processPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        processResponsePublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        processSectionPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
      dateFormat: 'dateFormat',
      decimalPlaces: 0,
      description: {},
      displayLink: true,
      displayValidationError: true,
      exportWidth: 0,
      formula: 'formula',
      formulaEnabled: true,
      hardValidation: true,
      headerBackgroundColor: 'headerBackgroundColor',
      headerTextColor: 'headerTextColor',
      isIndexed: true,
      isJoined: true,
      isSynced: true,
      kind: 'text',
      kindOptions: {
        autopopulate: true,
        manualOptions: ['string'],
        tableOptions: {
          columnId: 'columnId',
          dependencies: [{ columnId: 'columnId', columnJoinId: 'columnJoinId' }],
          liveValues: true,
          tableId: 'tableId',
          viewId: 'viewId',
        },
      },
      locked: true,
      name: 'name',
      publicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      required: true,
      script: 'script',
      scriptEnabled: true,
      sortOrder: 0,
      stringValidation: 'stringValidation',
      thousandSeparator: true,
      validationMessage: 'validationMessage',
      validationNoBlanks: true,
      validationNoDuplicates: true,
      width: 100,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('add: only required params', async () => {
    const responsePromise = client.table.views.columns.add('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      locked: true,
      required: true,
      sortOrder: 0,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('add: required and optional params', async () => {
    const response = await client.table.views.columns.add('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      locked: true,
      required: true,
      sortOrder: 0,
      aggregate: 0,
      alterOptions: { dateConversionFormat: 'DD/MM/YYYY', runScriptOnAllCells: true },
      context: {
        processPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        processResponsePublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        processSectionPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
      dateFormat: 'dateFormat',
      decimalPlaces: 0,
      description: {},
      displayLink: true,
      displayValidationError: true,
      exportWidth: 0,
      formula: 'formula',
      formulaEnabled: true,
      hardValidation: true,
      headerBackgroundColor: 'headerBackgroundColor',
      headerTextColor: 'headerTextColor',
      isIndexed: true,
      isJoined: true,
      isSynced: true,
      kind: 'text',
      kindOptions: {
        autopopulate: true,
        manualOptions: ['string'],
        tableOptions: {
          columnId: 'columnId',
          dependencies: [{ columnId: 'columnId', columnJoinId: 'columnJoinId' }],
          liveValues: true,
          tableId: 'tableId',
          viewId: 'viewId',
        },
      },
      name: 'name',
      publicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      script: 'script',
      scriptEnabled: true,
      stringValidation: 'stringValidation',
      thousandSeparator: true,
      validationMessage: 'validationMessage',
      validationNoBlanks: true,
      validationNoDuplicates: true,
      width: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('aiFormulaHelper: only required params', async () => {
    const responsePromise = client.table.views.columns.aiFormulaHelper(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { view_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', text: 'text' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('aiFormulaHelper: required and optional params', async () => {
    const response = await client.table.views.columns.aiFormulaHelper(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { view_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', text: 'text' },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('distinct: only required params', async () => {
    const responsePromise = client.table.views.columns.distinct('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      view_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('distinct: required and optional params', async () => {
    const response = await client.table.views.columns.distinct('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      view_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      filter: 'filter',
      group_columns: ['string'],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('formulaInfo: only required params', async () => {
    const responsePromise = client.table.views.columns.formulaInfo('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      view_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('formulaInfo: required and optional params', async () => {
    const response = await client.table.views.columns.formulaInfo('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      view_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});
