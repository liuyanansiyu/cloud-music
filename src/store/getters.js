export const playing = state => state.playing

export const fullScreen = state => state.fullScreen

export const playList = state => state.playList

export const sequenceList = state => state.sequenceList

export const playMode = state => state.playMode

export const currentPlayIndex = state => state.currentPlayIndex

export const currentSong = (state) => {
  return state.playList[state.currentPlayIndex] || {}
}
