import { COLLECTION_GETTERS, SELECT_MODEL_GETTERS } from '@/store/lib/mixins'

// Project Module Getters
const getters = {
  ...COLLECTION_GETTERS,
  ...SELECT_MODEL_GETTERS,
  selectedLabel: state => {
    return state.selectedModel.label || 'I AM ERROR'
  },
  // TODO - phase out current
  current: state => {
    return state.current
  },
  newModel: state => {
    return state.newModel
  }
}

export default getters
