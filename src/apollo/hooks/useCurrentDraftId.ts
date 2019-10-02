import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

export const GET_CURRENT_DRAFT_ID = gql`
query GetCurrentDraft {
  currentDraftId @client
}
`

const useCurrentDraftId = () => {
  const { data, client } = useQuery(GET_CURRENT_DRAFT_ID);
  const currentDraftId = data ? data.currentDraftId || null : null

  const setCurrentDraftId = (id) => {
    client.writeData({ data: { currentDraftId: id } })
  }

  return { currentDraftId, setCurrentDraftId }
}

export default useCurrentDraftId
