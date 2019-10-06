/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateDraftInput = {
  id?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  name?: string | null,
  army?: string | null,
  pointsLimit?: number | null,
  rulesVersion?: string | null,
  dna?: string | null,
  status?: string | null,
};

export type UpdateDraftInput = {
  id: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  name?: string | null,
  army?: string | null,
  pointsLimit?: number | null,
  rulesVersion?: string | null,
  dna?: string | null,
  status?: string | null,
};

export type DeleteDraftInput = {
  id?: string | null,
};

export type ModelDraftFilterInput = {
  id?: ModelIDFilterInput | null,
  createdAt?: ModelStringFilterInput | null,
  updatedAt?: ModelStringFilterInput | null,
  name?: ModelStringFilterInput | null,
  army?: ModelStringFilterInput | null,
  pointsLimit?: ModelIntFilterInput | null,
  rulesVersion?: ModelStringFilterInput | null,
  dna?: ModelStringFilterInput | null,
  status?: ModelStringFilterInput | null,
  and?: Array< ModelDraftFilterInput | null > | null,
  or?: Array< ModelDraftFilterInput | null > | null,
  not?: ModelDraftFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type CreateDraftMutationVariables = {
  input: CreateDraftInput,
};

export type CreateDraftMutation = {
  createDraft:  {
    __typename: "Draft",
    id: string,
    createdAt: string | null,
    updatedAt: string | null,
    name: string | null,
    army: string | null,
    pointsLimit: number | null,
    rulesVersion: string | null,
    dna: string | null,
    status: string | null,
    owner: string | null,
  } | null,
};

export type UpdateDraftMutationVariables = {
  input: UpdateDraftInput,
};

export type UpdateDraftMutation = {
  updateDraft:  {
    __typename: "Draft",
    id: string,
    createdAt: string | null,
    updatedAt: string | null,
    name: string | null,
    army: string | null,
    pointsLimit: number | null,
    rulesVersion: string | null,
    dna: string | null,
    status: string | null,
    owner: string | null,
  } | null,
};

export type DeleteDraftMutationVariables = {
  input: DeleteDraftInput,
};

export type DeleteDraftMutation = {
  deleteDraft:  {
    __typename: "Draft",
    id: string,
    createdAt: string | null,
    updatedAt: string | null,
    name: string | null,
    army: string | null,
    pointsLimit: number | null,
    rulesVersion: string | null,
    dna: string | null,
    status: string | null,
    owner: string | null,
  } | null,
};

export type GetDraftQueryVariables = {
  id: string,
};

export type GetDraftQuery = {
  getDraft:  {
    __typename: "Draft",
    id: string,
    createdAt: string | null,
    updatedAt: string | null,
    name: string | null,
    army: string | null,
    pointsLimit: number | null,
    rulesVersion: string | null,
    dna: string | null,
    status: string | null,
    owner: string | null,
  } | null,
};

export type ListDraftsQueryVariables = {
  filter?: ModelDraftFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDraftsQuery = {
  listDrafts:  {
    __typename: "ModelDraftConnection",
    items:  Array< {
      __typename: "Draft",
      id: string,
      createdAt: string | null,
      updatedAt: string | null,
      name: string | null,
      army: string | null,
      pointsLimit: number | null,
      rulesVersion: string | null,
      dna: string | null,
      status: string | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateDraftSubscriptionVariables = {
  owner: string,
};

export type OnCreateDraftSubscription = {
  onCreateDraft:  {
    __typename: "Draft",
    id: string,
    createdAt: string | null,
    updatedAt: string | null,
    name: string | null,
    army: string | null,
    pointsLimit: number | null,
    rulesVersion: string | null,
    dna: string | null,
    status: string | null,
    owner: string | null,
  } | null,
};

export type OnUpdateDraftSubscriptionVariables = {
  owner: string,
};

export type OnUpdateDraftSubscription = {
  onUpdateDraft:  {
    __typename: "Draft",
    id: string,
    createdAt: string | null,
    updatedAt: string | null,
    name: string | null,
    army: string | null,
    pointsLimit: number | null,
    rulesVersion: string | null,
    dna: string | null,
    status: string | null,
    owner: string | null,
  } | null,
};

export type OnDeleteDraftSubscriptionVariables = {
  owner: string,
};

export type OnDeleteDraftSubscription = {
  onDeleteDraft:  {
    __typename: "Draft",
    id: string,
    createdAt: string | null,
    updatedAt: string | null,
    name: string | null,
    army: string | null,
    pointsLimit: number | null,
    rulesVersion: string | null,
    dna: string | null,
    status: string | null,
    owner: string | null,
  } | null,
};
