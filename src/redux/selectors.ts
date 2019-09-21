import { Draft } from '../source_data/Draft'

export const getCurrentDraft = ({ builder }): Draft => {
  return builder.drafts.find(draft => draft.id === builder.currentDraftId)
}
