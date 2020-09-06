import AccountReducer from './AccountReducer';
import EventReducer from './EventReducer';
import TicketReducer from './TicketReducer';
import TeacherReducer from './TeacherReducer';
import StudentReducer from './StudentReducer';
import GalleryReducer from './GalleryReducer';
import ClassReducer from './ClassReducer';
import CircularReducer from './CircularReducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  account: AccountReducer,
  event: EventReducer,
  ticket:TicketReducer,
  student:StudentReducer,
  teacher:TeacherReducer,
  image:GalleryReducer,
  class:ClassReducer,
  circular:CircularReducer,
});

export default rootReducer

// the key name will be the data property on the state object