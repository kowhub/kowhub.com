export type DnaFragments = [string, string, string, string[]]

export function readDna(dna: string): DnaFragments {
  const [unitFormKey, ...options] = chunk(dna)
  const item = options.find(o => isItem(o)) || null
  return [
    unitFormKey.slice(0,4),
    unitFormKey.slice(4),
    item,
    options.filter(o => o !== item)
  ]
}

function chunk(dna: string): string[] {
  const chunker = new RegExp('.{1,5}', 'g')
  return dna.match(chunker)
}

function isItem(option: string): boolean {
  return /^\$/.test(option)
}
