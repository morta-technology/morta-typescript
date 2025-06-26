// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Morta from 'morta';

const client = new Morta({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sync', () => {
  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.table.sync.update('integration_name', {
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
    const response = await client.table.sync.update('integration_name', {
      table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      companyId: 'companyId',
      context: {
        processPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        processResponsePublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        processSectionPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
      docTypes: ['string'],
      enterpriseId: 'enterpriseId',
      folderId: 'folderId',
      hubId: 'hubId',
      licenseId: 'licenseId',
      modelId: 'modelId',
      projectId: 'projectId',
      projectIds: ['string'],
      properties: ['string'],
      region: 'region',
      topFolderId: 'topFolderId',
      type: 'Projects',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('deleteIntegration: only required params', async () => {
    const responsePromise = client.table.sync.deleteIntegration('integration_name', {
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
  test.skip('deleteIntegration: required and optional params', async () => {
    const response = await client.table.sync.deleteIntegration('integration_name', {
      table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('getSyncInfo', async () => {
    const responsePromise = client.table.sync.getSyncInfo('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retryIntegrationSync', async () => {
    const responsePromise = client.table.sync.retryIntegrationSync('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('syncWithIntegration: only required params', async () => {
    const responsePromise = client.table.sync.syncWithIntegration('integration_name', {
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
  test.skip('syncWithIntegration: required and optional params', async () => {
    const response = await client.table.sync.syncWithIntegration('integration_name', {
      table_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      companyId: 'companyId',
      context: {
        processPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        processResponsePublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        processSectionPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
      docTypes: ['string'],
      enterpriseId: 'enterpriseId',
      folderId: 'folderId',
      hubId: 'hubId',
      licenseId: 'licenseId',
      modelId: 'modelId',
      projectId: 'projectId',
      projectIds: ['string'],
      properties: ['string'],
      region: 'region',
      topFolderId: 'topFolderId',
      type: 'Projects',
    });
  });
});
