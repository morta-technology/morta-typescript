// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Morta from 'morta';

const client = new Morta({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource document', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.document.create({
      name: 'name',
      projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      type: 'type',
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
    const response = await client.document.create({
      name: 'name',
      projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      type: 'type',
      context: {
        processPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        processResponsePublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        processSectionPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.document.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      client.document.retrieve(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { exclude_children: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Morta.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update', async () => {
    const responsePromise = client.document.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {});
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
    const responsePromise = client.document.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createMultipleSections: only required params', async () => {
    const responsePromise = client.document.createMultipleSections('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      sections: [{ name: 'name' }],
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
  test.skip('createMultipleSections: required and optional params', async () => {
    const response = await client.document.createMultipleSections('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      sections: [
        {
          name: 'name',
          context: {
            processPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            processResponsePublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            processSectionPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          },
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
          parentId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          plaintextDescription: 'plaintextDescription',
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

  // skipped: tests are disabled for the time being
  test.skip('createSections', async () => {
    const responsePromise = client.document.createSections('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('export: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.document.export(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { page_format: 'A1', page_orientation: 'portrait', table_links: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Morta.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('getDeletedSections', async () => {
    const responsePromise = client.document.getDeletedSections('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getDeletedSections: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.document.getDeletedSections(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { process_section_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Morta.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('getDuplicatedChildren', async () => {
    const responsePromise = client.document.getDuplicatedChildren('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
    const responsePromise = client.document.restore('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('syncTemplate', async () => {
    const responsePromise = client.document.syncTemplate('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateMultipleSections: only required params', async () => {
    const responsePromise = client.document.updateMultipleSections('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      sections: [{ publicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' }],
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
  test.skip('updateMultipleSections: required and optional params', async () => {
    const response = await client.document.updateMultipleSections('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      sections: [
        {
          publicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          context: {
            processPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            processResponsePublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            processSectionPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          },
          description: {},
          name: 'name',
          pageBreakBefore: true,
          pdfIncludeDescription: true,
          pdfIncludeSection: true,
          plaintextDescription: 'plaintextDescription',
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

  // skipped: tests are disabled for the time being
  test.skip('updateSectionOrder', async () => {
    const responsePromise = client.document.updateSectionOrder('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateSectionOrder: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.document.updateSectionOrder(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          context: {
            processPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            processResponsePublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            processSectionPublicId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          },
          processSections: [
            {
              parentId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              position: 0,
              sectionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            },
          ],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Morta.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateViewsPermissions: only required params', async () => {
    const responsePromise = client.document.updateViewsPermissions({
      resource_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('updateViewsPermissions: required and optional params', async () => {
    const response = await client.document.updateViewsPermissions({
      resource_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});
