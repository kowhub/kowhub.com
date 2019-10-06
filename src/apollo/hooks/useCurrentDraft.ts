import { useQuery } from '@apollo/react-hooks'
import useCurrentDraftId from './useCurrentDraftId'
import useUserDrafts from './useUserDrafts'

const useCurrentDraft = () => {
  const { currentDraftId } = useCurrentDraftId()
  const { drafts } = useUserDrafts()

  const currentDraft = currentDraftId
    ? drafts.find(d => d.id === currentDraftId)
    : null

  return { currentDraft }
}

export default useCurrentDraft
