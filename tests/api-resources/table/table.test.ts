// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Morta from 'morta';

const client = new Morta({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource table', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.table.create({
      columns: [{}],
      name: 'name',
      projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.table.create({
      columns: [
        {
          aggregate: 0,
          alterOptions: { dateConversionFormat: 'DD/MM/YYYY', runScriptOnAllCells: true },
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
        },
      ],
      name: 'name',
      projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      context: {
        processPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        processResponsePublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        processSectionPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
      joins: [
        {
          dataColumns: [{ sourceColumnId: 'sourceColumnId', targetColumnId: 'targetColumnId' }],
          isOneToMany: true,
          joinColumns: [{ sourceColumnId: 'sourceColumnId', targetColumnId: 'targetColumnId' }],
          joinTableName: 'joinTableName',
          joinViewId: 'joinViewId',
          joinViewName: 'joinViewName',
        },
      ],
      type: 'type',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.table.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.table.retrieve(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          columns: ['string'],
          distinct_columns: ['string'],
          filter: 'filter',
          ignore_cached_options: true,
          last_created_at: '2019-12-27T18:11:19.117Z',
          last_updated_at: '2019-12-27T18:11:19.117Z',
          next_page_token: 'next_page_token',
          page: 1,
          size: 1,
          sort: 'sort',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Morta.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update', async () => {
    const responsePromise = client.table.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.table.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('checkUsage', async () => {
    const responsePromise = client.table.checkUsage('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createIndex: only required params', async () => {
    const responsePromise = client.table.createIndex('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      columns: [{ publicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' }],
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
  test.skip('createIndex: required and optional params', async () => {
    const response = await client.table.createIndex('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      columns: [{ publicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' }],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('deleteRows', async () => {
    const responsePromise = client.table.deleteRows('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('downloadCsv', async () => {
    const responsePromise = client.table.downloadCsv('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('downloadCsv: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.table.downloadCsv(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { filter: 'filter', sort: 'sort' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Morta.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('duplicate: only required params', async () => {
    const responsePromise = client.table.duplicate('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      targetProjectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('duplicate: required and optional params', async () => {
    const response = await client.table.duplicate('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      targetProjectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      context: {
        processPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        processResponsePublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        processSectionPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
      duplicateLinkedTables: true,
      duplicatePermissions: true,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('getCsvBackup: required and optional params', async () => {
    const response = await client.table.getCsvBackup('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      date: 'date',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('getDuplicatedChildren', async () => {
    const responsePromise = client.table.getDuplicatedChildren('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getFile: required and optional params', async () => {
    const response = await client.table.getFile('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      column_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      filename: 'filename',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('getStatistics', async () => {
    const responsePromise = client.table.getStatistics('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getStatistics: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.table.getStatistics(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { aggregation: { foo: 'string' }, filter: 'filter' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Morta.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listColumns', async () => {
    const responsePromise = client.table.listColumns('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listJoins', async () => {
    const responsePromise = client.table.listJoins('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('restore', async () => {
    const responsePromise = client.table.restore('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('streamRows: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.table.streamRows(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { filter: 'filter', page: 1, size: 1, sort: 'sort' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Morta.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('truncate', async () => {
    const responsePromise = client.table.truncate('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateCells: only required params', async () => {
    const responsePromise = client.table.updateCells('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      cells: [{ columnName: 'x', rowId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', value: {} }],
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
  test.skip('updateCells: required and optional params', async () => {
    const response = await client.table.updateCells('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      cells: [
        {
          columnName: 'x',
          rowId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          value: {},
          context: {
            processPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            processResponsePublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            processSectionPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          },
        },
      ],
      context: {
        processPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        processResponsePublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        processSectionPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
    });
  });
});
