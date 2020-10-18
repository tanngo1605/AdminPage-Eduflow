import * as yup from "yup";

const createTickedAdmin = yup.object({
  topic: yup.string()
    .required(),
  desc: yup.string()
    .required(),
  attachment:yup.array()
    .required(),
  
});
const createTicketStuTea = yup.object({
  title: yup.string()
    .required(),
  date: yup.date()
    .required(),
  
});
const searchTicket = yup.object({
    title: yup.string()
      .required(),
    date: yup.date()
      .required(),
    
});

export  {createTickedAdmin,createTicketStuTea,searchTicket};