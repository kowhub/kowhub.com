import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const DELETE_DRAFT_MUTATION = gql`
  mutation DeleteDraft($input: DeleteDraftInput!) {
    deleteDraft(input: $input) {
      id
    }
  }
`

const LIST_DRAFTS_BY_ID_QUERY = gql`
  query ListDrafts {
    listDrafts {
      items {
        id
      }
    }
  }
`

const useDeleteDraft = () => {
  const [ deleteDraft, { loading, error }] = useMutation(
    DELETE_DRAFT_MUTATION,
    {
      update(cache, { data: { deleteDraft: { id } } }) {
        console.log('Update cache to remove draft: ', id)
        const { listDrafts } = cache.readQuery({ query: LIST_DRAFTS_BY_ID_QUERY })
        cache.writeQuery({
          query: LIST_DRAFTS_BY_ID_QUERY,
          data: { listDrafts: {
            ...listDrafts,
            items: listDrafts.items.filter(draft => draft.id !== id)
          }}
        })
      },
      onCompleted: () => {
        console.log('DELETE DRAFT COMPLETED')
      }
    }
  )

  const deleteDraftHandler = (id: string) => {
    deleteDraft({
      variables: { input: { id } },
      optimisticResponse: {
        __typename: 'Mutation',
        deleteDraft: {
          __typename: 'Draft',
          id,
        }
      }
    })
  }

  return { deleteDraft: deleteDraftHandler, loading, error }
}

export default useDeleteDraft
