// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Morta from 'morta';

const client = new Morta({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource notifications', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.notifications.create({
      description: 'description',
      projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      triggers: [{ resource: 'resource', verb: 'verb' }],
      webhookUrl: 'webhookUrl',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.notifications.create({
      description: 'description',
      projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      triggers: [{ resource: 'resource', verb: 'verb' }],
      webhookUrl: 'webhookUrl',
      customHeaders: [{ key: 'key', value: 'value' }],
      processes: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      tables: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.notifications.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      webhookUrl: 'webhookUrl',
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
    const response = await client.notifications.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      webhookUrl: 'webhookUrl',
      customHeaders: [{ key: 'key', value: 'value' }],
      description: 'description',
      processes: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      tables: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      triggers: [{ resource: 'resource', verb: 'verb', publicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' }],
    });
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.notifications.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listEventTypes', async () => {
    const responsePromise = client.notifications.listEventTypes();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listEvents: only required params', async () => {
    const responsePromise = client.notifications.listEvents('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      type: 'process',
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
  test.skip('listEvents: required and optional params', async () => {
    const response = await client.notifications.listEvents('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      type: 'process',
      end_date: '2019-12-27T18:11:19.117Z',
      page: 1,
      search: 'search',
      start_date: '2019-12-27T18:11:19.117Z',
      users: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      verb: ['string'],
    });
  });
});
