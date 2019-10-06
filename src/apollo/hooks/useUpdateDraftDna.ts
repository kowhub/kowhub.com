import { useMutation } from '@apollo/react-hooks'
import { LIST_DRAFTS_QUERY } from '../queries'
import gql from 'graphql-tag'

const UPDATE_DRAFT_UNITS_MUTATION = gql`
  mutation UpdateDraft($input: UpdateDraftInput!) {
    updateDraft(input: $input) {
      id
      dna
    }
  }
`

type UpdateDraftDnaInput = {
  id: string
  dna: string
}

const useUpdateDraftDna = () => {
  const [ updateDraft, { loading, error, client } ] = useMutation(UPDATE_DRAFT_UNITS_MUTATION)

  const updateDraftDna = ({ id, dna }) => {
    const { listDrafts } = client.readQuery({ query: LIST_DRAFTS_QUERY })
    const draft = listDrafts.items.find(draft => draft.id === id)
    // skip update request if update DNA does not change compared to cache
    if (draft.dna !== dna && (!!draft.dna || !!dna)) {
      console.log('EXECUTE dna update')
      updateDraft({
        variables: { input: { id, dna: dna || null } },
        // Even though the results are normally already cached,
        // we need optimisticResponse to avoid problems in situations
        // where several units are added in a row
        optimisticResponse: {
          __typename: 'Mutation',
          updateDraft: {
            __typename: 'Draft',
            id,
            dna,
          }
        }
      })
    } else {
      console.log('SKIP dna update')
    }
  }

  return { updateDraftDna, loading, error }
}

export default useUpdateDraftDna

