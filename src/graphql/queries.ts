// tslint:disable
// this is an auto generated file. This will be overwritten

export const getDraft = `query GetDraft($id: ID!) {
  getDraft(id: $id) {
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
export const listDrafts = `query ListDrafts(
  $filter: ModelDraftFilterInput
  $limit: Int
  $nextToken: String
) {
  listDrafts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
