export type Draft = {
  id: string,
  created_at: string,
  updated_at: string,
  meta: DraftMeta,
  units: DraftUnit[]
}

export type DraftMeta = {
  name: string,
  army: string,
  points_limit: number,
  version: string
}

export type DraftUnit = {
  id: string,
  dna: string
}
