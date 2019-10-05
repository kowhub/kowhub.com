import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const LIST_DRAFTS_META_QUERY = gql`
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
        status
      }
    }
  }
`

const useUserDraftsMeta = () => {
  const { data, loading, error } = useQuery(LIST_DRAFTS_META_QUERY);
  const drafts = data ? data.listDrafts.items : []

  return { drafts, loading, error }
}

export default useUserDraftsMeta
