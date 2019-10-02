import { useMutation } from '@apollo/react-hooks'
import { CreateDraftInput, DraftMetaInput } from '../../API'
import { LIST_DRAFTS_QUERY } from '../queries'
import { CREATE_DRAFT_MUTATION } from '../mutations'
import { v4 as uuid } from 'uuid'

/*
 * MUTATION:
 * (1) Create draft
 * (2) Update cache
 *    - receive cache refrence and data response from create draft mutation
 *    - read cache for drafts list
 *    - save to cache the drafts list with newly created draft added
 */
const useCreateDraftMutation = () => {
  const [addDraft, { loading, error }] = useMutation(
    CREATE_DRAFT_MUTATION,
    {
      update(cache, { data: { createDraft } }) {
        console.log('Update cache with new draft: ', createDraft.meta.name)
        console.log(createDraft)
        const { listDrafts } = cache.readQuery({ query: LIST_DRAFTS_QUERY })
        cache.writeQuery({
          query: LIST_DRAFTS_QUERY,
          data: { listDrafts: {
            ...listDrafts,
            items: [ ...listDrafts.items, createDraft ]
          }}
        })
      },
      onCompleted: () => {
        console.log('HOOK-MUTATION COMPLETED')
      }
    }
  )

  const createDraft = ({ name, pointsLimit, kowVersion }) => {
    const meta = { name, army: 'dw', pointsLimit, kowVersion }
    const units = []

    addDraft({
      variables: { input: { meta, units } },
      optimisticResponse: {
        __typename: 'Mutation',
        createDraft: {
          __typename: 'Draft',
          owner: '',
          id: uuid(),
          createdAt: new Date().toString(),
          updatedAt: new Date().toString(),
          meta: { ...meta, __typename: 'DraftMeta' },
          units
        }
      }
    })
  }

  return { createDraft, loading, error }
}

export default useCreateDraftMutation
