import { useQuery } from '@apollo/react-hooks'
import { LIST_DRAFTS_QUERY } from '../queries'

const useUserDrafts = () => {
  const { data, loading, error } = useQuery(LIST_DRAFTS_QUERY);
  const drafts = data ? data.listDrafts.items : []

  return { drafts, loading, error }
}

export default useUserDrafts
