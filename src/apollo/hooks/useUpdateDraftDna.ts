import { useMutation } from '@apollo/react-hooks'
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
  const [ updateDraft, { loading, error }] = useMutation(UPDATE_DRAFT_UNITS_MUTATION)

  const updateDraftDna = ({ id, dna }) => {
    updateDraft({
      variables: { input: { id, dna } },
      optimisticResponse: {
        __typename: 'Mutation',
        updateDraft: {
          __typename: 'Draft',
          id,
          dna,
        }
      }
    })
  }

  return { updateDraftDna, loading, error }
}

export default useUpdateDraftDna

