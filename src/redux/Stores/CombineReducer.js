import AccountReducer from './AccountReducer';
import TicketReducer from './TicketReducer';
import TeacherReducer from './TeacherReducer';
import StudentReducer from './StudentReducer';
import GalleryReducer from './GalleryReducer';
import AttendanceReducer from './AttendanceReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  account: AccountReducer,
  ticket:TicketReducer,
  student:StudentReducer,
  teacher:TeacherReducer,
  image:GalleryReducer,
  attendance:AttendanceReducer,
});

export default rootReducer

// the key name will be the data property on the state object