// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Morta from 'morta';

const client = new Morta({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tags', () => {
  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.user.tags.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      user_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.user.tags.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      user_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Prism tests are disabled
  test.skip('add: only required params', async () => {
    const responsePromise = client.user.tags.add('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      tagReferenceId: 'tagReferenceId',
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
    const response = await client.user.tags.add('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      tagReferenceId: 'tagReferenceId',
    });
  });

  // Prism tests are disabled
  test.skip('bulkApply: only required params', async () => {
    const responsePromise = client.user.tags.bulkApply('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      tableId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      tagReferenceIds: ['string'],
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
  test.skip('bulkApply: required and optional params', async () => {
    const response = await client.user.tags.bulkApply('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      tableId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      tagReferenceIds: ['string'],
    });
  });
});
