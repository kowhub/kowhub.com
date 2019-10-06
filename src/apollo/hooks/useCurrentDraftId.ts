import { useQuery } from '@apollo/react-hooks'
import { GET_CURRENT_DRAFT_ID_QUERY } from '../queries'

const useCurrentDraftId = () => {
  const { data, client } = useQuery(GET_CURRENT_DRAFT_ID_QUERY);
  const currentDraftId = data ? data.currentDraftId || null : null

  const setCurrentDraftId = (id) => {
    client.writeData({ data: { currentDraftId: id } })
  }

  return { currentDraftId, setCurrentDraftId }
}

export default useCurrentDraftId
