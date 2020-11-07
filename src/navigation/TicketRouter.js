import RaiseTicket from "../pages/Ticket/RaiseTicket";
import RaiseTicketAdmin from "../pages/Ticket/RaiseTicketAdmin";
import TicketList from "../pages/Ticket/TicketList";
const TicketRouter = [
  {path:"/raiseticket",component:RaiseTicket},
  {path:"/ticket",component:TicketList},
  {path:"/raiseticketadmin",component:RaiseTicketAdmin}
]
export default TicketRouter;
//
