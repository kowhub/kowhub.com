import { useQuery } from '@apollo/react-hooks'
import { LIST_DRAFTS_QUERY } from '../queries'
import gql from 'graphql-tag'

const useUserDraftsMeta = () => {
  const { data, loading, error } = useQuery(LIST_DRAFTS_QUERY)
  const drafts = data ? data.listDrafts.items : []

  return { drafts, loading, error }
}

export default useUserDraftsMeta
