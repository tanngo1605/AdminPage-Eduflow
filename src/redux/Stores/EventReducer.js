
let counterToActiviateLoadDataOnce = 0 ;


  
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
  
  
  
const eventReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FILTER_BY_VALUE':
      
      let classteacher = action.payload.classteacher;
      let eventvalue = action.payload.event;
      let textvalue = action.payload.text;
      let todayDate=new Date();
      
      
      
      state.filteredEvents = state.events.filter(event => {
        switch(eventvalue){ 
          case 'upcoming':
            return (
              event.classteacher.toLowerCase().includes(classteacher) &&
              event.description.toLowerCase().includes(textvalue) &&
              (todayDate.getTime()<=event.datefrom.getTime())
            )
          case'past': 
            return (
              event.classteacher.toLowerCase().includes(classteacher) &&
              event.description.toLowerCase().includes(textvalue) &&
              (todayDate.getTime()>=event.datefrom.getTime())
            )
          default:
            return (
              event.classteacher.toLowerCase().includes(classteacher) &&
              event.description.toLowerCase().includes(textvalue)
            )  
        }
      });
      
      
      if (!(classteacher || textvalue || eventvalue)) state.filteredEvents = state.events;

      return (Object.assign({},state));
    case 'ADD_EVENT':
      return (Object.assign({},state,{filteredEvents:[...state.filteredEvents,action.payload.value]}));
    case 'DELETE_DATA':
      
      state.filteredEvents.splice(action.payload.value, 1);
      return (Object.assign({},state));
    case 'LOAD_DATA':
      let events = [
        {classteacher:'Math',datefrom:new Date(2020, 7,25),dateto:new Date(2020, 6,22),timefrom:'22/06/2010',timeto:'22/06/2010',eventtitle:'Mr.Johns',file:"bla bla bla",description:"Approved",key:'1'},
        {classteacher:'Lose',datefrom:new Date(2020, 7,21),dateto:new Date(2020, 6,22),timefrom:'22/06/2010',timeto:'22/06/2010',eventtitle:'Mr.Johns',file:"bla bla bla",description:"Denied",key:'2'},
        {classteacher:'Science',datefrom:new Date(2020, 7,26),dateto:new Date(2020, 6,22),timefrom:'22/06/2010',timeto:'22/06/2010',eventtitle:'Mr.Johns',file:"bla bla bla",description:"Pending",key:'3'},
        {classteacher:'Liter',datefrom:new Date(2020, 7,23),dateto:new Date(2020, 6,22),timefrom:'22/06/2010',timeto:'22/06/2010',eventtitle:'Mr.Johns',file:"bla bla bla",description:"Denied",key:'4'},
          
      ]
      counterToActiviateLoadDataOnce ++;
      
      if (counterToActiviateLoadDataOnce === 1) return (Object.assign({},state,{events,filteredEvents:events}));
      return (Object.assign({},state))
    default:
      return state;
    }
};
  
export default eventReducer;
  
