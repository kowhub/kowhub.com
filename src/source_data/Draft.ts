export type Draft = {
  id: string,
  createdAt: string,
  updatedAt: string,
  name: string,
  army: string,
  pointsLimit: number,
  pointsTotal?: number,
  rulesVersion: string
  dna?: string
  status: string
}
