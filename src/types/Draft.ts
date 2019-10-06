export type Draft = {
  id: string,
  createdAt: string,
  updatedAt: string,
  name: string,
  army: string,
  pointsLimit: number,
  rulesVersion: string
  dna?: string
  status: string
}

export type DerivedDraftDetails = {
  pointsTotal: number,
  units: Unit[]
}

export type Unit = {
  id: string,
  dna: string,
  name: string,
  form: string,
  pts: number,
}

export type WorkingDraft = Draft & DerivedDraftDetails
