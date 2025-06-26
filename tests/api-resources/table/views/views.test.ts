// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Morta from 'morta';

const client = new Morta({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource views', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.table.views.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { name: 'x' });
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
    const response = await client.table.views.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      name: 'x',
      allowContributorDelete: true,
      chartSettings: {},
      collapsedGroupView: true,
      colourSettings: [
        {
          backgroundColour: 'backgroundColour',
          columnName: 'columnName',
          filterType: 'eq',
          fontColour: 'fontColour',
          columnId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          multipleValues: [{}],
          value: {},
        },
      ],
      columns: [
        {
          columnName: 'columnName',
          columnId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          description: {
            content: {
              blocks: [
                {
                  data: { foo: 'bar' },
                  depth: 0,
                  entityRanges: [{ key: 0, length: 0, offset: 0 }],
                  inlineStyleRanges: [{ length: 0, offset: 0, style: 'style' }],
                  key: 'key',
                  text: 'text',
                  type: 'type',
                },
              ],
              entityMap: { foo: 'bar' },
            },
          },
          displayValidationError: true,
          hardValidation: true,
          locked: true,
          required: true,
          stringValidation: 'stringValidation',
          validationMessage: 'validationMessage',
          validationNoBlanks: true,
          validationNoDuplicates: true,
        },
      ],
      context: {
        processPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        processResponsePublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        processSectionPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
      description: {},
      disableNewRow: true,
      disableSyncCsv: true,
      displayCommentRows: 0,
      displayValidationErrorRows: 0,
      filterSettings: [
        {
          columnName: 'columnName',
          filterType: 'eq',
          columnId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          multipleValues: [{}],
          orGroup: 'orGroup',
          value: {},
        },
      ],
      frozenIndex: 0,
      groupSettings: [
        {
          columnName: 'columnName',
          direction: 'direction',
          columnId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
      ],
      includeAllColumns: true,
      isDefault: true,
      rowHeight: 0,
      sortSettings: [
        {
          columnName: 'columnName',
          direction: 'direction',
          columnId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
      ],
      type: 0,
      unpackMultiselectGroupView: true,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.table.views.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      client.table.views.retrieve(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { ignore_cached_options: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Morta.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update', async () => {
    const responsePromise = client.table.views.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.table.views.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.table.views.list(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { ignore_columns: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Morta.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.table.views.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
    const responsePromise = client.table.views.downloadCsv('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      client.table.views.downloadCsv(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { filter: 'filter', process_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', sort: 'sort' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Morta.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('duplicate: only required params', async () => {
    const responsePromise = client.table.views.duplicate('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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
  test.skip('duplicate: required and optional params', async () => {
    const response = await client.table.views.duplicate('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('duplicateDefault', async () => {
    const responsePromise = client.table.views.duplicateDefault('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('previewRow: only required params', async () => {
    const responsePromise = client.table.views.previewRow('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      rowData: { foo: 'bar' },
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
  test.skip('previewRow: required and optional params', async () => {
    const response = await client.table.views.previewRow('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      rowData: { foo: 'bar' },
      context: {
        processPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        processResponsePublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        processSectionPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('setDefault', async () => {
    const responsePromise = client.table.views.setDefault('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('stats', async () => {
    const responsePromise = client.table.views.stats('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('stats: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.table.views.stats(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          filter: 'filter',
          process_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          'sum, avg, max, min, count': ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Morta.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('streamRows: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.table.views.streamRows(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          filter: 'filter',
          page: 1,
          process_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          size: 1,
          sort: 'sort',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Morta.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateCells: only required params', async () => {
    const responsePromise = client.table.views.updateCells('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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
    const response = await client.table.views.updateCells('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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
