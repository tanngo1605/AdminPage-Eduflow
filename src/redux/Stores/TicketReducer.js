

const initialState = {
  appliedFilters: []
};

export const addTicket = (payload) => ({
   type: 'ADD_TICKET', 
   payload
});

export const loadData = (payload) => ({
  type: 'LOAD_DATA', 
  payload
});


export const filterByValue = (payload) => ({
    type: 'FILTER_BY_VALUE', 
    payload 
});



const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER_BY_VALUE':
      
      let newState = Object.assign({}, state);
      let value = action.payload.text;
      if (value===null) value='';
      let status = action.payload.status;
      let filteredValues = state.tickets.filter(ticket => {
      
        return (
          (ticket.name.toLowerCase().includes(value) ||
          ticket.subject.toLowerCase().includes(value) ||
          ticket.problem.toLowerCase().includes(value)) &&
          (ticket.status.includes(status))
        );
      });
      
      let appliedFilters = state.appliedFilters;
      
      if (value || status) {
        
        appliedFilters = addFilterIfNotExists('FILTER_BY_VALUE', appliedFilters);
        newState.filteredTickets = filteredValues;
      

      } else {
        appliedFilters = removeFilter('FILTER_BY_VALUE', appliedFilters);
        
          if (appliedFilters.length === 0) {
            newState.filteredTickets = newState.tickets;
          }
      }
      
      return newState;
    case 'ADD_TICKET':
        return (Object.assign({},state,{filteredTickets:[...state.filteredTickets,action.payload.value]}));

    case 'LOAD_DATA':
      let tickets = [
        {serialno:'1212231',date:'22/06/2010',subject:"Fee",topic:false,name:'Mr.Johns',problem:"bla bla bla",status:"Approved"},
        {serialno:'2312',date:'22/06/2010',subject:"New Fee",topic:false,name:'Mr.Johns',problem:"bla bla new",status:"Denied"},
        {serialno:'232',date:'22/06/2010',subject:"Not",topic:false,name:'Mr.Johns',problem:"bla bla die",status:"Pending"},
        {serialno:'32',date:'22/06/2010',subject:"Tic",topic:false,name:'Mr.Johns',problem:"nothing",status:"Approved"},
      ]
    
      return (Object.assign({},state,{tickets:tickets,filteredTickets:tickets}));

    default:
      return state;
  }
};

export default ticketReducer;

function addFilterIfNotExists(filter, appliedFilters) {
  let index = appliedFilters.indexOf(filter);
  if (index === -1) appliedFilters.push(filter);
  return appliedFilters;
}

function removeFilter(filter, appliedFilters) {
  let index = appliedFilters.indexOf(filter);
  appliedFilters.splice(index, 1);
  return appliedFilters;
}