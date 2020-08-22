let counterToActiviateLoadDataOnce = 0 ;
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
      
      let value = action.payload.text;
      
      let status = action.payload.status;

      state.filteredTickets = state.tickets.filter(ticket => {
      
        return (
          (ticket.name.toLowerCase().includes(value) ||
          ticket.subject.toLowerCase().includes(value) ||
          ticket.problem.toLowerCase().includes(value)) &&
          (ticket.status.includes(status))
        );
      });
      

      if (!(value || status)) state.filteredTickets = state.tickets;

      
      return (Object.assign({},state));
    case 'ADD_TICKET':
        return (Object.assign({},state,{filteredTickets:[...state.filteredTickets,action.payload.value]}));

    case 'LOAD_DATA':
      let tickets = [
        {serialno:'1212231',date:'22/06/2010',subject:"Fee",topic:false,name:'Mr.Johns',problem:"bla bla bla",status:"Approved"},
        {serialno:'2312',date:'22/06/2010',subject:"New Fee",topic:false,name:'Mr.Johns',problem:"bla bla new",status:"Denied"},
        {serialno:'232',date:'22/06/2010',subject:"Not",topic:false,name:'Mr.Johns',problem:"bla bla die",status:"Pending"},
        {serialno:'32',date:'22/06/2010',subject:"Tic",topic:false,name:'Mr.Johns',problem:"nothing",status:"Approved"},
      ]
      counterToActiviateLoadDataOnce ++;
      if (counterToActiviateLoadDataOnce === 1) return (Object.assign({},state,{tickets:tickets,filteredTickets:tickets}));

      return (Object.assign({},state))
      
    default:
      return state;
  }
};

export default ticketReducer;

