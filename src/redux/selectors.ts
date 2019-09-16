export const getCurrentDraft = ({ builder }) => {
  return builder.userDrafts.find(draft => draft.id === builder.currentDraftId)
}
