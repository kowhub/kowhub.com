import React from 'react'
import UserDraftEntry from './UserDraftEntry'
import { Draft } from '../source_data/Draft'
import { connect } from 'react-redux'
import { addDraft, removeDraft, selectDraft } from '../redux/actions'

const UserDrafts = (
  props: {
    drafts: Draft[],
    currentDraftId: string,
    selectDraft(id: string): void,
    addDraft(): void,
    removeDraft(id: string): void
  }
) => {
  const { drafts, currentDraftId, selectDraft, addDraft, removeDraft } = props

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
      meta={draft.meta}
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
