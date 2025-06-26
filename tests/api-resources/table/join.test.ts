// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Morta from 'morta';

const client = new Morta({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource join', () => {
  // skipped: tests are disabled for the time being
  test.skip('create', async () => {
    const responsePromise = client.table.join.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {});
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
    const responsePromise = client.table.join.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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
    const response = await client.table.join.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      context: {
        processPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        processResponsePublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        processSectionPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
      dataColumns: ['string'],
      isOneToMany: true,
      joinColumns: [{ sourceColumnId: 'sourceColumnId', targetColumnId: 'targetColumnId' }],
      joinViewId: 'joinViewId',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.table.join.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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
    const response = await client.table.join.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});
