import gql from 'graphql-tag'
import { listDrafts } from '../graphql/queries'

export const LIST_DRAFTS_QUERY = gql(listDrafts)

export const GET_CURRENT_DRAFT_ID_QUERY = gql`
  query GetCurrentDraft {
    currentDraftId @client
  }
`
