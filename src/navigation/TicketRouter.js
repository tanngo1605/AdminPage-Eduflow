import RaiseTicket from "../pages/AdminScreen/Ticket/RaiseTicket";
import RaiseTicketAdmin from "../pages/AdminScreen/Ticket/RaiseTicketAdmin";
import TicketList from "../pages/AdminScreen/Ticket/TicketList";
const TicketRouter = [
  {path:"/raiseticket",component:RaiseTicket},
  {path:"/ticket",component:TicketList},
  {path:"/raiseticketadmin",component:RaiseTicketAdmin}
]
export default TicketRouter;
//
