import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const UPDATE_DRAFT_META_MUTATION = gql`
  mutation UpdateDraft($input: UpdateDraftInput!) {
    updateDraft(input: $input) {
      id
      name
      army
      pointsLimit
      rulesVersion
      status
    }
  }
`

const useUpdateDraftMeta = () => {
  const [ updateDraft, { loading, error }] = useMutation(UPDATE_DRAFT_META_MUTATION)

  const updateDraftMeta = ({ id, name, army, pointsLimit, rulesVersion, status }) => {
    updateDraft({
      variables: { input: { id, name, army, pointsLimit, rulesVersion, status } },
      optimisticResponse: {
        __typename: 'Mutation',
        updateDraft: {
          __typename: 'Draft',
          id,
          name,
          army,
          pointsLimit,
          rulesVersion,
          status
        }
      }
    })
  }

  return { updateDraftMeta, loading, error }
}

export default useUpdateDraftMeta
