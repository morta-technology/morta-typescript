// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Morta from 'morta';

const client = new Morta({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource row', () => {
  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.table.row.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      rows: [{ publicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', rowData: { foo: 'bar' } }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.table.row.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      rows: [
        {
          publicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          rowData: { foo: 'bar' },
          context: {
            processPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            processResponsePublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            processSectionPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          },
          sortOrder: 0,
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

  // Prism tests are disabled
  test.skip('add: only required params', async () => {
    const responsePromise = client.table.row.add('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      rows: [{ rowData: { foo: 'bar' } }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('add: required and optional params', async () => {
    const response = await client.table.row.add('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      rows: [
        {
          rowData: { foo: 'bar' },
          context: {
            processPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            processResponsePublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            processSectionPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          },
          sortOrder: 0,
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

  // Prism tests are disabled
  test.skip('getRows', async () => {
    const responsePromise = client.table.row.getRows('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getRows: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.table.row.getRows(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          columns: ['string'],
          distinct_columns: ['string'],
          filter: 'filter',
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

  // Prism tests are disabled
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.table.row.upsert('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      rows: [{ rowData: { foo: 'bar' } }],
      upsertColumnName: 'upsertColumnName',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('upsert: required and optional params', async () => {
    const response = await client.table.row.upsert('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      rows: [
        {
          rowData: { foo: 'bar' },
          context: {
            processPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            processResponsePublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            processSectionPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          },
          sortOrder: 0,
        },
      ],
      upsertColumnName: 'upsertColumnName',
      context: {
        processPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        processResponsePublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        processSectionPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
    });
  });
});
