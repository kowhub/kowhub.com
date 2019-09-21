import { Draft } from '../source_data/Draft'

export const getCurrentDraft = ({ builder }): Draft => {
  return builder.userDrafts.find(draft => draft.id === builder.currentDraftId)
}
