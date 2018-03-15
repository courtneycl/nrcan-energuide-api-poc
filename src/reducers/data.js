import {
  SAVE_FILEID_LOOKUP_RESULTS,
  SAVE_LOCATION_LOOKUP_RESULTS,
} from '../actions'

export default (
  state = { searchLocationData: [], searchFileIdData: [] },
  action = {},
) => {
  switch (action.type) {
    case SAVE_LOCATION_LOOKUP_RESULTS:
      return Object.assign({}, state, { searchLocationData: action.data })
    case SAVE_FILEID_LOOKUP_RESULTS:
      return Object.assign({}, state, { searchFileIdData: action.data })
    default:
      return state
  }
}
