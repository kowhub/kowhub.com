import React from 'react'
import UserDraftEntry from './UserDraftEntry'
import { connect } from 'react-redux'
import { addDraft, removeDraft, selectDraft } from '../redux/actions'

const UserDrafts = ({ drafts, currentDraftId, selectDraft, addDraft, removeDraft }) => {
  const handleAddDraft = (evt) => {
    evt.preventDefault()
    evt.stopPropagation()
    addDraft()
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

  const listItems = drafts.map((draft) =>
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
      {drafts.length > 0 ? '' : <div> please create a new list </div>}
      <ul>{listItems}</ul>
      <div>
        <button onClick={handleAddDraft}>NEW LIST</button>
      </div>
    </div>
  )
}

const mapStateToProps = ({ builder }) => {
  return {
    currentDraftId: builder.currentDraftId,
    drafts: builder.userDrafts
  }
}

export default connect(
  mapStateToProps,
  { addDraft, removeDraft, selectDraft }
)(UserDrafts)
