import { useQuery } from '@apollo/react-hooks'
import useCurrentDraftId from './useCurrentDraftId'
import gql from 'graphql-tag'

export const GET_CURRENT_DRAFT_ID = gql`
  query GetCurrentDraft {
    currentDraftId @client
  }
`

const useCurrentDraft = () => {
  const { currentDraftId } = useCurrentDraftId()

    /*
  const currentDraftId = data ? data.currentDraftId || null : null

  const setCurrentDraftId = (id) => {
    client.writeData({ data: { currentDraftId: id } })
  }

     */
  return { currentDraftId }
}

export default useCurrentDraft
