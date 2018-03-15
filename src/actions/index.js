export const SET_LANGUAGE = 'SET_LANGUAGE'

export const setLanguage = lang => ({
  type: SET_LANGUAGE,
  lang,
})

export const SAVE_LOCATION_LOOKUP_RESULTS = 'SAVE_LOCATION_LOOKUP_RESULTS'

export const saveLocationData = data => ({
  type: SAVE_LOCATION_LOOKUP_RESULTS,
  data,
})

export const SAVE_FILEID_LOOKUP_RESULTS = 'SAVE_FILEID_LOOKUP_RESULTS'

export const saveFileIdData = data => ({
  type: SAVE_FILEID_LOOKUP_RESULTS,
  data,
})
