// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Morta from 'morta';

const client = new Morta({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource column', () => {
  // skipped: tests are disabled for the time being
  test.skip('create', async () => {
    const responsePromise = client.table.column.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.table.column.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    const response = await client.table.column.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
      exportWidth: 0,
      formula: 'formula',
      formulaEnabled: true,
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
      thousandSeparator: true,
      width: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.table.column.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.table.column.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('checkViews: only required params', async () => {
    const responsePromise = client.table.column.checkViews('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('checkViews: required and optional params', async () => {
    const response = await client.table.column.checkViews('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('getDistinctValues: only required params', async () => {
    const responsePromise = client.table.column.getDistinctValues('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('getDistinctValues: required and optional params', async () => {
    const response = await client.table.column.getDistinctValues('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      filter: 'filter',
      group_columns: ['string'],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('restore: only required params', async () => {
    const responsePromise = client.table.column.restore('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('restore: required and optional params', async () => {
    const response = await client.table.column.restore('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});
