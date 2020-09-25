let counterToActiviateLoadDataOnce = 0;

export const addTicket = (payload) => ({
  type: "ADD_TICKET",
  payload,
});

export const loadData = (payload) => ({
  type: 'LOAD_TICKET',
  payload
});

export const filterByValue = (payload) => ({
  type: 'FILTER_TICKET',
  payload
});

const ticketReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FILTER_TICKET':

      let value = action.payload.text;

      let status = action.payload.status;
      console.log(value, status)
      state.filteredTickets = state.tickets.filter(ticket => {

        return (
          (ticket.name.toLowerCase().includes(value) ||
            ticket.subject.toLowerCase().includes(value) ||
            ticket.problem.toLowerCase().includes(value)) &&
          ticket.status.includes(status)
        );
      });

      if (!(value || status)) state.filteredTickets = state.tickets;

      return Object.assign({}, state);
    case "ADD_TICKET":
      return Object.assign({}, state, {
        filteredTickets: [...state.filteredTickets, action.payload.value],
      });

    case 'LOAD_TICKET':
      let tickets = [
        {
          serialno: "1212231",
          date: new Date(2020, 6, 22),
          subject: "Fee",
          topic: false,
          name: "Mr.Johns",
          problem: "bla bla bla",
          status: "Approved",
          key: "1",
        },
        {
          serialno: "2312",
          date: new Date(2020, 6, 23),
          subject: "New Fee",
          topic: false,
          name: "Mr.Johns",
          problem: "bla bla new",
          status: "Denied",
          key: "2",
        },
        {
          serialno: "232",
          date: new Date(2020, 6, 23),
          subject: "Not",
          topic: false,
          name: "Mr.Johns",
          problem: "bla bla die",
          status: "Pending",
          key: "3",
        },
        {
          serialno: "32",
          date: new Date(2020, 5, 7),
          subject: "Tic",
          topic: false,
          name: "Mr.Johns",
          problem: "nothing",
          status: "Approved",
          key: "4",
        },
      ];
      counterToActiviateLoadDataOnce++;
      if (counterToActiviateLoadDataOnce === 1)
        return Object.assign({}, state, {
          tickets: tickets,
          filteredTickets: tickets,
        });

      return Object.assign({}, state);

    default:
      return state;
  }
};

export default ticketReducer;
