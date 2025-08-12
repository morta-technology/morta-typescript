// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Morta from 'morta';

const client = new Morta({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rows', () => {
  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.table.views.rows.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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
    const response = await client.table.views.rows.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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
  test.skip('list', async () => {
    const responsePromise = client.table.views.rows.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.table.views.rows.list(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { alphabeticalColumnSort: true, filter: 'filter', page: 0, size: 0, sort: 'sort' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Morta.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.table.views.rows.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('add: only required params', async () => {
    const responsePromise = client.table.views.rows.add('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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
    const response = await client.table.views.rows.add('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.table.views.rows.upsert('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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
    const response = await client.table.views.rows.upsert('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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
