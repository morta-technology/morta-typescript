// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Morta from 'morta';

const client = new Morta({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource response', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.document.section.response.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    const response = await client.document.section.response.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      context: {
        processPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        processResponsePublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        processSectionPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
      type: 'Flexible',
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.document.section.response.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      document_section_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    const response = await client.document.section.response.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      document_section_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      context: {
        processPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        processResponsePublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        processSectionPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
      enableSubmission: true,
      pdfIncludeResponse: true,
      resetAfterResponse: true,
      type: 'Flexible',
      typeOptions: {},
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.document.section.response.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      document_section_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    const response = await client.document.section.response.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      document_section_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Prism tests are disabled
  test.skip('reset: only required params', async () => {
    const responsePromise = client.document.section.response.reset('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      document_section_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('reset: required and optional params', async () => {
    const response = await client.document.section.response.reset('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      document_section_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Prism tests are disabled
  test.skip('restore: only required params', async () => {
    const responsePromise = client.document.section.response.restore('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      document_section_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('restore: required and optional params', async () => {
    const response = await client.document.section.response.restore('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      document_section_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Prism tests are disabled
  test.skip('submit: only required params', async () => {
    const responsePromise = client.document.section.response.submit('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      document_section_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('submit: required and optional params', async () => {
    const response = await client.document.section.response.submit('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      document_section_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      context: {
        processPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        processResponsePublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        processSectionPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
      response: {},
    });
  });
});
