import  {addFilterIfNotExists,removeFilter} from '../../component/FilterComponents/addRemoveFilter'

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
  
  
  export const filterByValue = (payload) => ({
      type: 'FILTER_BY_VALUE', 
      payload 
  });
  
  
  
  const eventReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FILTER_BY_VALUE':
        
        let newState = Object.assign({}, state);
        let textvalue = action.payload.text;
        let classvalue = action.payload.class;
        let eventvalue = action.payload.event;
        
        let filteredValues = state.events.filter(event => {
            
          return (
            (event.datefrom.toLowerCase().includes(eventvalue) &&
            event.class.toLowerCase().includes(classvalue) &&
            event.description.toLowerCase().includes(textvalue))
          );
        });
        
        let appliedFilters = state.appliedFilters;
        
        if (textvalue || eventvalue|| classvalue) {
          
          appliedFilters = addFilterIfNotExists('FILTER_BY_VALUE', appliedFilters);
          newState.filteredEvents = filteredValues;
        
  
        } else {
          appliedFilters = removeFilter('FILTER_BY_VALUE', appliedFilters);
          
            if (appliedFilters.length === 0) {
              newState.filteredEvents = newState.events;
            }
        }
        
        return newState;
      case 'ADD_EVENT':
          return (Object.assign({},state,{filteredEvents:[...state.filteredEvents,action.payload.value]}));
  
      case 'LOAD_DATA':
        let events = [
          {class:'Math',datefrom:'22/06/2010',dateto:"22/06/2010",timefrom:'22/06/2010',timeto:'22/06/2010',eventtitle:'Mr.Johns',file:"bla bla bla",description:"Approved"},
          {class:'Lose',datefrom:'29/06/2010',dateto:"22/06/2010",timefrom:'22/06/2010',timeto:'22/06/2010',eventtitle:'Mr.Johns',file:"bla bla bla",description:"Denied"},
          {class:'Science',datefrom:'20/06/2010',dateto:"22/06/2010",timefrom:'22/06/2010',timeto:'22/06/2010',eventtitle:'Mr.Johns',file:"bla bla bla",description:"Pending"},
          {class:'Liter',datefrom:'21/06/2010',dateto:"22/06/2010",timefrom:'22/06/2010',timeto:'22/06/2010',eventtitle:'Mr.Johns',file:"bla bla bla",description:"Denied"},
          
        ]
      
        return (Object.assign({},state,{events:events,filteredEvents:events}));
  
      default:
        return state;
    }
  };
  
  export default eventReducer;
  
