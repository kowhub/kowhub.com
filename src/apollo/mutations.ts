import gql from 'graphql-tag'
import { createDraft, updateDraft } from '../graphql/mutations'

export const CREATE_DRAFT_MUTATION = gql(createDraft)

export const UPDATE_DRAFT_MUTATION = gql(updateDraft)
