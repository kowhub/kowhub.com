// tslint:disable
// this is an auto generated file. This will be overwritten

export const createDraft = `mutation CreateDraft($input: CreateDraftInput!) {
  createDraft(input: $input) {
    id
    createdAt
    updatedAt
    meta {
      name
      army
      pointsLimit
      kowVersion
    }
    units
    owner
  }
}
`;
export const updateDraft = `mutation UpdateDraft($input: UpdateDraftInput!) {
  updateDraft(input: $input) {
    id
    createdAt
    updatedAt
    meta {
      name
      army
      pointsLimit
      kowVersion
    }
    units
    owner
  }
}
`;
export const deleteDraft = `mutation DeleteDraft($input: DeleteDraftInput!) {
  deleteDraft(input: $input) {
    id
    createdAt
    updatedAt
    meta {
      name
      army
      pointsLimit
      kowVersion
    }
    units
    owner
  }
}
`;
