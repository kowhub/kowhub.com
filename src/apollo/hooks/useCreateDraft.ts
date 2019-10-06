import { useMutation } from '@apollo/react-hooks'
import { LIST_DRAFTS_QUERY } from '../queries'
import { CREATE_DRAFT_MUTATION } from '../mutations'
import { v4 as uuid } from 'uuid'
import gql from 'graphql-tag'

  /*
const LIST_DRAFTS_QUERY = gql`
  query ListDrafts {
    listDrafts {
      items {
        id
        createdAt
        updatedAt
        name
        army
        pointsLimit
        rulesVersion
        dna
        status
      }
    }
  }
`
   */

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
        console.log('Update cache with new draft: ', createDraft.name)
        console.log(createDraft)
        const { listDrafts } = cache.readQuery({ query: LIST_DRAFTS_QUERY })
        console.log(listDrafts)
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

  const createDraft = ({ name, pointsLimit, rulesVersion }) => {
    addDraft({
      variables: { input: { name, pointsLimit, rulesVersion } },
      optimisticResponse: {
        /* Note that the optimistic response type must match the response exactly */
        __typename: 'Mutation',
        createDraft: {
          __typename: 'Draft',
          owner: '',
          id: uuid(),
          createdAt: new Date().toString(),
          updatedAt: new Date().toString(),
          name,
          army: '',
          pointsLimit,
          rulesVersion,
          dna: '',
          status: '',
        }
      }
    })
  }

  return { createDraft, loading, error }
}

export default useCreateDraftMutation
