import { useMutation } from '@apollo/react-hooks'
import { LIST_DRAFTS_QUERY } from '../queries'
import { DELETE_DRAFT_MUTATION } from '../mutations'
import gql from 'graphql-tag'

const useDeleteDraft = () => {
  const [ deleteDraft, { loading, error }] = useMutation(
    DELETE_DRAFT_MUTATION,
    {
      update(cache, { data: { deleteDraft: { id } } }) {
        console.log('Update cache to remove draft: ', id)
        const { listDrafts } = cache.readQuery({ query: LIST_DRAFTS_QUERY })
        cache.writeQuery({
          query: LIST_DRAFTS_QUERY,
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
