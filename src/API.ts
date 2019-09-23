/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateDraftInput = {
  id?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  meta: DraftMetaInput,
  units: Array< string >,
};

export type DraftMetaInput = {
  name: string,
  army: string,
  pointsLimit: number,
  kowVersion: string,
};

export type UpdateDraftInput = {
  id: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  meta?: DraftMetaInput | null,
  units?: Array< string > | null,
};

export type DeleteDraftInput = {
  id?: string | null,
};

export type ModelDraftFilterInput = {
  id?: ModelIDFilterInput | null,
  createdAt?: ModelStringFilterInput | null,
  updatedAt?: ModelStringFilterInput | null,
  units?: ModelStringFilterInput | null,
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

export type CreateDraftMutationVariables = {
  input: CreateDraftInput,
};

export type CreateDraftMutation = {
  createDraft:  {
    __typename: "Draft",
    id: string,
    createdAt: string | null,
    updatedAt: string | null,
    meta:  {
      __typename: "DraftMeta",
      name: string,
      army: string,
      pointsLimit: number,
      kowVersion: string,
    },
    units: Array< string >,
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
    meta:  {
      __typename: "DraftMeta",
      name: string,
      army: string,
      pointsLimit: number,
      kowVersion: string,
    },
    units: Array< string >,
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
    meta:  {
      __typename: "DraftMeta",
      name: string,
      army: string,
      pointsLimit: number,
      kowVersion: string,
    },
    units: Array< string >,
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
    meta:  {
      __typename: "DraftMeta",
      name: string,
      army: string,
      pointsLimit: number,
      kowVersion: string,
    },
    units: Array< string >,
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
      meta:  {
        __typename: "DraftMeta",
        name: string,
        army: string,
        pointsLimit: number,
        kowVersion: string,
      },
      units: Array< string >,
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
    meta:  {
      __typename: "DraftMeta",
      name: string,
      army: string,
      pointsLimit: number,
      kowVersion: string,
    },
    units: Array< string >,
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
    meta:  {
      __typename: "DraftMeta",
      name: string,
      army: string,
      pointsLimit: number,
      kowVersion: string,
    },
    units: Array< string >,
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
    meta:  {
      __typename: "DraftMeta",
      name: string,
      army: string,
      pointsLimit: number,
      kowVersion: string,
    },
    units: Array< string >,
    owner: string | null,
  } | null,
};
