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
      console.log(JSON.stringify(action))
      return Object.assign(
        {},
        state.searchLocationData,
        action.data.dwellings.results,
      )
    case SAVE_FILEID_LOOKUP_RESULTS:
      console.log(JSON.stringify(action))
      return Object.assign(
        {},
        state.searchFileIdData,
        action.data.dwelling.results,
      )
    default:
      return state
  }
}
