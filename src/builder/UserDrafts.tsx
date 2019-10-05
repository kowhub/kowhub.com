import React from 'react'
import UserDraftEntry from './UserDraftEntry'
import { Draft } from '../source_data/Draft'
import useCreateDraft from '../apollo/hooks/useCreateDraft'
import useDeleteDraft from '../apollo/hooks/useDeleteDraft'

import useUserDraftsMeta from '../apollo/hooks/useUserDraftsMeta'
import useCurrentDraftId from '../apollo/hooks/useCurrentDraftId'

const UserDrafts = () => {

  const { drafts, loading, error } = useUserDraftsMeta()

  const { currentDraftId, setCurrentDraftId } = useCurrentDraftId()

  const { createDraft } = useCreateDraft()
  const { deleteDraft } = useDeleteDraft()

  const handleAddDraft = (evt) => {
    evt.preventDefault()
    evt.stopPropagation()
    createDraft({
      name: 'With new API schema',
      pointsLimit: 2000,
      rulesVersion: '201910'
    })
  }

  const selectDraftHandler = (id: string) => {
    return (evt) => {
      evt.preventDefault()
      evt.stopPropagation()
      setCurrentDraftId(id)
    }
  }

  const removeDraftHandler = (id: string) => {
    return (evt) => {
      evt.preventDefault()
      evt.stopPropagation()
      deleteDraft(id)
    }
  }

  const listItems = drafts.map((draft) =>
    <UserDraftEntry
      key={draft.id}
      draft={draft}
      isSelected={draft.id === currentDraftId}
      selectDraft={selectDraftHandler(draft.id)}
      removeDraft={removeDraftHandler(draft.id)}
    />
  )

  return (
    <div className="user_drafts">
      <div><b>User Lists</b></div>
      {drafts.length > 0 ? '' : <div> please create a new list </div>}
      <ul>{listItems}</ul>
      <div>
        <button onClick={handleAddDraft}>NEW LIST</button>
      </div>
    </div>
  )
}

export default UserDrafts
