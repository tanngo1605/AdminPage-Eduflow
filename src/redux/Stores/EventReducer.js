
let counterToActiviateLoadDataOnce = 0 ;

const initialState = {
    appliedFilters: []
  };
  
export const addEvent = (payload) => ({
  type: 'ADD_EVENT', 
  payload
});
  
export const loadData = (payload) => ({
  type: 'LOAD_DATA', 
  payload
});
  
export const resetData = (payload) => ({
  type: 'RESET_DATA', 
  payload
});

export const deleteData = (payload) => ({
  type: 'DELETE_DATA', 
  payload
});
  
  
export const filterByValue = (payload) => ({
    type: 'FILTER_BY_VALUE', 
     payload 
});
  
  
  
const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER_BY_VALUE':
        
        
      let textvalue = action.payload.text;
      let classvalue = action.payload.class;
      let eventvalue = action.payload.event;
      
      state.filteredTickets = state.events.filter(event => {      
        return (
          event.datefrom.toLowerCase().includes(eventvalue) &&
          event.class.toLowerCase().includes(classvalue) &&
          event.description.toLowerCase().includes(textvalue)
          );
      });
    
      if (textvalue || eventvalue|| classvalue) state.filteredEvents = state.events;
    
      return Object.assign({}, state);
    case 'ADD_EVENT':
      return (Object.assign({},state,{filteredEvents:[...state.filteredEvents,action.payload.value]}));
    case 'DELETE_DATA':
      
      state.filteredEvents.splice(action.payload.value, 1);
      return (Object.assign({},state));
    case 'LOAD_DATA':
      let events = [
        {class:'Math',datefrom:new Date(2020, 6,22),dateto:new Date(2020, 6,22),timefrom:'22/06/2010',timeto:'22/06/2010',eventtitle:'Mr.Johns',file:"bla bla bla",description:"Approved",key:'1'},
        {class:'Lose',datefrom:new Date(2020, 6,22),dateto:new Date(2020, 6,22),timefrom:'22/06/2010',timeto:'22/06/2010',eventtitle:'Mr.Johns',file:"bla bla bla",description:"Denied",key:'2'},
        {class:'Science',datefrom:new Date(2020, 6,22),dateto:new Date(2020, 6,22),timefrom:'22/06/2010',timeto:'22/06/2010',eventtitle:'Mr.Johns',file:"bla bla bla",description:"Pending",key:'3'},
        {class:'Liter',datefrom:new Date(2020, 6,22),dateto:new Date(2020, 6,22),timefrom:'22/06/2010',timeto:'22/06/2010',eventtitle:'Mr.Johns',file:"bla bla bla",description:"Denied",key:'4'},
          
      ]
      counterToActiviateLoadDataOnce ++;
      if (counterToActiviateLoadDataOnce === 1) return (Object.assign({},state,{events:events,filteredEvents:events}));
      return (Object.assign({},state))
    default:
      return state;
    }
};
  
export default eventReducer;
  
