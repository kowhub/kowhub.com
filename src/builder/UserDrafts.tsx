import React from 'react'
import UserDraftEntry from './UserDraftEntry'

/*
 * State suggestion:
 *  - all user drafts
 *    [
 *      {
 *        id: 'draft7000',
 *        name: 'my basilean list',
 *        ...
 *      },
 *      {
 *        id: 'draft7064',
 *        name: 'list for CoK2020',
 *        ...
 *      }
 *    ]
 *  - selected draft ID
 */
const UserDrafts = ({ userDrafts, currentDraftId, selectDraft, newDraft, removeDraft }) => {
  const handleNewDraft = (evt) => {
    evt.preventDefault()
    evt.stopPropagation()
    newDraft()
  }

  const selectDraftHandler = (id: string) => {
    return (evt) => {
      evt.preventDefault()
      evt.stopPropagation()
      selectDraft(id)
    }
  }

  const removeDraftHandler = (id: string) => {
    return (evt) => {
      evt.preventDefault()
      evt.stopPropagation()
      removeDraft(id)
    }
  }

  const listItems = userDrafts.map((draft) =>
    <UserDraftEntry
      key={draft.id}
      name={draft.name}
      isSelected={draft.id === currentDraftId}
      selectDraft={selectDraftHandler(draft.id)}
      removeDraft={removeDraftHandler(draft.id)}
    />
  )

  return (
    <div className="user_drafts">
      <div><b>User Lists</b></div>
      {userDrafts.length > 0 ? '' : <div> please create a new list </div>}
      <ul>{listItems}</ul>
      <div>
        <button onClick={handleNewDraft}>NEW LIST</button>
      </div>
    </div>
  )
}

export default UserDrafts
