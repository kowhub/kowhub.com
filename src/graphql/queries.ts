// tslint:disable
// this is an auto generated file. This will be overwritten

export const getDraft = `query GetDraft($id: ID!) {
  getDraft(id: $id) {
    id
    createdAt
    updatedAt
    name
    army
    pointsLimit
    rulesVersion
    dna
    status
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
      name
      army
      pointsLimit
      rulesVersion
      dna
      status
      owner
    }
    nextToken
  }
}
`;
