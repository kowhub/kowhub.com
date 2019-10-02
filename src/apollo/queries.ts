import gql from 'graphql-tag'
import { listDrafts } from '../graphql/queries'

export const LIST_DRAFTS_QUERY = gql(listDrafts)
