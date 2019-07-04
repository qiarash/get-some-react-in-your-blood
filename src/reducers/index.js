import { combineReducers } from 'redux'
import Modal from './ModalReducer'
import Post from './PostReducer'

export default combineReducers({
  Post,
  Modal
})