import * as yup from "yup";

const createEventSchema = yup.object({
  title: yup.string()
    .required(),
  classvalue: yup.string()
    .required(),
  section: yup.string()
    .required(),
  startTime: yup.string()
    .required(),
  endTime: yup.string()
    .required(),
  datefrom: yup.date()
    .required("required"),
  dateto: yup.date()
    .required(),
  description:yup.string()
    .required(),
  attachment: yup.array()
});
const searchEventSchema = yup.object({
  text: yup.string(),
  classvalue: yup.string(),
  section: yup.string(),
  time: yup.string(),
    
  
});

export {createEventSchema,searchEventSchema};