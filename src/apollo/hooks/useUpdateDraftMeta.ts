import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const UpdateDraftMutation = gql`
  mutation UpdateDraft($input: UpdateDraftInput!) {
    updateDraft(input: $input) {
      id
      meta {
        name
        army
        pointsLimit
        kowVersion
      }
    }
  }
`

const useUpdateDraftMeta = () => {
  const [ updateDraft, { loading, error }] = useMutation(UpdateDraftMutation)

  const updateDraftMeta = ({ id, name, army, pointsLimit, kowVersion }) => {
    const meta = { name, army, pointsLimit, kowVersion }

    updateDraft({
      variables: { input: { id, meta } },
      optimisticResponse: {
        __typename: 'Mutation',
        updateDraft: {
          __typename: 'Draft',
          id,
          meta: { ...meta, __typename: 'DraftMeta' },
        }
      }
    })
  }

  return { updateDraftMeta, loading, error }
}

export default useUpdateDraftMeta
