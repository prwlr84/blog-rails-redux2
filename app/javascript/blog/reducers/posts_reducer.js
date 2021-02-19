import { FETCH_POSTS, FETCH_POST, POST_CREATED } from '../actions'

export default function(state = [], action) {
  switch(action.type){
    case FETCH_POSTS:
      return action.payload
    case FETCH_POST:
      return [action.payload]
    // case POST_CREATED:
    //   return {action.payload}
    //   break;
    default:
      return state
 }
}