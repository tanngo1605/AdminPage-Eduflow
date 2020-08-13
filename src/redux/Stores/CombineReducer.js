import AccountReducer from './AccountReducer'
import EventReducer from './EventReducer'
import TicketReducer from './TicketReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  account: AccountReducer,
  event: EventReducer,
  ticket:TicketReducer
});

export default rootReducer

// the key name will be the data property on the state object