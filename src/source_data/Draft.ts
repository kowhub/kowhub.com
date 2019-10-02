export type Draft = {
  id: string,
  createdAt: string,
  updatedAt: string,
  meta: DraftMeta,
  units: DraftUnit[]
}

export type DraftMeta = {
  name: string,
  army: string,
  pointsLimit: number,
  pointsTotal?: number,
  kowVersion: string
}

export type DraftUnit = {
  id?: string,
  dna: string
}
