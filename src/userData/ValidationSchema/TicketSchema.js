import * as yup from "yup";

const createTickedAdminScema = yup.object({
  topic: yup.string()
    .required(),
  desc: yup.string()
    .required(),
  attachment:yup.array()
    .required(),
  
});
const createTicketStuTeaSchema = yup.object({
  serialno: yup.string()
    .required(),
  date: yup.date()
    .required(),
  subject: yup.string()
    .required(),
  topic: yup.string()
    .required(),
  name: yup.string()
    .required(),
  problem: yup.string()
    .required(),
  status: yup.string()
    .required(),
  
});
const searchTicketScema = yup.object({
    title: yup.string()
      .required(),
    date: yup.date()
      .required(),
    
});

export  {createTickedAdminScema,createTicketStuTeaSchema,searchTicketScema};