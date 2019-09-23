// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateDraft = `subscription OnCreateDraft($owner: String!) {
  onCreateDraft(owner: $owner) {
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
export const onUpdateDraft = `subscription OnUpdateDraft($owner: String!) {
  onUpdateDraft(owner: $owner) {
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
export const onDeleteDraft = `subscription OnDeleteDraft($owner: String!) {
  onDeleteDraft(owner: $owner) {
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
